from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib.auth.decorators import login_required

@login_required
def search_client(request):
    return render_to_response(
        "client_search.html",
        RequestContext(request)
    )

@login_required
def view_client(request):
    return render_to_response(
        "client_view.html",
        RequestContext(request)
    )

@login_required
def create_edit_client(request):
    return render_to_response(
        "client_create.html",
        RequestContext(request)
    )