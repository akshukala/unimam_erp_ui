import json
from django.conf import settings
from django.contrib.auth.views import login as login_view
from django.http.response import HttpResponseRedirect
import requests
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout

def process_user_service_token(request):
    '''
    Request processor for setting Candidate service token. Will only work with
    a django login request.
    '''
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        url = settings.USER_SERVICE_URL + "uservalidation/"

        payload = {
            "emailId": username,
            "password": password,
            "rememberMe": True
        }

        headers = {'content-type': 'application/json'}
        # TODO: Inspect the certificate issue and set verify to True
        r = requests.post(url, data=json.dumps(payload), headers=headers,
                          verify=False)
        #if username/password is correct then only below condition is satisfied
        if r.status_code == 200 and not "errorCode" in json.loads(r.content):
            key = 'session'
            value = r.cookies[key]
            request.session['userservice_key'] = value
        else:
            return HttpResponseRedirect("/login")


def erp_altered_login(request, *args, **kwargs):
    response = login_view(request, *args, **kwargs)
    process_user_service_token(request)
    return response

@login_required
def change_password(request):
    return render_to_response(
        "change_password.html",
        RequestContext(request)
    )

'''User Logout'''
@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect('/login/')