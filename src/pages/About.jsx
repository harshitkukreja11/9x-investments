import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";


function About() {
return (
<>
{/* Page Header */}
<section className="py-5 bg-light">
<Container>
<SectionHeader
eyebrow="About Us"
title="A focused investment partner for experience-led brands"
subtitle="Dubai-based investment company focused on premium hospitality and nightlife, combining strategic capital, operational expertise, and deep sector knowledge."
center
/>
</Container>
</section>
{/* Who We Are / Our Foundation */}
<section className="py-5">
<Container>
<Row className="g-5">
<Col md={6}>
<h4 className="fw-bold mb-3">Who We Are</h4>
<p>
9x Investments was founded with a clear vision: to identify, invest in,
and nurture exceptional hospitality and nightlife concepts in Dubai.
Operating at the intersection of capital, creativity, and operations,
we partner with brands that deliver memorable guest experiences.
</p>
<p>
Based in Al Quoz, Dubai, our team brings together backgrounds in finance,
hospitality operations, brand development, and real estate. We believe
successful investments require strategic vision, operational discipline,
and an uncompromising commitment to guest experience.
</p>
</Col>
<Col md={6}>
<h4 className="fw-bold mb-3">Our Foundation</h4>
<p>
Established in Dubai, 9x Investments has built its reputation through
strategic investments in premium hospitality and nightlife destinations.
Our growing portfolio includes Slay DIFC, a premier bar and grill located
in the Burj Daman Building, and Mantis Dubai, a high-energy nightclub in
Emirates Financial Towers.
</p>
<p>
We are committed to partnering with visionary founders and experienced
operators who share our dedication to excellence, innovation, and the
creation of long-term value.
</p>
</Col>
</Row>
</Container>
</section>
{/* What We Look For */}
<section className="py-5 bg-light">
<Container>
<SectionHeader
eyebrow="Investment Criteria"
title="What We Look For"
subtitle="Key characteristics we seek in hospitality and nightlife investments."
center
/>
<Row className="g-4">
{["Brand & Positioning", "Guest Experience", "Operational Excellence", "Growth Potential"].map((item, i) => (
<Col md={6} lg={3} key={i}>
<Card className="h-100 shadow-sm text-center">
<Card.Body>
<Card.Title>{item}</Card.Title>
<Card.Text className="text-muted mt-2">
{item === "Brand & Positioning" && "Distinct brand identities with clear market positioning and compelling storytelling."}
{item === "Guest Experience" && "A non-negotiable focus on exceptional guest experiences and memorable moments."}
{item === "Operational Excellence" && "Strong management, disciplined operations, financial control, and team development."}
{item === "Growth Potential" && "Scalable business models with potential for expansion and new market entry."}
</Card.Text>
</Card.Body>
</Card>
</Col>
))}
</Row>
</Container>
</section>
{/* Our Values */}
<section className="py-5">
<Container>
<SectionHeader
eyebrow="Our Values"
title="Principles that guide our partnerships"
center
/>
<Card className="shadow-sm">
<Card.Body>
<Row>
<Col md={6}>
<p><strong>Excellence</strong> – High standards across food, service, and design.</p>
<p><strong>Partnership</strong> – True collaboration with founders and operators.</p>
</Col>
<Col md={6}>
<p><strong>Innovation</strong> – Embracing innovation in concepts, operations, and experience.</p>
<p><strong>Sustainability</strong> – Focus on long-term, sustainable value creation.</p>
</Col>
</Row>
</Card.Body>
</Card>
</Container>
</section>
{/* Milestones */}
<section className="py-5 bg-light">
<Container>
<SectionHeader
eyebrow="Milestones"
title="Our journey so far"
subtitle="Key moments in the growth of 9x Investments."
center
/>
<p className="text-center text-muted">
Milestones timeline component to be implemented as a reusable component.
</p>
</Container>
</section>
</>
);
}


export default About;