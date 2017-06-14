from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib.auth.decorators import login_required

@login_required
def call_scheduling(request):
    return render_to_response(
        "schedule_calls.html",
        RequestContext(request)
    )