import React, { useContext, useEffect, useState } from 'react';
import { matchPath, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import GenInfo from '../GenInfo/GenInfo';
import GeneralInfo from '../GereralInfo/GeneralInfo';
import IphoneMockup from '../IphoneMockup/IphoneMockup';
import Loader from '../Loader/Loader';
import './CreationForm.css';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

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
import { Button } from 'react-bootstrap';
import { FormControlLabel } from '@mui/material';





// c o m p o n e n t

function CreationForm() {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    const [edit, setEdit] = useState(false);
    const { pathname } = useLocation();
    const [uploadError, setUploadError] = useState('')
    const [slugExists, setSlugExists] = useState();
    const [slugError, setSlugError] = useState('');
    const [cardLimitReached, setCardLimitReached] = useState(false);
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

        // editable button names
        contactHeading: 'Contact Info',
        socialMediaHeading: 'Social Media',
        commerceHeading: 'Commerce',


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
        font: "'Montserrat', sans-serif",



        ProFeaturesList: [],
    }
    );

    useEffect(() => {
        if (pathname && pathname.includes('/edit/')) {
            setEdit(true);
        }
    }, [])

    const getCardData = async () => {
        const cardId = pathname.split('/')[2];
        if (cardId && currentUser) {
            const newToken = await currentUser.getIdToken(true);
            const promise = await fetch(process.env.REACT_APP_API_URL + `user/card/getCard?id=${cardId}`, {
                method: 'GET',
                headers: {
                    token: newToken
                }
            });
            const data = await promise.json();
            if (data.status === 'success') {
                setformData({ ...data.data });
            } else {
                alert('invalid Card ID');
                navigate('/dashboard');
            }
        }
    }



    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 60,
        height: 34,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(26px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#6aa354' : '#6aa354',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
                backgroundColor: 'red'
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? "#6aa354"
                        : "#6aa354",
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 30,
            height: 30,
            backgroundColor: '#346140'
        },
        '& .MuiSwitch-track': {
            borderRadius: 34 / 2,
            // backgroundColor: theme.palette.mode === 'light' ? '#696969' : '#111111',
            backgroundColor: "#ffffff",
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));


    useEffect(() => {
        if (edit) {
            getCardData();
        }
    }, [edit, currentUser])









    useEffect(async () => {
        if (currentUser === null) {
            navigate('/login');
        }

        // fetch user data and set total cards to cardLimitReached state here
        if (currentUser) {
            const newToken = await currentUser.getIdToken(true);

            const promise = await fetch(process.env.REACT_APP_API_URL + `user/auth/getUserDetails`, {
                headers: {
                    token: newToken
                }
            })
            const data = await promise.json();
            console.log(data);
            if (data.data.totalCards >= 2) {
                setCardLimitReached(true)
            } else {
                setCardLimitReached(false)
            }
        }
    }, [currentUser]);







    useEffect(() => {
        console.log(formData)
    }, [formData])





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
            fontFamily: "'Palette Mosaic', cursive",
            name: 'Palette Mosaic'
        },
        {
            fontFamily: "'Anton', sans-serif",
            name: 'Anton'
        },
        {
            fontFamily: "'Archivo', sans-serif",
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
            fontFamily: "'Encode Sans', sans-serif",
            name: 'Encode Sans'
        },
        {
            fontFamily: "'Epilogue', sans-serif",
            name: 'Epilogue'
        },
        {
            fontFamily: "'Hahmlet', serif",
            name: 'Hahmlet'
        },
        {
            fontFamily: "'Inter', sans-serif",
            name: 'Inter'
        },
        {
            fontFamily: "'JetBrains Mono', monospace",
            name: 'JetBrains Mono'
        },
        {
            fontFamily: "'Lato', sans-serif",
            name: 'Lato'
        },
        {
            fontFamily: "'Lora', serif",
            name: 'Lora'
        },
        {
            fontFamily: "'Manrope', sans-serif",
            name: 'Manrope'
        },
        {
            fontFamily: "'Montserrat', sans-serif",
            name: 'Montserrat'
        },
        {
            fontFamily: "'Nunito', sans-serif",
            name: 'Nunito'
        },
        {
            fontFamily: "'Old Standard TT', serif",
            name: 'Old Standard TT'
        },
        {
            fontFamily: "'Open Sans', sans-serif",
            name: 'Open Sans'
        },
        {
            fontFamily: "'Oswald', sans-serif",
            name: 'Oswald'
        },
        {
            fontFamily: "'Oxygen', sans-serif",
            name: 'Oxygen'
        },
        {
            fontFamily: "'Playfair Display', serif",
            name: 'Playfair Display'
        },
        {
            fontFamily: "'Poppins', sans-serif",
            name: 'Poppins'
        },
        {
            fontFamily: "'Raleway', sans-serif",
            name: 'Raleway'
        },
        {
            fontFamily: "'Roboto', sans-serif",
            name: 'Roboto'
        },
        {
            fontFamily: "'Sora', sans-serif",
            name: 'Sora'
        },
        {
            fontFamily: "'Source Sans Pro', sans-serif",
            name: 'Source Sans Pro'
        },
        {
            fontFamily: "'Spectral', serif",
            name: 'Spectral'
        },
        {
            fontFamily: "'Work Sans', sans-serif",
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
            placeholder: 'https://mystore.com',
            type: 'text',
            tooltip: 'Store'
        },
        {
            name: 'messenger',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faFacebookMessenger} />,
            placeholder: 'https://m.me/username',
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
            tooltip: 'Facebook',
            color: '#1778F2'
        },
        {
            name: 'instagram',
            component: <InstagramIcon style={{ color: '#fff' }} />,
            placeholder: 'https://instagram.com/YourUserName',
            type: 'text',
            tooltip: 'Instagram',
            color: '#FE395D'
        },
        {
            name: 'youtube',
            component: <YouTubeIcon style={{ color: '#fff' }} />,
            placeholder: 'https://youtube.com/myChannel',
            type: 'text',
            tooltip: 'YouTube',
            color: '#FF0000'
        },
        {
            name: 'twitter',
            component: <TwitterIcon style={{ color: '#fff' }} />,
            placeholder: 'https://twitter.com/YourUserName',
            type: 'text',
            tooltip: 'Twitter',
            color: '#55B3F3'
        },
        {
            name: 'vimeo',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faVimeo} />,
            placeholder: 'https://vimeo.com/id',
            type: 'text',
            tooltip: 'Vimeo',
            color: '#19B1E3'
        },
        {
            name: 'twitch',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faTwitch} />,
            placeholder: 'https://twitch.tv/myChannel',
            type: 'text',
            tooltip: 'Twitch',
            color: '#8D44F7'
        },
        {
            name: 'linkedin',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faLinkedin} />,
            placeholder: 'https://linkedin.com/YourUserName',
            type: 'text',
            tooltip: 'Linkedin',
            color: '#0073AF'
        },
        {
            name: 'snapchat',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faSnapchat} />,
            placeholder: 'http://snapchat.com/add/YourUserName',
            type: 'text',
            tooltip: 'Snapchat',
            color: '#FCD704'
        },
        {
            name: 'reddit',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faReddit} />,
            placeholder: 'https://reddit.com/user/YourUserName',
            type: 'text',
            tooltip: 'Reddit',
            color: '#FF5700'
        },
        {
            name: 'tiktok',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faTiktok} />,
            placeholder: 'https://tiktok.com/@username',
            type: 'text',
            tooltip: 'TikTok',
            color: '#000000'
        },
        {
            name: 'pinterest',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faPinterest} />,
            placeholder: 'https://pinterest.com/username',
            type: 'text',
            tooltip: 'Pinterest',
            color: '#DF0122'
        },
        {
            name: 'spotify',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faSpotify} />,
            placeholder: 'https://open.spotify.com/user/userID',
            type: 'text',
            tooltip: 'Spotify',
            color: '#1DB954'
        },
        {
            name: 'behance',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faBehance} />,
            placeholder: 'https://behance.net/user_name',
            type: 'text',
            tooltip: 'Behance',
            color: '#053eff'
        },
        {
            name: 'discord',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faDiscord} />,
            placeholder: 'https://discord.gg/EXZHcnd',
            type: 'text',
            tooltip: 'Discord',
            color: '#4F6DF7'
        }
    ]


    const iconsNameCommerceMap = [
        {
            name: 'cashapp',
            component: <img src={CashApp} style={{ width: '4rem' }} alt="" />,
            placeholder: 'https://cash.app/$yourcashtag',
            type: 'text',
            tooltip: 'CashApp',
            color: '#01CF30'
        },
        {
            name: 'paypal',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faPaypal} />,
            placeholder: 'https://PayPal.me/YourUserName',
            type: 'text',
            tooltip: 'PayPal',
            color: '#012C81'
        },
        {
            name: 'stripe',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faStripeS} />,
            placeholder: 'Your Stripe account',
            type: 'text',
            tooltip: 'Stripe',
            color: '#6772E5'
        },
        {
            name: 'googleBusinessProfile',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faGoogle} />,
            placeholder: 'Your Google Business Profile',
            type: 'text',
            tooltip: 'Google',
            color: '#7FAAF8'
        },
        {
            name: 'bingBusinessProfile',
            component: <img src={bing} />,
            placeholder: 'Your Bing Business Profile',
            type: 'text',
            tooltip: 'Bing',
            color: '#027E6E'
        },
        {
            name: 'amazonStore',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faAmazon} />,
            placeholder: 'Your amazon store',
            type: 'text',
            tooltip: 'Amazon',
            color: '#FB9B0F'
        },
        {
            name: 'eBayStore',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faEbay} />,
            placeholder: 'Your eBay store',
            type: 'text',
            tooltip: 'eBay',
            color: '#E53338'
        },
        {
            name: 'yelp',
            component: <FontAwesomeIcon className='font_size-1-2_and_color_white' icon={faYelp} />,
            placeholder: 'Your yelp store',
            type: 'text',
            tooltip: 'Yelp',
            color: '#D32422'
        }
    ]


    // useEffect(() => {
    //     if (submitClick) {

    //     }
    // }, [formData])

    const [submitClick, setSubmitClick] = useState(false)


    // const uploadSingleFiles = async (fileType) => {
    //     const newToken = await currentUser.getIdToken(true);
    //     const form = new FormData();
    //     form.append('files', formData[fileType]);
    //     const promise = await fetch(process.env.REACT_APP_API_URL+`user/fileupload`, {
    //         method: "POST",
    //         body: form,
    //         headers: {
    //             token: newToken
    //         }
    //     });
    //     const data = await promise.json();
    //     return data;
    // }


    const submitCard = async () => {
        if (edit) {
            setSlugError('');
            setSlugExists(false);
        }
        if (formData.Name!== null && formData.Name !== "") {
            setUploadError(prev => '');
        }
        if ((edit || cardLimitReached === false) && formData.cardName !== null && formData.cardSlug !== null && formData.Name !== null && formData.cardSlug.length > 6 && (edit || slugExists === false) && slugError === '') {
            setUploadError('');
            setSubmitClick(true);
            const formDataTemp = JSON.parse(JSON.stringify(formData));
            const proFeatureTemp = []

            // upload Logo if not already
            if (formData.Logo !== undefined && formData.Logo !== null && typeof (formData.Logo) === 'object' && !formData.Logo.url) {
                // const data = await uploadSingleFiles('Logo');
                const newToken = await currentUser.getIdToken(true);
                const form = new FormData();
                form.append('files', formData['Logo']);
                const promise = await fetch(process.env.REACT_APP_API_URL + `user/fileupload`, {
                    method: "POST",
                    body: form,
                    headers: {
                        token: newToken
                    }
                });
                const data = await promise.json();
                if (data.status === 'error') {
                    setSubmitClick(false);
                }
                formDataTemp.Logo = data.data[0]
            } else if (formData.Logo && formData.Logo.url) {
                formDataTemp.Logo = formData.Logo.name;
            }
            // upload profile picture if not already
            if (formData.coverPhoto !== undefined && formData.coverPhoto !== null && typeof (formData.coverPhoto) === 'object' && !formData.coverPhoto.url) {
                // const data = await uploadSingleFiles('coverPhoto');
                const newToken = await currentUser.getIdToken(true);
                const form = new FormData();
                form.append('files', formData['coverPhoto']);
                const promise = await fetch(process.env.REACT_APP_API_URL + `user/fileupload`, {
                    method: "POST",
                    body: form,
                    headers: {
                        token: newToken
                    }
                });
                const data = await promise.json();
                if (data.status === 'error') {
                    setSubmitClick(false);
                }
                formDataTemp.coverPhoto = data.data[0]
            } else if (formData.coverPhoto && formData.coverPhoto.url) {
                formDataTemp.coverPhoto = formData.coverPhoto.name;
            }
            // upload cover photo if not already
            if (formData.ProfilePicture !== undefined && formData.ProfilePicture !== null && typeof (formData.ProfilePicture) === 'object' && !formData.ProfilePicture.url) {
                // const data = await uploadSingleFiles('ProfilePicture');
                const newToken = await currentUser.getIdToken(true);
                const form = new FormData();
                form.append('files', formData['ProfilePicture']);
                const promise = await fetch(process.env.REACT_APP_API_URL + `user/fileupload`, {
                    method: "POST",
                    body: form,
                    headers: {
                        token: newToken
                    }
                });
                const data = await promise.json();
                if (data.status === 'error') {
                    setSubmitClick(false);
                }
                formDataTemp.ProfilePicture = data.data[0];
            } else if (formData.ProfilePicture && formData.ProfilePicture.url) {
                formDataTemp.ProfilePicture = formData.ProfilePicture.name;
            }
            console.log('in edit')
            // file Upload
            for (const f of formData.ProFeaturesList) {
                const newToken = await currentUser.getIdToken(true);
                const form = new FormData();
                if (f.images) {
                    let flag = 0;
                    let images = [];
                    for (const image of f.images) {
                        if (image.url) {
                            images.push(image.name);
                        } else {
                            flag = 1;
                            form.append("files", image);
                        }
                    }


                    if (flag === 1) {
                        const promise = await fetch(process.env.REACT_APP_API_URL + `user/fileupload`, {
                            method: "POST",
                            body: form,
                            headers: {
                                token: newToken
                            }
                        });
                        const data = await promise.json();
                        if (data.status === 'error') {
                            setSubmitClick(false);
                        }
                        if (f.images) {
                            f.images = [...images, ...data.data]
                        } else {
                            f.image = [...images, ...data.data];
                        }
                    } else {
                        f.images = [...images];
                    }
                    proFeatureTemp.push(f);
                } else if (f.image) {

                    if (!f.image.url) {
                        form.append("files", f.image);
                        const promise = await fetch(process.env.REACT_APP_API_URL + `user/fileupload`, {
                            method: "POST",
                            body: form,
                            headers: {
                                token: newToken
                            }
                        });
                        const data = await promise.json();
                        if (data.status === 'error') {
                            setSubmitClick(false);
                        }
                        if (f.images) {
                            f.images = data.data
                        } else {
                            f.image = data.data[0];
                        }
                    } else if (f.image.url) {
                        f.image = f.image.name;
                    }
                    proFeatureTemp.push(f);
                } else {
                    proFeatureTemp.push(f);
                }

            }

            formDataTemp.ProFeaturesList = proFeatureTemp;


            const newToken = await currentUser.getIdToken(true);
            if (edit) {

                const cardId = pathname.split('/')[2];
                const promise = await fetch(process.env.REACT_APP_API_URL + `user/card/editCard?id=${cardId}`, {
                    method: 'PUT',
                    headers: {
                        token: newToken,
                        uid: currentUser.uid,
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataTemp)
                })
                const data = await promise.json();
                if (data.status === 'success') {
                    navigate('/dashboard');
                } else if (data.status === 'error' || data.statusCode !== undefined) {
                    setSubmitClick(false);
                }
            } else {
                const promise = await fetch(process.env.REACT_APP_API_URL + `user/card/createCard`, {
                    method: 'POST',
                    headers: {
                        token: newToken,
                        uid: currentUser.uid,
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataTemp)
                })
                const data = await promise.json();
                if (data.status === 'success') {
                    navigate('/dashboard');
                } else if (data.status === 'error' || data.statusCode !== undefined) {
                    setUploadError(data.message);
                    setSubmitClick(false);
                }
            }
        } else if (!edit && cardLimitReached === true) {
            setUploadError('Can not create more than 2 cards.');
        }
        else if (slugExists === undefined) {
            setUploadError('Check for valid slug.');
        } else if (slugError !== '') {
            setUploadError(slugError);
        } else {
            console.log(slugError);
            setUploadError("Fill the required fields.");
        }
    }

    const change = (e) => {
        setformData({ ...formData, SaveToContact: e.target.checked })
    }

    return (
        <>
            {currentUser ? <div className='mainContainer'>
                <div
                    className='mainArea'
                >
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        maxWidth: '450px',
                        width: '100%',
                        minWidth: '300px',
                    }}>
                        <GeneralInfo formData={formData} setformData={setformData} edit={edit} slugExists={slugExists} slugError={slugError} setSlugError={setSlugError} setSlugExists={setSlugExists} />
                        <GenInfo iconsNameContactMap={iconsNameContactMap} formData={formData} color={'#7366F0'} keyName={'PrimaryButtons'} setformData={setformData} heading={formData && formData.contactHeading} />
                        <GenInfo iconsNameContactMap={iconsNameSocialMap} formData={formData} color={'#FE385D'} keyName={'socialMedia'} setformData={setformData} heading={formData && formData.socialMediaHeading} />
                        <GenInfo iconsNameContactMap={iconsNameCommerceMap} formData={formData} color={'#029C5F'} keyName={'commerce'} setformData={setformData} heading={formData && formData.commerceHeading} />
                        <div className='save-to-contact-wrapper'>
                            <label htmlFor="save-to-contact" className="save-to-contact">Save to Contact</label>
                            <FormControlLabel id="save-to-contact"
                                control={<IOSSwitch sx={{ m: 1 }} checked={formData.SaveToContact} />}
                                label=""
                                onClick={(e) => change(e)}
                            />
                        </div>
                        <Media formData={formData} setformData={setformData} edit={edit} />
                        <FontsAndColors formData={formData} setformData={setformData} colorInputVariables={colorInputVariables} fontOptions={fontOptions} />
                        <div style={{ margin: '6rem 0' }}>
                            {
                                uploadError ?
                                    <div className='error_message'>* {uploadError}</div> :
                                    null
                            }
                            <button disabled={submitClick} className='create_btn' onClick={submitCard}>{edit ? submitClick === true ? 'Updating...' : 'Update card' : submitClick === true ? 'Creating...' : 'Create Card'}</button>
                        </div>
                    </div>
                </div>
                <div className='mockupScreenArea'>
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
