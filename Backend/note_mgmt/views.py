from django.shortcuts import render
from rest_framework import generics
from note_mgmt.models import NoteHistory
from .serializers import CreateNoteSerializers, ListNoteSerializers
# Create your views here.


class CreateNoteView(generics.CreateAPIView):
    serializer_class = CreateNoteSerializers
    queryset = NoteHistory.objects.all()


class ListNoteView(generics.ListAPIView):
    serializer_class = ListNoteSerializers
    queryset = NoteHistory.objects.all()

    def get_queryset(self):
        return super().get_queryset().filter(
            user=self.kwargs['pk']
        )


class RetrieveEditView(generics.RetrieveUpdateAPIView):
    serializer_class = ListNoteSerializers
    queryset = NoteHistory.objects.all()
    lookup_url_kwarg = 'pk'
