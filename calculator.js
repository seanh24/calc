import { useState } from "react";
//needs to handle decimals in input
const Calculator = () => {
    const [calc,setCalc] = useState('');
    const [answer, setAnswer] = useState('');
    const [err , setErr] = useState('');

    const handleSubmit = () => {
        let regex = /\d[^.a-z0-9]/;
        let match = calc.match(regex)
        let index = match.index;
        let a = parseFloat(calc.slice(0,index+1),10);
        let b = parseFloat(calc.slice(index+2),10)
        let opp = calc[index+1]
        let result;
        switch(opp) {
            case '+':
              result = a + b;
              break;
            case '-':
              result = a - b;
              break;
            case '/':
              result = a / b;
              break;
            case '*':
              result = a * b;
              break;
            default:
                result = ''
          }
          if(result === ''){
              setErr('Only operators shown are supported');
              setAnswer(result);
              setCalc('');
          } else{
              setAnswer(result.toPrecision(3));
              setErr('');
          }
        
    };
    const handleClear = () => {
        setCalc('');
        setAnswer('');
        setErr('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        };
    };

    return (
        <div className="body">
            <h1>Calculator</h1>
            {err && <p>{err}</p>}
            {!err && <p className='spaceholder'>spaceholder</p>}
            <div className='input-box'>
                <div className='input'>
                    <input type='text' value={calc} 
                    onChange={(e) => {
                        setCalc(e.target.value)
                        setErr('');
                    }}
                    onKeyDown={handleKeyDown} />
                </div>
                <div className='answer'>
                    <p>{answer}</p>
                </div>
            </div>
            <div className="button-box">
                <div className="button-box-num">
                    <button value={1} onClick={() => setCalc(calc + 1)}>1</button>
                    <button value={2} onClick={() => setCalc(calc + 2)}>2</button>
                    <button value={3} onClick={() => setCalc(calc + 3)}>3</button>
                    <button value={4} onClick={() => setCalc(calc + 4)}>4</button>
                    <button value={5} onClick={() => setCalc(calc + 5)}>5</button>
                    <button value={6} onClick={() => setCalc(calc + 6)}>6</button>
                    <button value={7} onClick={() => setCalc(calc + 7)}>7</button>
                    <button value={8} onClick={() => setCalc(calc + 8)}>8</button>
                    <button value={9} onClick={() => setCalc(calc + 9)}>9</button>
                    <button value={'.'} className='dec-button'
                    onClick={() => setCalc(calc + '.')}>.</button>
                    <button value={0} onClick={() => setCalc(calc + 0)}>0</button>
                    <button value={answer} className='ans-button'
                    onClick={() => setCalc(answer)}>Ans</button>
                </div>
                <div className="button-box-op">
                    <button value={'+'} onClick={() => setCalc(calc + "+")}>+</button>
                    <button value={'-'} onClick={() => setCalc(calc + '-')}>-</button>
                    <button value={'*'} onClick={() => setCalc(calc + '*')}>*</button>
                    <button value={'/'} onClick={() => setCalc(calc + '/')}>/</button>
                    <button value={'='} className='submit-clear' onClick={handleSubmit}>=</button>
                    <button value={''} className='submit-clear' onClick={handleClear}>clear</button>
                </div>
            </div>
            
        </div>
        
    );
}
 
export default Calculator;