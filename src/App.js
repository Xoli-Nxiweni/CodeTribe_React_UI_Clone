import './App.css';
import NavigationBar from './Components/NavBar';
import TopContainer from './Components/TopContainer';
import BottomContainer from './Components/BottomContainer';
import RightContainers from './Components/RightContainers';

// function App() {
//   return (
//     <div className="Wrapper">
//       <NavigationBar />
//         <div className='Containers'>
//           <div className='leftContainers'>
//             <TopContainer />
//             <BottomContainer />
//           </div>
//           <div className='rightContainer'>
//             <RightContainers />
//           </div>
//         </div>
//     </div>
//   );
// }

let App = () =>{
  return(
    <div className='Wrapper'>
      <div className='NavBar'><NavigationBar/></div>
      <div className='TopCont'><TopContainer/></div>
      <div className='BottomCont'><BottomContainer/></div>
      <div className='RightCont'><RightContainers/></div>
    </div>
  )
}
export default App;
