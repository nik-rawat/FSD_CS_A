import quesBank from "../../assets/data"
import './Quiz.css';

const Quiz = () => {
    return (
        <div className="quiz-container">
            Question {quesBank[0].id}: <div className="quiz-question">{quesBank[0].ques}</div><br/>
            {quesBank[0].options.map((option, index) => {
                const inputId = `${quesBank[0].id}-${index}`;
                return (
                    <div key={inputId} className="quiz-option">
                        <input 
                            type="radio" 
                            id={inputId} 
                            name={quesBank[0].id} 
                            className={quesBank[0].ques} 
                            value={option} 
                        />
                        <label htmlFor={inputId}>{option}</label>
                    </div>
                )
            })}
            <div className="quiz-buttons">
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Quiz;