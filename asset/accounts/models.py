# accounts/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

def user_avatar_upload_path(instance, filename):
    # Store uploads as: media/avatars/user_<id>/<filename>
    return f"avatars/user_{instance.id}/{filename}"

class User(AbstractUser):
    """Custom user model extending Django's AbstractUser"""

    # Optional: make username not required later if you prefer email login
    email = models.EmailField(_('email address'), unique=True)
    phone = models.CharField(_('phone number'), max_length=20, blank=True, null=True)
    bio = models.TextField(_('bio'), blank=True, null=True)
    avatar = models.ImageField(
        _('profile picture'),
        upload_to=user_avatar_upload_path,
        blank=True,
        null=True,
    )

    # Example for tracking timestamps
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # You can later add roles or flags (e.g., is_verified)
    # is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.username or self.email
