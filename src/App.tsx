import logo from './g-logo.svg';
import './App.scss';
import Profile from './components/profile/profile';
import Project, { Iprops } from './components/project/project';
import React , {useState, useEffect} from 'react';

import imgOne from  './assets/starbucks.png';
import imgTwo from  './assets/mcdonalds.png';


function App() {

const [state, setState] = useState([] as Iprops[]);

useEffect(() => {
  setState(
    [
      {id: 56784777, img: imgOne, name: 'Authentications SMS' , topics: ['Angular','Mongo', 'NodeJS']},
      {id: 44676545, img: imgTwo, name: 'PWA Store' , topics: ['React','GQL', 'NodeJS']},
    ]
  );
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
       <div className="button-header-container">
       <button className="accout"></button>
        <button className="menu"></button>
       </div>
      </header>
      <Profile />
      <div className="saparator"></div>
      {state.map((item)=><Project key={item.id} {...item} />)}
    </div>
  );
}

export default App;
