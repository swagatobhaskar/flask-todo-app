from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'todo_data.db')
db = SQLAlchemy(app)
# migrate = Migrate(app, db)

"""
Without using flask-migrate, create the db with:
>>> flask shell
>>> from app import db, Todo
>>> db.create_all()
>>> Todo.query.all()

With flask-migrate, run the commands:
>>> flask shell
>>> flask db init
>>> flask db migrate -m "..."
>>> flask db upgrade
"""

class Todo(db.Model):
    __tablename__ = 'todo'

    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Todo item: {str(self.id)}>'

# todo_items = []

@app.route("/", methods=["GET", "POST"])
def home():
    # return '<h3>Hello...</h3>'
    if request.method == "POST":
        new_item = request.form["item"]
        # todo_items.append(item)
        db.session.add(Todo(item=new_item))
        db.session.commit()
        # return render_template('home.html', items=todo_items)
        return redirect(url_for('home'))
    
    todos = Todo.query.all()
    # return render_template('home.html', items=todo_items)
    return render_template('home.html', items=todos)

if __name__=='__main__':
    app.run(debug=True)
