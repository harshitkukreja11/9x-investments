import React from "react";

export default function Contact() {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This form is for illustrative purposes only.");
  };

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero text-center">
        <p className="contact-eyebrow">Contact Us</p>
        <h1 className="contact-title">
          Let’s build something exceptional together
        </h1>
        <p className="contact-subtitle">
          Whether you’re exploring an investment opportunity,
          partnership, or simply have a question — we’re here to help.
        </p>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container py-5">
        <div className="row g-5">

         {/* LEFT: CONTACT INFO */}
<div className="col-lg-6">

  <div className="contact-card">
    <h4>
      <i className="bi bi-telephone-fill contact-icon"></i>
      Phone
    </h4>
    <p className="text-muted mb-1">UAE Office</p>
    <p>
      <i className="bi bi-telephone contact-sub-icon"></i>
      +971 4529 8757
    </p>
    <p>
      <i className="bi bi-telephone contact-sub-icon"></i>
      +971 52228 0076
    </p>
  </div>

  <div className="contact-card">
    <h4>
      <i className="bi bi-geo-alt-fill contact-icon"></i>
      Office
    </h4>
    <p>
      <i className="bi bi-building contact-sub-icon"></i>
      2020 Building - 108 <br />
      Al Quoz - Al Quoz 3 <br />
      Dubai, United Arab Emirates
    </p>
  </div>

  <div className="contact-card">
    <h4>
      <i className="bi bi-clock-fill contact-icon"></i>
      Business Hours
    </h4>
    <p>
      <i className="bi bi-calendar-week contact-sub-icon"></i>
      Sunday–Thursday: 9:00 AM – 6:00 PM GST
    </p>
    <p>
      <i className="bi bi-calendar-x contact-sub-icon"></i>
      Friday–Saturday: By appointment
    </p>
  </div>

</div>

          {/* RIGHT: FORM */}
          <div className="col-lg-6">
            <div className="contact-form-card">
              <h4>Send us a message</h4>
              <p className="text-muted">
                We aim to reply within 24 hours. For urgent matters,
                please call us directly.
              </p>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control custom-input"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject *</label>
                  <select className="form-select custom-input" required>
                    <option value="">Select inquiry type</option>
                    <option>Investment Opportunity</option>
                    <option>Partnership Inquiry</option>
                    <option>Media Inquiry</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Message *</label>
                  <textarea
                    rows="4"
                    className="form-control custom-input"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn contact-btn w-100">
                  Send Message
                </button>

                <p className="form-note mt-3">
                  This form is for illustrative purposes only.
                  For time-sensitive enquiries, please call us directly.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* ================= HOW WE CAN HELP ================= */}
      <section className="contact-help text-center">
        <p className="contact-eyebrow">How We Can Help</p>
        <h2>What are you looking for?</h2>
        <p className="contact-subtitle">
          We handle a range of investment, partnership,
          and general inquiries.
        </p>

        <div className="container mt-5">
          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="help-card">
                <div className="help-icon">💼</div>
                <h5>Investment Inquiries</h5>
                <p>Explore funding and growth opportunities.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="help-card">
                <div className="help-icon">🤝</div>
                <h5>Partnership Opportunities</h5>
                <p>Strategic collaborations and ventures.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="help-card">
                <div className="help-icon">📰</div>
                <h5>Media & Press</h5>
                <p>Press inquiries and media coverage.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="help-card">
                <div className="help-icon">💬</div>
                <h5>General Inquiries</h5>
                <p>Questions about our company and portfolio.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
