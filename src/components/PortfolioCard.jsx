import { Card, Button } from "react-bootstrap";


function PortfolioCard({ title, location, description, link }) {
return (
<Card className="h-100 shadow-sm">
<Card.Body>
<Card.Title>{title}</Card.Title>
<Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
<Card.Text>{description}</Card.Text>
<Button variant="link" href={link} target="_blank">Visit {title} →</Button>
</Card.Body>
</Card>
);
}


export default PortfolioCard;