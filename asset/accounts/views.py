# accounts/views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from django.contrib.auth import get_user_model

from rest_framework import generics, permissions
from .serializers import ProfileListSerializer, ProfileDetailSerializer

User = get_user_model()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
    user = request.user
    return Response({
        "username": user.username,
        "email": user.email,
        "phone": user.phone,
        "bio": user.bio,
    })


class ProfileListView(generics.ListAPIView):
    """
    List the authenticated user's profile (single-item list).
    """
    serializer_class = ProfileListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_staff or user.is_superuser:
            # Admin see all users and their profile
            return User.objects.all()
        # Normal users only see their own profile
        return User.objects.filter(id=user.id)


class ProfileDetailView(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update the authenticated user's profile.
    """
    serializer_class = ProfileDetailSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user
