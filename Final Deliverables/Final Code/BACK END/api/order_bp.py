
from flask import Blueprint,request
import ibm_db
from ..lib import exception
from ..lib import db,auth


order_bp = Blueprint("order",__name__)


@order_bp.route("/",methods=['POST'])
def add_order():
  try:
    user_id =auth.check_auth(request)
    data=request.get_json()
    products=data['products']
    insert_sql="SELECT ORDER_ID FROM FINAL TABLE (INSERT INTO ORDER(user) VALUES(?))"
    prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
    ibm_db.bind_param(prep_stmt,1,user_id)
    ibm_db.execute(prep_stmt)
    order = ibm_db.fetch_assoc(prep_stmt)
    print(order)

    for product in products:
      print(product)
      insert1_sql="INSERT INTO ORDERDETAIL(order,product) VALUES(?,?)"
      prep1_stmt = ibm_db.prepare(db.get_db(), insert1_sql)
      ibm_db.bind_param(prep1_stmt,1,order['ORDER_ID'])
      ibm_db.bind_param(prep1_stmt,2,product)
      ibm_db.execute(prep1_stmt)
    
    return {"message":'Created'},201
  except Exception as e:
    return exception.handle_exception(e)


@order_bp.route("/<id>",methods=['GET'])
def get_order(id):
  try:
    insert_sql="SELECT  PRODUCT.ID AS product_id, category,category_name,product_name,description,price,stock,image,brand,specificity,paid FROM ORDERDETAIL JOIN ORDER ON ORDERDETAIL.ORDER=ORDER.ORDER_ID JOIN PRODUCT ON ORDERDETAIL.PRODUCT=PRODUCT.ID JOIN CATEGORY ON PRODUCT.CATEGORY = CATEGORY.ID WHERE ORDER.USER=?"
    prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
    ibm_db.bind_param(prep_stmt,1,id)
    ibm_db.execute(prep_stmt)
    products=[]
    product=ibm_db.fetch_assoc(prep_stmt)
    while(product != False):
      products.append(product)
      product = ibm_db.fetch_assoc(prep_stmt)
    print(products)
    return products or [],200

  except Exception as e:
    return exception.handle_exception(e)


