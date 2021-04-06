from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/resultado', methods=['POST'])
def calculadora():
    return render_template('resultado.html', num = int(request.form['num']))

@app.route('/')
def index():
    return render_template('index.html')

app.run(host='0.0.0.0', port='8080')