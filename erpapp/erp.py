from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
@login_required
def dashboard(request):
    # is_customer = request.user.groups.filter(name='csrlead').exists()
    	
    # is_csr = request.user.groups.filter(name='MHcsr').exists()
    # is_operational_admin = request.user.groups.filter(name='operational_admin').exists()
    # is_warehouse_admin = request.user.groups.filter(name='Warehouse_admin').exists()
    # is_cpd_admin = request.user.groups.filter(name='cpd_admin').exists()
    # is_accounts_admin = request.user.groups.filter(name='Accounts').exists()
    # if is_csr:	
    return render_to_response("uni_dashboard.html", locals(), RequestContext(request))
    # elif is_operational_admin:
    #   return HttpResponseRedirect('/operational_dashboard/')
    # elif is_warehouse_admin:
    #   return HttpResponseRedirect('/warehouse_dashboard/')
    # elif is_cpd_admin:
    #   return HttpResponseRedirect('/cpd_dashboard/')
    # elif is_accounts_admin:
    #   return HttpResponseRedirect('/crm/quickbooks/')  