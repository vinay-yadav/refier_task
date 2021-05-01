from django.urls import path
from .views import WebinarHome, CreateWebinar, SpecificWebinar, CreateBooking, AllBooking

app_name = 'api'

urlpatterns = [
    path('', WebinarHome.as_view(), name="home"),
    path('create-webinar/', CreateWebinar.as_view()),
    path('list-webinar/<int:pk>/', SpecificWebinar.as_view()),
    path('create-booking/<int:pk>/', CreateBooking.as_view()),
    path('all-bookings/', AllBooking.as_view()),
]
