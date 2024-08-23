from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

class HelloWorldView(APIView):
    def get(self, request):
        return Response({"message": "Hello, world!"})
    
def home(request):
    return HttpResponse("Welcome to the homepage!")
