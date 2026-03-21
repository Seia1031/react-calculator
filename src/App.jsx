import { useState } from 'react'
import './App.css'
import Display from './components/Display';
import Buttons from './components/Buttons';


function App() {
  const [leftNumber, setLeftNumber] = useState(0);
  const [operator, setOperator] = useState(null);
  const [rightNumber, setRightNumber] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState(null);

  const handleKeyPress = (key) => {
    if (Number.isFinite(key)) {
      if (operator === null) {
        setLeftNumber(prev => prev * 10 + key);
      } else {
        setRightNumber(prev => prev * 10 + key);
      }
    } else {
      switch (key) {
        case '＋':
        case 'ー':
        case '×':
        case '÷':
          setOperator(key);
          break;
        case '=':
          switch (operator) {
            case '＋':
              setResult(leftNumber + rightNumber);
              break;
            case 'ー':
              setResult(leftNumber - rightNumber);
              break;
            case '×':
              setResult(leftNumber * rightNumber);
              break;
            case '÷':
              setResult(leftNumber / rightNumber);
              break;
          }
          if (!disabled) setDisabled(!disabled);
          break;
        case 'C':
          setLeftNumber(0);
          setOperator(null);
          setRightNumber(null);
          setDisabled(false);
          setResult(null);
          break;
      }
    }
    
  }

  return (
    <>
      <div className="header">
        <h1>計算機</h1>
      </div>

      <section className='calculator'>
        <div className="result">
          <Display leftNumber={leftNumber} operator={operator} rightNumber={rightNumber} result={result} disabled={disabled}/>
        </div>

        <div className="buttons">
          <Buttons onKeyPress={handleKeyPress} />
        </div>
      </section>

    </>
  )
}

export default App
