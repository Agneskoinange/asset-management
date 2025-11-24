from rest_framework import generics
from .serializers import AssetSerializer, AssetDetailSerializer
from rest_framework import permissions
from accounts.permissions import IsAdminOrOwner
from .models import Asset
from rest_framework.response import Response
from rest_framework import status


class AssetListView(generics.ListCreateAPIView):
    queryset = Asset.objects.all().order_by('-created_at')
    serializer_class = AssetSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly, IsAdminOrOwner
    ]
    def perform_create(self, serializer):
        # Automatically set the owner to the logged-in user
        serializer.save(owner=self.request.user)


class AssetDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AssetDetailSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Asset.objects.filter(owner=self.request.user)
