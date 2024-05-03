from django.shortcuts import render
from .models import QrCode
from rest_framework import viewsets, permissions
from .serializers import QrCodeSerializer
# Create your views here.


class QrCodeViewSet(viewsets.ModelViewSet):
    serializer_class = QrCodeSerializer
    queryset = QrCode.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def user_qr_codes(self, request):
        pass
