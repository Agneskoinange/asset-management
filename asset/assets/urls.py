from django.urls import path
from . import views

urlpatterns = [
    path('assets/', views.AssetListView.as_view(), name='assets-list'),
    path('assets/<int:pk>/', views.AssetDetailView.as_view(), name='assets-detail-view'),
]