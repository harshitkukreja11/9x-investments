import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";
import LicensedActivities from "../components/LicensedActivities";

function Services() {
  return (
    <>
      {/* =========================
          PAGE HEADER
      ========================== */}
      <section className="py-5 services-hero text-white">
        <Container>
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive support for hospitality and nightlife brands"
            subtitle="A full suite of strategic, operational, and advisory services designed to drive operational excellence and sustainable growth."
            center
            light
          />
        </Container>
      </section>

      {/* =========================
          SERVICES GRID
      ========================== */}
      <section className="py-5 bg-dark text-light">
        <Container>
          <Row className="g-4">
            {[
              {
                icon: "💼",
                title: "Strategic Capital",
                points: [
                  "Growth capital",
                  "Acquisition financing",
                  "Working capital solutions",
                  "Refinancing / restructuring",
                  "Flexible partnership terms",
                ],
              },
              {
                icon: "⚙️",
                title: "Operational Excellence",
                points: [
                  "Operations consulting",
                  "Cost management",
                  "Quality control systems",
                  "Staff training programs",
                  "Vendor relationship optimization",
                ],
              },
              {
                icon: "🎨",
                title: "Brand Development",
                points: [
                  "Brand strategy & positioning",
                  "Marketing campaigns",
                  "Digital & social media",
                  "PR & media relations",
                  "Customer acquisition & retention",
                ],
              },
              {
                icon: "🍽️",
                title: "Culinary & Beverage",
                points: [
                  "Menu development",
                  "Beverage program design",
                  "Chef & mixologist recruitment",
                  "Recipe standardization",
                  "Supplier partnerships",
                ],
              },
              {
                icon: "📍",
                title: "Real Estate & Location",
                points: [
                  "Site selection",
                  "Lease negotiation",
                  "Design & construction support",
                  "Permits & licensing",
                  "Real estate partnerships",
                ],
              },
              {
                icon: "💻",
                title: "Technology & Systems",
                points: [
                  "POS & payments",
                  "Reservations & table management",
                  "Inventory & supply chain",
                  "CRM systems",
                  "Analytics & reporting tools",
                ],
              },
            ].map((service, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="dark-card h-100 service-card">
                  <Card.Body>
                    <div className="service-icon">{service.icon}</div>
                    <Card.Title className="fw-semibold mb-3">
                      {service.title}
                    </Card.Title>
                    <ul className="service-list">
                      {service.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* =========================
          LICENSED ACTIVITIES
      ========================== */}
      <LicensedActivities />

      {/* =========================
          PARTNERSHIP APPROACH
      ========================== */}
      <section className="py-5 bg-dark text-light">
        <Container>
          <SectionHeader
            eyebrow="Partnership Approach"
            title="How we work with portfolio companies"
            subtitle="A collaborative and tailored model focused on long-term value creation."
            center
            light
          />

          <Row className="g-4 mt-3">
            {[
              {
                title: "Assessment & Planning",
                text: "Comprehensive business assessment and development of a strategic roadmap aligned with growth objectives.",
              },
              {
                title: "Implementation & Support",
                text: "Hands-on support, structured training programs, and regular communication with leadership teams.",
              },
              {
                title: "Network Access",
                text: "Access to industry professionals, suppliers, service providers, and strategic partners.",
              },
              {
                title: "Long-term Partnership",
                text: "Ongoing strategic support, adapting to market shifts and business evolution.",
              },
            ].map((item, i) => (
              <Col md={6} key={i}>
                <Card className="dark-card h-100">
                  <Card.Body>
                    <Card.Title className="fw-semibold mb-2">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted-light">
                      {item.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
