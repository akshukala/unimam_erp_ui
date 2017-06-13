from django.conf.urls import url
from erpapp import erp, client, catalog

urlpatterns = [
    url(r'^$', erp.dashboard),
    url(r'^client/search/', client.search_client, name='searchClient'),
    url(r'^client/create/', client.create_edit_client),
    url(r'^catalog/view/', catalog.view_catalog),
]