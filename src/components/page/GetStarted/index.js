import React from "react";
import "./styles.css";

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  render(props) {
    return (
      <div className="get-started">
        <h1 className="get-started-header">Get Started</h1>
        {/* Individual Joint */}
        <div className="get-started-container">
          <div className="individual-joint-container">
            <h1 className="individual-joint-header">Individual Joint</h1>
            <p className="individual-joint-subheader">
              Open an Individual or Joint Account
            </p>

            <p className="numbered-item">
              1. Download, print, fill out and sign the following:
            </p>

            {/* Note */}
            <div className="note-container">
              <p>*Note:</p>
              <span className="note-desc">
                To help the government fight money laundering activities, the
                Anti-Money Laundering Act, as amended, requires all covered
                institutions to obtain, verify and record information that
                identifies each person who opens an account.
              </span>
              <span className="note-desc">
                What this means for you: When you open an account, we will ask
                for your name, address, date of birth, business, TIN, SSS or
                GSIS Nos. and other information that will allow us to identify
                you. We may also ask to see your driver’s license, passport or
                other competent evidence of identity bearing your photograph and
                signature.
              </span>
            </div>

            {/* Photocopy */}

            <p className="numbered-item">2. Photocopy requirements</p>

            <p className="numbered-item">
              3. Bring the requirements personally to our office at 8/F STI
              Holdings Center, 6764 Ayala Avenue, Makati City
            </p>
          </div>

          {/* Corporate */}
          <div className="corporate-container">
            <h1 className="corporate-header">Corporate</h1>
            <p className="corporate-subheader">Open a Corporate Account</p>

            <p className="numbered-item">
              1. Download, print, fill out and sign the following:
            </p>

            {/* Note */}
            <div className="note-container">
              <p>*Note:</p>
              <span className="note-desc">
                To help the government fight money laundering activities, the
                Anti-Money Laundering Act, as amended, requires all covered
                institutions to obtain, verify and record information that
                identifies each person who opens an account.
              </span>
              <span className="note-desc">
                What this means for you: When you open an account, we will ask
                for your name, address, date of birth, business, TIN, SSS or
                GSIS Nos. and other information that will allow us to identify
                you. We may also ask to see your driver’s license, passport or
                other competent evidence of identity bearing your photograph and
                signature.
              </span>
            </div>

            {/* Photocopy */}

            <p className="numbered-item">2. Prepare additional requirements</p>

            <p className="numbered-item">
              3. Bring the requirements personally to our office at 8/F STI
              Holdings Center, 6764 Ayala Avenue, Makati City
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
