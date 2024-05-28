import "./styles.css";
import axios from "axios";
import { Modal } from "../../core";
import { urlTerms } from "../../../variables";
import { XIcon } from "@heroicons/react/solid";
import React from "react";

class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: [],
      modalOpen: false,
      showImage: true,
    };
  }

  async fetchAnnouncement() {
    axios
      .get(urlTerms)
      .then((res) => {
        this.setState({
          terms: res.data,
        });
      })
      .catch((err) => {
        console.error("Terms >> Fetch Error >> ", err);
      });
  }

  componentDidMount = () => {
    this.fetchAnnouncement();
    if (this.state.modalOpen) {
      document.body.style.overflow = "hidden";
    }
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
    if (this.state.modalOpen) {
      document.body.style.overflow = "auto";
    }
  };

  renderImageFullScreen = (image) => {
    return (
      <div class="container my-[15px]">
        <div class="row">
          <div class="col-sm-12">
            <table class="table table-bordered table-responsive text-center w-full">
              <thead>
                <tr>
                  <th rowspan="2">Transaction Date (T)</th>
                  <th colspan="2">Settlement Date</th>
                  <th rowspan="2">Remarks</th>
                </tr>
                <tr>
                  <th>T+3</th>
                  <th>T+2</th>
                </tr>
              </thead>
              <tbody id="rows">
                <tr>
                  <td>Wednesday, August 23, 2023</td>
                  <td colspan="2" rowSpan="2">
                    August 29, 2023
                  </td>
                  <td>Last Trade under T+3 settlement</td>
                </tr>
                <tr>
                  <td>Thursday, August 24, 2023</td>
                  <td>First trade under T+2 settlement</td>
                </tr>
                <tr>
                  <td>Friday, August 25, 2023</td>
                  <td></td>
                  <td>August 30, 2023</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <b>
                      <i>
                        <b>Monday, August 28, 2023</b>
                      </i>
                    </b>
                  </td>
                  <td colSpan="2">
                    <i>
                      <b>REGULAR HOLIDAY</b>
                    </i>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tuesday, August 29, 2023</td>
                  <td></td>
                  <td>August 31, 2023</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { terms, modalOpen } = this.state;

    return (
      <div>
        <div className="announcement-modal">
          <Modal className={modalOpen ? "block" : "hidden"}>
            <div className="modal-header relative border-b border-slate-400 pb-5 text-left">
              <div className="announcement-title font-bold">{terms.title}</div>
              <div className="announcement-subtitle">{terms.subtitle}</div>
              <span
                onClick={this.closeModal}
                className="hover:bg-gray-300 rounded-md h-[20px] w-[20px] absolute top-1 right-0"
              >
                <XIcon className="h-[20px] w-[20px] hidden sm:block text-gray-600" />
              </span>
            </div>
            <div className="modal-body pt-5 pb-5 sm:pb-0 text-left">
              <div className="infoText px-2 max-h-[370px] sm:max-h-[450px]">
                <div
                  className="announcement-contents"
                  dangerouslySetInnerHTML={{ __html: terms.contents }}
                ></div>
                {this.renderImageFullScreen()}
                <div
                  className="announcement-footer"
                  dangerouslySetInnerHTML={{ __html: terms.footer }}
                ></div>
                <div className="company-name font-bold mt-[20px]">VENTURE SECURITIES, INC.</div>
              </div>
            </div>
            <div className="close-box sm:hidden border-t border-slate-400 pt-5">
              <button
                onClick={this.closeModal}
                className="close-btn float-right text-sm text-white font-semibold h-[40px] w-[150px] rounded-3xl text-white border-1 border-white hover:text-black hover:bg-white hover:border-1 hover:border-black transition duration-300 ease-in uppercase rounded-[15px] mx-auto"
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Announcement;
