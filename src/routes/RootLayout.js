import { Navbar, Nav } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import close from "../assets/close.png";
import { quizActions } from "../store/quizSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const RootLayout = () => {
  const dispatch = useDispatch();
  const startQuiz = useSelector((state) => state.quiz.startQuiz);
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const clickHandler = () => {
    if(p==='')
    dispatch(quizActions.handleQuiz(false))
    dispatch(quizActions.defaultQuiz())
  }
  useEffect(()=>{
    dispatch(quizActions.handleCurrentPage(path))
  },[dispatch ,path])
  const p = useSelector((state) => state.quiz.currentPage);
  return (
    <>
      <Navbar bg="white" expand="lg" className="py-lg-4 col-lg-12 ">
        <Navbar.Brand
          as={Link}
          to="/"
          className=" m-auto m-lg-0 col-lg-4 col-3"
        >
          <img
            src={logo}
            width="90"
            height="90"
            className="d-block img-fluid align-top mx-lg-5 mx-0"
            alt="Logo"
          />
        </Navbar.Brand>
        <div className="col-6 text-center col-lg-4 fw-bolder  heading">
          QUIZ
        </div>
        {!startQuiz && (
          <Navbar.Brand className="m-auto m-lg-0 col-lg-4 col-2">
            <img
              src={logo}
              width="70"
              height="70"
              className="d-block img-fluid float-end align-top mx-lg-5 custom"
              alt="Logo"
            />
          </Navbar.Brand>
        )}
      
        {startQuiz && (
          <Nav.Link
            className="m-auto m-lg-0 col-lg-4 col-2"
            onClick={()=>{navigate(p);clickHandler()}}
          >
            <img
              src={close}
              width="70"
              height="70"
              className="d-block img-fluid float-end align-top mx-lg-5 custom"
              alt="Logo"
            />
          </Nav.Link>
        )}
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
