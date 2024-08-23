from django.urls import path
from .views import HelloWorldView
from .views import home

urlpatterns = [
    path("", home, name='home'),
    path('hello/', HelloWorldView.as_view(), name='hello-world'),
]
