var React = require('react');
var ReactDOM = require('react-dom');
var LsfReact = require('lsf-react');

var App = React.createClass({
	render () {
		return (
			<div>
				<LsfReact />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
