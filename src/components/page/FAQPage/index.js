import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import "./styles.css";

class FAQPage extends React.Component {
  state = {
    questions: [],
    currentIndex: null,
  };

  componentDidMount = () => {
    this.setState({ questions: this.props.data?.questions });
  }

  handleOpenQuestion = (i) => {
    this.setState({
      questions: this.state.questions?.map((question, idx) => {
        if (idx === i) {
          return { ...question, isOpen: !question?.isOpen }
        } else {
          return question
        }
      })
    })
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
