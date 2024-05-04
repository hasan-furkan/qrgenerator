from .models import QrCode
from rest_framework import serializers


class QrCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QrCode
        fields = ('id', 'name', 'qr_code')
