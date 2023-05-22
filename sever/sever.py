from flask import Flask, jsonify

app = Flask(__name__)

members = [
    {"name": "Vann Rithy", "gender": "Male", "school": "RUPP"},
    {"name": "Samantha Smith", "gender": "Female", "school": "Harvard"},
    {"name": "John Doe", "gender": "Male", "school": "MIT"},
    {"name": "Elon Musk", "gender": "Male", "school": "Tesla"}
]

@app.route('/members', methods=['GET'])
def get_members():
    return jsonify({"members": members})

@app.route('/members/<int:member_id>', methods=['GET'])
def get_member(member_id):
    if member_id < len(members):
        return jsonify(members[member_id])
    else:
        return jsonify({"message": "Member not found"})

if __name__ == '__main__':
    app.run(debug=True)
