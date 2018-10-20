from django.conf.urls import patterns, url, include
from django.contrib import admin
from rest_framework_nested import routers
from .authentication.views import *
from .posts.views import *

from .views import IndexView

router = routers.SimpleRouter()

router.register(r'posts', PostViewSet)

router.register(r'accounts', AccountViewSet)
accounts_router =     routers.NestedSimpleRouter(router, r'accounts', lookup='account')
accounts_router.register(r'posts', AccountPostsViewSet)
# accounts_router.register(r'accountposts', AccountPostsViewSet)



# router.register(r'reviews', RatingsViewSet)
router.register(r'reviews', RatingsViewSet)

router.register(r'postdetails', PostDetailViewSet)
post_ratings_router = routers.NestedSimpleRouter(router, r'postdetails', lookup='post')
post_ratings_router.register(r'reviews', PostRatingsViewSet)




urlpatterns = patterns(
    '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^admin$', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/', include(accounts_router.urls)),
    url(r'^api/v1/', include(post_ratings_router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
    url(r'^api/docs/', include('rest_framework_swagger.urls')),
    url('^.*$', IndexView.as_view(), name='index'),
)
