import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.module.css';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state={
      persons:[
        {id:'a1',name:'Max',age:28},
        {id:'a2',name:'Manu',age:29},
        {id:'a3',name:'Stephanie',age:26}
      ],
      otherState:'some other value',
      showPersons:false,
      toggleClicked:0
    }
  }
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  componentWillRecieveProps( nextProps ){
    console.log('[UPDATE Perons.js] Inside componentWillRecieveProps');
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
    this.setState((prevState,props)=>{
      return{
        showPersons:!doesShow,
        toggleClicked:prevState.toggleClicked+1
      }
    });
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons=null;

    if(this.state.showPersons){
       persons=<Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>;
    }
   
    return (
            <Aux>
              <Cockpit 
                  appTitle={this.props.title}
                  showPersons={this.state.showPersons} 
                  persons={this.state.persons}
                  clicked={this.togglePersonHandler}/>
                  {persons}
            </Aux>
    );
  }
}

export default withClass(App,classes.App);
