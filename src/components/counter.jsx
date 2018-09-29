import React, { Component } from 'react';


class Counter extends Component {
    state = {  
        imageUrl:'https://picsum.photos/200'
    };

    render() { 
        return (
        <div> 
           <span  className={this.getBadgeClasses()}>{this.formatCount()}</span> 
           <button onClick={ () => this.props.onIncrement(this.props.counter.id) } className="btn btn-secondary btn-sm">Increment</button>
           <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm">Delete</button>
        </div>
        );
    }


    
    getBadgeClasses()
    {
        let classes="badge m-2 badge-";
        classes +=this.props.counter.defaultValue==0?"warning":"primary";
        return classes;

    }

    formatCount(){
        return this.props.counter.defaultValue==0?<h4>Zero</h4>:this.props.counter.defaultValue;

    }
}
 
export default Counter;