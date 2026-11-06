from django.contrib.auth.models import User
from django.db import models

# Create your models here.
# 此文件定义数据库结构

class Entry(models.Model):

    author = models.CharField("署名",max_length=50)
    # 第一个参数verbose_name是人类可读名，显示在管理页
    # char_field必须填maxlength
    content = models.TextField("留言内容")

    created_at = models.DateTimeField("留言时间",auto_now_add=True)
    # auto_now_add是创建时写入，之后不会更新 auto_now则是每次保存都更新

    class Meta:

        ordering = ['-created_at']
        # 按时间倒序

        verbose_name = "留言"

        verbose_name_plural = verbose_name

    def __str__(self):
        return f"{self.author}:{self.content[:20]}"