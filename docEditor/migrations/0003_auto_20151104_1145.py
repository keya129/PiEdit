# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docEditor', '0002_remove_editor_editor_id'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Editor',
            new_name='TextEditor',
        ),
    ]
