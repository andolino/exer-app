import React, { Component } from 'react';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import style from '../css/style.css';

export default class TGroup extends Component{

  state = {
    items: [],
    show: false
  }

  addItems(){
    let newItems = [...this.state.items, Math.floor(Math.random() * 58) + 1]
    
    this.setState({
      items: newItems
    });
  }

  removeItems(){
    let d = this.state.items.slice(0, -1);

    this.setState({
      items: d
    });
  }

  displayItems(){
    return this.state.items.map((itm, i) => (
        <CSSTransition
          classNames={style.item}
          timeout={500}
          key={i}
          onEntering={(node) => {
            node.classList.add(style.itmentering);
          }}
          onEntered={(node) => {
            node.classList.add(style.active);
          }}
        >
          <div className={style.item} key={i}>{itm}</div>
        </CSSTransition>
    ));
  }

  render(){
    return(
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
          {this.displayItems()}
        </TransitionGroup> 

        <div>
          <div className={style.primary} onClick={() => {this.addItems()}}>Add</div>
          <div className={style.default} onClick={() => {this.removeItems()}}>Remove</div>
        </div>
      </div>
    );
  }

}
