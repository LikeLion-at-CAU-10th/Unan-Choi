# Generated by Django 3.2.9 on 2022-05-18 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Footprint',
            fields=[
                ('footprint_id', models.AutoField(primary_key=True, serialize=False)),
                ('receiver', models.TextField()),
                ('message', models.TextField()),
                ('sent_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
