import requests

BASE_URL = "http://127.0.0.1:8000/api"

def get_summary():
    response = requests.get(f"{BASE_URL}/summary/")
    response.raise_for_status()
    return response.json()

def get_history():
    response = requests.get(f"{BASE_URL}/history/")
    response.raise_for_status()
    return response.json()

def upload_csv(file_path):
    with open(file_path, "rb") as f:
        files = {"file": f}
        response = requests.post(f"{BASE_URL}/upload/", files=files)
        response.raise_for_status()
        return response.json()
