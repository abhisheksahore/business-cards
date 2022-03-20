import React, { useContext, useEffect, useState } from 'react';
import { matchPath, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import GenInfo from '../GenInfo/GenInfo';
import GeneralInfo from '../GereralInfo/GeneralInfo';
import IphoneMockup from '../IphoneMockup/IphoneMockup';
import Loader from '../Loader/Loader';
import './CreationForm.css';

import TelegramIcon from '@mui/icons-material/Telegram';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CashApp from '../../assets/CashApp.svg';
import bing from '../../assets/bing.svg';
import signal from '../../assets/signal.svg';
import {
    faFacebookMessenger,
    faWeixin,
    faSkype,
    faViber,
    faVimeo,
    faSpotify,
    faDiscord,
    faPinterest,
    faTiktok,
    faReddit,
    faSnapchat,
    faTwitch,
    faLinkedin,
    faBehance,
    faPaypal,
    faStripeS,
    faGoogle,
    faEbay,
    faAmazon,
    faYelp,
} from '@fortawesome/free-brands-svg-icons';
import Media from '../MediaSection';
import FontsAndColors from '../FontsAndColors';

function CreationForm() {

    const [edit, setEdit] = useState(false);
    const { pathname } = useLocation();


    useEffect(() => {
        if (pathname && pathname.includes('/edit/')) {
            setEdit(true);
        }
    }, [])

    const getCardData = async () => {
        const cardId = pathname.split('/')[2];
        if (cardId) {
            const promise = await fetch(`/user/card/getCard?id=${cardId}`);
            const data = await promise.json();
            console.log(data);
            if (data.status === 'success') {
                setformData({ ...data.data });
            } else {
                alert('invalid Card ID');
                navigate('/dashboard');
            }
        }
    }

    useEffect(() => {
        if (edit) {
            getCardData();
        }
    }, [edit])


    const [formData, setformData] = useState({
        Name: null,
        BusinessName: null,
        genderPronouns: null,
        jobTitle: null,
        businessDescription: null,
        cardName: null,
        cardSlug: null,
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
        weChat: null,
        messenger: null,
        calendar: null,
        store: null,
        viber: null,
        skype: null,
        signal: null,

        // s o c i a l   m e d i a 
        facebook: null,
        instagram: null,
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


        // c o m m e r c e
        cashapp: null,
        paypal: null,
        stripe: null,
        googleBusinessProfile: null,
        bingBusinessProfile: null,
        amazonStore: null,
        eBayStore: null,
        yelp: null,


        SaveToContact: false,


        // colors
        logoBackgroundColor: '#1E2A37',
        mainBackgroundColor: '#F9FAFB',
        buttonBackgroundColor: '#374151',
        cardBackgroundColor: '#E5E7EB',
        fontColor: '#ECECEC',

        // fonts
        font: "'Montserrat', sans - serif",



        ProFeaturesList: [],
    }
    );
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    useEffect(() => {
        if (currentUser === null) {
            navigate('/login');
        }
    }, [currentUser]);


    const colorInputVariables = [
        {
            stateName: 'logoBackgroundColor',
            name: 'Logo Background Color'
        },
        {
            stateName: 'mainBackgroundColor',
            name: 'Main Background Color'
        },
        {
            stateName: 'buttonBackgroundColor',
            name: 'Button Background Color'
        },
        {
            stateName: 'cardBackgroundColor',
            name: 'Card Background Color'
        },
        {
            stateName: 'fontColor',
            name: 'Font Color'
        }
    ]


    const fontOptions = [
        {
            fontFamily: "'Andada Pro', serif",
            name: 'Andada Pro'
        },
        {
            fontFamily: "'Anton', sans - serif",
            name: 'Anton'
        },
        {
            fontFamily: "'Archivo', sans - serif",
            name: 'Archivo'
        },
        {
            fontFamily: "'BioRhyme', serif",
            name: 'BioRhyme'
        },
        {
            fontFamily: "'Cormorant', serif",
            name: 'Cormorant'
        },
        {
            fontFamily: "'Encode Sans', sans - serif",
            name: 'Encode Sans'
        },
        {
            fontFamily: "'Epilogue', sans - serif",
            name: 'Epilogue'
        },
        {
            fontFamily: "'Hahmlet', serif",
            name: 'Hahmlet'
        },
        {
            fontFamily: "'Inter', sans - serif",
            name: 'Inter'
        },
        {
            fontFamily: "'JetBrains Mono', monospace",
            name: 'JetBrains Mono'
        },
        {
            fontFamily: "'Lato', sans - serif",
            name: 'Lato'
        },
        {
            fontFamily: "'Lora', serif",
            name: 'Lora'
        },
        {
            fontFamily: "'Manrope', sans - serif",
            name: 'Manrope'
        },
        {
            fontFamily: "'Montserrat', sans - serif",
            name: 'Montserrat'
        },
        {
            fontFamily: "'Nunito', sans - serif",
            name: 'Nunito'
        },
        {
            fontFamily: "'Old Standard TT', serif",
            name: 'Old Standard TT'
        },
        {
            fontFamily: "'Open Sans', sans - serif",
            name: 'Open Sans'
        },
        {
            fontFamily: "'Oswald', sans - serif",
            name: 'Oswald'
        },
        {
            fontFamily: "'Oxygen', sans - serif",
            name: 'Oxygen'
        },
        {
            fontFamily: "'Playfair Display', serif",
            name: 'Playfair Display'
        },
        {
            fontFamily: "'Poppins', sans - serif",
            name: 'Poppins'
        },
        {
            fontFamily: "'Raleway', sans - serif",
            name: 'Raleway'
        },
        {
            fontFamily: "'Roboto', sans - serif",
            name: 'Roboto'
        },
        {
            fontFamily: "'Sora', sans - serif",
            name: 'Sora'
        },
        {
            fontFamily: "'Source Sans Pro', sans - serif",
            name: 'Source Sans Pro'
        },
        {
            fontFamily: "'Spectral', serif",
            name: 'Spectral'
        },
        {
            fontFamily: "'Work Sans', sans - serif",
            name: 'Work Sans'
        }
    ]


    const iconsNameContactMap = [
        {
            name: 'Call',
            component: <CallIcon style={{ color: '#fff' }} />,
            placeholder: '+1 XXXXXX XXXXX',
            type: 'text',
            tooltip: 'Call'
        },
        {
            name: 'Telegram',
            component: <TelegramIcon style={{ color: '#fff' }} />,
            placeholder: 'https://t.me/username',
            type: 'text',
            tooltip: 'Telegram'
        },
        {
            name: 'WhatsApp',
            component: <WhatsAppIcon style={{ color: '#fff' }} />,
            placeholder: '+1 XXXXXX XXXXX',
            type: 'text',
            tooltip: 'WhatsApp'
        },
        {
            name: 'Mail',
            component: <MailOutlineIcon style={{ color: '#fff' }} />,
            placeholder: 'info@example.com',
            type: 'text',
            tooltip: 'Mail'
        },
        {
            name: 'Website',
            component: <LanguageIcon style={{ color: '#fff' }} />,
            placeholder: 'https://example.com',
            type: 'text',
            tooltip: 'Website'
        },
        {
            name: 'store',
            component: <StorefrontIcon style={{ color: '#fff' }} />,
            placeholder: 'https://example.com',
            type: 'text',
            tooltip: 'Store'
        },
        {
            name: 'messenger',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faFacebookMessenger} />,
            placeholder: 'm.me/username',
            type: 'text',
            tooltip: 'Messenger'
        },
        {
            name: 'viber',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faViber} />,
            placeholder: '+1 XXXXXX XXXXX',
            type: 'text',
            tooltip: 'Viber'
        },
        {
            name: 'calendar',
            component: <CalendarMonthIcon style={{ color: '#fff' }} />,
            placeholder: '',
            type: 'date',
            tooltip: 'Calendar'
        },
        {
            name: 'weChat',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faWeixin} />,
            placeholder: 'narutouzumaki',
            type: 'text',
            tooltip: 'WeChat'
        },
        {
            name: 'skype',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faSkype} />,
            placeholder: 'email/phone',
            type: 'text',
            tooltip: 'Skype'
        },
        {
            name: 'signal',
            component: <img src={signal} style={{ width: '2rem' }} />,
            placeholder: '+1 XXXXXX XXXXX',
            type: 'text',
            tooltip: 'Signal'
        }
    ]


    const iconsNameSocialMap = [
        {
            name: 'facebook',
            component: <FacebookIcon style={{ color: '#fff' }} />,
            placeholder: 'https://facebook.com/YourUserName',
            type: 'text',
            tooltip: 'Facebook'
        },
        {
            name: 'instagram',
            component: <InstagramIcon style={{ color: '#fff' }} />,
            placeholder: 'https://instagram.com/YourUserName',
            type: 'text',
            tooltip: 'Instagram'
        },
        {
            name: 'youtube',
            component: <YouTubeIcon style={{ color: '#fff' }} />,
            placeholder: 'https://youtube.com/myChannel',
            type: 'text',
            tooltip: 'YouTube'
        },
        {
            name: 'twitter',
            component: <TwitterIcon style={{ color: '#fff' }} />,
            placeholder: 'https://twitter.com/YourUserName',
            type: 'text',
            tooltip: 'Twitter'
        },
        {
            name: 'vimeo',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faVimeo} />,
            placeholder: 'https://vimeo.com/id',
            type: 'text',
            tooltip: 'Vimeo'
        },
        {
            name: 'twitch',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faTwitch} />,
            placeholder: 'https://twitch.tv/myChannel',
            type: 'text',
            tooltip: 'Twitch'
        },
        {
            name: 'linkedin',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faLinkedin} />,
            placeholder: 'https://linkedin.com/YourUserName',
            type: 'text',
            tooltip: 'Linkedin'
        },
        {
            name: 'snapchat',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faSnapchat} />,
            placeholder: 'http://snapchat.com/add/YourUserName',
            type: 'text',
            tooltip: 'Snapchat'
        },
        {
            name: 'reddit',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faReddit} />,
            placeholder: 'https://reddit.com/user/YourUserName',
            type: 'text',
            tooltip: 'Reddit'
        },
        {
            name: 'tiktok',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faTiktok} />,
            placeholder: 'https://tiktok.com/@username',
            type: 'text',
            tooltip: 'TikTok'
        },
        {
            name: 'pinterest',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faPinterest} />,
            placeholder: 'https://pinterest.com/username',
            type: 'text',
            tooltip: 'Pinterest'
        },
        {
            name: 'spotify',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faSpotify} />,
            placeholder: 'https://open.spotify.com/user/userID',
            type: 'text',
            tooltip: 'Spotify'
        },
        {
            name: 'behance',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faBehance} />,
            placeholder: 'https://behance.net/user_name',
            type: 'text',
            tooltip: 'Behance'
        },
        {
            name: 'discord',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faDiscord} />,
            placeholder: 'https://discord.gg/EXZHcnd',
            type: 'text',
            tooltip: 'Discord'
        }
    ]


    const iconsNameCommerceMap = [
        {
            name: 'cashapp',
            component: <img src={CashApp} style={{ width: '4rem' }} alt="" />,
            placeholder: 'https://cash.app/$yourcashtag',
            type: 'text',
            tooltip: 'CashApp'
        },
        {
            name: 'paypal',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faPaypal} />,
            placeholder: 'https://PayPal.me/YourUserName',
            type: 'text',
            tooltip: 'PayPal'
        },
        {
            name: 'stripe',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faStripeS} />,
            placeholder: 'Your Stripe account',
            type: 'text',
            tooltip: 'Stripe'
        },
        {
            name: 'googleBusinessProfile',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faGoogle} />,
            placeholder: 'Your Google Business Profile',
            type: 'text',
            tooltip: 'Google Business Profile'
        },
        {
            name: 'bingBusinessProfile',
            component: <img src={bing} />,
            placeholder: 'Your Bing Business Profile',
            type: 'text',
            tooltip: 'Bing Business Profile'
        },
        {
            name: 'amazonStore',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faAmazon} />,
            placeholder: 'Your amazon store',
            type: 'text',
            tooltip: 'Amazon Store'
        },
        {
            name: 'eBayStore',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faEbay} />,
            placeholder: 'Your eBay store',
            type: 'text',
            tooltip: 'eBay Store'
        },
        {
            name: 'yelp',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faYelp} />,
            placeholder: 'Your yelp store',
            type: 'text',
            tooltip: 'Yelp'
        }
    ]


    useEffect(() => {
        if (submitClick) {
            // console.log(formData);
        }
    }, [formData])

    const [submitClick, setSubmitClick] = useState(false)


    const uploadSingleFiles = async (fileType) => {
        const newToken = await currentUser.getIdToken(true);
        const form = new FormData();
        form.append('files', formData[fileType]);
        const promise = await fetch(`/user/fileupload`, {
            method: "POST",
            body: form,
            headers: {
                token: newToken
            }
        });
        const data = await promise.json();
        console.log(data);
        return data;
    }


    const submitCard = async () => {
        console.log('creating card')
        const formDataTemp = formData;
        const proFeatureTemp = []

        // upload Logo if not already
        if (typeof (formData.Logo) === 'object') {
            const data = await uploadSingleFiles('Logo');
            console.log(data);
            formDataTemp.Logo = data.data[0]
        }
        // upload profile picture if not already
        if (typeof (formData.coverPhoto) === 'object') {
            const data = await uploadSingleFiles('coverPhoto');
            formDataTemp.coverPhoto = data.data[0]
        }
        // upload cover photo if not already
        if (typeof (formData.ProfilePicture) === 'object') {
            const data = await uploadSingleFiles('ProfilePicture');
            formDataTemp.ProfilePicture = data.data[0]
        }


        for (const f of formData.ProFeaturesList) {
            const newToken = await currentUser.getIdToken(true);
            const form = new FormData();
            if (f.images) {
                let images = [];
                for (const image of f.images) {
                    if (typeof(image) === 'string') {
                        images.push(image);
                    } else {
                        form.append("files", image);
                    }
                }
                console.log(images);
                const promise = await fetch(`/user/fileupload`, {
                    method: "POST",
                    body: form,
                    headers: {
                        token: newToken
                    }
                });
                const data = await promise.json();
                if (f.images) {
                    f.images = [...images, ...data.data]
                } else {
                    f.image = [...images, ...data.data];
                }
                console.log(data);
                proFeatureTemp.push(f);
            } else if (f.image && typeof(f.image) === 'object') {
                console.log(f.image)
                form.append("files", f.image);
                const promise = await fetch(`/user/fileupload`, {
                    method: "POST",
                    body: form,
                    headers: {
                        token: newToken
                    }
                });
                const data = await promise.json();
                if (f.images) {
                    f.images = data.data
                } else {
                    f.image = data.data[0];
                }
                console.log(data.data);
                proFeatureTemp.push(f);
            } else {
                proFeatureTemp.push(f);
            }

        }
        console.log(proFeatureTemp);
        formDataTemp.ProFeaturesList = proFeatureTemp;
        console.log(formDataTemp)


        // formDataTemp

    }

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
                        <GeneralInfo formData={formData} setformData={setformData} edit={edit} />
                        <GenInfo iconsNameContactMap={iconsNameContactMap} formData={formData} color={'#7366F0'} keyName={'PrimaryButtons'} setformData={setformData} heading={'Contact Info'} />
                        <GenInfo iconsNameContactMap={iconsNameSocialMap} formData={formData} color={'#FE385D'} keyName={'socialMedia'} setformData={setformData} heading={'Social Media'} />
                        <GenInfo iconsNameContactMap={iconsNameCommerceMap} formData={formData} color={'#029C5F'} keyName={'commerce'} setformData={setformData} heading={'Commerce'} />
                        <Media formData={formData} setformData={setformData} edit={edit} />
                        <FontsAndColors formData={formData} setformData={setformData} colorInputVariables={colorInputVariables} fontOptions={fontOptions} />
                        <button className='create_btn' onClick={submitCard}>{edit ? 'Update card' : 'Create Card'}</button>
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
