import React from "react";

function Terms() {
  return (
    <div className="terms-page">

      {/* HERO */}
      <section className="terms-hero text-center text-white d-flex align-items-center">
        <div className="container">
          <p className="text-uppercase small fw-semibold text-gold">
            Legal
          </p>
          <h1 className="display-5 fw-bold">Terms and Conditions</h1>
          <p className="lead mt-3">
            Please read these terms and conditions carefully before using the 9x Investments website.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="terms-content py-5">
        <div className="container">

          {/* 1. Introduction */}
          <div className="terms-section">
            <h4>1. Introduction</h4>
            <p>
              These Terms and Conditions govern your use of the 9x Investments website.
              By accessing or using this website, you agree to comply with and be bound
              by these Terms. If you do not agree, you should not use this website.
            </p>
          </div>

          {/* 2. No Investment Advice */}
          <div className="terms-section">
            <h4>2. No Investment Advice</h4>
            <p>
              The content on this website is provided for informational purposes only.
              It does not constitute investment, financial, legal, or professional advice.
            </p>
            <p>
              Users should seek independent professional advice before making any
              investment or business decisions.
            </p>
          </div>

          {/* 3. Use of the Website */}
          <div className="terms-section">
            <h4>3. Use of the Website</h4>
            <p>
              You agree to use this website only for lawful purposes. You must not:
            </p>
            <ul>
              <li>Infringe upon the rights of others.</li>
              <li>Restrict or inhibit any other user’s access or enjoyment of the website.</li>
              <li>Attempt to damage, disrupt, or interfere with website functionality.</li>
            </ul>
          </div>

          {/* 4. Intellectual Property */}
          <div className="terms-section">
            <h4>4. Intellectual Property</h4>
            <p>
              All content, trademarks, logos, designs, text, graphics, and materials
              displayed on this website are the property of 9x Investments or its licensors.
            </p>
            <p>
              No material may be reproduced, distributed, modified, or used to create
              derivative works without prior written consent.
            </p>
          </div>

          {/* 5. Third-Party Websites */}
          <div className="terms-section">
            <h4>5. Third-Party Websites</h4>
            <p>
              This website may contain links to third-party websites, including Slay DIFC
              and Mantis Dubai.
            </p>
            <p>
              9x Investments is not responsible for the content, privacy practices,
              or security of third-party websites and assumes no liability for
              any damages arising from their use.
            </p>
          </div>

          {/* 6. Limitation of Liability */}
          <div className="terms-section">
            <h4>6. Limitation of Liability</h4>
            <p>
              9x Investments shall not be liable for any direct, indirect,
              incidental, consequential, special, or punitive damages arising
              from the use of this website or reliance on its content.
            </p>
          </div>

          {/* 7. Changes to These Terms */}
          <div className="terms-section">
            <h4>7. Changes to These Terms</h4>
            <p>
              We may update these Terms and Conditions from time to time.
              Any changes will be posted on this page with a revised effective date.
            </p>
            <p>
              Continued use of the website following updates constitutes acceptance
              of the revised Terms.
            </p>
            <p className="text-muted">
              Effective Date: January 2026
            </p>
          </div>

          {/* 8. Contact */}
          <div className="terms-section">
            <h4>8. Contact</h4>
            <p>
              If you have any questions regarding these Terms and Conditions,
              please contact us via the Contact page.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Terms;
