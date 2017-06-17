from django.conf.urls import url
from erpapp import erp, client, catalog, scheduling, salesorder

urlpatterns = [
    url(r'^$', erp.dashboard),
    url(r'^client/search/', client.search_client, name='searchClient'),
    url(r'^client/create/', client.create_edit_client),
    url(r'^client/edit/', client.create_edit_client),
    url(r'^client/view/', client.view_client),
    url(r'^client/schedule_calls/', scheduling.call_scheduling),
    url(r'^salesorder/create/', salesorder.create_salesorder),
    url(r'^salesorder/view/', salesorder.view_salesorder),
    url(r'^salesorder/edit/', salesorder.create_salesorder),
    url(r'^salesorder/search/', salesorder.search_salesorder),
    url(r'^catalog/view/', catalog.view_catalog),
]