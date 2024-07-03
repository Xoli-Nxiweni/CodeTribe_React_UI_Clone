import './App.css';
import NavigationBar from './Components/NavBar';
import TopContainer from './Components/TopContainer';

function App() {
  return (
    <div className="Wrapper">
      <NavigationBar />
      <div className='Containers'>
      <TopContainer />
      </div>
    </div>
  );
}

export default App;
