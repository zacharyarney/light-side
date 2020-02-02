from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    # automatic id field is automatically added by Django
    # id = models.AutoField(primary_key=True)
    noteTitle = models.CharField(max_length=255, unique=True)
    noteBody = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class PersonalNote(Note):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
