// create your App component here
import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            pplInSpace:[]
        }
    }

    componentDidMount() {

        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(({people}) => this.setState({ pplInSpace: people }))
    
      }
    

    render(){
        return(
            <div>
            {this.state.pplInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
          </div>
        )
    }
}

export default App;