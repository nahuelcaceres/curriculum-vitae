import React, { useState } from 'react'

//import React, { Component } from 'react'

//Modelo de componente con el modo Class
/* class HelloWorld extends Component {
    //State
    state = {
        active: true,
    }
    
    //HandleState
    handleClick = () => {
        this.setState({
            active: !this.state.active,
        });
    }
    
    //Render
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Ocultar</button>
          {this.state.active && 
              <h1>Hola Mundo!!!</h1>
          }
        </div>
      )
    }
}

export default HelloWorld; */

const HelloWorld = () => {
    //State
    const [active, setActive] = useState(true);

    //HandleState
    const handleClick = () => {
        setActive(!active);
    }

    return(
        <div>
            <button onClick={handleClick}>Ocultar</button>
            {active && //Si esta activo.
                <h1>Hola Mundo Con Redux!!</h1>
            }
        </div>
    );
};

export default HelloWorld;