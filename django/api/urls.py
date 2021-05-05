from django.urls import path
from .views import *

app_name = 'api'

urlpatterns = [
    path('', WebinarHome.as_view(), name="home"),
    path('create-webinar/', CreateWebinar.as_view()),
    path('list-webinar/<int:pk>/', SpecificWebinar.as_view()),
    path('create-booking/<int:pk>/', CreateBooking.as_view()),
    path('all-bookings/', AllBooking.as_view()),
    path('login/', LoginView.as_view()),
    path('up-vote/<int:web_id>/', UpVoteView.as_view()),
    path('down-vote/<int:web_id>/', DownVoteView.as_view()),
    path('test/', test),
    path('linkedin-oauth2/callback/', LinkedInView.as_view())
    # path('linkedin/', LinkedInView.as_view())
]
