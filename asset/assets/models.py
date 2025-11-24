from django.db import models
from django.utils.translation import gettext_lazy as _
from accounts.models import User


def user_avatar_upload_path(instance, filename):
    # Store uploads as: media/assets/user_<id>/<filename>
    return f"assets/user_{instance.owner.id}/{filename}"


class Asset(models.Model):
    class Category(models.TextChoices):
        PROPERTY = "property", _("Property")
        BUSINESS = "business", _("Business")
        VEHICLE = "vehicle", _("Vehicle")
        PRODUCTS = "products", _("Products")
        CONTRACTS = "contracts", _("Contracts")
        MONEY = "money", _("Money")

    class YesNoChoice(models.TextChoices):
        YES = "yes", _("Yes")
        NO = "no", _("No")

    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="assets"
    )
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=20, choices=Category.choices)
    value = models.DecimalField(max_digits=12, decimal_places=2)
    receipt = models.CharField(max_length=3, choices=YesNoChoice.choices)
    insured = models.CharField(max_length=3, choices=YesNoChoice.choices)
    image = models.ImageField(
        _("Asset Image"),
        upload_to=user_avatar_upload_path,
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('name', 'type', 'value')
    
    
    def __str__(self):
        return f"{self.name} ({self.type})"
