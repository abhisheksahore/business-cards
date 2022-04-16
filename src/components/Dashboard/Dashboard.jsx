import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext'
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faPen, faMagnifyingGlass, faWeight, faEllipsisVertical, faXmark, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loader/Loader';


function Dashboard() {

    // State declaration
    const { logout, currentUser } = useContext(AuthContext)
    const [cards, setCards] = useState()
    const [profilePhoto, setProfilePhoto] = useState()
    const [openActionControl, setOpenActionControl] = useState([]);
    const [clickTargetX, setClickTargetX] = useState()
    const [clickTargetY, setClickTargetY] = useState();
    const [QRCodeUrl, setQRCodeUrl] = useState({});
    const [cardLimitReached, setCardLimitReached] = useState(false);
    const [showLimitMessage, setShowLimitMessage] = useState(false)

    const navigate = useNavigate();

    const fetchCards = async () => {
        const newToken = await currentUser.getIdToken(true);
        console.log(newToken)
        console.log(currentUser)
        const promise = await fetch(`/user/card/getAllCards`, {
            headers: {
                'Content-Type': 'application/json',
                'uid': `${currentUser.uid}`,
                'token': newToken
            },
            method: 'GET'
        });
        const data = await promise.json();
        return data
    }

    useEffect(async () => {
        if (currentUser === null) {
            navigate('/login')
        }


        if (currentUser) {
            const newToken = await currentUser.getIdToken(true);
            const promise = await fetch(`/user/auth/getUserDetails`, {
                headers: {
                    token: newToken
                }
            })
            const data = await promise.json();
            if (data.data.totalCards >= 2) {
                setCardLimitReached(true)
            } else {
                setCardLimitReached(false);
            }
        }
    }, [currentUser])


    const fetchPhoto = async (filePath) => {
        const newToken = await currentUser.getIdToken(true);
        const promise = await fetch(`/user/fileupload/getImageUrl`, {
            method: "POST",
            headers: {
                token: newToken,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                urls: [filePath]
            })
        });
        const data = await promise.json();
        console.log(data.urls[0]);
        return data.urls[0]
    }

    useEffect(async () => {
        if (currentUser) {
            const cardsData = await fetchCards();
            for (const card of cardsData.data) {
                console.log('before')
                if (card.Logo) {
                    card.Logo = await fetchPhoto(card.Logo);
                }
                console.log('after');
            }
            console.log("after everything")
            setCards(cardsData.data);
        }
    }, [currentUser])


    // const getQRCode = async (cardUrl) => {
    //     const newToken = await currentUser.getIdToken(true);
    //     const promise = await fetch(`/user/card/createQr`);
    //     const data = await promise.json();
    //     return data.data;
    // }

    useEffect(async () => {
        // setQRCodeUrl(undefined);
        let actionControl = {};
        console.log(cards);
        if (cards) {
            for (const card of cards) {
                actionControl[card.id] = false;
            }
            setOpenActionControl(actionControl)
        }
    }, [cards])




    const deleteCard = async (id) => {
        const newToken = await currentUser.getIdToken(true);
        const promise = await fetch(`/user/card/deleteCard?id=${id}`, {
            method: "PUT",
            headers: {
                token: newToken,
            }
        })
        const data = await promise.json();
        console.log(data);
        if (data.status === 'success') {
            const cardsData = await fetchCards();
            for (const card of cardsData.data) {
                console.log('before')
                if (card.Logo) {
                    card.Logo = await fetchPhoto(card.Logo);
                }
                console.log('after');
            }
            console.log("after everything")
            setCards(cardsData.data);
        }
        if (currentUser) {
            const newToken = await currentUser.getIdToken(true);
            const promise = await fetch(`/user/auth/getUserDetails`, {
                headers: {
                    token: newToken
                }
            })
            const data = await promise.json();
            if (data.data.totalCards >= 2) {
                setCardLimitReached(true)
            } else {
                setCardLimitReached(false);
            }
        }
    }

    const previewCard = async (cardId) => {
        navigate(`/card/${cardId}`);
    }
    const editCard = async (cardId) => {
        navigate(`/edit/${cardId}`);
    }


    useEffect(() => {
        console.log(openActionControl)
    }, [openActionControl])


    const publishCard = async (card) => {
        const newToken = await currentUser.getIdToken(true);
        const promise = fetch(`/user/card/changeStatus`, {
            method: 'PUT',
            headers: {
                token: newToken,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: card.id,
                published: !card.published
            })
        });
        // const data = await promise.json();
        const temp = cards.map(e => {
            if (e.id === card.id) {
                console.log(e.id);
                e.published = !e.published;
            }
            return e;
        })
        setCards([...temp])
    }



    useEffect(() => {
        console.log(cards);
    }, [cards]);

    const tdata = [
        {
            name: "abhishek's card",
            businessName: "stylx",
            url: "afj",
            size: "18mb",
            created_at: "12 November 2022 at 17:18"
        },
        {
            name: "abhishek's business card",
            businessName: "stylx pro",
            url: "abhishekcards.com/dvfvk",
            size: "18mb",
            created_at: "12 December 2022 at 17:18"
        },
        {
            name: "abhishek's ",
            businessName: "stylx professional",
            url: "abhishengnbfj",
            size: "18mb",
            created_at: "12 May 2022 at 17:18"
        },
        {
            name: "abhishek's card for everyone",
            businessName: "homefaraway",
            url: "abhishekfirsteverbusinesscards.com/dontForgettogetoneyouyouselfonthewayhome",
            size: "18mb",
            created_at: "12 September 2022 at 17:18"
        }
    ]
    return (
        <>
            {currentUser && cards ? <div className='dashboard_container'>
                <div className='table_wrapper'>
                    <div>
                        <div className='searchbar_container'>
                            <div className='searchbar_wrapper'>
                                {/* <input type="text" placeholder='Search your card' /> */}
                                {/* <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbar_search_btn' /> */}
                                {/* <div className="searchbar_search_btn_wrapper">
                            </div> */}
                            </div>
                            {
                                !cardLimitReached ?
                                    <Link to="/create"><button className='dashboard_create_new_card_btn'>Create new card</button></Link> :
                                    <button className='dashboard_create_new_card_btn' onClick={() => setShowLimitMessage(true)}>Create new card</button>
                            }
                            {showLimitMessage ?
                                <>
                                    <div className='dark_model_background' style={{bottom: 0 - window.scrollY}} onClick={()=>setShowLimitMessage(false)}></div>
                                    <div className='modal' style={{top: `calc(50% + ${window.scrollY}px)`}}>
                                        <div className='modal_message'>Cannot create more than 2 cards.</div>
                                        <div><FontAwesomeIcon className='modal_close' onClick={()=>setShowLimitMessage(false)} icon={faXmark}/></div>
                                    </div>
                                </> :
                                null
                            }
                        </div>
                    </div>
                    <div className='table_inner_wrapper'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='theading' style={{ borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}>Name</th>
                                    <th className='theading'>Qr Code</th>
                                    <th className='theading'>Url</th>
                                    <th className='theading'>Publish</th>
                                    <th className='theading'>Created On</th>
                                    <th className='theading'>Views</th>
                                    <th className='theading' style={{ borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }}>Controls</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cards.map(e => {
                                    return <tr className='table-row' key={e.id}>
                                        <td className='tdata' style={{ color: "#FE385D", fontSize: '1rem', fontWeight: "600", letterSpacing: '1px' }}>
                                            <div className='table_business_info'>
                                                <div className='table_business_logo'>
                                                    {
                                                        e.ProfilePicture ?
                                                            <img src={e.Logo} alt="" />
                                                            : <img src="https://helios-i.mashable.com/imagery/articles/03ulvE3z6J4mJtV8n6LvQwS/hero-image.fill.size_1200x1200.v1623389293.jpg" alt="" />
                                                    }
                                                </div>
                                                <div className='table_business_name'>
                                                    <div>
                                                        {e.cardName}
                                                    </div>
                                                    <span className='table_secondary_text'>{e.BusinessName}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='tdata'><img style={{ width: "60px", height: '60px' }} src={e.qr} alt="" /></td>
                                        <td className='tdata table_card_urls'>
                                            <div>
                                                {!e.published ?
                                                    <>
                                                        {`${process.env.REACT_APP_API_URL}${e.cardSlug}`}
                                                        {/* <FontAwesomeIcon icon={faSquareArrowUpRight}/> */}
                                                    </> :
                                                    <a style={{ textDecoration: "none", color: '#6AA354', fontWeight: "700" }} target='_blank' href={`${process.env.REACT_APP_API_URL}${e.cardSlug}`}>{`${process.env.REACT_APP_API_URL}${e.cardSlug}`}
                                                        {' '}<FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                                                }
                                            </div>
                                        </td>
                                        <td className='tdata table_card_publish'>
                                            <div className='table_publish_btn' onClick={() => publishCard(e)}>
                                                {e.published ? 'On' : 'Off'}
                                            </div>
                                        </td>
                                        <td className='tdata'>{`${(new Date(e.updatedAt).toLocaleTimeString('en-GB', {
                                            day: 'numeric', month: 'short', year: 'numeric'
                                        })).split(',').join(' at ')}`}</td>
                                        <td className='tdata'>{e.viewCount}</td>
                                        <td className='tdata'>
                                            <div className='card_controls'>
                                                <FontAwesomeIcon className='tooltip' style={{ color: 'white', display: `${openActionControl[e.id] ? 'block' : 'block'}` }} icon={faEllipsisVertical} onClick={(event) => { setClickTargetX(event.clientX); setClickTargetY(event.clientY); setOpenActionControl({ ...openActionControl, [e.id]: true }) }} />
                                                <div className='action_list_container' style={{ display: `${openActionControl[e.id] ? 'flex' : 'none'}` }} onClick={() => setOpenActionControl({ ...openActionControl, [e.id]: false })}>
                                                    <div className='action_list_wrapper' style={{ display: `${openActionControl[e.id] ? 'flex' : 'none'}`, top: clickTargetY + window.scrollY, left: clickTargetX }}>
                                                        <div onClick={() => editCard(e.id)}>Edit</div>
                                                        <div onClick={() => previewCard(e.id)}>Preview</div>
                                                        <div onClick={() => deleteCard(e.id)}>Delete</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> :
                currentUser === undefined || cards === undefined ?
                    <Loader /> :
                    null
            }
        </>
    )
}

export default Dashboard