import React from 'react';

const Image = (props) =>{
    const { url } = props;
    return (
        <div>
            <img 
            src = {url} 
            alt = 'Todays Photo' 
            />
        </div>
    );
};
export default Image;