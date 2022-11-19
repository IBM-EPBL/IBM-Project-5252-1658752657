from datetime import datetime
from flask import Flask,request,send_from_directory
from .lib import db,validation_error
import ibm_db
from flask_cors import CORS

import os
from .api import auth_bp,category_bp,product_bp,cart_bp,order_bp
app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024
app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.png', '.gif']
app.config['UPLOAD_PATH'] = 'uploads'

CORS(app) # This will enable CORS for all routes

db.get_db()

app.register_blueprint(auth_bp.auth_bp,url_prefix="/api/v1/auth")
app.register_blueprint(category_bp.category_bp,url_prefix="/api/v1/category")
app.register_blueprint(product_bp.product_bp,url_prefix="/api/v1/product")
app.register_blueprint(cart_bp.cart_bp,url_prefix="/api/v1/cart")
app.register_blueprint(order_bp.order_bp,url_prefix="/api/v1/order")



@app.route('/image/<id>',methods=['POST'])
def uploadImage(id):
    try:
      uploaded_file = request.files['file']
      print(uploaded_file.filename)
      if uploaded_file.filename != '':
          uploaded_file.save(os.path.join(app.config['UPLOAD_PATH'], uploaded_file.filename))
      insert_sql="UPDATE PRODUCT SET image=? WHERE ID=?"
      prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
      ibm_db.bind_param(prep_stmt,1,uploaded_file.filename)
      ibm_db.bind_param(prep_stmt,2,id)    
      ibm_db.execute(prep_stmt)
      return {"message":'Updated'},200
    except Exception as e:
      print(e)
      return validation_error.throw_validation("Something went wrong", 500)
@app.route('/uploads/<filename>')
def upload(filename):
    print('calling-------------')
    print(filename)
    return send_from_directory(app.config['UPLOAD_PATH'], filename, as_attachment=True)