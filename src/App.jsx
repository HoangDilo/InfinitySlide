import { useState } from 'react'
import './App.css'
import Title from './components/title'
import Slide from './components/slide'
import Button from './components/button'

function App() {
  const [pointer, setPointer] = useState(5);
  const [time, setTime] = useState(1);
  const [st, setSt] = useState(false);

  const resetPointer = () => {
    console.log('end transition');
    if (pointer === 9) {
      console.log('We need to restart');
      setTimeout(() => {
        //console.log('rerendering...');
        setTime(1);
        setPointer(6);
      }, 10);
      setTime(0);
      setPointer(5);
    } else if (pointer === 1) {
      console.log('we need to restart');
      setTimeout(() => {
        //console.log('rerendering...');
        setTime(1);
        setPointer(4);
      }, 10);
      setTime(0);
      setPointer(5);
    }
  }

  const handleClickLeft = () => {
    setSt(true);
    setTimeout(() => {
      setSt(false);
    }, 1000);
    setPointer((pointer) => pointer - 1)
  }

  const handleClickRight = () => {
    setSt(true);
    setTimeout(() => {
      setSt(false);
    }, 1000);
    setPointer((pointer) => pointer + 1)
  }

  return (
    <>
      <div className='background'>
      </div>
      <div className='container'>
        <Title />
        <Slide position={-516 * (pointer - 1)} cb={resetPointer()} time={time} />
        <Button callBackLeft={handleClickLeft} callBackRight={handleClickRight} buttonSt={st}/>
      </div>
    </>
  )
}

export default App
