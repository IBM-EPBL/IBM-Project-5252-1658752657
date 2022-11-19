from flask import json

def throw_validation(msg,code):
  return json.dumps({"status":"fail","message":msg}),code,{'ContentType':'application/json'}