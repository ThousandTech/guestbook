from django.contrib import admin
from .models import Entry

# Register your models here.
# 此文件注册管理面板项

@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):

    list_display = ["author","created_at"]
    # 列表页显示哪些列的内容

    search_fields = ["author","content"]
    # 搜索框可搜索哪些内容

    list_filter = ["author","created_at"]
    # 右侧筛选器可用筛选项

    ordering = ["-created_at"]