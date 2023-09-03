import { Container ,Row ,Col ,Button  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { QUIZ } from "../../config";

const CloseQuiz = () => {
    return (
        <Container className="col-11 col-lg-10 mx-auto my-5 text-center custom-modal custom-font">
            <Row className="col-lg-7 pt-5  mx-auto" >
            {QUIZ[0]}
            </Row>
            <Row className="col-lg-5 col-10  mx-auto">{QUIZ[1]}</Row>
            <Row className="col-lg-6  mx-auto">{QUIZ[2]}</Row>
            <Row className="col-lg-8  mx-auto">{QUIZ[3]}</Row>
            <Row className="col-lg-12 py-5 my-lg-3">
                <Col className="col-lg-10 col-12 ">
                <Button as={Link} to='../start'  className="col-lg-3  col-10  fw-bolder float-end custom-button">Continue</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default CloseQuiz;