import React, { useState } from 'react'

export const Bmi = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState();
  const [unit, setUnit] = useState('kgs');

  const calculateBmi = () => {
    if(!height || !weight){
      alert("Please enter height and weight");
      return;
    }
    let weightInPounds = parseFloat(weight);
    const heightInMetres = parseFloat(height) /100;

    if(unit === 'lbs'){
      weightInPounds *= 0.453592;
    }

    const bmiValue = (parseFloat(weightInPounds) / (heightInMetres* heightInMetres)).toFixed(2);
    setBmi(bmiValue)
    let bmiStatus = '';

    if (bmiValue < 18.5) {
      bmiStatus = 'Underweight';
    } else if (bmiValue < 24.9) {
      bmiStatus = 'Normal weight';
    } else if (bmiValue < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obesity';
    }
    setStatus(bmiStatus);

  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className='max-w-md mx-auto p-5 flex flex-col bg-gray-100 rounded-lg shadow text-center'>
        <h1 className='text-gray-800 text-xl font-semibold'>
          BMI Calculator
        </h1>
        <div className='my-3'>
          <label className='text-base block mb-2'>
            Height (in cms)
          <input 
          className='w-full p-3 mt-2 border text-base rounded-md'
          type='number' 
          value={height} 
          onChange={(e) => setHeight(e.target.value)}
          placeholder='Enter height in cms' />
          </label>
          <label className='text-sm block mb-2' for='weight'>
            Weight
            <select 
            className='m-1 rounded-sm p-1' 
            id='weight' 
            name='weight'
            value={unit}
            onChange={(e) => setUnit(e.target.value)}>
              <option value='kgs'>Kgs</option>
              <option value='lbs'>Lbs</option>
            </select>
          <input
          className='w-full p-3 mt-2 border text-base rounded-md' 
          type='number' 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)}
          placeholder={`Enter weight in ${unit}`} />
          </label>
        </div>
        <button 
        className='px-3 py-2 mt-3 text-sm bg-green-400 hover:bg-orange-500 text-white border-none rounded-md cursor-pointer'
        type='submit' onClick={calculateBmi}>Calculate</button>
        {bmi && 
          <div className='mt-5 text-gray-800'>
            <h3>Your BMI: {bmi}</h3>
            <h3>Your status: {status}</h3>
          </div>
        }
    </div>
    </div>
  )
}
