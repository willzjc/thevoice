from rest_framework import serializers
from ..authentication.serializers import AccountSerializer
from .models import Post,Rating


class PostSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True, required=False)
    average_rating=serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('id', 'author', 'content', 'created_at', 'updated_at','average_rating')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_average_rating(self,obj):
        avg = obj.average_rating()
        return avg

    def get_validation_exclusions(self, *args, **kwargs):
        # print 'args',args
        # print 'kwargs',kwargs

        exclusions = super(PostSerializer, self).get_validation_exclusions()
        return exclusions + ['author']

class RatingSerializer(serializers.ModelSerializer):

    reviewer = AccountSerializer(read_only=True, required=False)
    post = PostSerializer(read_only=True, required=False)

    class Meta:
        model = Rating
        fields = ('id', 'reviewer', 'post', 'rating')
        read_only_fields = ('id'
                            ,'reviewer','post'
                            )

    # def get_validation_exclusions(self, *args, **kwargs):
    #     # print 'args',args
    #     # print 'kwargs',kwargs
    #
    #     exclusions = super(RatingSerializer, self).get_validation_exclusions()
    #     return exclusions + ['reviewer']