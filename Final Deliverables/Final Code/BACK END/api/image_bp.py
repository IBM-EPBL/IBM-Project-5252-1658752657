
from datetime import datetime
from flask import Blueprint,request
import ibm_db
import os
from ..lib import exception
from ..lib import db


image_bp = Blueprint("image",__name__)

@image_bp.route('/image/<id>',methods=['POST'])
def uploadImage(id):
  try:
    uploaded_file = request.files['file']+datetime.date
    if uploaded_file.filename != '':
        uploaded_file.save(os.path.join('/uploads', uploaded_file.filename))
    insert_sql="UPDATE PRODUCT SET image=? WHERE ID=?"
    prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
    ibm_db.bind_param(prep_stmt,1,uploaded_file)
    ibm_db.bind_param(prep_stmt,2,id)
    
    ibm_db.execute(prep_stmt)
    return {"message":'Updated'},200
  except Exception as e:
    return exception.handle_exception(e)
    
@image_bp.route('/<filename>')
def upload(filename):
  try:
    return send_from_directory("/uploads", filename)
  except Exception as e:
    return exception.handle_exception(e)