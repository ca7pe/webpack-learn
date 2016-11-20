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

function App(){
	return (
		<div className={style.main}>Reacting17...{/**/}</div>
	);
}

var a = require('bundle-loader!./a');

// require.ensure(['./a'], function(require) {
//   var a = require('./a');
// });

function delayCallBack(x) {
	return new Promise(resolve => {
		setTimeout(() => resolve(x),2000);
	});
}

async function b(x){
	var a = await delayCallBack(x);
	alert(a);
}

b(3);


ReactDOM.render(<App />,document.getElementById('root'));