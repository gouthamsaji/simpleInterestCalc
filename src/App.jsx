import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principal,setPrincipal] = useState('')
  const [rate,setRate] = useState('')
  const [year,setYear] = useState('')
  const [interest,setInterest] = useState(0)
  const [isPrincipal,setIsPrincipal] = useState(true)
  const [isRate,setIsRate] = useState(true)
  const [isYear,setIsYear] = useState(true)

  const validate = (e)=>{
    console.log(!!e.target.value.match('^[0-9]*$'))
    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='principal'){
        setPrincipal(e.target.value)
        setIsPrincipal(true)
      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setIsRate(true)
      }
      else{
        setYear(e.target.value)
        setIsYear(true)
      }
    }
    else{
      if(e.target.name=='principal'){
        setPrincipal(e.target.value)
        setIsPrincipal(false)
      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setIsRate(false)
      }
      else{
        setYear(e.target.value)
        setIsYear(false)
      }
    }
  }

  const handleReset = ()=>{
    setPrincipal("")
    setRate("")
    setYear("")
    setIsPrincipal(true)
    setIsRate(true)
    setIsYear(true)
  }

  const handleCalculate = ()=>{
    setInterest((principal * rate * year)/100)
  }

  return (
    <>
        <div style={{height:'100vh'}} className='bg-dark d-flex w-100 justify-content-center align-items-center'>
          <div style={{width:'600px'}} className='p-5 bg-light rounded'>
            <h2>Simple Interest Calculator</h2>
            <p>Calculate your simple interest easily</p>
            <div style={{height:'150px'}} className='bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
              <h1>₹ {interest}</h1>
              <p>Total simple interest</p>
            </div>
            <div className='my-3'>
              <TextField name='principal' id="outlined-basic" value={principal} label="Principal Amount" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}}/>
                { !isPrincipal && <span className='text-danger'>*invalid input</span>}
            </div>
            <div className='my-3'>
              <TextField name='rate' id="outlined-basic" value={rate} label="Rate of Interest (p.a)%" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}}/>
              { !isRate && <span className='text-danger'>*invalid input</span>}
            </div>
            <div className='my-3'>
              <TextField name='year' id="outlined-basic" value={year} label="Year" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}}/>
              { !isYear && <span className='text-danger'>*invalid input</span>}
            </div>
            <div className='mb-3 d-flex justify-content-between'>
              <Button onClick={handleCalculate} style={{width:'230px',height:'60px'}} variant="contained" color="success" disabled={isPrincipal&&isRate&&isYear?false:true} >Submit</Button>
              <Button onClick={handleReset} style={{width:'230px',height:'60px'}} variant="contained">Reset</Button>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
