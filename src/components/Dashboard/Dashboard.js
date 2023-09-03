import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DATA } from '../../config';
const Dashboard = () =>{
    const navigate = useNavigate()
    // const clickHandler = (value) =>{
    //     if(value!=='Whiteboard')
    //     {
    //         navigate('/quiz')
    //     }
    //     else{
    //     navigate('/whiteboard')
    //     }
    // }should be meaningful naming convention
    return(
        <>
        {DATA.map(i=> <Container key={i.title} className='px-5' fluid>    
        <Row className='m-3'>
            <Col  className='col-lg-2 h2 my-3 custom-color fw-bolder' >
            <Row>{i.title.split(' ')[0]}</Row>
            <Row>{i.title.split(' ')[1]}</Row>
            </Col>
            <Col className='col-lg-10 my-4 h6 ' >
            {i.content}
            </Col>
        </Row>
        {i.button && <Row >
            <Col  className='col-lg-2 col-12 mx-auto'>
            <Button  onClick={()=>{i.button === 'Whiteboard' ? navigate('/whiteboard') : navigate('/quiz')}} className='mx-lg-auto mb-4 col-11 fw-bolder col-lg-12  custom-button'>{i.button}</Button>
            </Col>
        </Row>}
      </Container>)}
        
      
      </>
      
  );
};

export default Dashboard;