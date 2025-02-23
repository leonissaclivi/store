import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ title, imgSrc, overview }) {
  return (
    <Card >
      <Card.Img variant="top" src={imgSrc} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1 overflow-auto" style={{ maxHeight: '100px' }}>
        {overview}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;