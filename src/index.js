import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Transition } from 'react-transition-group/Transition';



//components
import TGroup from './component/tgroup';

class App extends Component {

  state = {
    show: false
  }

  showDiv = () => {
    this.setState({
      show: !this.state.show ? true : false
    });  
  }

  render(){
    return(
      <div>
        <BrowserRouter>
            <Route path="/group" component={TGroup}/>
        </BrowserRouter>
      </div>

      // <div>
      //   <Transition
      //     in={this.state.show}
      //     timeout={2000}
      //     mountOnEnter
      //     unmountOnExit
      //   >
      //   {(state) => {
      //     return(
      //       <div style={{
      //         background: 'red',
      //         height: '100px',
      //         transition: 'all 2s ease',
      //         opacity: state === 'exited' || state === 'exiting' ? 0 : 1
      //       }}>
      //       <p>{state}</p>
      //       </div>
      //     );
      //   }}
      //   </Transition>        
      //   <div className=""
      //     onClick={this.showDiv}
      //   >
      //     Click me
      //   </div>
      // </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));