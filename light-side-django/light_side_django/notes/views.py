from django.shortcuts import render
from rest_framework import viewsets

from light_side_django.notes.models import PersonalNote
from light_side_django.notes.serializers import PersonalNoteSerializer


class PersonalNoteViewSet(viewsets.ModelViewSet):
    serializer_class = PersonalNoteSerializer
    queryset = PersonalNote.objects.all()
