from django.contrib import messages
from django.http import JsonResponse
from django.shortcuts import render, redirect
from .forms import BookingForm
from .models import Webinar, Booking


def home(request):
    """home page for all webinars"""
    return render(
        request,
        'main/home.html',
        {
            'title': 'All Webinars',
            'free_web': Webinar.objects.filter(cost='0').order_by('event_on'),
            'premium': Webinar.objects.exclude(cost='0').order_by('event_on')
        }
    )


def webinar(request, webinar_id):
    """webinar view page"""
    return render(
        request,
        'main/webinar.html',
        {
            'title': 'Webinar',
            'webinar': Webinar.objects.get(id=webinar_id),
        }
    )


def book_webinar(request, webinar_id):
    """book webinar page"""
    form = BookingForm(request.POST or None)
    webinar_ins = Webinar.objects.get(id=webinar_id)

    if form.is_valid():
        form.instance.event = webinar_ins
        form.save()
        messages.add_message(request, messages.SUCCESS, 'WEBINAR SUCCESSFULLY BOOKED')
        return redirect('main:home')

    return render(
        request,
        'main/book_webinar.html',
        {
            'title': 'Booking Page',
            'webinar': webinar_ins,
            'form': form
        }
    )


def all_bookings(request):
    """page for viewing all bookings"""
    return render(
        request,
        'main/bookings.html',
        {
            'title': 'All Booking',
            'bookings': Booking.objects.all()[:25]
        }
    )


def up_vote_webinar(request):
    """route for up_vote a webinar"""
    if request.method == 'POST':
        webinar_ins = Webinar.objects.get(id=request.POST.get('id'))
        webinar_ins.up_vote += 1
        webinar_ins.save()

        return JsonResponse({'up_vote': webinar_ins.up_vote})


def down_vote_webinar(request):
    """route for down_vote a webinar"""
    if request.method == 'POST':
        webinar_ins = Webinar.objects.get(id=request.POST.get('id'))
        webinar_ins.down_vote += 1
        webinar_ins.save()

        return JsonResponse({'down_vote': webinar_ins.down_vote})
