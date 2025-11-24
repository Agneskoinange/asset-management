from rest_framework import serializers
from .models import Asset

class AssetSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Asset
        fields = [
            "id", "owner", "name",
            "type", "value", "receipt",
            "insured", "image",
        ]
        read_only_fields = ['id']
        
    def validate(self, data):
        user = self.context['request'].user
        
        # Check if the assest with same combination already exists
        if Asset.objects.filter(
            owner=user,
            name=data.get('name'),
            type=data.get('type'),
            value=data.get('value')
        ).exists():
            raise serializers.ValidationError({
                "non_field_errors": ["You already have an asset with the same name, type, and value."]
            })
        return data


class AssetDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = [
            "id", "owner", "name",
            "type", "value", "receipt",
            "insured", "image",
        ]
        
        read_only_fields = ['id']