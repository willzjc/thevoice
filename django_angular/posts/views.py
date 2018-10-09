from rest_framework import permissions, viewsets
from rest_framework.response import Response
from .models import Post, Rating
from .permissions import IsAuthorOfPost
from .serializers import SongSerializer,RatingSerializer


class SongViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('-created_at')
    serializer_class = SongSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),
        return permissions.IsAuthenticated(), IsAuthorOfPost(),

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
        return super(SongViewSet, self).perform_create(serializer)


class AccountPostsViewSet(viewsets.ViewSet):
    queryset = Post.objects.select_related('author').all()
    serializer_class = SongSerializer

    def list(self, request, account_username=None):
        print 'attempting to list related posts: %s'%account_username
        queryset = self.queryset.filter(author__username=account_username)
        print 'queryset: ' + str(queryset)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

class PostRatingsViewSet(viewsets.ViewSet):
    queryset = Rating.objects.select_related('reviewer').all()
    serializer_class = RatingSerializer

    def list(self, request, post_id='1'):
        print 'attempting to list related post ratings: %s'%post_id
        queryset = self.queryset.filter(song__id=post_id)
        print 'queryset: ' + str(queryset)

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)