import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import GenInfo from '../GenInfo/GenInfo';
import GeneralInfo from '../GereralInfo/GeneralInfo';
import IphoneMockup from '../IphoneMockup/IphoneMockup';
import Loader from '../Loader/Loader';
import './CreationForm.css';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '@mui/icons-material/Telegram';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import TwitterIcon from '@mui/icons-material/Twitter';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FacebookIcon from '@mui/icons-material/Facebook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faWeixin, faSkype, faViber, faVimeo, faSpotify, faDiscord, faPinterest, faTiktok, faReddit, faSnapchat, faTwitch, faLinkedin, faBehance, faPaypal, faStripeS, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Media from '../MediaSection';

function CreationForm() {
    const [formData, setformData] = useState({
        Name: null,
        BusinessName: null,
        genderPronouns: null,
        jobTitle: null,
        businessDescription: null,
        cardName: null,
        cardUrl: null,
        DescribeYourself: null,
        ProfilePicture: null,
        coverPhoto: null,
        Logo: null,
        PrimaryButtons: [],
        socialMedia: [],
        commerce: [],
        Telegram: null,
        Call: null,
        WhatsApp: null,
        Mail: null,
        Website: null,
        Location: null,
        weChat: null,
        messenger: null,
        calendar: null,
        store: null,
        viber: null,
        skype: null,
        
        facebook: null,
        youtube: null,
        twitter: null,
        vimeo: null,
        twitch: null,
        linkedin: null,
        snapchat: null,
        reddit: null,
        tiktok: null,
        pinterest: null,
        spotify: null,
        behance: null,
        discord: null,

        cashapp: null,
        paypal: null,
        stripe: null,
        googleBusinessProfile: null,
        bingBusinessProfile: null,
        amazonStore: null,
        eBayStore: null,
        yelp: null,


        ProFeaturesList: [],
    });
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    useEffect(() => {
        if (currentUser === null) {
            navigate('/login');
        }
    }, [currentUser])



    const iconsNameContactMap = [
        {
            name: 'Call',
            component: <CallIcon style={{ color: '#fff' }} />,
            placeholder: '+1 XXXXXX XXXXX',
            type: 'text'
        },
        {
            name: 'Telegram',
            component: <TelegramIcon style={{ color: '#fff' }} />,
            placeholder: 'https://t.me/username',
            type: 'text'
        },
        {
            name: 'WhatsApp',
            component: <WhatsAppIcon style={{ color: '#fff' }} />,
            placeholder: '+1 XXXXXX XXXXX',
            type: 'text'
        },
        {
            name: 'Mail',
            component: <MailOutlineIcon style={{ color: '#fff' }} />,
            placeholder: 'info@example.com',
            type: 'text'
        },
        {
            name: 'Website',
            component: <LanguageIcon style={{ color: '#fff' }} />,
            placeholder: 'https://example.com',
            type: 'text'
        },
        {
            name: 'Location',
            component: <AddLocationIcon style={{ color: '#fff' }} />,
            placeholder: 'Brocklyn,NYC',
            type: 'text'
        },
        {
            name: 'store',
            component: <StorefrontIcon style={{ color: '#fff' }} />,
            placeholder: 'https://example.com',
            type: 'text'
        },
        {
            name: 'messenger',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faFacebookMessenger} />,
            placeholder: 'm.me/username',
            type: 'text'
        },
        {
            name: 'viber',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faViber} />,
            placeholder: '+1 XXXXXX XXXXX',
            type: 'text'
        },
        {
            name: 'calendar',
            component: <CalendarMonthIcon style={{ color: '#fff' }} />,
            placeholder: '',
            type: 'date'
        },
        {
            name: 'weChat',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faWeixin} />,
            placeholder: 'narutouzumaki',
            type: 'text'
        },
        {
            name: 'skype',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faSkype} />,
            placeholder: 'email/phone',
            type: 'text'
        }
    ]


    const iconsNameSocialMap = [
        {
            name: 'facebook',
            component: <FacebookIcon style={{ color: '#fff' }} />,
            placeholder: 'https://facebook.com/YourUserName',
            type: 'text'
        },
        {
            name: 'instagram',
            component: <InstagramIcon style={{ color: '#fff' }} />,
            placeholder: 'https://instagram.com/YourUserName',
            type: 'text'
        },
        {
            name: 'youtube',
            component: <YouTubeIcon style={{ color: '#fff' }} />,
            placeholder: 'https://youtube.com/myChannel',
            type: 'text'
        },
        {
            name: 'twitter',
            component: <TwitterIcon style={{ color: '#fff' }} />,   
            placeholder: 'https://twitter.com/YourUserName',
            type: 'text'
        },
        {
            name: 'vimeo',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faVimeo} />,
            placeholder: 'https://vimeo.com/id',
            type: 'text'
        },
        {
            name: 'twitch',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faTwitch} />,
            placeholder: 'https://twitch.tv/myChannel',
            type: 'text'
        },
        {
            name: 'linkedin',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faLinkedin} />,
            placeholder: 'https://linkedin.com/YourUserName',
            type: 'text'
        },
        {
            name: 'snapchat',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faSnapchat} />,
            placeholder: 'http://snapchat.com/add/YourUserName',
            type: 'text'
        },
        {
            name: 'reddit',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faReddit} />,
            placeholder: 'https://reddit.com/user/YourUserName',
            type: 'text'
        },
        {
            name: 'tiktok',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faTiktok} />,
            placeholder: 'https://tiktok.com/@username',
            type: 'text'
        },
        {
            name: 'pinterest',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faPinterest} />,
            placeholder: 'https://pinterest.com/username',
            type: 'text'
        },
        {
            name: 'spotify',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faSpotify} />,
            placeholder: 'https://open.spotify.com/user/userID',
            type: 'text'
        },
        {
            name: 'behance',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faBehance} />,
            placeholder: 'https://behance.net/user_name',
            type: 'text'
        },
        {
            name: 'discord',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faDiscord} />,
            placeholder: 'https://discord.gg/EXZHcnd',
            type: 'text'
        }
    ]

    const iconsNameCommerceMap = [
        {
            name: 'cashapp',
            component: <CallIcon style={{ color: '#fff' }} />,
            placeholder: 'https://facebook.com/YourUserName',
            type: 'text'
        },
        {
            name: 'paypal',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faPaypal} />,
            placeholder: 'https://instagram.com/YourUserName',
            type: 'text'
        },
        {
            name: 'stripe',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faStripeS} />,
            placeholder: 'https://youtube.com/myChannel',
            type: 'text'
        },
        {
            name: 'googleBusinessProfile',
            component: <StorefrontIcon style={{ color: '#fff' }} />,
            placeholder: 'https://twitter.com/YourUserName',
            type: 'text'
        },
        {
            name: 'bingBusinessProfile',
            component:<FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faGoogle} />,
            placeholder: 'https://vimeo.com/id',
            type: 'text'
        },
        {
            name: 'amazonStore',
            component: <LanguageIcon style={{ color: '#fff' }} />,
            placeholder: 'https://twitch.tv/myChannel',
            type: 'text'
        },
        {
            name: 'eBayStore',
            component: <AddLocationIcon style={{ color: '#fff' }} />,
            placeholder: 'https://linkedin.com/YourUserName',
            type: 'text'
        },
        {
            name: 'yelp',
            component: <StorefrontIcon style={{ color: '#fff' }} />,
            placeholder: 'http://snapchat.com/add/YourUserName',
            type: 'text'
        }
    ]

    return (
        <>
            {currentUser ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div
                    style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginRight: '30px',
                    }}
                >

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <GeneralInfo formData={formData} setformData={setformData} />
                        <GenInfo iconsNameContactMap={iconsNameContactMap} formData={formData} color={'#7366F0'} keyName={'PrimaryButtons'} setformData={setformData} heading={'Contact Info'}/>
                        <GenInfo iconsNameContactMap={iconsNameSocialMap} formData={formData} color={'#FE385D'} keyName={'socialMedia'} setformData={setformData} heading={'Social Media'}/>
                        <GenInfo iconsNameContactMap={iconsNameCommerceMap} formData={formData} color={'#029C5F'} keyName={'commerce'} setformData={setformData} heading={'Commerce'}/>
                        <Media formData={formData} setformData={setformData} />
                    </div>
                </div>
                <div style={{ width: '50%', marginLeft: '30px' }}>
                    <IphoneMockup formData={formData} />
                </div>
            </div> :
                currentUser === undefined ?
                    <Loader /> :
                    null}
        </>
    );
}

export default CreationForm;
