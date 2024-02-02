import PropTypes from 'prop-types';

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
	return (
		<header className="App-header">
			<h1>Santa Dominica Puros Cigars</h1>
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search for GFG Products..."
					value={searchCourse}
					onChange={courseSearchUserFunction}
				/>
			</div>
		</header>
	);
}

// Define PropTypes
SearchComponent.propTypes = {
    searchCourse: PropTypes.string.isRequired,
    courseSearchUserFunction: PropTypes.func.isRequired
};

export default SearchComponent;
