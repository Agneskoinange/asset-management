from django.contrib import admin
from .models import Asset

@admin.register(Asset)
class AssetAdmin(admin.ModelAdmin):
    list_display = ("owner", "name", "type", "insured", "created_at")
    search_fields = ("name", "type", "owner__email")
    list_filter = ("type", "insured", "receipt")