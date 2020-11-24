import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CharacterCounterInput = ({ text, defaults }) => {
	const maxLength = 280;
	const [ value, setValue ] = useState('');

	function handleClick(text) {
		setValue(prevValue => prevValue += text);
	}

	function handleChange(e) {
		setValue(e.currentTarget.value);
	}

	return (
		<div className={`counterInput ${value.length > maxLength && 'tooLong'}`}>
			<div>
				{defaults.map(b => {
					return <button onClick={() => handleClick(b)} key={b}>{b}</button>;
				})}
			</div>
			<textarea placeholder={text} value={value} onChange={() => handleChange(b)} />
			<div>{value.length}/{maxLength}</div>
		</div>
	);
};

const App = () => {
	let defaultMoods = ['Great', 'Okay', 'Bad'];

	return (
		<section>
			<h2>Mood Tracker</h2>
			<CharacterCounterInput text={'How was your day?'} defaults={defaultMoods} />
		</section>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
