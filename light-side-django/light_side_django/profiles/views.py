from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.viewsets import generics

from light_side_django.profiles.serializers import UserSerializer


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
