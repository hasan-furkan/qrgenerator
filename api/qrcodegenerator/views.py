import os
from django.http import JsonResponse
from user.models import Users
from .models import QrCode
from rest_framework import viewsets, permissions
from .serializers import QrCodeSerializer
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

import qrcode


class QrCodeViewSet(viewsets.ModelViewSet):
    serializer_class = QrCodeSerializer
    queryset = QrCode.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def user_generate_qr_codes(self, user_id, url, name):
        user = Users.objects.get(id=user_id)
        first_name = user.first_name

        directory_path = 'media/qrcodes'
        if not os.path.exists(directory_path):
            os.makedirs(directory_path)

        image = qrcode.make(url)
        file_name = f'{name}-{first_name}.png'
        file_path = f'media/qrcodes/{file_name}'
        image.save(file_path)

        qr_code = QrCode.objects.create(
            name=f'{name}',
            user=user,
            qr_code=f'qrcodes/{file_name}'
        )
        qr_code.save()
        return qr_code

    @swagger_auto_schema(
        operation_description="Create website url QR code",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'website_url': openapi.Schema(type=openapi.TYPE_STRING, description='Website URL'),
                'name': openapi.Schema(type=openapi.TYPE_STRING, description='Website name'),
            },
            required=['']
        ),
        responses={201: openapi.Response(description='Success')}
    )
    def create(self, request, *args, **kwargs):
        user_id = request.user.id
        website_url = request.data.get('website_url')
        name = request.data.get('name')
        if not website_url:
            return JsonResponse({'error': 'Website URL is required'}, status=400)
        qr_code = self.user_generate_qr_codes(user_id, website_url, name)
        serializer = self.get_serializer(qr_code)
        return JsonResponse({'data': serializer.data}, status=201)
