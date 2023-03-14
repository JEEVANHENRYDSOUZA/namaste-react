
import './App.css';

import { header } from './header';
import  {section } from './section'
function App() {
  return (
    <div className="body">
      {header()}
      {section()}
    </div>
  );
}

export default App;
