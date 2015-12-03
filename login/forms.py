from login.models import UserProfile
from django.contrib.auth.models import User
from django import forms
from django.forms import ModelForm


class NameForm(forms.Form):
    your_name = forms.CharField(label='Your name', max_length=100)
class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())
	
class Meta:
    model = User
    fields = ('username', 'email', 'password')

class UserCreationForm(forms.ModelForm):
	
	class Meta:
    		model = User
    		fields = ('username', 'email', 'password')
