from django.conf import settings

def service_urls(request):
    return {
 #        'crm_service_url': settings.CRM_SERVICE_URL,
        'user_service_url': settings.USER_SERVICE_URL,
 #        'order_management_service_url': settings.ORDER_MANAGEMENT_SERVICE_URL,
	# 'qb_service_url': settings.QB_SERVICE_URL,
 #        'catalog_service_url': settings.CATALOG_SERVICE_URL,
        
    }
