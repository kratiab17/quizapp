import { Container, Row, Col, Button } from "react-bootstrap";
import { QUESTIONS } from "../../config";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../../store/quizSlice";

const Quiz = () => {
  const dispatch = useDispatch();
  const timer = useSelector(state=>state.quiz.timer)
  const clickHandler = (questionNo, answer) => {
    dispatch(
      quizActions.handleQuizAnswers({ question: questionNo, answer: answer })
    );
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <Container className="col-lg-11 mx-lg-auto col-12 " fluid>
      <Row >{formatTime(timer)} </Row>
      {QUESTIONS.map((data) => (
        <Container key={data.no} className="px-lg-4 my-1 fw-bold " fluid>
          <label>
            {data.no}. {data.question}
          </label>
          <Row className="mx-2 my-0  ">
            <Col className="col-lg-3">
              a) {data.options[0]}{" "}
              <input
                className="custom-radio mx-2"
                onClick={(e) => clickHandler(data.no, e.target.value)}
                type="radio"
                name={data.no}
                value="1"
              />
            </Col>{" "}
          </Row>
          <Row className="mx-2 my-0 ">
            <Col className="col-lg-3">
              b) {data.options[1]}{" "}
              <input
                className="custom-radio mx-2"
                onClick={(e) => clickHandler(data.no, e.target.value)}
                type="radio"
                name={data.no}
                value="2"
              />
            </Col>{" "}
          </Row>
        </Container>
      ))}

      <Button
        onClick={() => dispatch(quizActions.handleQuizResult())}
        as={Link}
        to="../submit"
        className="col-lg-1 col-11  custom-button  float-end mx-lg-5"
      >
        Submit
      </Button>
    </Container>
  );
};
export default Quiz;
