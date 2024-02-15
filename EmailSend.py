import smtplib
import ssl
from email.message import EmailMessage
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

email_sender = 'ewise.one.stop.solution@gmail.com'
email_password = 'njox yqxg upwf byky'
class Name(Resource):
    def post(self):
        data = request.get_json()
        name = data.get("name")
        type = data.get("type")  # Add this line to get the "type" input

        # Your code logic here

        if type == "newsletter":
            subject = 'Newsletter Subscription Confirmation'
            body = """
            Dear {name},
            
            Thank you for subscribing to our newsletter! You will now receive regular updates and exclusive content.
            
            Best Regards,
            Team Newsletter
            """
        elif type == "none":
            subject = 'No Action Required'
            body = """
            Dear {name},
            
            This is to inform you that no action is required at the moment.
            
            Best Regards,
            Team
            """
        elif type == "pickup":
            subject = 'Device Pickup Confirmation'
            body = """
            Dear {name},
            
            We are pleased to inform you that your device pickup has been scheduled. Our representative will contact you shortly to finalize the details.
            
            Best Regards,
            Team Pickup
            """
        else:
            return {"error": "Invalid type parameter"}, 400

        em = EmailMessage()
        em['From'] = email_sender
        em['To'] = name
        em['Subject'] = subject
        em.set_content(body.format(name=name))

        # Add SSL (layer of security)
        context = ssl.create_default_context()
        try:
            # Log in and send the email
            with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
                smtp.login(email_sender, email_password)
                smtp.sendmail(email_sender, name, em.as_string())

            return {"status": "success", "message": "Email sent successfully!"}
        except Exception as e:
            return {"error": "Missing name parameter", "message": str(e)}, 400
        if not name:
            return {"error": "Missing name parameter"}, 400
        return {"name": name, "type": type}

api.add_resource(Name, "/name")

if __name__ == "__main__":
    app.run(debug=True, port=5001)



# http://localhost:5000/name
# {
#   "name": "rupalbohra4@gmail.com"
# }
    # 10.12.45.145
    # http://10.12.45.145:5000/name