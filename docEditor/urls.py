from . import views
from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
	# editor post
	url(r'^editor/$', views.EditorView.as_view()),
	# editor put
    url(r'^editor/(?P<pk>[0-9]+)/$', views.EditorView.as_view()),
    url(r'^editorsave/$',views.EditorSave.as_view()),
	url(r'^userHistory/$',views.UserHistory.as_view()),

]

