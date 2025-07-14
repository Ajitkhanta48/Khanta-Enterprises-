from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows GitHub frontend to access backend

inventory = []

@app.route('/add', methods=['POST'])
def add():
    item = request.json
    inventory.append(item)
    return jsonify({'message': 'Added'}), 200

@app.route('/list')
def list_items():
    return jsonify(inventory)
