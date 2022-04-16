import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import IphoneMockup from '../IphoneMockup/IphoneMockup'
import Loader from '../Loader/Loader';
import './CardView.css'

function CardView() {

  const {currentUser} = useContext(AuthContext);

  const { pathname } = useLocation();
  const [cardId, setCardId] = useState();
  const [cardData, setCardData] = useState();
  useEffect(() => {
      if (pathname && pathname.includes('/card/')) {
          setCardId(pathname.split('/')[2]);
      }
  }, [])

  useEffect(async () => {
    if (cardId && currentUser) {
      const newToken = await currentUser.getIdToken(true);
      const promise = await fetch(`/user/card/getCard?id=${cardId}`, {
        method: "get",
        headers: {
          token: newToken,
        }
      })
      const data = await promise.json();
      if (data.status === 'success') {
        setCardData(data.data)
      }
    }
  }, [cardId, currentUser]);
  

  useEffect(() => {
    // console.log(cardData);
  }, [cardData])
  

  return (
    <>
    {
      currentUser?
      <div className='card_view_container'>
          <IphoneMockup formData= {cardData} />
      </div>:
      <Loader />
    }
    </>
  )
}

export default CardView