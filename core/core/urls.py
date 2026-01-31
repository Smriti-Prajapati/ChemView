from django.contrib import admin
from django.urls import path

from api.views import (
    login,
    upload_csv,
    upload_history,
    latest_summary,
    generate_report
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/login/', login),
    path('api/upload/', upload_csv),
    path('api/history/', upload_history),
    path('api/summary/', latest_summary),
    path('api/report/', generate_report),
]
