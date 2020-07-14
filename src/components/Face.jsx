import React from 'react';

const Face = (props) => {
    return (
        <div className="face">
            {props.children}
        </div>
    );
};

export default Face;