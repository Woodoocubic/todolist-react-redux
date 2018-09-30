import React, {Component} from  'react';
import store from './store/index';
import {connect} from 'react-redux';

const TodoList =(props)=>{ 
    const {inputValue, list, changeInputValue, handleDelete}=props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={props.handleClick}>submit</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li key={index} onClick={handleDelete.bind(this,index)}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
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

        handleDelete(index){
            const action={
                type:'delete_item',
                index
            }
            //alert (index);
            dispatch(action);
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);