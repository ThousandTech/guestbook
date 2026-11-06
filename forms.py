from django import forms
from .models import Entry

# 此文件管理用户填写的表单

class EntryForm(forms.ModelForm):
    # ModelForm 会根据model去生成表单字段和校验规则

    class Meta:

        model = Entry

        fields = ['author','content']