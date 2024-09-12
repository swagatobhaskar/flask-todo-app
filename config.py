from os import path, environ

basedir = path.abspath(path.dirname(__file__))

class Config:
    """Base config."""
    DEBUG = False
    STATIC_FOLDER = 'static'
    TEMPLATES_FOLDER = 'templates'

class DevConfig(Config):
    FLASK_ENV = 'development'
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + path.join(basedir, 'todo_data.db')

class ProdConfig(Config):
    FLASK_ENV = 'production'
    DEBUG = False
    TESTING = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + path.join(basedir, 'todo_data.db')
