from .models import Users
from rest_framework import serializers


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'email', 'password', 'first_name', 'last_name')
        extra_kwargs = {
            'password': {'write_only': True}
        }
        read_only_fields = ('is_staff', 'is_superuser',
                            'is_active', 'date_joined', 'last_login')

    def create(self, validated_data):
        user = Users.objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password')
        user = super().update(instance, validated_data)
        user.set_password(password)
        user.save()
        return user
