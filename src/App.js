import './App.css';
import NavigationBar from './Components/NavBar';
import TopContainer from './Components/TopContainer';
import BottomContainer from './Components/BottomContainer';
import RightContainers from './Components/RightContainers';

function App() {
  return (
    <div className="Wrapper">
      <NavigationBar />
        <div className='Containers'>
          <div className='leftContainers'>
            <TopContainer />
            <BottomContainer />
          </div>
          <div className='rightContainer'>
            <RightContainers />
          </div>
        </div>
    </div>
  );
}

export default App;
