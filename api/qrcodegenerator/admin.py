from django.contrib import admin
from .models import QrCode


class QrCodeAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'qr_code', 'created_at', 'updated_at')


admin.site.register(QrCode, QrCodeAdmin)
