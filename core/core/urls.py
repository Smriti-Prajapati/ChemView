from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

from api.views import (
    login,
    upload_csv,
    upload_history,
    latest_summary,
    generate_report,
)

# Simple root response so Render doesn't look "broken"
def home(request):
    return JsonResponse({
        "message": "ChemView Backend is running",
        "available_endpoints": [
            "/api/login/",
            "/api/upload/",
            "/api/history/",
            "/api/summary/",
            "/api/report/",
        ]
    })

urlpatterns = [
    path("", home),  # 👈 VERY IMPORTANT
    path("admin/", admin.site.urls),

    path("api/login/", login),
    path("api/upload/", upload_csv),
    path("api/history/", upload_history),
    path("api/summary/", latest_summary),
    path("api/report/", generate_report),
]
