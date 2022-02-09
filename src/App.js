import logo from './logo.svg';
import './App.css';
import Cards from './Cards';
import Smovies from './Sarray';



// function cardsmap(cvar){

//   return (
//     <card
//      imgsrc= {cvar.imgscr}
//      title = {cvar.title}
//      sname = {cvar.sname}
//      link = {cvar.link}
//     />
//   )
// }


function App() {
  return (
    <div>
        
        
        <h1 className='heading1'>List OF TOP 5 SERIES</h1>
        {/* {Smovies.map(cardsmap)}
    
    
    <Cards imgsrc={Smovies[0].imgsrc} 
          title={Smovies[0].title} 
          sname ={Smovies[0].sname} 
          // link ={Smovies[0].link}  */}          

    { Smovies.map((val)=>{
    return (
  
  <Cards
  key = {val.id} 
  imgsrc={val.imgsrc} 
  title={val.title} 
  sname ={val.sname} 
  link ={val.link}
  />
   )
    })}
  </div>
  );
}

export default App;
