from rest_framework import permissions
from django.shortcuts import render
from rest_framework import generics
from note_mgmt.models import NoteHistory
from .serializers import CreateNoteSerializers, ListNoteSerializers
# Create your views here.


class CreateNoteView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CreateNoteSerializers
    queryset = NoteHistory.objects.all()


class ListNoteView(generics.ListAPIView):  
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ListNoteSerializers
    queryset = NoteHistory.objects.all()

    def get_queryset(self):
        return super().get_queryset().filter(
            user=self.kwargs['pk']
        )


class RetrieveEditView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ListNoteSerializers
    queryset = NoteHistory.objects.all()
    lookup_url_kwarg = 'pk'


class DeleteNoteView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ListNoteSerializers
    queryset = NoteHistory.objects.all()
    lookup_url_kwarg = 'pk'
