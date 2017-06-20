"""unimax_erp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView
from unimax_erp.views import erp_altered_login, change_password, user_logout
from erpapp import urls as erpapp_urls
from operations import urls as operational_dashboard_urls
from warehouse import urls as warehouse_dashboard_urls

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^erp/', include(erpapp_urls)),
    url(r'^$', RedirectView.as_view(url='/erp/')),
    url(r'^login/$', erp_altered_login),
    url(r'^changepassword/$', change_password),
    url(r'^logout/$', user_logout, name='user_logout'),
    url(r'^operations/',include(operational_dashboard_urls)),
    url(r'^warehouse/',include(warehouse_dashboard_urls)),
    #url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': '/login/'}),
]
