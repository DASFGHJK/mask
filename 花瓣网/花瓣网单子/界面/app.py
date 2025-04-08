from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:1234567890@localhost/image_table'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'static/uploads'

db = SQLAlchemy(app)
login_manager = LoginManager(app)


# 数据库模型
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(20), default='user')


class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    keyword = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(512), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())


# 登录管理
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# 路由配置
@app.route('/')
def index():
    keywords = db.session.query(Image.keyword).distinct().all()
    return render_template('index.html', keywords=[k[0] for k in keywords])


@app.route('/category/<keyword>')
def category(keyword):
    images = Image.query.filter_by(keyword=keyword).all()
    return render_template('category.html', keyword=keyword, images=images)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(username=request.form['username']).first()
        if user and check_password_hash(user.password_hash, request.form['password']):
            login_user(user)
            return redirect(url_for('index'))
        flash('Invalid credentials')
    return render_template('login.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        hashed_pw = generate_password_hash(request.form['password'])
        new_user = User(username=request.form['username'], password_hash=hashed_pw)
        db.session.add(new_user)
        db.session.commit()
        flash('Registration successful')
        return redirect(url_for('login'))
    return render_template('register.html')


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))


# 管理路由
@app.route('/admin')
@login_required
def admin_dashboard():
    if current_user.role != 'admin':
        return redirect(url_for('index'))
    images = Image.query.all()
    return render_template('admin/dashboard.html', images=images)


@app.route('/admin/delete/<int:id>')
@login_required
def delete_image(id):
    if current_user.role != 'admin':
        return redirect(url_for('index'))
    image = Image.query.get_or_404(id)
    db.session.delete(image)
    db.session.commit()
    return redirect(url_for('admin_dashboard'))


@app.route('/admin/upload', methods=['GET', 'POST'])
@login_required
def upload_image():
    if current_user.role != 'admin':
        return redirect(url_for('index'))

    if request.method == 'POST':
        keyword = request.form['keyword']
        image_file = request.files['image']

        if image_file:
            filename = os.path.join(app.config['UPLOAD_FOLDER'], image_file.filename)
            image_file.save(filename)

            new_image = Image(
                keyword=keyword,
                image_url=url_for('static', filename=f'uploads/{image_file.filename}')
            )
            db.session.add(new_image)
            db.session.commit()
            return redirect(url_for('admin_dashboard'))

    return render_template('admin/upload.html')


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
