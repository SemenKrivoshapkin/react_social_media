
import './App.css';
import Router from './Router/Router';
import Chat from './components/Chat/Chat';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  

  


  return (
    <div className="App">
      <ToastContainer />
      <Router />
      {/* <Chat /> */}
    </div>
  );
}

export default App;
