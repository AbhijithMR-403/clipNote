from django.urls import path
from . import views


urlpatterns = [
    path('create', views.CreateNoteView.as_view(), name='create_note'),
    path('list/<int:pk>', views.ListNoteView.as_view(), name='list_note'),
    path('edit/<int:pk>', views.RetrieveEditView.as_view(), name='retrieve_note'),
    path('delete/<int:pk>', views.DeleteNoteView.as_view(), name='delete_note'),
]
