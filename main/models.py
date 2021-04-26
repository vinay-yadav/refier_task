from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    profile = models.OneToOneField(User, on_delete=models.CASCADE)
    host = models.BooleanField(default=False)
    mobile = models.CharField(max_length=10)

    def __str__(self):
        return self.profile.username


class Webinar(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    sub_heading = models.CharField(max_length=100, blank=True, null=True, verbose_name='Sub Heading')
    description = models.TextField(null=True, blank=True)
    instructor = models.CharField(max_length=30, verbose_name='Instructor Name')
    event_on = models.DateTimeField()
    cost = models.CharField(max_length=5, default=0)
    up_vote = models.IntegerField(default=0)
    down_vote = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Webinars'

    def __str__(self):
        return self.title


class Booking(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    event = models.ForeignKey(Webinar, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    email = models.EmailField()
    mobile = models.CharField(max_length=10)

    class Meta:
        verbose_name_plural = 'Bookings'

    def __str__(self):
        return f'{self.name} - {self.event}'
