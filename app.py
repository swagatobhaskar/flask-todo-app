from flask import Flask, render_template, request, redirect, url_for, abort, jsonify
from flask_sqlalchemy import SQLAlchemy

from os import path, environ, getenv
from dotenv import load_dotenv

# basedir = path.abspath(path.dirname(__file__))
# load_dotenv(path.join(basedir, '.env'))

app = Flask(__name__)

env_type = environ.get('ENV')

print("ENV-->", env_type)
print("ENV#2-->", getenv('ENV'))

if env_type == 'development':
    config = 'config.DevConfig'
else:
    config = 'config.ProdConfig'

app.config.from_object(config)

db = SQLAlchemy(app)

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
# ---------------------------------------------------------------------
class Todo(db.Model):
    __tablename__ = 'todo'

    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Todo item: {str(self.id)}>'


@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        new_item = request.form["item"]
        db.session.add(Todo(item=new_item))
        db.session.commit()
        return redirect(url_for('home'))
    
    todos = Todo.query.all()
    return render_template('home.html', items=todos)

@app.route("/delete/<int:id>", methods=['DELETE'])
def remove_item(id):
    todo_item = db.session.get(Todo, id) # Todo.query.get(id) is considered legacy
    if todo_item is None:
        abort(jsonify(message="Todo with this id not found!"), 404)
    db.session.delete(todo_item)
    db.session.commit()
    return jsonify({'message': 'success'}), 200

# ----------------------------------------------------------------------


if __name__=='__main__':
    # removed DEBUG=True because it will be modified through config file
    app.run()
