import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from ..lib import exception


def sendemail():


    message = Mail(
        from_email='from_email@example.com',
        to_emails='to@example.com',
        subject='ORDER CONFIRMATION',
        html_content='<strong>Your order placed</strong>')
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        return exception.handle_exception(e)
