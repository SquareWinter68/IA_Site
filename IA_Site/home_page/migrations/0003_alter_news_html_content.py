# Generated by Django 4.2 on 2023-12-18 22:07

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home_page', '0002_remove_news_images_news_html_content_news_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='html_content',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True),
        ),
    ]