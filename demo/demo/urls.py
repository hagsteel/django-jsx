from django.conf.urls import include, url
from django.contrib import admin
from .api import FormApi
from .views import Home, About, Form

urlpatterns = [
    url(r'^$', Home.as_view(), name='home'),
    url(r'^about/$', About.as_view(), name='about'),
    url(r'^form/$', Form.as_view(), name='form'),
    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/$', FormApi.as_view()),
]
