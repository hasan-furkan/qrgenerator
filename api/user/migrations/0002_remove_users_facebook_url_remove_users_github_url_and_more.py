# Generated by Django 5.0.4 on 2024-05-04 15:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='users',
            name='facebook_url',
        ),
        migrations.RemoveField(
            model_name='users',
            name='github_url',
        ),
        migrations.RemoveField(
            model_name='users',
            name='instagram_url',
        ),
        migrations.RemoveField(
            model_name='users',
            name='linkedin_url',
        ),
        migrations.RemoveField(
            model_name='users',
            name='twitter_url',
        ),
        migrations.RemoveField(
            model_name='users',
            name='website_url',
        ),
    ]