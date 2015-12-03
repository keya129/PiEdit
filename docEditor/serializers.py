from .models import TextEditor

from rest_framework import serializers

class EditorSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextEditor
        fields = ('id','editor_text')