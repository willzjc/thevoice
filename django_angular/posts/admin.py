from django.contrib import admin
from .models import Post,Rating

class SongAdmin(admin.ModelAdmin):
    search_fields = ('content', 'author__username', 'author__email')
    ordering = ('-updated_at',)
    list_display = ('content', 'author')

class RatingAdmin(admin.ModelAdmin):
    search_fields = ('rating','post_id__reviewer','post_id__rating')
    ordering = ('-reviewer',)
    list_display = ('song', 'rating', 'reviewer')

admin.site.register(Post, SongAdmin)


admin.site.register(Rating, RatingAdmin)
