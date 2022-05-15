import React from "react";
import "./styles.css";

class FAQPage extends React.Component {
  state = {
    questions: [
      {
        question: "How are you?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        question: "How are you?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        question: "How are you?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        question: "How are you?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },

    ],
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
            {this.state.questions?.map(({ question, answer }, i) => {
              return (
                <div key={i} className="question-item">
                  <h1 className="question-item-header">{question}</h1>
                  <span className="question-item-span">{answer}</span>
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
