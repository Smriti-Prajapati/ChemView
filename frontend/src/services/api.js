const API_BASE_URL = "https://chemview.onrender.com";

export async function getSummary() {
  const res = await fetch(`${BASE_URL}/summary/`);
  if (!res.ok) throw new Error("Failed to fetch summary");
  return await res.json();
}

export async function uploadCSV(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/upload/`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload failed");
  return await res.json();
}

export async function getHistory() {
  const res = await fetch(`${BASE_URL}/history/`);
  if (!res.ok) throw new Error("Failed to fetch history");
  return await res.json();
}
