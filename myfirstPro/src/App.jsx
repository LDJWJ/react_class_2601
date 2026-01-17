import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route, useNavigate, Link } from "react-router-dom";


function App() {
  // return 나오기 전까지 javascript 데이터 코드.
  // 
  const [count, setCount] = useState(0)   // 정수 선언
  const [movies, setMovies] = useState([
    {userName:"11", addresss:"성포동"},
    {userName:"22", addresss:"성포동1"},
    {userName:"33", addresss:"성포동2"}
  ]); // 배열 선언 

  function addMovie(movie) {
    setMovies([...movies, movie]);
  };

  // return 이후의 가로 안에 영역은 화면에 표시될 html 태그들이 나온다. 
  // jsx 코드라고 한다.
  return (
    <>
    <title> 오늘의 수업 실습 </title>
    <div> 
      { movies.map((items) => {
        return (
          <div> {items.userName} {items.addresss} </div>
        )
    }) }  </div>
    </>
  )
}

export default App
