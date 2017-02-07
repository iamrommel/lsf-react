import React from "react";

export const Alert = (props) => {

    let {children, type} = props;
    type = type || 'danger';


    return (
        <div className={'alert alert-' + type}>
            {children}
        </div>
    );
}