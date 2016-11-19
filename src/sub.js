// const React = require('react');
// const ReactDOM = require('react-dom');

// import style from './index.css';

// const App = React.createClass({
// 	render(){
// 		return (
// 			<div className={style.main}>Reacting15...{/**/}</div>
// 		);
// 	}
// });
// ReactDOM.render(<App />,document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import style from './index.css';

// class App extends React.Component {
// 	render(){
// 		return (
// 			<div className={style.main}>Reacting16...{/**/}</div>
// 		);
// 	}
// };

function Sub(){
	return (
		<div className={style.main}>Reacting_Sub_17...{/**/}</div>
	);
}
ReactDOM.render(<Sub />,document.getElementById('root'));