from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('register', views.CreateUserView.as_view(), name='user_login'),
    path('login', views.UserLogin.as_view(), name='token_obtain_pair'),
    path('check_details', views.CheckUsernameEmail.as_view(), name='CheckDetail'),
    path('login/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]
