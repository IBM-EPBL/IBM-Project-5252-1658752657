from flask import Blueprint,jsonify,g,request
import ibm_db
from passlib.hash import sha256_crypt
import jwt

from ..lib import validation_error
from ..lib import exception
from ..lib import db

auth_bp = Blueprint("auth",__name__)

     	

@auth_bp.route("/",methods=["GET"])
def check():
	print(g.get("db"))
	return jsonify({"msg":"hi"})

@auth_bp.route('/register',methods=['POST'])
def reg():
	try:
		data = request.get_json()
		name=data['name']
		email=data['email']
		password=data['password']
		mobile_no=data['mobileNo']
		print(email,password,name,mobile_no)
		insert_sql="INSERT INTO USER(name,email,password,role,mobilenumber) VALUES(?,?,?,?,?)"
		prep_stmt = ibm_db.prepare(db.get_db(), insert_sql)
		ibm_db.bind_param(prep_stmt,1,name)
		ibm_db.bind_param(prep_stmt,2,email)
		ibm_db.bind_param(prep_stmt,3,sha256_crypt.encrypt(password))
		ibm_db.bind_param(prep_stmt,4,"user")
		ibm_db.bind_param(prep_stmt,5,mobile_no)
		ibm_db.execute(prep_stmt)
		return {"message":'Created'},201
   
	except Exception as e:
			return exception.handle_exception(e)


@auth_bp.route('/me',methods=['GET'])
def getMe():
	try:
		token = request.headers['Authorization']
		if (not token):
			return validation_error.throw_validation("Please login",401)
		decoded = jwt.decode(token,"secret",algorithms=["HS256"])
		select_sql = "SELECT * FROM USER WHERE ID=?"
		prep_stmt = ibm_db.prepare(db.get_db(), select_sql)
		ibm_db.bind_param(prep_stmt,1,decoded['id'])
		ibm_db.execute(prep_stmt)
		isUser=ibm_db.fetch_assoc(prep_stmt)
		return isUser
	except Exception as e:
			return exception.handle_exception(e)


@auth_bp.route('/login',methods=['POST'])
def auth_log():
	try:
		data = request.get_json()
		print(data)
		email=data['email']
		password=data['password']
		select_sql = "SELECT * FROM USER WHERE EMAIL=?"
		prep_stmt = ibm_db.prepare(db.get_db(), select_sql)
		ibm_db.bind_param(prep_stmt,1,email)
		ibm_db.execute(prep_stmt)
		isUser=ibm_db.fetch_assoc(prep_stmt)
		print(isUser)
		if not isUser:
			return validation_error.throw_validation("Invalid Credentials",400)
		if not sha256_crypt.verify(password,isUser['PASSWORD']):
			return validation_error.throw_validation("Invalid Credentials",400)
		encoded_jwt = jwt.encode({"id":isUser['ID'],"role":isUser['ROLE']},"secret",algorithm="HS256")
		isUser["token"] = encoded_jwt
		return isUser
	except Exception as e:
			return exception.handle_exception(e)
