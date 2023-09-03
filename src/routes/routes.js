import Home from '../pages/Home';
import QuizPage from '../pages/QuizPage';
import Quiz from '../components/Quiz/Quiz';
import AboutUs from '../pages/AboutUs';
import Whiteboard from '../pages/Whiteboard';
import Root from './Root';
import CloseQuiz from '../components/Quiz/CloseQuiz';
import {RouterProvider , createBrowserRouter} from 'react-router-dom';
import RootLayout from './RootLayout';
import SubmitQuiz from '../components/Quiz/SubmitQuiz';
const Routes =() => {
    
    const router = createBrowserRouter([
        {path : '/' , element : <Root /> ,children : [
                {index: true,element : <Home /> },
                
                {path : 'whiteboard' , element : <Whiteboard />},
                { path : 'about-us' , element : <AboutUs />},
            ]},
            {path : '/quiz' , element : <RootLayout /> , children : [
                {path:'', element : <QuizPage />},
                {path:'start' , element : <Quiz />},
                {path : 'close' , element : <CloseQuiz />},
                {path : 'submit' , element : <SubmitQuiz />}
            ]}
    ])
    return(
        <RouterProvider router={router} />
    )
}
export default Routes;