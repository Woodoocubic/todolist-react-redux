import React, {Component} from  'react';
import store from './store/index';
import {connect} from 'react-redux';

class TodoList extends Component {
    render(){
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button onClick={this.props.handleClick}>submit</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return <li key={index} onClick={this.props.handleDelete}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list: state.list
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
        },
        handleClick(){
            //console.log('123');
            const action={
                type:'add_item'
            }
            dispatch(action);
        },

        handleDelete(){
            
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);