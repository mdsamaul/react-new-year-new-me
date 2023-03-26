import React from 'react';

const Button = (props) => {
    console.log(props.children);
    const { children } = props;
    console.log(children);
    return (
        <div>
            <button className="btn glass bg-error">{children}</button>
        </div>
    );
};

export default Button;