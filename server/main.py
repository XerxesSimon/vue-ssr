from flask import Flask
from flask_cors import CORS
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'hello world'

@app.route('/test')
def hello():
    return 'hello world'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, threaded=True, debug=True))
    CORS(app)
