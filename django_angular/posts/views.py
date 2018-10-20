from rest_framework import permissions, viewsets
from rest_framework.response import Response
from .models import Post, Rating
from .permissions import IsAuthorOfPost
from .serializers import PostSerializer,RatingSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('-created_at')
    serializer_class = PostSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),
        return permissions.IsAuthenticated(), IsAuthorOfPost(),

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
        return super(PostViewSet, self).perform_create(serializer)


class AccountPostsViewSet(viewsets.ViewSet):
    queryset = Post.objects.select_related('author').all()
    serializer_class = PostSerializer

    def list(self, request, account_username=None):
        print 'attempting to list related posts: %s'%account_username
        queryset = self.queryset.filter(author__username=account_username)
        print 'queryset: ' + str(queryset)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


# class PostDetailViewSet(viewsets.ModelViewSet):
#     lookup_field = 'id'
#     queryset = Rating.objects.all()
#     # queryset = Post.objects.order_by('-created_at')
#     serializer_class = RatingSerializer

class PostDetailViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = Post.objects.all()
    # queryset = Post.objects.order_by('-created_at')
    serializer_class = PostSerializer

class PostRatingsViewSet(viewsets.ViewSet):

    queryset = Rating.objects.select_related('post').all()
    serializer_class = RatingSerializer

    def list(self, request, post_id=None):
        print 'attempting to list related post ratings for ID: %s'%post_id
        # queryset = self.queryset.filter(post__id=post_id)
        print self.queryset
        queryset = self.queryset.filter(post__id=post_id)
        # print 'queryset: ' + str(queryset)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)