from rest_framework import serializers
from .models import Account


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = Account.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
        )
        return user

    class Meta:
        model = Account
        fields = ("id", "username", "password", "email")

