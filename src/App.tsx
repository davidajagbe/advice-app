import patternDivider from './/assets/pattern-divider-desktop.svg';
import iconDice from './/assets/icon-dice.svg';
import { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import axios from 'axios';
type Slip = {
  id: number;
  advice: string;
}

type AdviceResponse = {
  slip: Slip;
}
const App = () => {
  const [advice, setAdvice] = useState<string>('');
  const [slipId, setSlipId] = useState<number>(0);
  const [error, setError] = useState<string | null>('');
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);
  const [isloading, setIsLoading] = useState<boolean> (true);

  //Function to fetch random advice from the API
  const fetchAdvice = async () => {
    console.log('Entering Fresh Advice')
    // Check if 2 seconds have passed since the last fetch
    if(Date.now() - lastFetchTime < 2000) {
      setError('Using cached advice due to 2-second API cache.');
      return;
    }
    setIsLoading(true)
    setError(null);
    try {
      const response = await axios.get<AdviceResponse>('https://api.adviceslip.com/advice');
      const {slip} = response.data;
      setAdvice(slip.advice)
      setSlipId(slip.id)
      const currentTime = Date.now;
      setLastFetchTime(currentTime);
    }catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  };
  //Fetch advice component on mount
  useEffect(()=>{
    fetchAdvice()
  },
  []);
  //calls `fetchAdvice` when the dice div is clicked
  // const handDiceClick = () =>{
  //   fetchAdvice();
  // }
  return (
    <div className="bg-gray-700 w-80 h-50 rounded-lg text-center mt-[100px] m-auto app relative">
      <p className="text-green-300 text-[8px] pt-7 tracking-widest">ADVICE<span  className="pl-1">#{slipId}</span></p>
      <p className="text-gray-200 items-center p-4">{advice}</p>
      <img src={patternDivider} alt="" className='h-2 m-auto'/>
      <div onClick={() => fetchAdvice()} className="dice rounded-full bg-green-300 w-11 h-11 m-auto mt-6 flex items-center justify-center transition-all duration-300 hover:drop-shadow-green-200 drop-shadow-xl/50 hover:scale-110 cursor-pointer absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
        {isloading ?
        <PuffLoader
          color="#000"
          size={20}
          speedMultiplier={0.5}
        />
        : <img src={iconDice} alt="" className='w-4' />}
        
      </div>

    </div>
  )
}

export default App