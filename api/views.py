from rest_framework import generics, permissions
from .serializers import WebinarSerializer, BookingSerializer, AllBookingSerializer
from rest_framework.exceptions import ValidationError
from main.models import Webinar, Booking


class WebinarHome(generics.ListAPIView):
    queryset = Webinar.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WebinarSerializer


class CreateWebinar(generics.CreateAPIView):
    queryset = Webinar.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WebinarSerializer


class SpecificWebinar(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = WebinarSerializer

    def get_queryset(self):
        return Webinar.objects.all()


class CreateBooking(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = BookingSerializer

    def get_queryset(self):
        return Webinar.objects.filter(pk=self.kwargs['pk'])

    def perform_create(self, serializer):
        event = self.get_queryset()

        if not event.exists():
            raise ValidationError('Webinar does not exits')

        serializer.save(event=event.first())


class AllBooking(generics.ListAPIView):
    queryset = Booking.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AllBookingSerializer
