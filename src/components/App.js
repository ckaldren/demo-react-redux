// This component handles the App template used on every page.
import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.array.isRequired
};

export default App;