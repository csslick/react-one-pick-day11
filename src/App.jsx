import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const data = [
    { name: '임영웅', image: '/images/iyw.jpg' },
    { name: '아이유', image: '/images/iu.jpg' },
    { name: '싸이', image:'/images/psy.jpg' },
    { name: '이찬원', image: '/images/leechan.jpg' },
    { name: '정동원', image: '/images/jdw.jpg' },
    { name: '강다니엘', image: '/images/kd.jpg' },
    { name: '김호중', image: '/images/khj.jpg' },
];
  const [star, setStar] = useState(data); // data를 state에 저장하는 변수
  const [pick, setPick] = useState([]); // 선택 변수(2개씩)

  // pair 가져오기
  const getPair = () => {
    let pick1 = star[0]
    let pick2 = star[1]
    setPick([pick1, pick2])
  }

  // 시작하면 pick 업데이트
  useEffect(() => {
    getPair();
  }, [star])  // star변수가 update 확인
  console.log(pick);

  // 클릭한 반대편 자료가 삭제됨
  const removeItem = (id) => {
    // id값에 해당하는 자료 삭제
    console.log(id);
    const updateItem = star.filter((item, i) => {
      return i !== id; // id가 일치하는 자료는 제거
    })
    console.log('updateItem: ', updateItem);
    setStar(updateItem);
  }

  return (

    <div className="App">
      <h1>One Pick</h1>
      <div className="choice-box">
        {  
          // 참이면 버튼 표시
          // 데이터가 들어오면 버튼 표시
          pick.length > 0 &&
          <button 
            style={ { backgroundImage: `url(${pick[0].image})` }}
            onClick={() => { removeItem(1) }}
          >{pick[0].name}
          </button>
        }
        
        {
          // 데이터가 들어오고 star배열이 1개 이상이면 버튼 표시
          pick.length > 0 && star.length > 1 ? 
            <button onClick={() => { removeItem(0) }}>{pick[1].name}</button> : 
            <button></button>
        }
      </div>
    </div>
  )
}

export default App
