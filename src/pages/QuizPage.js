import { Container ,Row ,Col,Button} from "react-bootstrap";
import './Quiz.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quizActions } from "../store/quizSlice";
import { QUIZ } from "../config";
import { useNavigate } from "react-router-dom";
const QuizPage = () =>{
    const navigate = useNavigate()
    
    const startTimer = () => {
       const i = setInterval(() => {
          dispatch(quizActions.handleTimer())
        }, 1000);
        setTimeout(()=>{
            clearInterval(i)
            dispatch(quizActions.handleTimer(true))
            dispatch(quizActions.handleQuizResult())
            navigate('../submit')
        },1000)
      };
   const dispatch = useDispatch()
   const clickHandler = () => {
    dispatch(quizActions.handleQuiz(true))
    startTimer()
   }
   
    return(
        <>
        <Container className="col-12 col-lg-12 mx-auto my-5 text-center custom-font" fluid>
            <Row className="col-lg-5 mx-auto" >
            {QUIZ[0]}
            </Row>
            <Row className="col-lg-3 col-10  mx-auto">{QUIZ[1]}</Row>
            <Row className="col-lg-4  mx-auto">{QUIZ[2]}</Row>
            <Row className="col-lg-6  mx-auto">{QUIZ[3]}</Row>
            <Row className="col-lg-12 py-5 my-lg-5">
                <Col className="col-lg-6 col-12">
                
                <Button as={Link} to='start' onClick={clickHandler} className="col-lg-3 col-10 mx-0 fw-bolder custom-button">Start Quiz</Button>
                </Col>
                <Col className="col-lg-6 col-12 ">
                <Button as={Link} to='..' className="col-lg-3  col-10 mx-0 fw-bolder custom-button">Quit</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default QuizPage;

// onClick={()=>dispatch(quizActions.handleQuiz())} 