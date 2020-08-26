import React from 'react-dom';

const Header = props => {
    const { titlename, date } = props;

    return(
        <div>
            <h2>{titlename}</h2>
            <p>{date}</p>
        </div>
    );
};

export default Header;