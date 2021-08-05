from flask import Flask, render_template


# Initialize a server app  
app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index4.html')

# Start back end server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')
