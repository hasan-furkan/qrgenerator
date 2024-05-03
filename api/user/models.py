from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.


class Users(AbstractUser):
    linkedin_url = models.URLField(max_length=200, null=True, blank=True)
    github_url = models.URLField(max_length=200, null=True, blank=True)
    twitter_url = models.URLField(max_length=200, null=True, blank=True)
    facebook_url = models.URLField(max_length=200, null=True, blank=True)
    instagram_url = models.URLField(max_length=200, null=True, blank=True)
    website_url = models.URLField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f"{self.email} - {self.username}"
