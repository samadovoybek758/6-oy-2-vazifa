
import data from './assets/data/data.json';
import './App.css';
import Userlist from './componenets/userlist';


function App() {

  return (
    <>
      <div className="continer">
        <Userlist
          data={data}
        />
      </div>
    </>
  )
}

export default App
