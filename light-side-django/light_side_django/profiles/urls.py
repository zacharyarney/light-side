from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from light_side_django.profiles.views import UserDetailView, UserList

router = routers.DefaultRouter()
router.register('users/', UserList, basename='userlist')
# router.register('users/<int:pk>/', UserDetailView, basename='userdetailview')

urlpatterns = [
    path('users/', UserList.as_view()),
    # path('users/<int:pk>/', UserDetailView.as_view())
]
