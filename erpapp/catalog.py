
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib.auth.decorators import login_required

@login_required
def view_catalog(request):
    return render_to_response(
        "product_catalog.html",
        RequestContext(request)
    )
