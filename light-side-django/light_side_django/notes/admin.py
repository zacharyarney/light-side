from django.contrib import admin

from .models import Note, PersonalNote


class NoteAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at', 'id')


class PersonalNoteAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at', 'id')


# Register your models here.
admin.site.register(Note, NoteAdmin)
admin.site.register(PersonalNote, PersonalNoteAdmin)
