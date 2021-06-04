from django.contrib import admin
from .models import Webinar, Booking, UserProfile
from .forms import BookingForm

admin.site.register(Webinar)
# admin.site.register(Booking)
admin.site.register(UserProfile)


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    form = BookingForm
    change_form_template = 'main/book_webinar.html'
