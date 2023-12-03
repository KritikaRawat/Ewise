import React, { useState } from "react";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/bargain.css";
export default function Contact() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is E-WISE, and how does it work?",
      answer:
        "E-WISE is a platform dedicated to promoting responsible disposal of electronic waste (e-waste). When users log in, they complete a questionnaire about their electronic products. Based on their answers, the platform determines if the product is suitable for recycling or repair. If it's recyclable, users can access a marketplace to auction their product to nearby recycling facilities. Once a facility agrees on a price, users can submit their items and receive payment, along with credit points for future use, such as redeeming government policies.",
    },
    {
      question:
        "How do I know if my electronic product is suitable for recycling or repair?",
      answer:
        "Once you enter your product to the input box of EWise, we direct you to an AI based questionnaire. This questionnaire helps you to find whether the product is recyclable or repairable.",
    },
    {
      question:
        "What benefits do I get from recycling my e-waste through E-WISE?",
      answer:
        "Recycling e-waste through E-WISE benefits by conserving resources, reducing environmental impact, and saving energy, while also offering potential financial incentives and contributing to a sustainable future.",
    },
    {
      question: "How can recycling facilities benefit from E-WISE?",
      answer:
        "Recycling facilities on E-WISE can improve their sustainability efforts, report extracted metals to earn trust and credibility, attract a broader customer base through the platform, and establish long-term growth opportunities while contributing to responsible e-waste management.",
    },
    {
      question:
        "How can I stay informed about e-waste and recycling practices?",
      answer:
        "You can stay informed about e-waste and recycling practices through our platform's blogs and educational pop-ups. We regularly publish informative articles and content that cover various aspects of e-waste management, recycling techniques, and sustainable practices. Additionally, our pop-up notifications provide timely updates and insights on related topics, ensuring you have access to the latest information and guidelines for responsible e-waste disposal and recycling.",
    },
    {
      question:
        "Is E-WISE available worldwide, or is it limited to specific regions?",
      answer:
        "E-WISE aims to expand globally but may initially be available in specific regions. Our goal is to gradually extend our services to reach a broader international audience, addressing e-waste concerns wherever possible while complying with local regulations and sustainability initiatives.",
    },
  ]);

  const toggleAnswer = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isExpanded = !updatedFaqs[index].isExpanded;
    setFaqs(updatedFaqs);
  };
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="mt-5">
        <h1 style = {{color: "black", marginLeft: "20px"}}>CONTACT US</h1>
      </div>
      <div style={{ marginLeft: 375 }}>
        <div
          style={{
            backgroundColor: "#323232",
            width: 450,
            borderRadius: 20,
            height: 40,
            margin: 40,
          }}
        >
          <p style={{ fontSize: "19px", padding: 6 }}>
            Contact Information - 98XXXXXXXX
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#323232",
            width: 450,
            borderRadius: 20,
            height: 40,
            margin: 40,
          }}
        >
          <p style={{ fontSize: "18px", padding: 6 }}>
            Email ID - ewise.help@gmail.com
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#323232",
            width: 450,
            borderRadius: 20,
            height: 40,
            margin: 40,
          }}
        >
          <p style={{ fontSize: "18px", padding: 6 }}>
            Address - XX B, ABC Road, Delhi
          </p>
        </div>
      </div>
      <div>
        <div className="mt-5">
          <h1 style = {{color: "black"}}>FAQ</h1>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" style={{ marginLeft: 300 }} key={index}>
              <div
                className="faq-question"
                style={{
                  backgroundColor: "#323232",
                  width: 600,
                  borderRadius: 20,
                  height: 35,
                  margin: 40,
                  paddingTop: 5,
                }}
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </div>
              <div style={{ marginRight: 250 }}>
                {faq.isExpanded && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}