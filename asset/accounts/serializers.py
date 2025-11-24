from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class ProfileListSerializer(serializers.ModelSerializer):
    """
    Serializer for listing user profiles.
    Only expose public fields for listing (e.g., username, avatar, bio)
    """
    class Meta:
        model = User
        fields = [
            'id', 'username', 'email',
            'first_name', 'last_name', 'phone',
            'bio', 'avatar',
        ]
        read_only_fields = fields


class ProfileDetailSerializer(serializers.ModelSerializer):
    """
    Serializer for retrieving/updating the authenticated user's profile.
    """
    class Meta:
        model = User
        fields = [
            'id', 'username', 'email',
            'first_name', 'last_name', 'phone',
            'bio', 'avatar',
        ]
        read_only_fields = ['id']  # cannot change username/email
