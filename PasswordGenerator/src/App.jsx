import { useState, useCallback, useEffect, useRef } from 'react'


 
function App() {
  const [length, setLength] = useState(8)
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const [copied, setCopied] = useState(false)
   
  const generatePassword = useCallback( ()=>{

  let passw = "";
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(isNumberAllowed) str += '0123456789'
  if(isCharAllowed) str += '!@#$%^^&*()-=_+{}[]\>|><?|'
  for(let i=1; i<=length; i++){
  let index = Math.floor(Math.random()*str.length +1)
  passw += str.charAt(index);
  }
  setPassword(passw);
} 
  , [length, isNumberAllowed, isCharAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
    .then(() => {
      setCopied(true); // Update state to indicate that the text has been copied
      setTimeout(() => setCopied(false), 2000); // Reset "copied" after 2 seconds
    })
    .catch((err) => {
      // Handle error while copying
      console.error('Error copying: ', err);
    })

  }, [password])

  useEffect(()=>{
    generatePassword()
  }, [length, isNumberAllowed, isCharAllowed, generatePassword])
 
  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
         type= "text"
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly   
         ref={passwordRef}
        />
        <button
         onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >{copied ? <span>Copied!</span> : <span>Copy</span>}</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
         type='range'
         min={6}
         max={100}
         className='cursor-pointer'  
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
         type="checkbox"
         defaultChecked={isNumberAllowed}
         id="numberInput"
         onChange={() => {
             setIsNumberAllowed((prev) => !prev);
         }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
             type="checkbox"
             defaultChecked={isCharAllowed}
             id="characterInput"
             onChange={()=>{
              setIsCharAllowed((prev)=>!prev)
             }}
            
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  
  )
}

export default App