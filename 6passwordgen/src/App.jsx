import { useState, useCallback, useEffect, useRef } from 'react' 

// import './App.css' 

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [Password, setpassword] =useState("")
  let str;

  const PasswordRef=useRef(null) 

  const PasswordGenerator=useCallback(( )=>{ //func , dependencies
    let pass=""
    str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*,.{}[]~` "
 
    for (let i = 1; i <=length; i++) {
      const index = Math.floor(Math.random() *str.length +1)
      pass +=str.charAt(index) 
    }

    setpassword(pass) 

  },[length,numberAllowed,charAllowed,setpassword]) 
  // PasswordGenerator() can't call this way ,see below line

  const copypasstoclipboard=useCallback(()=>{
    PasswordRef.current?.select()
    window.navigator.clipboard.writeText(Password) 
  },[Password])

  useEffect(()=>{PasswordGenerator()},[length,numberAllowed,charAllowed,PasswordGenerator])
 
  return (
    <>
      <div className='w-full max-w-md shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-900'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-1 px-3'
            placeholder="Password" readOnly
            ref={PasswordRef}/>
            <button 
            onClick={copypasstoclipboard} className='outline-none bg-blue-400'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setLength(e.target.value)}} />
            <label>Length: {length}</label> 
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id="numberinput"
            onChange={()=>{
              setnumberAllowed( (prev)=> !prev);
            }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            id="charinput"
            onChange={()=>{
              setcharAllowed( (prev)=> !prev);
            }} />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
