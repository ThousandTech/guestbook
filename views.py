from django.shortcuts import redirect,render
from .forms import EntryForm
from .models import Entry

# Create your views here.
# 后端主逻辑

def entry_list(request):

    if request.method == "POST":

        form = EntryForm(request.POST)
        # 绑定数据
        if form.is_valid():
            # 触发数据校验和清洗

            form.save()
            # 写库

            return redirect('entry_list')
            # 重定向至url entry_list 防止刷新页面多次POST

    else:
        form = EntryForm()
        # 空表单

    return render(
        request,
        template_name="guestbook/entry_list.html",
        # 模板
        context={"form":form,"entries":Entry.objects.all(),}
        # 传给模板的数据
    )
    # 用模板生成html