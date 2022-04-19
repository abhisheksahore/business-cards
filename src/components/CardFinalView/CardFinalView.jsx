import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import PageNotFound from '../PageNotFound/PageNotFound';
import ScreenArea from '../ScreenArea/ScreenArea';
import './CardFinalView.css';

const CardFinalView = () => {

    const { currentUser } = useContext(AuthContext);

    const { pathname } = useLocation();
    const [cardData, setCardData] = useState();
    const [error, setError] = useState()
    // useEffect(() => {
    //     setCardId();
    // }, [])

    const fetchCards = async (newToken) => {
        const promise = await fetch(process.env.REACT_APP_API_URL+`/user/card/getCard?id=${pathname.split('/')[pathname.split('/').length - 1]}&isCount=${true}`, {
            method: "get",
            headers: {
                token: newToken,
            }
        })
        const data = await promise.json();
        if (data.status === 'success') {
            setCardData(data.data)
        } else if (data.status === 'error') {
            setError(data.message);
        }
    }

    useEffect(async () => {
        let newToken = '';
        if (currentUser) {
            newToken = await currentUser.getIdToken(true);
            fetchCards(newToken);
        } else if (currentUser === null) {
            fetchCards(newToken);
        }
    }, [currentUser]);


    useEffect(() => {
        console.log(cardData);
    }, [cardData])

    return (
        <>
            {!error ?
                <div className='cardFinalView__screen_area_wrapper'>
                    <div className='cardFinalView__screen_area'>
                        <ScreenArea formData={cardData} edit={true} />
                    </div>
                </div> : 
                <PageNotFound />
            }
        </>
    )
}

export default CardFinalView