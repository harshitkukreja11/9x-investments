import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  
} from "react-bootstrap";
import PortfolioMetrics from "../components/PortfolioMetrics";


export default function Portfolio() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="portfolio-hero py-5 text-center text-light">
        <Container>
          <p className="section-eyebrow text-uppercase text-warning">Portfolio</p>
          <h1 className="section-title">Our investment portfolio</h1>
          <p className="section-subtitle">
            Each brand represents a carefully selected opportunity with
            exceptional founders and operators.
          </p>
        </Container>
      </section>

      {/* ================= METRICS ================= */}
      
      <PortfolioMetrics />
      {/* ================= SLAY DIFC ================= */}
      <section className="portfolio-section py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <Carousel fade className="portfolio-carousel">
                <Carousel.Item>
                  <img src="	https://9xinvestments.com/assets/caption-CsEmxyWe.jpg" className="d-block w-100" alt="Slay DIFC" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://9xinvestments.com/assets/slay-bar-and-kitchen-dubai_2-CbJQGcQW.jpg" className="d-block w-100" alt="Slay DIFC Interior" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://9xinvestments.com/assets/slay-bar-and-kitchen-dubai_26-Cq8EU0Ao.jpg" className="d-block w-100" alt="Slay DIFC Venue" />
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col lg={6} className="text-light">
              <h2 className="portfolio-title">Slay DIFC</h2>
              <p className="portfolio-location">
                Burj Daman Building · Al Mustaqbal Street · DIFC
              </p>

              <p>
                Slay DIFC represents our commitment to culinary excellence and
                sophisticated social experiences. Located in the prestigious
                Burj Daman Building, it is a multi-level venue combining dining,
                bar, and private event spaces.
              </p>

              <p>
                The concept focuses on international cuisine with modern
                interpretations, premium ingredients, and an extensive beverage
                program featuring curated wines, spirits, and signature
                cocktails.
              </p>

              <p>
                Operating daily from 12:00 PM – 4:00 AM, the venue transitions
                seamlessly from refined lunch and dinner experiences to a
                dynamic late-night destination.
              </p>

              <div className="portfolio-callout">
                <h6>Key Highlights</h6>
                <ul>
                  <li>Premium location in DIFC’s Burj Daman Building</li>
                  <li>Operating hours: 12:00 PM – 4:00 AM daily</li>
                  <li>International cuisine with modern twists</li>
                  <li>Expertly crafted cocktails & premium beverage selection</li>
                  <li>Versatile space for dining, events & nightlife</li>
                </ul>
              </div>

              <p className="portfolio-contact">
                📞 +971 52 684 8800 | +971 4 570 0868  
                <br />
                ✉ info@slaydifc.com
              </p>

              <Button
                href="https://www.slayreservation.com/"
                target="_blank"
                className="portfolio-btn"
              >
                Visit Slay DIFC Website
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= MANTIS DUBAI ================= */}
      <section className="portfolio-section py-5 alt-bg">
        <Container>
          <Row className="align-items-center g-5 flex-lg-row-reverse">
            <Col lg={6}>
              <Carousel fade className="portfolio-carousel">
                <Carousel.Item>
                  <img src="https://9xinvestments.com/assets/clubof4-CozdRmEB.jpeg" className="d-block w-100" alt="Mantis Dubai" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://9xinvestments.com/assets/mantis-dubai-fabulous-2-BwXU_qOM.jpg" className="d-block w-100" alt="Mantis Interior" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://9xinvestments.com/assets/mantis-dubai-fabulous-3-DIOBBUVm.jpg" className="d-block w-100" alt="Mantis Nightlife" />
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col lg={6} className="text-light">
              <h2 className="portfolio-title">Mantis Dubai</h2>
              <p className="portfolio-location">
                Emirates Financial Towers · Podium Level · DIFC
              </p>

              <p>
                Mantis Dubai represents our nightlife investment philosophy —
                a high-energy nightclub located in Emirates Financial Towers,
                DIFC.
              </p>

              <p>
                Known for its Bollywood-meets-electronic music concept, the
                venue features cutting-edge lighting, premium sound systems,
                curated DJ programming, and themed events.
              </p>

              <p>
                Operating Tuesday–Sunday from 10:30 PM – 4:00 AM, Mantis
                attracts residents and international visitors with VIP services
                and premium bottle experiences.
              </p>

              <div className="portfolio-callout">
                <h6>Key Highlights</h6>
                <ul>
                  <li>Prime location in Emirates Financial Towers, DIFC</li>
                  <li>Operating hours: Tuesday–Sunday, 10:30 PM – 4:00 AM</li>
                  <li>Bollywood-meets-electronic music concept</li>
                  <li>State-of-the-art lighting & sound</li>
                  <li>VIP services & premium bottle offerings</li>
                  <li>Regular events with international DJs</li>
                </ul>
              </div>

              <p className="portfolio-contact">
                📞 +971 56 560 7007  
                <br />
                ✉ info@mantisdubai.com
              </p>

              <Button
                href="https://www.mantisdubai.com"
                target="_blank"
                className="portfolio-btn"
              >
                Visit Mantis Dubai Website
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= GROWTH SECTION ================= */}
      <section className="portfolio-growth py-5 text-center text-light">
        <Container>
          <p className="section-eyebrow text-uppercase text-warning">Portfolio Growth</p>
          <h2 className="section-title">Expanding our impact</h2>
          <p className="section-subtitle">
            We continue to evaluate new opportunities aligned with our
            investment vision. If you are an operator or founder seeking a
            strategic partner, we invite you to connect with us.
          </p>
          <Button href="/contact" className="portfolio-btn mt-3">
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
}
