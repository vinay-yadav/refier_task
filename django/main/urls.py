from django.urls import path
from .views import *

app_name = 'main'

urlpatterns = [
    path('', home, name='home'),
    path('webinar/<str:webinar_id>/', webinar, name='webinar'),
    path('book-webinar/<str:webinar_id>/', book_webinar, name='booking'),
    path('booking/', all_bookings, name='all_bookings'),
    path('up-vote/', up_vote_webinar, name='up_vote'),
    path('down-vote/', down_vote_webinar, name='down_vote')
]
