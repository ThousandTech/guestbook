from django.urls import path

from . import views

app_name = 'guestbook'

urlpatterns = [
    path('', views.entry_list, name='entry_list'),
    # route是路由前缀，是和跟路由此app的前缀拼接的，name是别名，用于在模板和视图中反查路径
]