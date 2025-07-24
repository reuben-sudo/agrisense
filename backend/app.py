from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# In-memory crop store
crop_data = []

# Load ML model
model = joblib.load("crop_model.pkl")

@app.route('/')
def home():
    return jsonify({"message": "AgriSense Backend is working!"})

@app.route('/upload', methods=['POST'])
def upload_crop():
    crop_name = request.form.get("cropName")
    description = request.form.get("description")
    category = request.form.get("category")
    image = request.files.get("image")

    if not crop_name or not image:
        return jsonify({"error": "Crop name and image are required"}), 400

    image_path = os.path.join(UPLOAD_FOLDER, image.filename)
    image.save(image_path)

    crop_info = {
        "cropName": crop_name,
        "description": description,
        "category": category,
        "imageUrl": f"http://localhost:5000/uploads/{image.filename}"
    }

    crop_data.append(crop_info)

    return jsonify({
        "message": "Upload successful",
        "crop": crop_info
    })

@app.route('/api/crops', methods=['GET'])
def get_crops():
    return jsonify(crop_data)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

# ✅ Basic AI rule-based prediction (for UI form with 3 inputs)
@app.route('/api/predict', methods=['POST'])
def basic_ai_predict():
    data = request.get_json()

    temperature = float(data.get("temperature", 0))
    humidity = float(data.get("humidity", 0))
    soil_type = data.get("soilType", "").lower()

    # Simple rule-based AI logic
    if soil_type == "loam" and 20 <= temperature <= 30 and 40 <= humidity <= 70:
        recommended_crop = "Maize"
    elif soil_type == "clay":
        recommended_crop = "Rice"
    elif soil_type == "sandy":
        recommended_crop = "Groundnuts"
    else:
        recommended_crop = "Sorghum"

    return jsonify({"recommendedCrop": recommended_crop})

# ✅ ML Model API (for advanced inputs)
@app.route('/api/ml-predict', methods=['POST'])
def ml_predict():
    data = request.get_json()
    try:
        nitrogen = float(data.get("nitrogen"))
        phosphorus = float(data.get("phosphorus"))
        potassium = float(data.get("potassium"))
        temperature = float(data.get("temperature"))
        humidity = float(data.get("humidity"))
        ph = float(data.get("ph"))
        rainfall = float(data.get("rainfall"))

        features = np.array([[nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall]])
        prediction = model.predict(features)[0]

        return jsonify({
            "recommendedCrop": prediction
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
