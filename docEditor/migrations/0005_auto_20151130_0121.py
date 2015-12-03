# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docEditor', '0004_gdoceditor'),
    ]

    operations = [
        migrations.DeleteModel(
            name='GDocEditor',
        ),
        migrations.AddField(
            model_name='texteditor',
            name='editor_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='texteditor',
            name='editor_username',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
    ]
