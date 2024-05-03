from user.models import Users
from .models import QrCode
from rest_framework import viewsets, permissions
from .serializers import QrCodeSerializer

import qrcode


class QrCodeViewSet(viewsets.ModelViewSet):
    serializer_class = QrCodeSerializer
    queryset = QrCode.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def user_generate_qr_codes(self, user_id):
        # user_id = Users.objects.get(id=user_id)
        # qr = qrcode.QRCode(
        #     version=1,
        #     box_size=10,
        #     border=5
        # )
        # data = user_id.email
        pass
