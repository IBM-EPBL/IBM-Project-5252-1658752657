FROM python:3.10.5
WORKDIR /app
RUN pip install flask PyJWT passlib ibm_db flask_cors
COPY . .
EXPOSE 5000
CMD ["python", "./app.py"]

