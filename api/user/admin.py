from django.contrib import admin
from .models import Users


class UsersAdmin(admin.ModelAdmin):
    list = ('id', 'username', 'email', 'is_active',
            'is_staff', 'is_superuser', 'date_joined')
    search_fields = ('username', 'email')
    list_filter = ('is_active', 'is_staff', 'is_superuser', 'date_joined')
    ordering = ('-date_joined',)


admin.site.register(Users, UsersAdmin)
