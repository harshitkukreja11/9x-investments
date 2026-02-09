import { Card, Button } from "react-bootstrap";

function PortfolioCard({ title, location, description, link, image }) {
  return (
    <Card className="portfolio-card dark-card h-100 border-0">
      {image && (
        <div className="portfolio-image-wrapper">
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            className="portfolio-image"
          />
        </div>
      )}

      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold mb-1 text-warning">
          {title}
        </Card.Title>

        <Card.Subtitle className="mb-3 text-muted small">
          {location}
        </Card.Subtitle>

        <Card.Text className="flex-grow-1 text-muted">
          {description}
        </Card.Text>

        <Button
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline-warning"
          className="mt-4 align-self-start px-4"
        >
          Visit Website
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
