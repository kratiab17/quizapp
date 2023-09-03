import bg from '../../assets/background.png';
import './content.css';
import { Card, Image  } from 'react-bootstrap';

function Content() {
  return (
      <Card className='mx-lg-5 mx-3 border-0 card-container'>
        <Image src={bg} className='card-image' alt='Card background' fluid />
        <Card.ImgOverlay className='overlay p-5'>
          <Card.Title className='text fw-bolder mb-5'>Moonshot</Card.Title>
          <Card.Text className='text-lg'>
            A very challenging and innovative project or undertaking.
          </Card.Text>
          <Card.Text>
            Noun(moon-shot)
          </Card.Text>
          <Card.Text>
            Example: The company has received funding from the US Department of Energy,
            so it looks as if someone believes this moonshot could work. He believes
            the Covid testing moonshot is the only way out for the UK economy in the face
            of a probable winter surge.
          </Card.Text>
          {/* Add more paragraphs as needed */}
        </Card.ImgOverlay>
      </Card>


  )
}

export default Content;