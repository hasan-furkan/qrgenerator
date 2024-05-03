FROM python:3

WORKDIR /app

ADD ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
ADD . /app
CMD python manage.py migrate && gunicorn -b 0.0.0.0:8000 --log-level debug --reload -w 9 qrgenerator.wsgi:application

