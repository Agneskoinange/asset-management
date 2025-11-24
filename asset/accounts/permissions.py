from rest_framework import permissions

class IsAdminOrOwner(permissions.BasePermission):
    """
    Admin users can read/update/delete all profiles.
    Regular users can read/update their own profile only.
    """
    def has_object_permission(self, request, view, obj):
        # Admins can do anything
        if request.user.is_staff or request.user.is_superuser:
            return True

        # Regular users can only read/write their own profile
        return obj == request.user