from django.shortcuts import render
from .models import Users
from rest_framework import viewsets, permissions
from .serializers import UsersSerializer
# Create your views here.


class UsersViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

    def get_queryset(self):
        return Users.objects.all()
