from flask import Blueprint,request,jsonify
import ibm_db
from ..lib import exception
from ..lib import db

category_bp = Blueprint("category",__name__)


@category_bp.route("/get",methods=["GET"])
def get_category():
  try:
    select_sql = "SELECT * FROM CATEGORY WHERE"
    prep_stmt = ibm_db.prepare(db.get_db(), select_sql)
    ibm_db.execute(prep_stmt)
    categories=[]
    category=ibm_db.fetch_assoc(prep_stmt)
    while(category != False):
      categories.append(category)
      category = ibm_db.fetch_assoc(prep_stmt)
    print(categories)
    # return categories,200
    return jsonify(categories),200
  except Exception as e:
    return exception.handle_exception(e)

@category_bp.route("/create",methods=["POST"])
def add_category():
  try:
    data = request.get_json()
    category = data['category']
    insert_sql="INSERT INTO CATEGORY(category_name) VALUES(?)"
    prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
    ibm_db.bind_param(prep_stmt,1,category)
    ibm_db.execute(prep_stmt)
    return {"message":'Created'},201
  except Exception as e:
    return exception.handle_exception(e)


@category_bp.route("/<id>",methods=["DELETE"])
def get_category_id(id):
  try:
    print(id)
    select_sql = "DELETE FROM CATEGORY WHERE ID=?"
    prep_stmt = ibm_db.prepare(db.get_db(), select_sql)
    ibm_db.bind_param(prep_stmt,1,id)
    ibm_db.execute(prep_stmt)
    
    return  {"message":'Deleted'},200
  except Exception as e:
    return exception.handle_exception(e)
