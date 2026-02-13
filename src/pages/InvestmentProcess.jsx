import { Container, Row, Col, Card } from "react-bootstrap";

export default function InvestmentProcess() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="process-hero py-5 text-center text-light">
        <Container>
          <p className="section-eyebrow text-uppercase text-warning">
            Investment Process
          </p>
          <h1 className="section-title">
            How we evaluate and invest in opportunities
          </h1>
          <p className="section-subtitle">
            A thorough, efficient, and transparent process built on close
            collaboration with founders and operators.
          </p>
        </Container>
      </section>

      {/* ================= STEPS ================= */}
      <section className="process-steps py-5">
        <Container>
          <Row className="g-4">
            {[
              {
                number: "01",
                title: "Initial Inquiry",
                content: [
                  "Initial contact via website, email, or phone.",
                  "Intro conversation about concept, business model, and partnership expectations.",
                  "Discuss vision, operations, growth plans, and potential fit.",
                ],
              },
              {
                number: "02",
                title: "Preliminary Review",
                content: [
                  "Request financials, operations overview, market positioning, and growth plans.",
                  "Initial market & competition research.",
                  "Alignment check with investment criteria and quick feedback.",
                ],
              },
              {
                number: "03",
                title: "Due Diligence",
                content: [
                  "Financial analysis, operational review, market research, legal review.",
                  "Site/venue visits where applicable.",
                  "Close collaboration for documentation & information gathering.",
                ],
              },
              {
                number: "04",
                title: "Investment Proposal",
                content: [
                  "Develop tailored proposal (terms, structure, support plan).",
                  "Present rationale & expectations.",
                  "Collaborative discussion and negotiation.",
                ],
              },
              {
                number: "05",
                title: "Partnership & Execution",
                content: [
                  "Finalize legal documentation and close investment.",
                  "Execute strategic plan.",
                  "Implement improvements & support growth initiatives.",
                ],
              },
              {
                number: "06",
                title: "Ongoing Support",
                content: [
                  "Regular communication and operational support.",
                  "Strategy, branding & growth guidance.",
                  "Periodic reviews and performance optimization.",
                ],
              },
            ].map((step, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="process-card h-100">
                  <Card.Body>
                    <div className="process-number">{step.number}</div>
                    <Card.Title className="process-title">
                      {step.title}
                    </Card.Title>
                    <ul className="process-list">
                      {step.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="process-timeline py-5 text-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <p className="section-eyebrow text-uppercase text-warning">
                Timeline & Expectations
              </p>
              <h2 className="section-title">What to expect</h2>
              <p className="section-subtitle">
                We balance efficiency with thoroughness and strategic alignment.
              </p>
            </Col>
          </Row>

          <Row className="g-5">
            <Col lg={6}>
              <div className="timeline-box">
                <h5>Typical Timeline</h5>
                <ul>
                  <li>Initial Inquiry: 1–2 weeks</li>
                  <li>Preliminary Review: 2–4 weeks</li>
                  <li>Due Diligence: 4–8 weeks</li>
                  <li>Investment Proposal: 1–2 weeks</li>
                  <li>Closing: 2–4 weeks</li>
                  <li><strong>Total: ~10–20 weeks</strong></li>
                </ul>
              </div>
            </Col>

            <Col lg={6}>
              <div className="timeline-box">
                <h5>What We Need</h5>
                <ul>
                  <li>Business overview & concept description</li>
                  <li>Financial statements & projections</li>
                  <li>Operational processes & structure</li>
                  <li>Market analysis & competitive positioning</li>
                  <li>Management team background</li>
                  <li>Growth plans & capital requirements</li>
                  <li>Legal structure & documentation</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
