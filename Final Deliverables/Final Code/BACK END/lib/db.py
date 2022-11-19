import ibm_db

conn = None

def get_db():
	global conn
	print(conn)
	if conn == None:
		conn = ibm_db.connect("DATABASE=bludb;HOSTNAME=9938aec0-8105-433e-8bf9-0fbb7e483086.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud;PORT=32459;SECURITY=SSL;SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=yvp21124;PWD=jNDAkHSrZNopa2oe",'','')
	return conn






