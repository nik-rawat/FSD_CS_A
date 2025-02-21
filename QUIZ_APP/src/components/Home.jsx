import Footer from "./Footer/Footer"
import Quiz from "./Quiz/Quiz"
import Header from "./Header/Header"
import { useState } from "react"

const Home = () => {
  const [quiz, setQuiz] = useState(false)
  return (
    <div className="Home">
        <Header />
        {quiz ? <Quiz /> : <button onClick={() => setQuiz(quiz => !quiz)}>Start Quiz</button>}
        <Footer />
    </div>
  )
}

export default Home