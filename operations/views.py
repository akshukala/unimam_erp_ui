from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.conf import settings

@login_required(login_url='/login/')
def user_logout(request):
    # Since we know the user is logged in, we can now just log them out.
    logout(request)

    # Take the user back to the homepage.
    return HttpResponseRedirect('/login/')

def user_login(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            if user.is_active and user.is_superuser :
                login(request, user)
                return HttpResponseRedirect('/')
            else:
                return HttpResponse("Your account is disabled.")
        else:
            print "Invalid login details: {0}, {1}".format(username, password)
            return HttpResponse("Invalid login details supplied.")
    else:
        return render(request, 'registration/login.html', {})

@login_required(login_url='/login/')
def index(request):
  # is_operational_admin = request.user.groups.filter(name='operational_admin').exists()
  # if is_operational_admin:
  #   operational_service_url = settings.OPERATIONAL_SERVICE_URL
  #   warehouse_service_url = settings.WAREHOUSE_SERVICE_URL
  #   crm_host = settings.CRM_HOST
    return render_to_response('operations/operation_dashboard.html',locals(),RequestContext(request))
  # else:
  #   return HttpResponseRedirect('/login/')

@login_required(login_url='/login/')
def orders(request):
 	return render_to_response('operations/filtered_orders.html',locals(),RequestContext(request))
  