import * as React from 'react';

const logProps = (WrappedComponent) => (
	class withLoggedProps extends React.Component {
		componentWillMount(nextProps) {
			console.log('Next props:', nextProps);
			console.log('Current props:', this.props);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}
);

export default logProps;
