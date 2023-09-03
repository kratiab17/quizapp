import { Row,Col ,Image,Button, Container} from "react-bootstrap";
import logo from '../../assets/logo.png';
import twitter from '../../assets/twitter.png'
import insta from '../../assets/insta.png';
import gmail from '../../assets/gmail.png';
import { useNavigate } from "react-router-dom";
const Footer = () =>{
    const navigate = useNavigate()
    return(
        <>
        <Container className="px-5" fluid>
            <Row>
                <Col className="col-lg-1 mx-lg-5 m-1 d-flex d-lg-block" xs={6}>
                <Row className="mx-1 col-6 col-lg-12">
                <Col><Image src={logo} rounded  className="img-fluid"/></Col>
                </Row>
                <Row className="mx-lg-1 my-lg-5 m-auto mx-5 col-12 " > 
                    <Col className=" ml-1 p-0 col"><Image  src={twitter} rounded  className="img-fluid "/></Col>
                    <Col className=" m-0 p-0 col"><Image  src={insta} rounded  className="img-fluid "/></Col>
                    <Col className=" m-0 p-0 col"><Image  src={gmail} rounded  className="img-fluid "/></Col>
                </Row>
                </Col>
                <Col className="mx-lg-5 my-3 col-lg-8 col-12" xs={6}>
                <Button onClick={()=>navigate('/career')} className='col-lg-3 col-11  fw-bolder custom-button'  >Career</Button>
                <Button onClick={()=>navigate('/policy')} className='col-lg-3 col-11 fw-bolder custom-button'  >Policy</Button>
                </Col>
            </Row>
            
        </Container>
        </>
    )
}
export default Footer;