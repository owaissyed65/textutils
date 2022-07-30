import React from 'react';

function Alert (props){
    const capitalize = (word) =>{
        const newWord = word.toLowerCase();
        return newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }
    return (
        
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.msg)}</strong> : {capitalize(props.alert.type)}
        </div>
        
    );
}

export default Alert;
