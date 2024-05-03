from rest_framework import routers
from .views import UsersViewSet
from django.urls import path, include

user_router = routers.DefaultRouter()
user_router.register(r'users', UsersViewSet, basename=UsersViewSet.__name__)

urlpatterns = [
    path('', include(user_router.urls)),
]
