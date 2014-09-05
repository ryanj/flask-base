import os
from datetime import datetime
from flask import Flask, request, flash, url_for, redirect, \
     render_template, abort, send_from_directory
import json

app = Flask(__name__)
app.config.from_pyfile('flaskmap.cfg')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:resource>')
def serveStaticResource(resource):
    return send_from_directory('static/', resource)

@app.route("/features/within")
def within():
    result = []
    return json.dumps(result)

if __name__ == '__main__':
    app.run()
