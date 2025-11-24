from django.urls import path
from .views import ProfileListView, ProfileDetailView

urlpatterns = [
    path('profile/', ProfileListView.as_view(), name='profile-list'),
    path('profile/me/', ProfileDetailView.as_view(), name='profile-detail'),
]
