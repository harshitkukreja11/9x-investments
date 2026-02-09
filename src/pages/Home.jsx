import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import SectionHeader from "../components/SectionHeader";
import PortfolioCard from "../components/PortfolioCard";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Lazy load hero
const HeroSlider = lazy(() => import("../components/HeroSlider"));

function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      {/* HERO */}
      <Suspense fallback={<div style={{ height: "80vh" }} />}>
        <HeroSlider />
      </Suspense>

      {/* QUOTE */}
      <section className="py-4 py-md-5 section-dark" id="home-quote">
        <Container className="text-center">
          <h4 className="fst-italic fs-5 fs-md-4 text-muted">
            Investing in experiences that define modern luxury
          </h4>
        </Container>
      </section>

      {/* PORTFOLIO */}
      <section className="py-4 py-md-5 section-dark" id="home-portfolio">
        <Container>
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Iconic hospitality and nightlife investments"
            subtitle="Carefully selected brands focused on design, guest experience, and operational excellence."
            center
          />

          <Row className="g-4">
            <Col md={6}>
              <PortfolioCard
                title="Slay DIFC"
                location="Burj Daman Building · DIFC"
                description="Premier bar and grill offering innovative cuisine, crafted cocktails, and a refined yet energetic atmosphere. Operating daily from 12:00 PM to 4:00 AM."
                link="https://www.slayreservation.com/"
                image="https://www.slayreservation.com/_next/image?url=%2Fimages%2Fmedia_slay%2FIMG-20241122-WA0007.webp&w=1920&q=75"
              />
            </Col>

            <Col md={6}>
              <PortfolioCard
                title="Mantis Dubai"
                location="Emirates Financial Towers · DIFC"
                description="High-energy nightclub blending modern electronic music with Bollywood-inspired aesthetics, VIP services, and curated DJ performances."
                link="https://www.mantisdubai.com"
                image="https://www.mantisdubai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclubof4.8e2bf9e0.webp&w=1920&q=75"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHY 9X */}
      <section className="py-4 py-md-5 section-dark" id="home-why-9x">
        <Container>
          <SectionHeader
            eyebrow="Why 9x Investments"
            title="Strategic focus, operational excellence, lasting impact"
            subtitle="Deep sector expertise combined with hands-on partnership."
            center
          />

          <Row className="g-4">
            {[
              {
                title: "Hospitality & Nightlife",
                text:
                  "Deep experience across restaurants, bars, and nightlife concepts with a focus on guest experience.",
              },
              {
                title: "Dubai · DIFC",
                text:
                  "Strong understanding of Dubai’s regulatory, cultural, and consumer landscape.",
              },
              {
                title: "Collaborative Approach",
                text:
                  "Hands-on partnerships with founders, operators, and creative teams.",
              },
            ].map((item, i) => (
              <Col md={4} key={i}>
                <Card className="h-100 text-center shadow-sm border-0 dark-card">
                  <Card.Body>
                    <Card.Title className="fw-semibold text-warning">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted mt-2">
                      {item.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* INVESTMENT APPROACH */}
      <section className="py-4 py-md-5 section-dark" id="home-investment-approach">
        <Container>
          <SectionHeader
            eyebrow="Investment Approach"
            title="How we evaluate and support opportunities"
            subtitle="A disciplined, partnership-driven process."
            center
          />

          <Row className="mt-4">
            <Col md={6}>
              <h5 className="fw-semibold">What We Look For</h5>
              <ul className="list-unstyled mt-3 text-muted">
                <li className="mb-2">• Distinct brand identity</li>
                <li className="mb-2">• Exceptional guest experience</li>
                <li className="mb-2">• Strong management teams</li>
                <li className="mb-2">• Scalable concepts</li>
                <li className="mb-2">• Market opportunity</li>
              </ul>
            </Col>

            <Col md={6}>
              <h5 className="fw-semibold">How We Support</h5>
              <ul className="list-unstyled mt-3 text-muted">
                <li className="mb-2">• Strategic capital</li>
                <li className="mb-2">• Operational expertise</li>
                <li className="mb-2">• Brand development</li>
                <li className="mb-2">• Network access</li>
                <li className="mb-2">• Long-term partnership</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-4 py-md-5 section-dark" id="home-achievements">
        <Container>
          <SectionHeader
            eyebrow="Our Track Record"
            title="Achievements & partnerships"
            subtitle="Building iconic brands through disciplined execution."
            center
          />

          <Row className="mt-4 justify-content-center" ref={ref}>
            <Col md={8}>
              <Card className="shadow-sm border-0 text-center dark-card">
                <Card.Body>
                  <Row>
                    <Col xs={6} className="mb-4">
                      <h2 className="fw-bold text-warning display-6">
                        {inView && <CountUp end={15} duration={3} />}+
                      </h2>
                      <p className="text-uppercase small text-muted">
                        Years Experience
                      </p>
                    </Col>

                    <Col xs={6} className="mb-4">
                      <h2 className="fw-bold text-warning display-6">
                        {inView && <CountUp end={20} duration={3} />}+
                      </h2>
                      <p className="text-uppercase small text-muted">
                        Premium Venues
                      </p>
                    </Col>

                    <Col xs={6}>
                      <h2 className="fw-bold text-warning display-6">
                        {inView && <CountUp end={500} duration={3} />}M+
                      </h2>
                      <p className="text-uppercase small text-muted">
                        AED Invested
                      </p>
                    </Col>

                    <Col xs={6}>
                      <h2 className="fw-bold text-warning display-6">
                        {inView && <CountUp end={100} duration={3} />}%
                      </h2>
                      <p className="text-uppercase small text-muted">
                        Partner Trust
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 text-white text-center" id="home-final-cta">
        <Container>
          <h2 className="fw-bold">
            Investing Behind the Region’s Most Iconic Venues
          </h2>
          <p className="mt-3 text-muted">
            We partner with visionary founders to build category-defining hospitality brands.
          </p>
          <Button
            as={Link}
            to="/contact"
            variant="warning"
            className="mt-3 px-4"
          >
            Contact Our Team
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Home;
