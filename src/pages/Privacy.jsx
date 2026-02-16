import React from "react";

function Privacy() {
  return (
    <div className="privacy-page">

      {/* HERO */}
      <section className="privacy-hero text-center text-white d-flex align-items-center">
        <div className="container">
          <p className="text-uppercase small fw-semibold text-gold">
            Legal
          </p>
          <h1 className="display-5 fw-bold">Privacy Policy</h1>
          <p className="lead mt-3">
            How 9x Investments collects, uses, and protects personal information.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="privacy-content py-5">
        <div className="container">

          {/* 1. Overview */}
          <div className="privacy-section">
            <h4>1. Overview</h4>
            <p>
              This Privacy Policy explains how 9x Investments collects, uses, 
              and protects personal information when you visit our website 
              or contact us regarding investment opportunities, partnerships, 
              or general inquiries.
            </p>
            <p>
              By using this website, you agree to the terms outlined in this policy.
            </p>
          </div>

          {/* 2. Information We May Collect */}
          <div className="privacy-section">
            <h4>2. Information We May Collect</h4>
            <ul>
              <li>
                <strong>Contact Details:</strong> Name, email address, phone number 
                provided through contact forms or direct communication.
              </li>
              <li>
                <strong>Business Information:</strong> Information shared in relation 
                to investment proposals, partnership discussions, or strategic inquiries.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, device 
                information, and usage data collected through analytics tools.
              </li>
            </ul>
          </div>

          {/* 3. How We Use Your Information */}
          <div className="privacy-section">
            <h4>3. How We Use Your Information</h4>
            <ul>
              <li>Respond to inquiries and communication requests.</li>
              <li>Evaluate potential investment and partnership opportunities.</li>
              <li>Improve our website performance and services through analytics.</li>
              <li>Maintain business records and operational compliance.</li>
            </ul>
          </div>

          {/* 4. Sharing of Information */}
          <div className="privacy-section">
            <h4>4. Sharing of Information</h4>
            <p>
              9x Investments does not sell or trade personal data.
            </p>
            <p>
              Information may be shared only with trusted service providers 
              assisting in website operations or when required by applicable law.
            </p>
          </div>

          {/* 5. Data Security */}
          <div className="privacy-section">
            <h4>5. Data Security</h4>
            <p>
              We implement reasonable administrative and technical measures 
              to safeguard personal data. However, no method of electronic 
              transmission or storage is 100% secure.
            </p>
          </div>

          {/* 6. Your Rights */}
          <div className="privacy-section">
            <h4>6. Your Rights</h4>
            <p>
              Depending on your jurisdiction, you may have the right to 
              access, correct, or request deletion of your personal data.
            </p>
            <p>
              To exercise these rights, please contact us via our Contact page.
            </p>
          </div>

          {/* 7. Changes to Policy */}
          <div className="privacy-section">
            <h4>7. Changes to This Policy</h4>
            <p>
              We may update this Privacy Policy periodically. Any changes 
              will be reflected on this page with a revised effective date.
            </p>
            <p className="text-muted">
              Effective Date: January 2026
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Privacy;
