import "./Display.css"

export default function Display({ leftNumber, operator, rightNumber, result, disabled }) {
  return (
    <>
      <p className="display">
        {!disabled ?
          `${leftNumber} ${operator ? `${operator}` : ''
          } ${operator && rightNumber !== null ? `${rightNumber}` : ''
          }`
          :
          `${result}`
        }
      </p>
    </>
  )
}
