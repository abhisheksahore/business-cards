import React from 'react';
import './PageNotFound.css';
import error404 from '../../assets/error404.png'

const PageNotFound = () => {
    return (
        <div id="wrapper">
            <img src={error404} />
        </div >
    )
}

export default PageNotFound