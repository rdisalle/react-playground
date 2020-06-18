import React from 'react';


//To create the date-time when the TheDate component instances are created (instantiated), we'll use a new method in React classes, the constructor.
class HelloWorld extends React.Component {
   state = {
       what: 'world'
   }

    render() {
        return (<div className='HelloWorld'>
            <p>Hello, {this.state.what}!</p>
            <button onClick={() => this.setState({what: 'world'})}>
                World
            </button>
            <button onClick={() => this.setState({what: 'friend'})}>
                Friend
            </button>
            <button onClick={() => this.setState({what: 'React'})}>
                React
            </button>
        </div>
        )
    }
}

export default HelloWorld;
