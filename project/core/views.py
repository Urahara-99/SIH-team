from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import UserRegistration



@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username or not email or not password:
            return JsonResponse({'message': 'All fields are required'}, status=400)

        # You would typically hash the password and save it in a secure manner
        UserRegistration.objects.create(username=username, email=email, password=password)
        
        return JsonResponse({'message': 'User registered successfully'}, status=201)

    return JsonResponse({'message': 'Invalid request method'}, status=405)


