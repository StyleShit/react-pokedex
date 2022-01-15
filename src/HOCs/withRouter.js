import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const withRouter = ( WrappedComponent ) => {
	return class Wrapper extends React.Component {
		render() {
			return (
				<Router>
					<WrappedComponent { ...this.props } />
				</Router>
			);
		}
	};
};

export default withRouter;
