from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.contrib import admin
from .models import News
from django.db import models
# Register your models here.

class NewsAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': CKEditorUploadingWidget},

    }


admin.site.register(News)