from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
import math
from django.core.files.images import get_image_dimensions
from django.core.exceptions import ValidationError
# Create your models here.
def validate_aspect_ratio(image):
    image_width, image_height = get_image_dimensions(image)
    gcd = math.gcd(image_width, image_height)
    numerator: int = int(image_width/gcd)
    denominator: int = int(image_height/gcd)
    if not (numerator == 16 and denominator == 9):
        raise ValidationError("Image must be of aspect ratio: 16/9")

class News(models.Model):
    title = models.CharField(max_length=150)
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    html_content = RichTextField(blank=True, null=True)
    image = models.ImageField(blank=True, null=True, validators=[validate_aspect_ratio])

    def __str__(self):
        return f"{self.title} (News Id: {self.id})"

