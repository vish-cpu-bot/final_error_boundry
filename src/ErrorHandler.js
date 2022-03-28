import React from "react";

// const ErrorHandler = ({error}) => {
//   return (
//     <div >
//       <p>An error occurred:</p>
//       <pre>{error.message}</pre>
//     </div>
//   )
// }

class ErrorHandler extends React.Component {
  constructor() {
    super();
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.props.error) {
      return (
        <div>
          <h2>An Error Has Occured</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }else{

      return this.props.children;
    }
  }
 
}

export default ErrorHandler;
