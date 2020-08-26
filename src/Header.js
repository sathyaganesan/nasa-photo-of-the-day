import React from 'react-dom';

const Header = (props) => {
    const { title, date } = props;

    return (
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
        </div>
    );
};

export default Header;