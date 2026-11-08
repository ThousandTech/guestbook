from django import forms

from .models import Entry


class EntryForm(forms.ModelForm):
    content = forms.CharField(
        label="Message",
        # 字段名，html可取为变量
        max_length=1000,
        widget=forms.Textarea(attrs={"id": "guest-message", "rows": 4}),
        # 指定html文本框id和显示行数
    )
    # 在表单中重新声明content，定制表单验证限制和组件

    class Meta:
        model = Entry
        fields = ["author", "content"]
        widgets = {
            "author": forms.TextInput(attrs={
                "id": "guest-name",
                "autocomplete": "nickname",
            }),
        }
        # 同样指定控件，指定id和配置自动补全

# 两个配置的位置不同是因为定制程度不同，content增加了新限制，需要重新声明