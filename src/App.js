/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 개발 스터디']);
  const [like, setLike] = useState(0);

  const [modal, setModal] = useState(false);
  const [clickTitle, setClicktitle] = useState(0);

  const [input, setInput] = useState('');

  function newArray() {
    let newArray = [...title];
    newArray.unshift(input);
    setTitle(newArray);
  }
  // function newTitle() {
  //   const newArray = [...title];
  //   newArray[0] = '여자 코트 추천';
  //   setTitle(newArray);
  // }

  // function sorting() {
  //   let sortArray = [...title];
  //   sortArray = sortArray.sort();
  //   setTitle(sortArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>

      {/* <div className="list">
        <h3> { title[0] } <span onClick={ ()=>{ setLike(like + 1) } }>♥</span> {like} </h3>
        <p>12월 24일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>12월 25일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={ () => { setModal(true)} }> { title[2] } </h3>
        <p>12월 26일 발행</p>
        <hr/>
      </div>
      <button onClick={ newTitle }>타이틀 변경 버튼</button>
      <button onClick={ sorting }>가나다순 정렬 버튼</button> */}

      {
        title.map( (write, index) => {
          return  (
          <div className="list" key={index}>
            <h3 onClick={ () => { setClicktitle(index) } }> { write } <span onClick={ ()=>{ setLike(like + 1) } }>♥</span> {like} </h3>
            <p>12월 24일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e) => { setInput(e.target.value)} }/>
        <button onClick={ newArray }>저장</button>
      </div>


      {/* <input onChange={ (e) => { setInput(e.target.value)} }></input> */}

      <button onClick={ () => {setModal(!modal)} }>모달창 버튼</button>
      {
        modal === true
        ? <Modal title={title} clickTitle={clickTitle}></Modal>
        : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 : { props.title[props.clickTitle] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
