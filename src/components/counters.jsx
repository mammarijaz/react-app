import React, { Component } from 'react';
import Counter from './counter';
import NavBar from './navbar';

class Counters extends Component {
    state = { counters:[],id:1 };
    render() {
        return (
           <React.Fragment>
              <NavBar totalCounter={this.state.counters.length} ></NavBar>  
              <button onClick={this.handlerReset} className="btn btn-gray-light">Reset</button>
              <button onClick={this.handlerAddCounter} className="btn btn-warning">Add</button>
              {this.state.counters.map( (counter)=><Counter 
                                                    key={counter.id} counter={counter} onIncrement={this.handlerIncrement}
                                                    onDelete={this.handleDelete} 
                                                    
                                                    />)}
           </React.Fragment>    
          );
    }

    handlerIncrement=(counterID)=>{
        const counters=this.state.counters;  
        const counter = this.state.counters.find( counter => counter.id === counterID );
        const index=counters.indexOf(counter);
        counter.defaultValue=counter.defaultValue + 1;
        counters[index]=counter;
        this.setState( {counters:counters} );    
    }

    handlerAddCounter = () =>{
        const counters=this.state.counters;
        counters.push( {id:this.state.id,defaultValue:1} );
        this.setState(  {id: this.state.id +1}  );
        this.setState(  {counters:counters}  );
    }

    handlerReset=() =>{
        const counters=this.state.counters;
        for (var i = 0; i < counters.length; i++) {
            counters[i].defaultValue=0;
        }
        this.setState( {counters:counters} );
    }

    handleDelete=(counterID)=>{
        
        var counters=this.state.counters;
        const counter = this.state.counters.find( counter => counter.id === counterID );
        const index=counters.indexOf(counter);
        counters.splice(index,1);
        console.log(counters);
    
        this.setState( {counters:counters } );


    }


}
 
export default Counters;