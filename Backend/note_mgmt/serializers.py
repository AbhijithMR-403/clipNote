from rest_framework import serializers
from .models import NoteHistory


class CreateNoteSerializers(serializers.ModelSerializer):

    class Meta:
        model = NoteHistory
        fields = ('title', 'description', 'user')
        # exclude = ('created_at', 'updated_at', 'is_active')


class ListNoteSerializers(serializers.ModelSerializer):

    class Meta:
        model = NoteHistory
        fields = '__all__'
        # exclude = ('created_at', 'updated_at', 'is_active')
