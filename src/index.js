// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <div>Salom React</div>
   
//   </React.StrictMode>
// );
import React from "react";
import  ReactDOM  from "react-dom/client";
import {App,Menu} from './App'

const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode>
<App/>
<Menu/>
</React.StrictMode>
)
