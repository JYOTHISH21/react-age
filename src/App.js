import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {

  
  const [state, setState] = React.useState({
    age: 0
  });
  
  const handleKeyPress = (e) => {
    const a = e.target.value;
    const detAge = (a) => {
      let t=new Date(), b=new Date(a), diff=t.getTime() - b.getTime();
      let y=Math.floor(diff/31556736000);

      return y;
    }
    
    setState({
      age: detAge(a),
    });
  }


  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h3>Enter Your Date of Birth</h3>
      <form>
        <div className = "container">
          <input type='date' id='dob' onChange={handleKeyPress}/>
        </div>
      </form>
      <h3><div className='num'>You are {state.age} years old</div> </h3>
      
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
