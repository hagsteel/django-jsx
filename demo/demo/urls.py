from django.conf.urls import include, url
from django.contrib import admin
from .views import Home, About

urlpatterns = [
    url(r'^$', Home.as_view(), name='home'),
    url(r'^about/$', About.as_view(), name='about'),
    url(r'^admin/', include(admin.site.urls)),
]
