from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('home.html', name="Home")

@app.route("/about")
def about():
  return render_template('about.html', name="About")


@app.route("/login")
def login():
  return render_template('login.html', name="Login")

@app.route("/register")
def register():
  return render_template('register.html', name="Register")