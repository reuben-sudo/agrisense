import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

# Dummy data: [temperature, humidity, soil_type]
X = np.array([
    [25, 60, 0],  # loam
    [30, 70, 1],  # sandy
    [20, 80, 2],  # clay
    [28, 50, 3]   # silty
])

y = ["Maize", "Tomato", "Rice", "Beans"]

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "crop_model.pkl")
print("✅ Model trained and saved as crop_model.pkl")
