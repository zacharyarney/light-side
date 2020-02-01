from django.db import models


class Note(models.Model):
    id = models.AutoField(primary_key=True)
    noteTitle = models.CharField(max_length=255, unique=True)
    noteBody = models.TextField(blank=True)
