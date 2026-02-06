import { Container, Row, Col, Card, Button } from "react-bootstrap";
import HeroSlider from "../components/HeroSlider";
import SectionHeader from "../components/SectionHeader";
import PortfolioCard from "../components/PortfolioCard";


function Home() {
return (
<>
<HeroSlider />
{/* Quote Section */}
<section className="py-5 bg-light">
<Container className="text-center">
<h4 className="fst-italic">Investing in experiences that define modern luxury</h4>
</Container>
</section>
{/* Portfolio */}
<section className="py-5">
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
/>
</Col>
<Col md={6}>
<PortfolioCard
title="Mantis Dubai"
location="Emirates Financial Towers · DIFC"
description="High-energy nightclub blending modern electronic music with Bollywood-inspired aesthetics, VIP services, and curated DJ performances."
link="https://www.mantisdubai.com"
/>
</Col>
</Row>
</Container>
</section>
{/* Why 9x */}
<section className="py-5 bg-light">
<Container>
<SectionHeader
eyebrow="Why 9x Investments"
title="Strategic focus, operational excellence, lasting impact"
subtitle="Deep sector expertise combined with hands-on partnership."
center
/>
<Row className="g-4">
{["Hospitality & Nightlife", "Dubai · DIFC", "Collaborative Approach"].map((item, i) => (
<Col md={4} key={i}>
<Card className="h-100 text-center shadow-sm">
<Card.Body>
<Card.Title>{item}</Card.Title>
<Card.Text className="text-muted">
Proven experience building premium hospitality brands with long-term vision.
</Card.Text>
</Card.Body>
</Card>
</Col>
))}
</Row>
</Container>
</section>
{/* Investment Approach */}
<section className="py-5">
<Container>
<SectionHeader
eyebrow="Investment Approach"
title="How we evaluate and support opportunities"
subtitle="A disciplined, partnership-driven process."
center
/>
<Row>
<Col md={6}>
<h5>What We Look For</h5>
<ul>
<li>Distinct brand identity</li>
<li>Exceptional guest experience</li>
<li>Strong management teams</li>
<li>Scalable concepts</li>
<li>Market opportunity</li>
</ul>
</Col>
<Col md={6}>
<h5>How We Support</h5>
<ul>
    <li>Strategic capital</li>
<li>Operational expertise</li>
<li>Brand development</li>
<li>Network access</li>
<li>Long-term partnership</li>
</ul>
</Col>
</Row>
</Container>
</section>
{/* Final CTA */}
<section className="py-5 bg-dark text-white text-center">
<Container>
<h2 className="fw-bold">Partner with 9x Investments</h2>
<p className="mt-2">Connect with us to explore investment and partnership opportunities.</p>
<Button href="/contact" variant="warning" className="mt-3">Contact Our Team</Button>
</Container>
</section>
</>
);
}


export default Home;