from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from .models import Account
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed, ParseError
from .serializers import UserSerializer
from django.db.models import Q


class CreateUserView(CreateAPIView):
    model = Account
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer


class UserLogin(APIView):

    def post(self, request):
        try:
            email = request.data['email']
            password = request.data['password']
        except KeyError:
            raise ParseError('All Fields Are Required')
        if not Account.objects.filter(email=email).exists():
            return Response({'error': 'Email Does Not Exist'},
                            status=status.HTTP_404_NOT_FOUND)

        if not Account.objects.filter(email=email, is_active=True).exists():
            user = Account.objects.get(email=email)
            return Response({'error': 'Your mail is not validated', 'user': user.id}, status=status.HTTP_401_UNAUTHORIZED)

        user = authenticate(username=email, password=password)
        if user is None:
            raise AuthenticationFailed('Invalid Password')
        refresh = RefreshToken.for_user(user)
        refresh["is_admin"] = user.is_superuser

        content = {
            'user_id': user.id,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        print(content)
        return Response(content, status=status.HTTP_200_OK)


class CheckUsernameEmail(APIView):
    def get(self, request):
        value = request.GET.get('value')
        email = Account.objects.filter(email=value).exists()
        username = Account.objects.filter(username=value).exists()
        return Response({'email': email, 'username': username})
