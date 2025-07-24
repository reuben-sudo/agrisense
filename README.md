# 🌾 AgriSense – Smart Farming AI Assistant 🇰🇪

AgriSense is an AI-powered web application designed to empower Kenyan farmers by providing tools for crop prediction, real-time weather insights, market uploads, and data visualization.

---

## 🚀 Features

- 🧠 **AI Crop Advisor** – Predict the best crop to grow based on soil, temperature, humidity, and rainfall.
- 📸 **Crop Upload & Classification** – Upload crop images with descriptions and categories.
- 📦 **Market Listing** – View uploaded crops in a digital marketplace.
- 📊 **Dashboard** – Visual summary with downloadable PDF reports.
- 🌦️ **Weather Forecast** – Real-time 3-day forecast by city using OpenWeatherMap API.
- 🌙 **Dark Mode** – Seamless switch between light/dark themes.
- 📁 **PDF Export** – Generate PDF reports of crop data.
- 📱 **Responsive UI** – Built with React + Tailwind CSS.

---

## 🛠️ Tech Stack

| Frontend         | Backend         | AI/ML                  | Deployment               |
|------------------|------------------|-------------------------|--------------------------|
| React + Vite     | Flask (Python)   | scikit-learn, joblib    | GitHub / Render / Railway |
| Axios            | Flask-CORS       | RandomForestClassifier  | (To be deployed)         |

---

## 📂 Project Structure

agrisense/
│
├── backend/
│ ├── app.py # Flask API
│ ├── train_model.py # ML model trainer
│ ├── crop_model.pkl # Trained ML model
│ └── uploads/ # Uploaded crop images
│
├── frontend/
│ ├── src/
│ │ ├── components/ # Navbar, WeatherCard, etc.
│ │ ├── pages/ # Home, Market, Upload, CropAI, Dashboard, About
│ │ └── App.jsx # Main routing and layout
│ └── public/
│
└── README.md


---

## ⚙️ Setup Instructions

### 🔧 1. Backend (Flask)

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # On Windows
pip install -r requirements.txt
python train_model.py   # Train & save model
python app.py           # Start Flask backend
➡ Visit: http://localhost:5000

🔧 2. Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm run dev
➡ Visit: http://localhost:5173

🔑 Environment Variables
Create a .env file inside the frontend/ folder:


VITE_WEATHER_API_KEY=a6b7c04f05510cdcf2b249d16da619d1
🌍 Deployment Tips
✅ Use Render or Railway for the backend (Flask API).

✅ Use Vercel or Netlify for the frontend (React/Vite).

💡 Use .gitignore to avoid pushing large files (e.g., uploads/, crop_model.pkl, venv/, node_modules/).

🤖 AI Model
Trained with RandomForestClassifier on features like nitrogen, phosphorus, potassium, temperature, humidity, pH, and rainfall.

Output: Predicted best crop to grow.

Model file: crop_model.pkl

📬 Support
📧 Email: kokanir97@gmail.com

🙌 Credits
Created with ❤️ by Reuben Kokani
For the PLP AI for Software Engineering Capstone Project (2025)