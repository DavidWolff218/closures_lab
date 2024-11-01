import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)

  const handleClick = () => {
      setTimeout(() => {
        setCounter(prevState => prevState + 1)
    }, 1000)
  }
 

  return (
    <div>
      {counter}
      <button onClick={handleClick}> Increment Counter </button>
    </div>
  );
}

export default App;
