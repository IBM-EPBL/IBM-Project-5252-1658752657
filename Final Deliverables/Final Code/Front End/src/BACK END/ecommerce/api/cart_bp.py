
from flask import Blueprint,request
import ibm_db
from ..lib import validation_error
from ..lib.auth import check_auth
from ..lib import exception
from ..lib import db


cart_bp = Blueprint("cart",__name__)


@cart_bp.route("/",methods=['POST'])
def add_cart():
  try:
    user_id =check_auth(request)
    data=request.get_json()
    product=data['product']
    select_sql = "SELECT * FROM PRODUCT WHERE ID=?"
    prepare_select =ibm_db.prepare(db.get_db(),select_sql)
    ibm_db.bind_param(prepare_select,1,product)
    ibm_db.execute(prepare_select)
    is_product = ibm_db.fetch_assoc(prepare_select)
    
    print(is_product)

    if not is_product:
      return validation_error.throw_validation("No Product found",404)
    
    if(is_product['STOCK']<=0):
      return validation_error.throw_validation("No Stock found",404)

    print("Hey")
    insert_sql="INSERT INTO CART(user,product) VALUES(?,?)"
    prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
    ibm_db.bind_param(prep_stmt,1,user_id)
    ibm_db.bind_param(prep_stmt,2,product)
    ibm_db.execute(prep_stmt)

    print("heyy")

    update_sql="UPDATE PRODUCT SET stock=? WHERE ID=?"
    update_stmt = ibm_db.prepare(db.get_db(), update_sql)
    ibm_db.bind_param(update_stmt,1,is_product['STOCK']-1 or 0)
    ibm_db.bind_param(update_stmt,2,product)
    ibm_db.execute(update_stmt)


    print("sdd")
    return {"message":'Created'},201
  except Exception as e:
    return exception.handle_exception(e)

@cart_bp.route("/",methods=['DELETE'])
def delete_user_cart():
  try:
    user_id =check_auth(request)
    insert_sql="DELETE FROM CART WHERE USER=?"
    prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
    ibm_db.bind_param(prep_stmt,1,user_id)
   
    ibm_db.execute(prep_stmt)
    return {"message":'Deleted'},201
  except Exception as e:
    return exception.handle_exception(e)



@cart_bp.route("/",methods=['GET'])
def get_cart():
  try:
    user_id =check_auth(request)
    insert_sql="SELECT  PRODUCT.ID AS product_id,cart_id, category,category_name,product_name,description,price,stock,image,brand,specificity,CART.user as user FROM CART JOIN PRODUCT ON CART.PRODUCT=PRODUCT.ID JOIN CATEGORY ON PRODUCT.CATEGORY = CATEGORY.ID WHERE CART.USER=?"
    prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
    ibm_db.bind_param(prep_stmt,1,user_id)
   
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


@cart_bp.route("/<product>/<id>",methods=['DELETE'])
def delete_cart(product,id):
  try:
    user_id =check_auth(request)
    print(product,id,user_id)

    select_sql = "SELECT * FROM PRODUCT WHERE ID=?"
    prepare_select =ibm_db.prepare(db.get_db(),select_sql)
    ibm_db.bind_param(prepare_select,1,product)
    ibm_db.execute(prepare_select)
    is_product = ibm_db.fetch_assoc(prepare_select)
    
    print(is_product)

    if not is_product:
      return validation_error.throw_validation("No Product found",404)

    print("ff")
    insert_sql="DELETE FROM CART WHERE CART_ID=? AND user=?"
    prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
    ibm_db.bind_param(prep_stmt,1,id)
    ibm_db.bind_param(prep_stmt,2,user_id)
    ibm_db.execute(prep_stmt)
    print("aa")
    update_sql="UPDATE PRODUCT SET stock=? WHERE ID=?"
    update_stmt = ibm_db.prepare(db.get_db(), update_sql)
    ibm_db.bind_param(update_stmt,1,is_product['STOCK']+1)
    ibm_db.bind_param(update_stmt,2,product)
    ibm_db.execute(update_stmt)
    return {"message":'Deleted'},200
  except Exception as e:
    return exception.handle_exception(e)

