import React from 'react';
import PropTypes from 'prop-types';


function Food({name, picture, rating}){
  return( 
  <div>
  <h2>I like {name}  </h2>
  <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
  </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: 'Kimchi사진왜안나오긔',
    image: 'http://08food.com/web/product/big/201801/33_shop1_243196.jpg',
    rating: 2,
  },
  { 
    id: 2,
    name: '6gaejang',
    image: 'https://t1.daumcdn.net/cfile/tistory/99BB91465F87F20639',
    rating: 5,
  },
  { 
    id: 3,
    name: '매운맛을 보여주는 새우깡',
    image: 'https://img.etoday.co.kr/pto_db/2018/08/600/20180803103453_1236701_1200_550.jpg',
    rating: 3,
  },
];

function App() {
  return (
    <div>
      <h1>{foodLike.map(inja => (
        <Food name = {inja.name} picture={inja.image} key={inja.id} rating={inja.rating}/>
      ))} </h1>
      
    </div>
    
  );
}

export default App;