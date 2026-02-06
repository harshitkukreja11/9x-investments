import { Carousel, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HeroSlider.css";

const slides = [
  {
    title: "Premium Hospitality & Nightlife Investments",
    subtitle: "Iconic brands shaping Dubai’s nightlife scene",
    image:
      "https://www.mantisdubai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclubof4.8e2bf9e0.webp&w=1920&q=75",
  },
  {
    title: "Strategic Capital for Experience-Led Brands",
    subtitle: "Building category-defining destinations",
    image:
      "https://www.slayreservation.com/_next/image?url=%2Fimages%2Fmedia_slay%2FIMG-20241122-WA0007.webp&w=1920&q=75",
  },
];

function HeroSlider() {
  const [offset, setOffset] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("home-portfolio");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Carousel
      fade
      controls
      indicators
      interval={5000}
      pause="hover"
      className="hero-carousel"
    >
      {slides.map((slide, i) => (
        <Carousel.Item key={i}>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${slide.image})`,
              backgroundPositionY: offset * 0.3,
            }}
          >
            <Container className="h-100 d-flex flex-column justify-content-center text-white">
              <h1 className="hero-title display-5 fw-bold">
                {slide.title}
              </h1>
              <p className="hero-subtitle lead mt-3">
                {slide.subtitle}
              </p>

              <div className="hero-cta mt-4">
                <Button
                  as={Link}
                  to="/contact"
                  variant="warning"
                  className="px-4 py-2 fw-semibold"
                >
                  Contact Our Team
                </Button>
              </div>
            </Container>

            {/* Scroll Indicator */}
            <div className="scroll-indicator" onClick={scrollToNext}>
              <span></span>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroSlider;
