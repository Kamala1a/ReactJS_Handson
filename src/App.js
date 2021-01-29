
import { useState } from 'react';
import Setup from './tutorial/10-PropTypes';

function App() {
  const [textSwitch, setTextSwitch] = useState(true);
  return (
    <div className='container'>
      <Setup />
    </div>
  );
}

export default App;