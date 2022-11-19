from flask import json

def handle_exception(e):
	exception_name = type(e).__name__
	exception_str = e.__str__()
	print(exception_name,exception_str.find('803'))
	status_code=500
	response={
		"status":"fail",
		"message":"Something went wrong"
	}
	if exception_name=='KeyError':
		status_code=400
		response["message"] = "Please fill all fields"

	
	if exception_name=='ValidationException':
		print(e.args)
		status_code=400
		response["message"] = "Please fill all fields"

	if exception_str.find('803') >=0:
		print('Db')
		status_code=400
		response["message"] = "Invalid value provided"

	if exception_name == 'DecodeError':
		print("token error")
		status_code=401
		response['message']='Token expired.Please login'


	return json.dumps(response), status_code, {'ContentType':'application/json'}

