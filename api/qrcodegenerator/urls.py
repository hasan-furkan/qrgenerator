from rest_framework import routers
from .views import QrCodeViewSet
from django.urls import path, include

qr_code_router = routers.DefaultRouter()
qr_code_router.register(r'code', QrCodeViewSet,
                        basename=QrCodeViewSet.__name__)

urlpatterns = [
    path('', include(qr_code_router.urls)),
]
