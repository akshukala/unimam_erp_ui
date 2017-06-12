from django.conf.urls import url
from erpapp import erp

urlpatterns = [
    url(r'^$', erp.dashboard),
]