import { useState } from 'react';
import questions from './data'
import SingleQuestion from './SingleQuestion';

const App = () => {

  const [que,setque] = useState(questions);

  return <main>
    <h1 className='heading'>Questions</h1>
    {
      que.map((question)=>{
        return(
        <SingleQuestion key={question.id} question = {question} />
        )
      })
    }

  </main>;
};
export default App;
