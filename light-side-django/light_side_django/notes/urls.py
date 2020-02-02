from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from light_side_django.notes.views import PersonalNoteViewSet

router = routers.DefaultRouter()
router.register('notes', PersonalNoteViewSet)

urlpatterns = [
    path('notes/', include(router.urls))
]
