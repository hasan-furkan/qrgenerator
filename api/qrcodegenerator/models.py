from django.db import models

# Create your models here.


class QrCode(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey('user.Users', on_delete=models.CASCADE)
    qr_code = models.ImageField(upload_to='qrcodes/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
