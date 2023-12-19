from ckeditor.widgets import CKEditorWidget
from django.contrib import admin
from .models import News
from django.db import models
# Register your models here.

class NewsAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': CKEditorWidget},

    }


admin.site.register(News)