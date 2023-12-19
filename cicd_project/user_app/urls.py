# user_app/urls.py
from django.urls import path
from .views import UserListView,UserListCreateView

urlpatterns = [
    path('api/users/', UserListCreateView.as_view(), name='users-list-create'),
    path('api/user/', UserListView.as_view(), name='user-list-create'),
]
