# ChemView – Chemical Equipment Parameter Visualizer
## Hybrid Web and Desktop Application

ChemView is a hybrid data visualization and analytics application built as part of an intern screening task.
The system allows users to upload chemical equipment CSV data, analyze it using a Django backend, and visualize results via both a Web (React) and Desktop (PyQt5) interface.

---

# Project Features

- CSV upload for chemical equipment data
- Backend analytics using Pandas
- Summary statistics:
  - Total equipment count
  - Average temperature, pressure, and flowrate
  - Equipment type distribution
- Interactive dashboard with charts
- Equipment visualizer and simulation UI
- Upload history (last 5 uploads)
- PDF report generation
- Desktop application using PyQt5
- Single Django backend shared by Web and Desktop applications

---

# Tech Stack

## Backend
- Python
- Django
- Django REST Framework
- Pandas
- SQLite
- ReportLab

## Frontend Web
- React.js
- Recharts
- Fetch API

## Frontend Desktop
- PyQt5
- Matplotlib

---

# Project Structure

ChemView/
├── chemical-visualizer/
│   ├── core/
│   ├── api/
│   ├── db.sqlite3
│   └── manage.py
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── layout/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── desktop_app/
│   ├── main.py
│   ├── api.py
│   ├── charts.py
│   └── requirements.txt
│
├── sample_equipment_data.csv
├── requirements.txt
└── README.md


---

# Sample CSV File

A sample CSV file is provided for demo and testing.

## sample_equipment_data.csv

### Columns
- Equipment Name
- Type
- Flowrate
- Pressure
- Temperature

This file is used by both the Web and Desktop applications.

---

# Setup Instructions

## Backend Setup (Django)

cd chemical-visualizer
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Backend will run at:
http://127.0.0.1:8000/

---

## Web Application Setup (React)

cd frontend
npm install
npm run dev

Web application will run at:
http://localhost:5173/

---

## Desktop Application Setup (PyQt5)

cd desktop_app
pip install -r requirements.txt
python main.py

Note:
The Django backend must be running before launching the desktop application.

---

# Application Modules

## Dashboard
- Displays summary cards for key parameters
- Shows equipment type distribution using bar charts

## Visualizer
- Allows selection of individual equipment
- Displays live parameter details

## Simulation
- Interactive sliders for temperature, pressure, and flowrate
- Start and stop simulation controls

## CSV Upload
- Upload CSV files
- Displays upload summary immediately after processing

## Upload History
- Displays previously uploaded datasets
- Shows calculated averages and timestamps

## Reports
- Generates and downloads PDF reports
- Includes summary statistics and equipment distribution

## Desktop Application
- CSV upload support
- Summary display
- Equipment distribution chart using Matplotlib

---

# Demo and Submission

This project includes:
- Complete source code for backend, web app, and desktop app
- Sample CSV file for testing
- Ready-to-record demo video (2–3 minutes)

---

# Learning Outcomes

- Full stack development using Django and React
- REST API design and consumption
- Data analytics using Pandas
- Data visualization for Web and Desktop platforms
- Hybrid application architecture
- Database usage for upload history tracking
- Version control using Git and GitHub

---

# Author

Smriti Prajapati

## GitHub Repository
https://github.com/Smriti-Prajapati/ChemView
