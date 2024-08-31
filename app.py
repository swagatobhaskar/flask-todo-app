from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

todo_items = []

@app.route("/", methods=["GET", "POST"])
def home():
    # return '<h3>Hello...</h3>'
    if request.method == "POST":
        item = request.form["item"]
        todo_items.append(item)    
        # return render_template('home.html', items=todo_items)
        return redirect(url_for('home'))
    
    return render_template('home.html', items=todo_items)

if __name__=='__main__':
    app.run(debug=True)
