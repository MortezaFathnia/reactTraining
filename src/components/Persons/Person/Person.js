import React,{Component} from 'react';
import classes from './Person.module.css';
import withClasses from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
// import PropTypes from 'prop-types';


class Person extends Component{
    constructor(props){
        super(props);
        this.inputElement=React.createRef();
    }
    componentDidMount(){
        // if(this.props.position==0){
        //   this.inputElement.focus(); 
        // }
        //todo:it is not working!!
        // this.lastPersonRef.current.focus(); 

    }

    focus(){
        this.inputElement.current.focus();
    }

    render(){
        return( 
            <Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    ref={this.inputElement}
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
            )
    }
}
//todo: why is not working?
// Person.prototype={
//     click:PropTypes.func,
//     name:PropTypes.string,
//     age:PropTypes.number,
//     changed:PropTypes.func
// };

export default Person;