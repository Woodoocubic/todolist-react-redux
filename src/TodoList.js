import React, {Component} from  'react';
import store from './store/index';
import {connect} from 'react-redux';

class TodoList extends Component {
    render(){
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button >submit</button>
                </div>
                <ul>
                    <li>dELL</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
    }
}

//store.dispatch, props  
const mapDispatchToProps=(dispatch)=>{
    return {
        changeInputValue(e){
            const action={
                type:'change_input_value',
                value: e.target.value
            }
            dispatch(action);
            //console.log(e.target.value);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);