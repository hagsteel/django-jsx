from django.conf.urls import include, url
from django.contrib import admin
from .api import FormApi, DataListApi
from .views import Home, About, Form, PaginatedData

urlpatterns = [
    url(r'^$', Home.as_view(), name='home'),
    url(r'^about/$', About.as_view(), name='about'),
    url(r'^form/$', Form.as_view(), name='form'),
    url(r'^data/$', PaginatedData.as_view(), name='data'),
    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/form/$', FormApi.as_view()),
    url(r'^api/list/$', DataListApi.as_view()),
]
