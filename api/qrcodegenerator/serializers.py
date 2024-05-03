from .models import QrCode
from rest_framework import serializers


class QrCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QrCode
        fields = '__all__'
