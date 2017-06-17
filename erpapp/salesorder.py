import requests
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib.auth.decorators import (
    login_required, user_passes_test
)
import json
from django.conf import settings

@login_required
def search_salesorder(request):
    return render_to_response(
        "order_search.html",
        RequestContext(request)
    )

# @login_required
# def calls(request):
#     return render_to_response(
#         "manage_calls.html",
#         RequestContext(request)
#     )

# @login_required
# def call_scheduling(request):
#     return render_to_response(
#         "schedule_calls.html",
#         RequestContext(request)
#     )

@login_required
def create_salesorder(request):
    return render_to_response(
        "sales_order.html",
        RequestContext(request)
    )

@login_required
def view_salesorder(request):
    return render_to_response(
        "sales_order_view.html",
        RequestContext(request)
    )

# @login_required
# @user_passes_test(lambda u: u.groups.filter(name='operations').exists())
# def disputed_pincodes(request):
#     return render_to_response(
#         "salesorder_disputed.html",
#         RequestContext(request)
#     )


# @login_required
# def tracking_info(request):
# 	indiapost_no = request.GET.get('indiapostno')
# 	try:
# 		if(indiapost_no != None):
# 			url = "http://india-post-tracker-api.captnemo.in/track/"+ indiapost_no
# 			response = requests.get(url)
# 			if(response.status_code==503):
# 				print response.status_code
# 			else:
# 				data = response.json()
# 				temp_date = data['booking_date'].split('T')
# 				booking_date = temp_date[0]
# 				events = data['events']
		
# 				event_data = []
# 				for i in range(0,len(events)):
# 					event_dict={}
# 					date_time = events[i]['date'].split('T')
# 					event_dict['description'] = events[i]['description']
# 					event_dict['office'] = events[i]['office']
# 					event_dict['date'] = date_time[0]
# 					event_dict['time'] = date_time[1]
# 					event_data.append(event_dict)
# 		return render_to_response("salesorder_tracking.html",locals(),RequestContext(request))			
#  	except:
#  		return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
 	