from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import serializers
from .models import Data


class FormApi(APIView):
    def post(self, request, **kwargs):
        return Response(data={'value': 'server replied: {}'.format(request.data['value'])})


class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data


class PaginationClass(PageNumberPagination):
    page_size = 3


class DataListApi(ListAPIView):
    model = Data
    serializer_class = DataSerializer
    pagination_class = PaginationClass

    def get_queryset(self):
        return self.model.objects.all()
