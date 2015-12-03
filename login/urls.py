from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^(?P<pk>[0-9]+)/$', views.index, name='index'),
    url(r'^results/$', views.results, name='results'),
	url(r'^results/(?P<pk>[0-9]+)/$', views.results, name='results'),
    url(r'^register/$', views.register, name='register'),
    url(r'^registerUser/$', views.registerUser, name='registerUser'),
    ]
   