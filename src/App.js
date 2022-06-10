
import { useState } from 'react';
import './App.css';

function App() {
  const movieList=[
    {
      poster:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG  ",
      name:"RRR",
      rating:8.8,
      summary:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments. "
    },
    {
      poster:" https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      name:"Iron Man 2 ",
      rating:7,
      summary:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. "
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg ",
      name:"Jai bhim ",
      rating:8.8 ,
      summary:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case ",
    },
    {
      poster:" https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      name:"Bahubali ",
      rating:8 ,
      summary:"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy. ",
    },
    {
      poster:"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc= ",
      name:"Ratatouille ",
      rating: 8,
      summary:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him. ",
    },
    {
      poster:" https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      name:" M.S. Dhoni: The Untold Story",
      rating:7.9,
      summary:" M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    }
  ]

  return (
    <div className="App">
      {movieList.map((mv)=><Movie movie={mv}  />)}
    </div>
  //   <div className='movie-container'>
  //   <img className='mpics' src={movie.poster} alt="movie-name" />
  //   <div className='movie-rating'>
  //    <h3>{movie.name}</h3>
  //   <p>⭐{movie-specs}</p></div>
  //   <div>{movie.summary}</div> 
  // </div>
  );
}

export default App;


function Movie(movie){ //object destructuring
  //conditional styling
    
    // const styles={
    //   color:movie.rating > 8 ?"green" : "red",
    // };

    // const parastyles={
    // display: show ? "block" : "none",
    // }

    // const[show,setshow]=useState(true)
  
  return(
    <div className='movie-container'>
      <img className='movie-poster' src={movie.poster} />

       <div className='movie-specs'>
         <h3 className='movie-name'>{movie.name}</h3>
         <p className=' movie.rating'>⭐{movie.rating}</p>
         </div>

         <button >toggole summary</button>
         <p  className='movie-summary'>{movie.summary}</p>
        {/* conditional styling */}
        {/* <p style={parastyles} className='movie-summary'>{movie.summary}</p>  */}


{/* conditional rendering */}

{/* {show ? <p  className='movie-summary'>{movie.summary}</p> :null} */}
        <Counter />
    </div>
  )
}


function Counter(){
  const [Like,setLike]=useState(0)
  const [disLike,setdisLike]=useState(0)
  return(
    <div>
      <button onClick={()=>setLike(Like+1)}>👍{Like}</button>
      <button onClick={()=>setdisLike(disLike+1)}>👍{disLike}</button>
    </div>
  )
}