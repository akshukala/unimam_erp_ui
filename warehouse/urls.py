from django.conf.urls import include, url
from django.contrib import admin
from warehouse import views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^login/$', views.user_login, name='login'),
    url(r'^$', views.index, name='index'),
    url(r'^update_barcode/', views.update_barcode,name='updateBarcode'),
    url(r'^invoice/$', views.invoice,name='invoice'),
    url(r'^dispatch/', views.dispatch,name='dispatch'),
    url(r'^logout/$', views.user_logout, name='logout'),
]