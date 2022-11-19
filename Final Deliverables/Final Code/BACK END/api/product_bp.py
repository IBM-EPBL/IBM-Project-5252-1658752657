
from flask import Blueprint,request,jsonify
import ibm_db
from ..lib import exception
from ..lib import db


product_bp = Blueprint("product",__name__)

@product_bp.route("/create",methods=['POST'])
def add_product():
  try:
     data = request.get_json()
     product_name=data['product_name']
     category=data['category']
     description = data['description']
     stock=data['stock']
     price = data['price']
     insert_sql="INSERT INTO PRODUCT(product_name,category,description,stock,price) VALUES(?,?,?,?,?)"
     prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
     ibm_db.bind_param(prep_stmt,1,product_name)
     ibm_db.bind_param(prep_stmt,2,category)
     ibm_db.bind_param(prep_stmt,3,description)
     ibm_db.bind_param(prep_stmt,4,stock)
     ibm_db.bind_param(prep_stmt,5,price)
     ibm_db.execute(prep_stmt)
     return {"message":'Created'},200
  except Exception as e:
    return exception.handle_exception(e)

@product_bp.route("/get",methods=['GET'])
def get_product():
  try:
    # select_sql = "SELECT PRODUCT.ID AS product_id, category,category_name,product_name,description,price,stock,image FROM PRODUCT JOIN CATEGORY ON CATEGORY.ID=PRODUCT.CATEGORY"
    select_sql = "SELECT * FROM PRODUCT WHERE"
    prep_stmt = ibm_db.prepare(db.get_db(), select_sql)
    ibm_db.execute(prep_stmt)
    products=[]
    product=ibm_db.fetch_assoc(prep_stmt)
    while(product != False):
      products.append(product)
      product = ibm_db.fetch_assoc(prep_stmt)
    print(products)
    return jsonify(products) or [],200
  except Exception as e:
    return exception.handle_exception(e)


@product_bp.route("/<id>",methods=['GET'])
def get_product_id(id):
  try:
    # select_sql = "SELECT PRODUCT.ID AS product_id, category,category_name,product_name,description,price,stock,image FROM PRODUCT JOIN CATEGORY ON CATEGORY.ID=PRODUCT.CATEGORY WHERE PRODUCT.ID=?"
    select_sql = "SELECT * FROM PRODUCT WHERE PRODUCT.ID=?"
    prep_stmt = ibm_db.prepare(db.get_db(), select_sql)
    ibm_db.bind_param(prep_stmt,1,id)
    ibm_db.execute(prep_stmt)
    product=ibm_db.fetch_assoc(prep_stmt)
    print(product)
    return product or [],200
  except Exception as e:
    return exception.handle_exception(e)


@product_bp.route("/<id>",methods=['PUT'])
def update_product(id):
  try:
     data = request.get_json()
     product_name=data['product_name']
     category=data['category']
     description = data['description']
     stock=data['stock']
     price = data['price']
     insert_sql="UPDATE PRODUCT SET product_name=?,category=?,description=?,stock=?,price=? WHERE ID=?"
     prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
     ibm_db.bind_param(prep_stmt,1,product_name)
     ibm_db.bind_param(prep_stmt,2,category)
     ibm_db.bind_param(prep_stmt,3,description)
     ibm_db.bind_param(prep_stmt,4,stock)
     ibm_db.bind_param(prep_stmt,5,price)
     ibm_db.bind_param(prep_stmt,6,id)
     ibm_db.execute(prep_stmt)
     return {"message":'Updated'},200
  except Exception as e:
    return exception.handle_exception(e)


@product_bp.route("/<id>",methods=['DELETE'])
def delete_product(id):
  try:
     insert_sql="DELETE FROM PRODUCT WHERE ID=?"
     prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
     ibm_db.bind_param(prep_stmt,1,id)
     ibm_db.execute(prep_stmt)
     return {"message":'Deleted'},200
  except Exception as e:
    return exception.handle_exception(e)
