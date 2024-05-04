from django.test import TestCase
from psycopg2 import IntegrityError
from .models import Users
# Create your tests here.


class UsersModelTest(TestCase):
    def setUp(self):
        Users.objects.create(
            username='testuser',
            password='testpassword',
            first_name='testfirstname',
            last_name='testlastname',
            email='test@test.com'
        )

    def test_user_model(self):
        user = Users.objects.get(username='testuser')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.first_name, 'testfirstname')
        self.assertEqual(user.last_name, 'testlastname')
        self.assertEqual(user.email, 'test@test.com')
        self.assertNotEqual(user.password, 'testpassword1')
