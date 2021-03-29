# Atividade 6 : Crie um servidor em flask que recebe um número e retorna a soma dele com 2
from flask import Flask
app = Flask(__name__)

@app.route('/<int:num1>', methods=['GET'])
def somador(num1):
    return "{a} + 2 = {b}".format(a = num1, b = num1+2)