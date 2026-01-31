from PyQt5.QtWidgets import (
    QWidget, QVBoxLayout, QHBoxLayout, QLabel,
    QPushButton, QFileDialog, QMessageBox, QFrame
)
from PyQt5.QtCore import Qt
from api import get_summary, upload_csv
from charts import BarChart


class MainUI(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("ChemView – Desktop Application")
        self.setMinimumSize(1000, 650)

        main_layout = QVBoxLayout()
        main_layout.setSpacing(20)
        main_layout.setContentsMargins(30, 30, 30, 30)

        # ---------- HEADER ----------
        header = QLabel("ChemView — Chemical Equipment Visualizer")
        header.setAlignment(Qt.AlignCenter)
        header.setStyleSheet("""
            font-size: 26px;
            font-weight: bold;
            color: #1e293b;
        """)
        main_layout.addWidget(header)

        sub = QLabel("Desktop Analytics & Visualization Panel")
        sub.setAlignment(Qt.AlignCenter)
        sub.setStyleSheet("font-size:14px; color:#64748b;")
        main_layout.addWidget(sub)

        # ---------- UPLOAD BUTTON ----------
        self.upload_btn = QPushButton("Upload Equipment CSV")
        self.upload_btn.setFixedHeight(45)
        self.upload_btn.setStyleSheet("""
            QPushButton {
                background-color: #2563eb;
                color: white;
                font-size: 16px;
                border-radius: 6px;
            }
            QPushButton:hover {
                background-color: #1e40af;
            }
        """)
        self.upload_btn.clicked.connect(self.handle_upload)
        main_layout.addWidget(self.upload_btn, alignment=Qt.AlignCenter)

        # ---------- SUMMARY CARD ----------
        self.summary_card = QFrame()
        self.summary_card.setStyleSheet("""
            QFrame {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 10px;
            }
        """)
        self.summary_layout = QVBoxLayout(self.summary_card)
        self.summary_label = QLabel("Upload a CSV file to view analysis summary.")
        self.summary_label.setStyleSheet("font-size:15px;")
        self.summary_layout.addWidget(self.summary_label)
        main_layout.addWidget(self.summary_card)

        # ---------- CHART AREA ----------
        self.chart_container = QFrame()
        self.chart_container.setStyleSheet("""
            QFrame {
                background: white;
                border-radius: 10px;
                border: 1px solid #e2e8f0;
            }
        """)
        self.chart_layout = QVBoxLayout(self.chart_container)
        main_layout.addWidget(self.chart_container)

        self.setLayout(main_layout)

        self.chart = None

    # ---------- LOGIC (UNCHANGED) ----------
    def handle_upload(self):
        file_path, _ = QFileDialog.getOpenFileName(
            self, "Select CSV File", "", "CSV Files (*.csv)"
        )

        if not file_path:
            return

        try:
            upload_csv(file_path)
            data = get_summary()

            self.summary_label.setText(
                f"""
<b>Total Equipment:</b> {data['total_count']}<br>
<b>Average Temperature:</b> {data['avg_temperature']} °C<br>
<b>Average Pressure:</b> {data['avg_pressure']} bar<br>
<b>Average Flowrate:</b> {data['avg_flowrate']} L/s
                """
            )

            if self.chart:
                self.chart_layout.removeWidget(self.chart)
                self.chart.deleteLater()

            self.chart = BarChart(data["type_distribution"])
            self.chart_layout.addWidget(self.chart)

        except Exception as e:
            QMessageBox.critical(self, "Error", str(e))
