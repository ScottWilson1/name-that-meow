import './App.css';
import { MenuButton, SideMenu } from './components/PageHeader.tsx';
import MeowImage from './components/MeowImage.tsx';
import AnswerInput from './components/AnswerInput';
import SubmitButton from './components/SubmitButton';
import React, {useEffect, useState} from 'react';
import Result from './components/Result';
import { Stack } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [totalMeows, setTotalMeows] = useState(0);

  const toggleSideMenu = () => {
      return setOpen(!open);
  }

  useEffect(() => {
    const fetchMeow = async () => {
      const data = await fetch('http://localhost:5000/random');
      const json = await data.json();
      const key = Object.keys(json)[0];
      setName(key);
      setImage(json[key]);
    }
      fetchMeow().catch(console.error); 
  }, [totalMeows]);

  const inputChange = (evt) => {
    setAnswer(evt.target.value);
  };

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const handleClick = async () => {
    validateAnswer();
    console.log('start timout');
    await sleep(600);
    console.log('end timeout');
    setAnswer('');
    setResult('');
    setTotalMeows(totalMeows + 1);
  };

  const validateAnswer = () => {
    console.log("name = " + name);
    console.log("answer = " + answer)
    if(name === answer) {
      setResult("correct");
      setNumberCorrect(numberCorrect + 1);
      console.log("numberCorrect = " + numberCorrect);
    } else {
      setResult("wrong");
    }
  };

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      handleClick();
    }
  }

  return (
    <div className="App">
      <header>
        {open && <SideMenu toggle={toggleSideMenu} />}
        {!open && <MenuButton toggle={toggleSideMenu} />}
        <h1>Name That Meow</h1>
      </header>
      <main className='container'>
        <h2>Mew's this?</h2>
        <Stack alignitems='center'>
          <MeowImage className='meow-image' img={image} />
          <Stack direction='row'>
            <AnswerInput onChange={inputChange} onKeyPress={handleKeyPress} value={answer} />
            <SubmitButton onClick={handleClick} />
          </Stack>
          <Result result={result} />
        </Stack>
      </main>
    </div>
  );
}

export default App;
