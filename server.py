from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/upload", methods=['POST'])
def send():
    count = 0
    print(request.files)
    with open('number.txt', 'r') as file:
        content = file.read()
        count = int(content)
        count+=1

    with open('number.txt', 'w') as file:
        file.write(count)
    
    f = request.files
    f.save(f'files/{count}.txt')

@app.route('/')
def home():
    return 'hi'