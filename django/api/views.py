from rest_framework import generics, permissions
from .serializers import WebinarSerializer, BookingSerializer, AllBookingSerializer
from rest_framework.exceptions import ValidationError
from main.models import Webinar, Booking
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate
from rest_framework.views import APIView, Response
from django.contrib.auth.decorators import login_required
import requests


class WebinarHome(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = WebinarSerializer

    def get_queryset(self):
        return Webinar.objects.all()


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


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    @csrf_exempt
    def post(self, request):
        user_data = JSONParser().parse(request)
        user = authenticate(request, username=user_data.get('username'), password=user_data.get('password'))
        if not user:
            return Response({'error': 'invalid credentials'}, status=403)
        login(request, user)
        print(request.headers)
        return Response({'status': 'success'})


class UpVoteView(APIView):
    @csrf_exempt
    def post(self, request, web_id):
        webinar_ins = Webinar.objects.get(id=web_id)
        webinar_ins.up_vote += 1
        webinar_ins.save()
        return Response({'status': 'success'})


class DownVoteView(APIView):
    @csrf_exempt
    def post(self, request, web_id):
        webinar_ins = Webinar.objects.get(id=web_id)
        webinar_ins.down_vote += 1
        webinar_ins.save()
        return Response({'status': 'success'})


@login_required
def test(request):
    print('logged in')
    return Response({'status': 'great'})


class LinkedInView(APIView):

    def get(self, request):
        code = request.GET.get('code')
        # params = {
        #     "grant_type": "authorization_code",
        #     "code": code,
        #     "redirect_uri": "http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flinkedin-oauth2%2Fcallback",
        #     "client_id": "78onguce9sn3d9",
        #     "client_secret": "PcdTj0tUOiMv2qK1"
        # }
        # response = requests.post('https://www.linkedin.com/oauth/v2/accessToken', params=params)
        # print(response.json())

        url = f'https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code={code}&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flinkedin-oauth2%2Fcallback&client_id=78onguce9sn3d9&client_secret=PcdTj0tUOiMv2qK1'
        access_token = requests.post(url).json()
        print(access_token)

        user_data = requests.get(
            'https://api.linkedin.com/v2/me',
            headers={
                'Connection': 'Keep-Alive',
                'Authorization': f'Bearer {access_token["access_token"]}'
                }
        ).json()

        email = requests.get(
            'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
            headers={
                'Connection': 'Keep-Alive',
                'Authorization': f'Bearer {access_token["access_token"]}'
                }
            ).json()
        print(email)

        # print(user_data)
        return Response(
            {
                'linkedInData': {
                'liteProfile': user_data,
                'emailAddress': email
                }
            }
        )
