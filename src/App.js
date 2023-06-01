import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';



function App() {
  // state
  const [principle, setprinciple] = useState(0)
  const [rate, setrate] = useState(0)
  const [year, setyear] = useState(0)
  const [interest, setinterest] = useState(0)

  const handlecalculate = (e) => {
    if (principle == 0 || rate == 0 || year == 0) {
      alert('Please enter valid input!!!')
    }
    else {
      console.log(principle);
      console.log(rate);
      console.log(year);
      let output = principle * year * rate / 100
      setinterest(output);

    }
  }

  const handlerate = () => {
    setinterest(0)
    setprinciple(0)
    setrate(0)
    setyear(0)
  }

  return (
    <div className='app'>
      <div className="container">
        <div className="heading_text">
          <h1 className='main -heading'>Simple Interest Calculator</h1>
          <p className='heading_two'>Calculate your simple intrest easily</p>
        </div>
        <div className="total_amount_card">
          <div className="card_text">
            <h3 className='total_amount-symbol'>₹ {interest}</h3>
            <p className='total_amount_para'>Total Simple Interest</p>
          </div>
        </div>
        <form>
          <div className="input_field">
            <TextField id="outlined-basic" label="Principle Amount" variant="outlined"
              value={principle || ""} onChange={e => setprinciple(e.target.value)} />
          </div>

          <div className="input_field">
            <TextField id="outlined-basic" label="Rate of Interest(p.a)" variant="outlined"
              value={rate || ""} onChange={e => setrate(e.target.value)}
            />
          </div>

          <div className="input_field">
            <TextField id="outlined-basic" label="Time Period(Yr)" variant="outlined"
              value={year || ""} onChange={e => setyear(e.target.value)}
            />
          </div>

          {/* button */}
          <Stack className='btn_group' direction="row" spacing={2}>
            <Button onClick={handlecalculate} style={{ backgroundColor: 'black' }} className='btn' variant="contained">CALCULATE</Button>
            <Button onClick={handlerate} style={{ color: 'black' }} className='btn' variant="outlined">RESET</Button>
          </Stack>

        </form>
      </div>
    </div>
  );
}

export default App;
