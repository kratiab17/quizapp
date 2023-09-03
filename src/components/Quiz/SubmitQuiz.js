import { Container ,Row ,Col , Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quizActions } from "../../store/quizSlice";
const SubmitQuiz = () => {
    const dispatch = useDispatch()
    const result = useSelector(state=>state.quiz.quizResult);
    return (
        <Container className="col-11 col-lg-10 mx-auto my-5 text-center custom-modal custom-font">
            <Row className="col-lg-2 pt-5  col-5 mx-auto" >Congratulation!!</Row>
            <Row className="col-lg-6 col-10  mx-auto">You did  your best and practice makes the man perfect!!</Row>
            <Row className="col-lg-8  mx-auto">Your score doesn’t define you but your willingness to learn makes</Row>
            <Row className="col-lg-1 col-4 mx-auto">different!!</Row>
            <Row className="col-lg-5 col-11 mx-auto">{`You scored ${result}/15..... A great Achievement!! `}</Row>
            <Row className="col-lg-12 py-5 my-lg-3">
                <Col className="col-lg-11 col-12 ">
                <Button as={Link} to='../start' onClick={()=>dispatch(quizActions.defaultQuiz())} className="col-lg-3  col-10  fw-bolder mx-0 float-end custom-button">Replay The Quiz</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default SubmitQuiz;