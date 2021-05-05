from rest_framework import serializers
from main.models import Webinar, Booking


class WebinarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Webinar
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['name', 'email', 'mobile']


class AllBookingSerializer(serializers.ModelSerializer):
    event = serializers.CharField(source='event.title', read_only=True)
    event_on = serializers.DateTimeField(source='event.created', read_only=True)

    class Meta:
        model = Booking
        fields = ['name', 'email', 'mobile', 'event', 'event_on']
