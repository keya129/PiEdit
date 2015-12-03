from django.db import models

# Create your models here.
class TextEditor(models.Model):
	editor_text = models.CharField(max_length=10000)
	editor_username = models.CharField(max_length=100)
	editor_id = models.IntegerField(default=0)
