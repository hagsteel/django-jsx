from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from .api import FormApi, DataListApi
from .views import Home, Form, PaginatedData

urlpatterns = [
    url(r'^$', Home.as_view(), name='home'),
    url(r'^form/$', Form.as_view(), name='form'),
    url(r'^data/$', PaginatedData.as_view(), name='data'),
    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/form/$', csrf_exempt(FormApi.as_view()), name='api_form'),
    url(r'^api/list/$', csrf_exempt(DataListApi.as_view()), name='data_list'),
]
