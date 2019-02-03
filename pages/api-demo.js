import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';

const ElementList = props => {
	if (props.loading) {
		return <p>Loading...</p>;
	}

	if (!props.arr) {
		return null;
	}

	return (
		<ul className="element_list" style={{ padding: '0' }}>
			{props.arr.map(elem => (
				<div
					className="element"
					key={`${elem.title.replace(/ /g, '-')}_${elem.number}`}
				>
					<h3>{elem.title}</h3>
					<p>Number: {elem.number}</p>
				</div>
			))}
		</ul>
	);
};

class ApiDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searching: 'customID',
			loadingOne: false,
			oneElem: null,
			number: '5',
			loadingArr: false,
			arrElem: [],
		};

		this.getOneElem = this.getOneElem.bind(this);
		this.getArrElem = this.getArrElem.bind(this);
	}

	async getOneElem() {
		this.setState({
			loadingOne: true,
		});

		const { searching } = this.state;

		if (searching.replace(/ /g, '') === '') {
			alert('Please, no empty strings');
			this.setState({
				loadingOne: false,
			});
			return;
		}

		const response = await fetch(`${location.origin}/api/v1/json/${searching}`);
		const result = await response.json();

		this.setState({
			loadingOne: false,
			oneElem: result,
		});
	}

	async getArrElem() {
		this.setState({
			loadingArr: true,
		});

		const { number } = this.state;

		const response = await fetch(`${location.origin}/api/v1/json?n=${number}`);
		const result = await response.json();

		this.setState({
			loadingArr: false,
			arrElem: result,
		});
	}

	render() {
		const {
			searching,
			loadingOne,
			oneElem,
			number,
			loadingArr,
			arrElem,
		} = this.state;

		return (
			<Layout style={{ textAlign: 'center' }}>
				<h1>Api Demo - Fetch from API</h1>

				<h2>Get element from API</h2>
				<pre>
					Fetch /api/v1/json/
					<input
						type="text"
						value={searching}
						onChange={e => this.setState({ searching: e.target.value })}
					/>
				</pre>

				<button onClick={this.getOneElem}>Fetch</button>
				<ElementList loading={loadingOne} arr={oneElem} />

				<h2>Get several elements</h2>
				<pre>
					Fetch /api/v1/json?n=
					<input
						type="number"
						min="1"
						value={number}
						style={{ width: '30px' }}
						onChange={e => this.setState({ number: e.target.value })}
					/>
				</pre>

				<button onClick={this.getArrElem}>Fetch</button>
				<ElementList loading={loadingArr} arr={arrElem} />
			</Layout>
		);
	}
}

export default ApiDemo;
