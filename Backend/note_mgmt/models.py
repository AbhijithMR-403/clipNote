from django.db import models
from account.models import Account

# Create your models here.


class NoteHistory(models.Model):
    color_choice = [
        ('white', 'white')
    ]
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=4000)
    color = models.CharField(max_length=30, choices=color_choice, default='white')
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
