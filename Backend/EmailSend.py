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
        subject = 'Your item has been Approved!!!'
        body = """
        
Dear Sir/Ma'am,

We hope this email finds you well. We are delighted to inform you that your electronic device has been accepted by the retailer at the price you confirmed. Shortly, the retailer will be reaching out to you to finalize the details of the transaction and arrange for the device's collection.

At E-Wise, our commitment is to make e-waste management a seamless and rewarding experience for individuals like you. By providing personalized assessments, connecting you with nearby recycling facilities, and offering valuable rewards, we aim to revolutionize the way electronic devices are handled while fostering a community dedicated to sustainability.

On behalf of the entire E-Wise team, we want to express our sincere gratitude for choosing us as your partner in responsible e-waste management. Your commitment to recycling and sustainable practices contributes significantly to our shared vision of a greener, more environmentally conscious future.

our support not only benefits you personally but also positively impacts the global effort to minimize electronic waste.

Once again, thank you for being a part of the E-Wise community. We appreciate your dedication to making every gadget count.

Best Regards,
Team E-Wise
        """

        em = EmailMessage()
        em['From'] = email_sender
        em['To'] = name
        em['Subject'] = subject
        em.set_content(body)

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
        # if not name:
        #     return {"error": "Missing name parameter"}, 400
        # return {"name": name}

api.add_resource(Name, "/name")

if __name__ == "__main__":
    app.run(debug=True, port=5001)



# http://localhost:5000/name
# {
#   "name": "rupalbohra4@gmail.com"
# }
    # 10.12.45.145
    # http://10.12.45.145:5000/name