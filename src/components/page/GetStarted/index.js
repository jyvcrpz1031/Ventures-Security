import React from "react";
import "./styles.css";

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      individualJoint: [
        {
          description: "a. Customer Account Information Form (CAIF)",
          link: "/individual/a_CAIF-Front.pdf",
          filename: "Customer Account Information Form (CAIF).pdf"
        },
        {
          description: "b. Trading Agreement (Terms and Conditions)",
          link: "/individual/b_Trading-Agreement.pdf",
          filename: "Trading Agreement (Terms and Conditions).pdf"
        },
        {
          description: "c. Two (2) Specimen Signature Cards",
          link: "/individual/c_Signature-Cards.pdf",
          filename: "Two (2) Specimen Signature Cards.pdf"
        },
        {
          description: "d. Client Consent Form (Data Privacy Act)",
          link: "/individual/d_Client-Consent-Form-Data-Privacy.pdf",
          filename: "Client Consent Form (Data Privacy Act).pdf"
        },
        {
          description: "e. Foreign Account Tax Compliance Act (FATCA) Disclosures (For US Citizen Only)",
          link: "/individual/e_FATCA.pdf",
          filename: "Foreign Account Tax Compliance Act (FATCA) Disclosures (For US Citizen Only).pdf"
        },
      ],
      corporate: [
        {
          description: "a. Corporate Account Information Form (CAIF)",
          link: "/corporate/a_CAIF.pdf",
          filename: "Corporate Account Information Form (CAIF).pdf"
        },
        {
          description: "b. Trading Agreement (Terms and Conditions)",
          link: "/corporate/b_Trading-Agreement.pdf",
          filename: "Trading Agreement (Terms and Conditions).pdf"
        },
        {
          description: "c. Two (2) Specimen Signature Cards verified by the Corporate Secretary",
          link: "/corporate/c_Signature-Cards.pdf",
          filename: "Two (2) Specimen Signature Cards verified by the Corporate Secretary.pdf"
        },
        {
          description: "d. Client Consent Form (Data Privacy Act)",
          link: "/corporate/d_Client-Consent-Form-Data-Privacy.pdf",
          filename: "Client Consent Form (Data Privacy Act).pdf"
        },
        {
          description: "e. Corporate Sworn Statement as to Existence & Non Existence of Beneficial Owner",
          link: "/corporate/e_CSSE-NEBO.pdf",
          filename: "Corporate Sworn Statement as to Existence & Non Existence of Beneficial Owner.pdf"
        },
      ],
    };
  }

  componentDidMount = () => {
   };

  render(props, state) {
    return (
      <div className="get-started relative">
        <img alt="bg.jpg" src={`${process.env.PUBLIC_URL}${this.props.bg}`} className="w-full h-full object-cover absolute top-0 z-[-2]"/>
        <h1 data-aos="fade-down" data-aos-once="true" className="get-started-header">Get Started</h1>
        <hr data-aos="fade-down" data-aos-once="true" className='w-[50px] m-auto mt-3 mb-3 bg-white border-0 h-[1px]' />
        {/* Individual Joint */}
        <div className="get-started-container">
          <div data-aos="fade-right" data-aos-once="true" className="bg-white individual-joint-container">
            <h1 className="individual-joint-header">Individual Joint</h1>
            <p className="individual-joint-subheader">
              Open an Individual or Joint Account
            </p>

            <p className="numbered-item">
              1. Download, print, fill out and sign the following:
            </p>
            {this.state?.individualJoint?.map((data, i) => {
              return (
                <div key={i} className="individual-download-container">
                  <a
                    className="individual-download"
                    href={`${process.env.PUBLIC_URL}${data?.link}`}
                    download={data?.filename}
                  >
                    {data?.description}
                  </a>
                </div>
              );
            })}

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
          <div data-aos="fade-left" data-aos-once="true" className="bg-white corporate-container">
            <h1 className="corporate-header">Corporate</h1>
            <p className="corporate-subheader">Open a Corporate Account</p>

            <p className="numbered-item">
              1. Download, print, fill out and sign the following:
            </p>

            {this.state?.corporate?.map((data, i) => {
              return (
                <div key={i} className="individual-download-container">
                  <a
                    className="individual-download"
                    href={`${process.env.PUBLIC_URL}${data?.link}`}
                    download={data?.filename}
                  >
                    {data?.description}
                  </a>
                </div>
              );
            })}

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
