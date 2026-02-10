import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './components'
import  useCurrency from './hooks/currencyinfo' 
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0) 

  const currencyInfo=useCurrency(from) 
  const options=Object.keys(currencyInfo) 
  const swap=()=>{
    setFrom(to)
    setTo(from) 
    setConvertedAmount(amount)
    setAmount(convertedAmount)  
  }

  const convert=()=>{
    setConvertedAmount(amount  * currencyInfo[to]) 
  }

  return (
    <>
      <div>
        <div>
          <form onSubmit={(e)=>{
            e.preventDefault();
            convert() 
          }}>
            <div>
              <InputBox
              Label="from"
              amount={amount}
              currencyOptions={options} 
              onCurrencyChange={(currency)=>{
                setAmount(amount) 
              }}
              selectCurrency={from}
              onAmountChange={(amount)=>{
                setAmount(amount)
              }}
              ></InputBox>
            </div>
            <div>
              <button onClick={swap}> 
                swap
              </button>
            </div>
            <div>
              <InputBox
              Label="To"
              amount={convertedAmount}
              currencyOptions={options} 
              onCurrencyChange={(currency)=>{
                setTo(amount) 
              }}
              selectCurrency={from}
              amountDisable
              >

              </InputBox>
            </div>
            <button type='submit'>Convert {from.toUpperCase} to {to.toUpperCase}</button>
          </form>
        </div>
      </div> 
    </>
  )
}

export default App
