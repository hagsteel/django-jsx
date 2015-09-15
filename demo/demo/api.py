from rest_framework.response import Response
from rest_framework.views import APIView


class FormApi(APIView):
    def post(self, request, **kwargs):
        return Response(data={'value': 'server replied: {}'.format(request.data['value'])})
