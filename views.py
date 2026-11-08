from django.contrib import messages
from django.core.paginator import Paginator
from django.shortcuts import redirect, render

from .forms import EntryForm
from .models import Entry


def entry_list(request):
    form = EntryForm(request.POST if request.method == "POST" else None)
    if request.method == "POST" and form.is_valid():
        form.save()
        # 写库
        messages.success(request, "Posted.")
        return redirect("entry_list")
        # 提交后重定向

    paginator = Paginator(Entry.objects.order_by("-created_at", "-pk"), 5)
    # paginator 是分页器，Entry.objects查表，先时间倒序，再主键倒序，每页五个
    page_obj = paginator.get_page(request.GET.get("page"))
    # 取url请求参数page
    return render(request, "guestbook/entry_list.html", {
        "form": form, # 表单
        "entries": page_obj.object_list,# 当前页留言
        "page_obj": page_obj,# 当前页信息
        "paginator": paginator,# 整体留言信息
    })
    # 上下文即模板可使用的变量