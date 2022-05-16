import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import "./styles.css";

class FAQPage extends React.Component {
  state = {
    questions: [
      {
        question: "How do I open an account?",
        answer:
          "Select whether you want to open an Individual/Joint Account or Corporate Account.",
        isOpen: false,
      },
      {
        question: "What if I am not a Filipino Citizen or Filipino Resident?",
        answer:
          "You can still open an account provided you have a Social Security Number (SSS), Taxpayer's Identification Number (TIN), Passport Number and Alien Certificate of Registration/Business Certificate/Work Permit (if Resident Foreigner)",
        isOpen: false,
      },
      {
        question: "Can there be more then two (2) people in a joint account?",
        answer:
          "Yes, you can have a joint account with your significant other or group of friends but subject to approval. Call us at our telephone number (632) 8848-6505 to inform your wish to have more than two (2) people in the joint account.",
        isOpen: false,
      },
      {
        question: "How will I know if the account is ready for trading",
        answer:
          "We will notify you through telephone regarding the approval of your application.",
        isOpen: false,
      },
      {
        question: "How do I fund my account?",
        answer:
          "You can make deposit to any account of Venture Securities, Inc. listed below <br /> Banco de Oro (BDO)	360 800 9180 <br/>  <br/> Union Bank (UBP) 00 001 011731 3  <br/> <br /> RCBC 0000 5109 39 <br /> *Note <br /> It is vital that you send us a copy of your deposit slip and/or remittance instructions indicating your name through our fax number 8848-6505 or emailing to info@venturesec.com. The speed at which your funds will be credited to your account will depend on the exact deposit method that you use.",
        isOpen: false,
      },
      {
        question: "I have a stock certificer, how will i be able to sell them?",
        answer:
          "Stock certificates can be lodged or deposited into your account as long as the name appearing on the stock certificate is the same with your Venture account name. You may submit the duly endorsed stock certificates to our office located at 8/F STI Holdings Center, 6764 Ayala Avenue, Makati City. The certificates will then be submitted to the Transfer Agent for clearing then passed on to the Philippine Depository & Trust Corp (PDTC) for custody, which can take between a week to several weeks depending on the speed of the clearing process of these two organizations and if there are no discrepancies with the requirements. The Transfer Agent may also request for original signature cards and IDs to be submitted for verification purposes (signature cards are available from Venture Securities, Inc.).",
        isOpen: false,
      },
      {
        question: "7.	How do I convert my shares to certificates?",
        answer:
          "We will notify you through telephone regarding the approval of your application. <br /> The process is called Upliftment. The request for conversion of shares to certificates shall follow the following procedures: <br /> <br /> a. Fill up a Request for Upliftment form. Secure and fill out a Specimen Signature Card from VSI’s office. Submit the accomplished and signed Request for Upliftment Form and Signature Card together with copies of your latest valid IDs. <br /> <br /> b. Pay the appropriate Upliftment Fee. Occasionally, the Stock Transfer Agent may require you to personally appear in their office. VSI will notify you once required. <br /> <br /> c. Processing may take one (1) to three (3) months depending on the Stock Transfer Agent. VSI will notify you once the Stock Certificates are available for release.",
        isOpen: false,
      },
    ],
    // isOpen: false,
    currentIndex: null,
  };

  handleOpenQuestion = (i) => {
    // eslint-disable-next-line no-self-compare
    console.log(1234, this.state.questions[i].isOpen);
    this.setState({
      questions: this.state.questions?.map((question, idx) => {
        if (idx === i) {
          return { ...question, isOpen: !question?.isOpen }
        } else {
          return question
        }
      })
    })
    // this.setState({ questions: this.state.questions[i].isOpen !== this.state.questions[i].isOpen });
  };

  render() {
    return (
      <div className="faq-container">
        <h1 className="text-3xl px-4 pt-4 font-semibold text-black">
          How can we help you?
        </h1>
        <hr className="w-[50px] m-auto mt-3 mb-3 bg-black border-0 h-[1px]" />
        <span>
          You can browse the topics below to find what specifically you are
          looking for.
        </span>

        {/* FAQ List */}
        <div className="faq-list">
          <h2 className="faq-list-header">Help Center</h2>

          <div className="question-list">
            {this.state?.questions?.map(({ question, answer, isOpen }, i) => {
              return (
                <div className="question-container">
                  <div
                    data-aos="fade-left"
                    data-aos-once="true"
                    key={i}
                    className="question-item-clickable"
                    onClick={() => this.handleOpenQuestion(i)}
                  >
                    <span className="p-2">
                      {isOpen ? (
                        <ChevronUpIcon className="h-[40px] w-[40px] text-black-800 opacity-1" />
                      ) : (
                        <ChevronDownIcon className="h-[40px] w-[40px] text-black-800 opacity-1" />
                      )}
                    </span>
                    <h1 className="question-item-header">{question}</h1>
                  </div>
                  {isOpen ? (
                    <div data-aos="fade-down" data-aos-once="true" key={i} className="question-item">
                      <span
                        dangerouslySetInnerHTML={{ __html: answer }}
                        className="question-item-span"
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FAQPage;
