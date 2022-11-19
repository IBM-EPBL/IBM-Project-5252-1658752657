
import jwt
from . import validation_error

def check_auth(request):
  token = request.headers['Authorization']
  if (not token):
    return validation_error.throw_validation("Please login",401)
  decoded = jwt.decode(token,"secret",algorithms=["HS256"])
  return decoded['id']