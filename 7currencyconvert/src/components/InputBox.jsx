import React, { useId } from 'react'

function InputBox({
    Label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className="",
}){
    const amountInputId=useId()

    return(
        <div className={`bg-white p-3 rounded-large text-sm flex ${className}`}>
            <div>
                <label htmlFor={amountInputId}>{label}
                </label>
                <input id={amountInputId} 
                    className='outline-none'
                    type="number"
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onchange={(e)=>{
                        onAmountChange && onAmountChange(Number(e.target.value))  
                    }}
                />
            </div>
            <div>
                <p>Currency Type</p>
                <select
                className='rounded-large'
                value={selectCurrency}    
                onchange={(e)=> onCurrencyChange &&
                    onCurrencyChange(e.target.value) 
                }          
                disabled={currencyDisable} 
                >
                    {currencyOptions.map((currency)=> (     //loop 
                        <option key={currency} value={currency}>
                            {currency} 
                        </option>
                    ))}
                    
                </select>
            </div>
        </div>
    )
}
export default InputBox  