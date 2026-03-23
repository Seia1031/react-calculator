import './Buttons.css'

export default function Buttons({onKeyPress}) {
  const option = [" ", "C", "%"];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, "±", 0, " "] //数字を扱う記号
  const operators = ["÷", "×", "ー", "＋", "="] //演算子ボタン

  return (
    <>
      <div className="input">
        <div className="num-opt">

          {
            option.map((opt) => {
              return <button className='option' onClick={() => onKeyPress(opt)} key={opt}>{opt}</button>
            })
          }
          {
            numbers.map((num) => {
              return <button className='number' onClick={() => onKeyPress(num)} key={num}>{num}</button>
            })
          }
        </div>
        
        <div className="operators">
          {
            operators.map((ope) => {
              return <button className='operator' onClick={() => onKeyPress(ope)} key={ope}>{ope}</button>
            })
          }
        </div>

      </div>
      
    </>
  )
}
