import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext'
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faPen, faMagnifyingGlass, faWeight } from '@fortawesome/free-solid-svg-icons'


function Dashboard() {

    // State declaration
    const { logout, currentUser } = useContext(AuthContext)
    const [cards, setCards] = useState([])

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
        return await promise.json();
    }

    useEffect(() => {
        if (currentUser === null) {
            navigate('/login')
        }
    }, [currentUser])


    useEffect(() => {
        const cardsData = fetchCards();
        console.log(cardsData)
    }, [])
    
    
    
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
            {currentUser ? <div className='dashboard_container'>
                <div className='table_wrapper'>
                    <div>
                        <div className='searchbar_container'>
                            <div className='searchbar_wrapper'>
                                <input type="text" placeholder='Search your card' />
                                {/* <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbar_search_btn' /> */}
                                {/* <div className="searchbar_search_btn_wrapper">
                            </div> */}
                            </div>
                            <Link to="/create"><button className='dashboard_create_new_card_btn'>Create new card</button></Link>
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
                                    <th className='theading'>Size</th>
                                    <th className='theading'>Created At</th>
                                    <th className='theading' style={{ borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }}>Controls</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tdata.map(e => {
                                    return <tr className='table-row'>
                                        <td className='tdata' style={{ color: "#FE385D", fontSize: '1rem', fontWeight: "600", letterSpacing: '1px' }}>
                                            <div className='table_business_info'>
                                                <div className='table_business_logo'>
                                                    <img src="https://helios-i.mashable.com/imagery/articles/03ulvE3z6J4mJtV8n6LvQwS/hero-image.fill.size_1200x1200.v1623389293.jpg" alt="" />
                                                </div>
                                                <div className='table_business_name'>
                                                    <div>
                                                        {e.name}
                                                    </div>
                                                    <span className='table_secondary_text'>{e.businessName}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='tdata'><img style={{width: "60px", height: '60px'}} src="https://hexdocs.pm/qr_code/docs/qrcode.svg" alt="" /></td>
                                        <td className='tdata table_card_urls'>{e.url}</td>
                                        <td className='tdata table_card_publish'>
                                            <div className='table_publish_btn'>
                                                Publish
                                            </div>
                                        </td>
                                        <td className='tdata'>{e.size}</td>
                                        <td className='tdata'>{e.created_at}</td>
                                        <td className='tdata'>
                                            <div className='card_controls'>
                                                <div className='tooltip_container'><div className='tooltip_text'>Edit</div><FontAwesomeIcon className='tooltip' style={{ color: 'greenyellow' }} icon={faPen} /></div>
                                                <div className='tooltip_container'><div className='tooltip_text'>Preview</div><FontAwesomeIcon className='tooltip' icon={faEye} /></div>
                                                <div className='tooltip_container'><div className='tooltip_text'>Delete</div><FontAwesomeIcon className='tooltip' style={{ color: '#FE385D' }} icon={faTrash} /></div>
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
                currentUser === undefined ?
                    <h1 style={{ color: "white" }}>Loading...</h1> :
                    null
            }
        </>
    )
}

export default Dashboard