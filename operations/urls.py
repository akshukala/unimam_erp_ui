from django.conf.urls import include, url
from django.contrib import admin
from operations import views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^login/$', views.user_login, name='login'),
    url(r'^$', views.index, name='index'),
    url(r'^logout/$', views.user_logout, name='logout'),
    url(r'^orders/$', views.orders, name='orders'),
    # url(r'^after_dispatch/$', views.after_dispatch, name='after_dispatch')
]