import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="title">
      <Logo  />
      <Searchbar />
      <UserIcon />
    </div>
  );
}

export default App;



const   Logo=()=>{
  return(
          <img alt="this represents image tag"></img>
  
  )
}


const Searchbar=()=>{

    return(

      <input  className="input" placeholder='enter a name'></input>
    )

  }

const UserIcon=()=>{


  return(
    <h1>this is icon</h1>
  )
}
