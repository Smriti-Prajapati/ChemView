from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.http import FileResponse
from django.contrib.auth import authenticate

import pandas as pd
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
import io

from .models import EquipmentUpload
from rest_framework.authtoken.models import Token


# ---------------- LOGIN ----------------
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if not user:
        return Response({"error": "Invalid credentials"}, status=400)

    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key})


# ---------------- UPLOAD CSV ----------------
@api_view(['POST'])
@permission_classes([AllowAny])
def upload_csv(request):
    file = request.FILES.get('file')
    if not file:
        return Response({"error": "No file uploaded"}, status=400)

    df = pd.read_csv(file)

    summary = {
        "total_count": int(len(df)),
        "avg_flowrate": float(df['Flowrate'].mean()),
        "avg_pressure": float(df['Pressure'].mean()),
        "avg_temperature": float(df['Temperature'].mean()),
        "type_distribution": df['Type'].value_counts().to_dict()
    }

    EquipmentUpload.objects.create(
        file_name=file.name,
        total_count=summary["total_count"],
        avg_flowrate=summary["avg_flowrate"],
        avg_pressure=summary["avg_pressure"],
        avg_temperature=summary["avg_temperature"],
        type_distribution=summary["type_distribution"]
    )

    return Response(summary)


# ---------------- HISTORY ----------------
@api_view(['GET'])
@permission_classes([AllowAny])
def upload_history(request):
    data = (
        EquipmentUpload.objects
        .order_by('-uploaded_at')[:5]
        .values()
    )
    return Response(list(data))


# ---------------- LATEST SUMMARY ----------------
@api_view(['GET'])
@permission_classes([AllowAny])
def latest_summary(request):
    latest = EquipmentUpload.objects.last()
    if not latest:
        return Response({
            "total_count": 0,
            "avg_flowrate": 0,
            "avg_pressure": 0,
            "avg_temperature": 0,
            "type_distribution": {}
        })

    return Response({
        "file_name": latest.file_name,
        "uploaded_at": latest.uploaded_at,
        "total_count": latest.total_count,
        "avg_flowrate": latest.avg_flowrate,
        "avg_pressure": latest.avg_pressure,
        "avg_temperature": latest.avg_temperature,
        "type_distribution": latest.type_distribution
    })


# ---------------- PDF REPORT ----------------
@api_view(['GET'])
@permission_classes([AllowAny])
def generate_report(request):
    latest = EquipmentUpload.objects.last()
    if not latest:
        return Response({"error": "No data to generate report"}, status=400)

    buffer = io.BytesIO()
    p = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4

    y = height - 50
    p.setFont("Helvetica-Bold", 14)
    p.drawString(50, y, "ChemView – Equipment CSV Analysis Report")

    y -= 40
    p.setFont("Helvetica", 11)
    p.drawString(50, y, f"File Name: {latest.file_name}")
    y -= 22
    p.drawString(50, y, f"Total Equipment Records: {latest.total_count}")
    y -= 22
    p.drawString(50, y, f"Average Flowrate: {latest.avg_flowrate}")
    y -= 22
    p.drawString(50, y, f"Average Pressure: {latest.avg_pressure}")
    y -= 22
    p.drawString(50, y, f"Average Temperature: {latest.avg_temperature}")

    y -= 35
    p.setFont("Helvetica-Bold", 12)
    p.drawString(50, y, "Equipment Type Distribution:")
    y -= 25

    p.setFont("Helvetica", 11)
    for key, value in latest.type_distribution.items():
        p.drawString(70, y, f"{key}: {value}")
        y -= 18

    p.showPage()
    p.save()

    buffer.seek(0)

    return FileResponse(
        buffer,
        as_attachment=True,
        filename="chemview_report.pdf"
    )
