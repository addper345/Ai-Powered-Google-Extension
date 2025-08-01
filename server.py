from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/upload", methods=['POST'])
def send():
    if request.method == 'POST':
        count = 0
        with open('number.txt', 'r') as file:
            content = file.read()
            count = int(content)
            count+=1

        with open('number.txt', 'w') as file:
            file.write(count)
        
        f = request.files['the_file']
        f.save(f'files/{count}.txt')