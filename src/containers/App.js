import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import { StyleRoot } from 'radium/lib';
import classes from './App.css';


class App extends Component {
  state={
    persons:[
      {id:'a1',name:'Max',age:28},
      {id:'a2',name:'Manu',age:29},
      {id:'a3',name:'Stephanie',age:26}
    ],
    otherState:'some other value',
    showPersons:false
  }
  
  nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });

    const person={
      ...this.state.persons[personIndex]
    };
    // const person=object.assign({},this.state.persons[personIndex])

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons})
  }

  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render() {
    let persons=null;

    if(this.state.showPersons){
       persons=<Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>;
    }
   
    return (
        <StyleRoot>
            <div className={classes.App} ali="ali">
              <Cockpit 
                  showPersons={this.state.showPersons} 
                  persons={this.state.persons}
                  clicked={this.togglePersonHandler}/>
                  {persons}
            </div>
        </StyleRoot>
    );
  }
}

export default App;
