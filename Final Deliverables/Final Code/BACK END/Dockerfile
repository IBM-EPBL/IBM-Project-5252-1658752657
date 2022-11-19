FROM python:3.9.10
WORKDIR /app
RUN pip install flask PyJWT passlib ibm_db flask_cors gunicorn
COPY . .
EXPOSE 5000
CMD ["gunicorn","--bind",".0.0.0.0:5000","app:app"]
