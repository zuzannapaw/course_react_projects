import classes from './Input.module.css'
import {useRef, useImperativeHandle} from 'react'
import React from 'react';

const Input = React.forwardRef((props,ref) =>{
    const inputRef = useRef();

    const activate = ()=>{
        inputRef.current.focus();
    }

    useImperativeHandle(ref, ()=>{
        return{
            focus:activate
        }
    })

    return  <div
    className={`${classes.control} ${
     props.isValid === false? classes.invalid: ''
    }`}
  >
    <label >{props.label}</label>
    <input
      //type={props.type}
      ref={inputRef}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
})

export default Input