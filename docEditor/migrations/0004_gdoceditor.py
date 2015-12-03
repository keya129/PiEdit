# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docEditor', '0003_auto_20151104_1145'),
    ]

    operations = [
        migrations.CreateModel(
            name='GDocEditor',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('text', models.CharField(max_length=20000)),
            ],
        ),
    ]
