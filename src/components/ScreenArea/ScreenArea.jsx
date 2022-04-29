import './ScreenArea.css';
import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import CubeStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
import ReactPlayer from 'react-player';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import fileSaver from 'file-saver';
import uuid from 'react-uuid';

//icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


import StorefrontIcon from '@mui/icons-material/Storefront';
import InstagramIcon from '@mui/icons-material/Instagram';
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
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Loader from '../Loader/Loader';
import { WrapText } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ScreenArea = ({ formData, edit }) => {

    const { currentUser } = useContext(AuthContext);

    const [featureList, setFeatureList] = useState();

    // const fetchPhoto = async (filePath) => {
    //     const newToken = await currentUser.getIdToken(true);
    //     const promise = await fetch(process.env.REACT_APP_API_URL+`user/fileupload/getImageUrl`, {
    //         method: "POST",
    //         headers: {
    //             token: newToken,
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             urls: [filePath]
    //         })
    //     });
    //     const data = await promise.json();

    //     return data.urls[0]
    // }
    const { pathname } = useLocation();

    const [logoUrl, setLogoUrl] = useState('')
    const [vcfUrl, setVcfUrl] = useState('')
    const [coverPhotoUrl, setCoverPhotoUrl] = useState('')
    const [profilePictureUrl, setProfilePictureUrl] = useState('')
    const [triggerSetFeatureList, setTriggerSetFeatureList] = useState(false)
    // const [vCardFile, setVCardFile] = useState();


    const download_vcf = async () => {
        const promise = await fetch(process.env.REACT_APP_API_URL+`user/card/vcard?name=${formData && formData.Name ? formData.Name : null}&email=${formData && formData.Mail ? formData.Mail : null}&phone=${formData && formData.Call ? formData.Call : null}`);
        promise.blob().then(blob => {
            const filename = `${Date.now()}`.vcf;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        })
    }

    //     useEffect(async () => {
    //         const newToken = await currentUser.getIdToken(true);
    //         const promise = await fetch(process.env.REACT_APP_API_URL+`user/card/vcard?name=${formData && formData.Name ? formData.Name : null}&email=${formData && formData.Mail ? formData.Mail : null}&phone=${formData && formData.Call ? formData.Call : null}`, {
    //             headers: {
    //                 token: newToken
    //             },
    //             method: 'GET'
    //         });
    //         const data = await promise.json();
    //         const file = new Blob([data]);
    //         fileSaver.saveAs(file, "temp.vcf");
    //         // window.open(file);

    // }, [currentUser, formData])




    useEffect(async () => {

        // if (formData.Logo) {

        //     if (edit && typeof (formData.Logo) === 'string') {
        //         setLogoUrl(await fetchPhoto(formData.Logo));

        //     } else {
        //         setLogoUrl(URL.createObjectURL(formData.Logo))
        //     }
        // }

        // if (formData.coverPhoto) {
        //     if (edit && typeof (formData.coverPhoto) === 'string') {
        //         setCoverPhotoUrl(await fetchPhoto(formData.coverPhoto));

        //     } else {
        //         setCoverPhotoUrl(URL.createObjectURL(formData.coverPhoto))
        //     }
        // }

        // if (formData.ProfilePicture) {
        //     if (edit && typeof (formData.ProfilePicture) === 'string') {
        //         setProfilePictureUrl(await fetchPhoto(formData.ProfilePicture));

        //     } else {
        //         setProfilePictureUrl(URL.createObjectURL(formData.ProfilePicture))
        //     }
        // }

    }, [formData, edit, triggerSetFeatureList])

    // useEffect( ()=> {
    //     let vcard = VCardJs();
    //     vcard.cellPhone = formData.Call;
    //     if (formData && formData.Name) {
    //         vcard.firstname = formData.Name;
    //     }
    //     if (formData && formData.email) {
    //         vcard.email = formData.email;
    //     }
    //     vcard.getFormattedString()
    //     console.log(vcard.getFormattedString())
    //     // setVcfUrl()
    // }, [formData])

    useEffect(async () => {
        // setFeatureList(undefined);
        // let featureListTemp = JSON.parse(JSON.stringify(formData.ProFeaturesList));
        // for (let i = 0; i < featureListTemp.length; i++) {
        //     if (featureListTemp[i].images && featureListTemp[i].images.length > 0) {
        //         for (let j = 0; j < featureListTemp[i].images.length; j++) {
        //             if (edit && typeof (featureListTemp[i].images[j]) === 'string') {
        //                 const newToken = await currentUser.getIdToken(true);
        //                 const promise = await fetch(process.env.REACT_APP_API_URL+`user/fileupload/getImageUrl`, {
        //                     method: "POST",
        //                     headers: {
        //                         token: newToken,
        //                         'Accept': 'application/json, text/plain, */*',
        //                         'Content-Type': 'application/json'
        //                     },
        //                     body: JSON.stringify({
        //                         urls: [featureListTemp[i].images[j]]
        //                     })
        //                 });
        //                 const data = await promise.json();

        //                 featureListTemp[i].images[j] = data.urls[0]
        //             } else {
        //                 featureListTemp[i].images[j] = URL.createObjectURL(featureListTemp[i].image[j])
        //             }
        //         }
        //     } else if (featureListTemp[i].image) {
        //         if (edit && typeof (featureListTemp[i].image) === 'string') {
        //             const newToken = await currentUser.getIdToken(true);
        //             const promise = await fetch(process.env.REACT_APP_API_URL+`user/fileupload/getImageUrl`, {
        //                 method: "POST",
        //                 headers: {
        //                     token: newToken,
        //                     'Accept': 'application/json, text/plain, */*',
        //                     'Content-Type': 'application/json'
        //                 },
        //                 body: JSON.stringify({
        //                     urls: [featureListTemp[i].image]
        //                 })
        //             });
        //             const data = await promise.json();

        //             featureListTemp[i].image = data.urls[0]
        //         } else {
        //             featureListTemp[i].image = URL.createObjectURL(featureListTemp[i].image);
        //         }
        //     }
        // }

        // setFeatureList(featureListTemp);
    }, [edit, formData])

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

    const PrimaryButtons = (name, type) => {
        const link = formData[name];

        let displayName;
        let component;
        let backgroundColor;
        if (type === 'contact') {
            component = iconsNameContactMap.filter(e => e.name === name)[0].component;
            backgroundColor = '#7366F0';
            displayName = iconsNameContactMap.filter(e => e.name === name)[0].tooltip
        } else if (type === 'social') {
            component = iconsNameSocialMap.filter(e => e.name === name)[0].component;
            backgroundColor = iconsNameSocialMap.filter(e => e.name === name)[0].color;
            displayName = iconsNameSocialMap.filter(e => e.name === name)[0].tooltip
        } else if (type === 'commerce') {
            component = iconsNameCommerceMap.filter(e => e.name === name)[0].component;
            backgroundColor = iconsNameCommerceMap.filter(e => e.name === name)[0].color;
            displayName = iconsNameCommerceMap.filter(e => e.name === name)[0].tooltip
        }


        return (
            <Grid xs={1} item sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', alignItems: 'center' }}>
                {name === 'Mail' ?
                    <div onClick={() => window.open(`mailto:${formData.Mail}?subject=SendMail&body=Description`)} style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                        <div className='box' >
                            <Box sx={{ fontFamily: `${formData.font}`, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: formData.buttonBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', marginBottom: '10px' }}>
                                {component}
                            </Box>
                        </div>
                        {' '}
                        <Typography style={{
                            color: formData && formData.fontColor, fontSize: '12px'
                        }}>
                            {displayName}
                        </Typography>
                    </div>
                    : name === 'Call' ?
                        <a href={`tel:${formData.Call}`} target='_blank' style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                            <div className='box' >
                                <Box sx={{ fontFamily: `${formData.font}`, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: formData.buttonBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', marginBottom: '10px' }}>
                                    {component}
                                </Box>
                            </div>
                            {' '}
                            <Typography style={{ color: formData && formData.fontColor, fontSize: '12px' }}>
                                {displayName}
                            </Typography>
                        </a>
                        : name === 'WhatsApp' ?
                            < a href={`https://api.whatsapp.com/send?phone=${link}`} target="_blank" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                                <div className='box' >
                                    <Box sx={{ fontFamily: `${formData.font}`, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: formData.buttonBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', marginBottom: '10px' }}>
                                        {component}
                                    </Box>
                                </div>
                                {' '}
                                <Typography style={{ color: formData && formData.fontColor, fontSize: '12px' }}>
                                    {displayName}
                                </Typography>
                            </a>
                            : name === 'skype' ?
                            < a href={`skype:${link}?chat`} target="_blank" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                                <div className='box' >
                                    <Box sx={{ fontFamily: `${formData.font}`, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: formData.buttonBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', marginBottom: '10px' }}>
                                        {component}
                                    </Box>
                                </div>
                                {' '}
                                <Typography style={{ color: formData && formData.fontColor, fontSize: '12px' }}>
                                    {displayName}
                                </Typography>
                            </a>
                            : name === 'weChat' ?
                            < a href={`weixin://dl/chat?${link}`} target="_blank" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                                <div className='box' >
                                    <Box sx={{ fontFamily: `${formData.font}`, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: formData.buttonBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', marginBottom: '10px' }}>
                                        {component}
                                    </Box>
                                </div>
                                {' '}
                                <Typography style={{ color: formData && formData.fontColor, fontSize: '12px' }}>
                                    {displayName}
                                </Typography>
                            </a>
                            :name === 'signal' ?
                            < a href={`https://signal.me/#p/${link}`} target="_blank" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                                <div className='box' >
                                    <Box sx={{ fontFamily: `${formData.font}`, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: formData.buttonBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', marginBottom: '10px' }}>
                                        {component}
                                    </Box>
                                </div>
                                {' '}
                                <Typography style={{ color: formData && formData.fontColor, fontSize: '12px' }}>
                                    {displayName}
                                </Typography>
                            </a>
                            : name === 'viber' ?
                            < a href={`viber://contact?number=${link}`} target="_blank" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                                <div className='box' >
                                    <Box sx={{ fontFamily: `${formData.font}`, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: formData.buttonBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', marginBottom: '10px' }}>
                                        {component}
                                    </Box>
                                </div>
                                {' '}
                                <Typography style={{ color: formData && formData.fontColor, fontSize: '12px' }}>
                                    {displayName}
                                </Typography>
                            </a>
                            : < a href={link} target="_blank" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                                <div className='box' >
                                    <Box sx={{ fontFamily: `${formData.font}`, width: '45px', height: '45px', borderRadius: '50%', backgroundColor: type === 'contact' ? formData.buttonBackgroundColor : backgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', marginBottom: '10px' }}>
                                        {component}
                                    </Box>
                                </div>
                                {' '}
                                <Typography style={{ color: formData && formData.fontColor, fontSize: '12px' }}>
                                    {displayName}
                                </Typography>
                            </a>
                }
            </Grid >
        )
    }


    return (
        <>
            {
                formData ? <div className='screen_area' style={{ borderBottomRightRadius: pathname.includes('edit') || pathname.includes('create') || pathname.includes('card') ? '2rem' : '0', borderBottomLeftRadius: pathname.includes('edit') || pathname.includes('create') || pathname.includes('card') ? '2rem' : '0', backgroundColor: `${formData.mainBackgroundColor}` }}>
                    <div className='head_area_wrapper'>
                        <div style={{ height: '100%' }}>{formData && formData.coverPhoto && (<img className='backgroundCoverPhoto' style={{ backgroundColor: 'grey' }} src={edit && formData.coverPhoto && formData.coverPhoto.url ? formData.coverPhoto.url : formData.coverPhoto && !formData.coverPhoto.url ? URL.createObjectURL(formData.coverPhoto) : null} alt="" />)}</div>
                        <div className='head_area' style={{ marginTop: `${formData.coverPhoto ? '-160px' : '-160px'}` }}>

                            <div style={{ height: "60px", width: '60px', marginTop: '0rem', backgroundColor: `${formData.Logo ? 'transparent' : formData.logoBackgroundColor}`, borderRadius: '50%' }}>
                                {formData && formData.Logo && (
                                    <img
                                        src={edit && formData.Logo && formData.Logo.url ? formData.Logo.url : formData.Logo && !formData.Logo.url ? URL.createObjectURL(formData.Logo) : null}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            // backgroundColor: 'red',
                                            borderRadius: '50%',
                                            // marginTop: '2rem',
                                            objectFit: 'cover',
                                        }}
                                    />
                                )}
                            </div>
                            <div style={{
                                height: '100px', width: '100px', backgroundColor: `${formData.ProfilePicture ? 'transparent' : formData.logoBackgroundColor}`, borderRadius: '50%', marginTop:
                                    formData && formData.ProfilePicture ? '2.5rem' : '2.5rem',
                            }}>
                                {formData && formData.ProfilePicture && (
                                    <img
                                        src={edit && formData.ProfilePicture && formData.ProfilePicture.url ? formData.ProfilePicture.url : formData.ProfilePicture && !formData.ProfilePicture.url ? URL.createObjectURL(formData.ProfilePicture) : null}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            // backgroundColor: 'red',
                                            borderRadius: '50%',

                                            objectFit: 'cover',
                                        }}
                                    />
                                )}
                            </div>

                        </div>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            zIndex: '2',
                            marginTop: '2rem',
                            padding: "10px"
                        }}
                    >

                        <div style={{ marginTop: '2rem' }}>
                            <Typography
                                sx={{
                                    fontFamily: `${formData && formData.font}`,
                                    fontWeight: '800',
                                    fontSize: '1.5rem',
                                    letterSpacing: '1.5px',
                                    color: formData && formData.fontColor
                                }}
                                variant="h6" component="div">
                                {formData && formData.Name}{' '}
                            </Typography>
                            <Typography sx={{
                                fontFamily: `${formData.font}`,
                                color: '#878787',
                                fontSize: '.85rem',
                                letterSpacing: '1px',
                                color: formData && formData.fontColor
                            }} variant="body2" gutterBottom>
                                {formData && formData.DescribeYourself}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                                sx={{
                                    fontFamily: `${formData.font}`,
                                    fontWeight: '700',
                                    fontSize: '1rem',
                                    letterSpacing: '1.5px',
                                    color: formData && formData.fontColor
                                }}
                            >
                                {formData && formData.cardName}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: `${formData.font}`, color: formData && formData.fontColor
                                }}
                                variant="body2" gutterBottom>
                                {formData && formData.genderPronouns}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: `${formData.font}`,
                                    fontWeight: '500',
                                    fontSize: '.9rem',
                                    letterSpacing: '1.5px',
                                    color: formData && formData.fontColor
                                }}
                                variant="body2" gutterBottom>
                                {formData && formData.jobTitle}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: `${formData.font}`,
                                    fontWeight: '700',
                                    fontSize: '1.2rem',
                                    letterSpacing: '1.5px',
                                    color: formData && formData.fontColor
                                }}
                                variant="body2" gutterBottom>
                                {formData && formData.BusinessName}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: `${formData.font}`,
                                    color: '#595959',
                                    fontSize: '1rem',
                                    letterSpacing: '1.5px',
                                    color: formData && formData.fontColor
                                }}
                                variant="body2" gutterBottom>
                                {formData && formData.businessDescription}
                            </Typography>




                            {formData &&
                                formData.PrimaryButtons &&
                                formData.PrimaryButtons.length > 0 ? <div style={{
                                    marginTop: '5rem',
                                    color: formData && formData.fontColor
                                }}>{formData && formData.contactHeading}</div> : null}
                            <div style={{ marginTop: '0px', display: 'grid', gap: "auto auto", gridTemplateColumns: "auto auto auto", padding: '1rem' }}>

                                {formData &&
                                    formData.PrimaryButtons &&
                                    formData.PrimaryButtons.map((icon) => {
                                        return (
                                            <>
                                                <div style={{ display: 'flex', justifyContent: 'center', padding: "0 .5rem", width: '80px', margin: 'auto auto' }}>
                                                    {/* <Grid container spacing={3} columns={3} sx={{ marginTop: '30px' }}> */}
                                                    {
                                                        PrimaryButtons(icon, 'contact')
                                                    }
                                                    {/* </Grid> */}
                                                </div>
                                            </>
                                        );
                                    })}
                            </div>
                            {formData &&
                                formData.socialMedia &&
                                formData.socialMedia.length > 0 ? <div style={{
                                    marginTop: '3rem',
                                    color: formData && formData.fontColor
                                }}>{formData && formData.socialMediaHeading}</div> : null}
                            <div style={{ marginTop: '0px', display: 'grid', gap: "auto auto", gridTemplateColumns: "auto auto auto", padding: '1rem' }}>
                                {formData &&
                                    formData.socialMedia &&
                                    formData.socialMedia.map((icon) => {
                                        return (
                                            <>
                                                <div style={{ display: 'flex', justifyContent: 'center', padding: "0 .5rem", width: '85px', margin: 'auto auto' }}>
                                                    {/* <Grid container spacing={3} columns={3} sx={{ marginTop: '30px' }}> */}
                                                    {
                                                        PrimaryButtons(icon, 'social')
                                                    }
                                                    {/* </Grid> */}
                                                </div>
                                            </>
                                        );
                                    })}
                            </div>
                            {formData &&
                                formData.commerce &&
                                formData.commerce.length > 0 ? <div style={{
                                    marginTop: '3rem',
                                    color: formData && formData.fontColor
                                }}>{formData && formData.commerceHeading}</div> : null}
                            <div style={{ marginTop: '0px', display: 'grid', gap: "auto auto", gridTemplateColumns: "auto auto auto", padding: '1rem' }}>
                                {formData &&
                                    formData.commerce &&
                                    formData.commerce.map((icon) => {
                                        return (
                                            <>
                                                <div style={{ display: 'flex', justifyContent: 'center', padding: "0 .5rem", width: '80px', margin: 'auto auto' }}>
                                                    {/* <Grid container spacing={3} columns={3} sx={{ marginTop: '30px' }}> */}
                                                    {
                                                        PrimaryButtons(icon, 'commerce')
                                                    }
                                                    {/* </Grid> */}
                                                </div>
                                            </>
                                        );
                                    })}
                            </div>
                        </div>







                        {/* S a v e   t o   c o n t a c t   b u t t o n */}

                        {
                            formData &&
                                formData.SaveToContact ?
                                <div className='save-to-contact-btn' style={{backgroundColor: formData.buttonBackgroundColor}} onClick={download_vcf}>
                                    Save to Contact
                                </div> :
                                null
                        }







                        <div style={{ padding: '2rem', maxWidth: '330px' }}>
                            {formData &&
                                formData.ProFeaturesList &&
                                formData.ProFeaturesList.map((feature, index) => {
                                    return (
                                        <div
                                            style={{
                                                fontFamily: `${formData.font}`,
                                                width: '100%',
                                                padding: '1rem',
                                                marginTop: '50px',
                                                backgroundColor: 'rgb(240, 240, 240)',
                                                borderRadius: '8px'
                                            }}
                                        >
                                            <Typography
                                                variant="h7"
                                                component="div"
                                                gutterBottom
                                                style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '800', letterSpacing: '0.2px' }}
                                            >
                                                {feature.title}
                                            </Typography>
                                            {feature.type === 'image' &&
                                                feature.images &&
                                                feature.images.length > 0 ? (
                                                // <AwesomeSlider
                                                //   animation="cubeAnimation"
                                                //   cssModule={CubeStyles}
                                                // >
                                                //   {feature &&
                                                //     feature.images &&
                                                //     feature.images.map((image) => {
                                                //       return <div data-src={image} />;
                                                //     })}
                                                // </AwesomeSlider>
                                                <Carousel dynamicHeight={false} showThumbs={false}>
                                                    {feature &&
                                                        feature.images &&
                                                        feature.images.map((image, iIndex) => {
                                                            return (
                                                                <img
                                                                    style={{
                                                                        height: '200px',
                                                                        objectFit: 'cover',
                                                                        borderRadius: '8px'
                                                                    }}
                                                                    src={edit && image.url ? (() => { console.log(image.url); return image.url })() : image && !image.url ? URL.createObjectURL(image) : null}
                                                                />
                                                            );
                                                        })}
                                                </Carousel>
                                            ) : feature.type === 'media' ? (
                                                <div
                                                    style={{
                                                        width: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        height: '200px',
                                                    }}
                                                >
                                                    {feature &&
                                                        feature.links &&
                                                        feature.links.length > 0 &&
                                                        feature.links.map((link) => {
                                                            return (
                                                                <ReactPlayer
                                                                    style={{
                                                                        maxWidth: '250px',
                                                                        marginTop: '10px',
                                                                    }}
                                                                    url={link}
                                                                />
                                                            );
                                                        })}
                                                </div>
                                            ) : feature.type === 'text' ? (
                                                <div style={{
                                                    fontFamily: `${formData.font}`,
                                                    maxWidth: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    padding: '0 1rem 1rem',

                                                    // backgroundColor: "red"
                                                }}>
                                                    <div style={{ fontFamily: `${formData.font}`, fontSize: "1rem", textAlign: "justify", fontWeight: '600' }}>{feature.description}</div>
                                                </div>
                                            ) : feature.type === 'link' ? (
                                                <div style={{
                                                    fontFamily: `${formData.font}`,
                                                    maxWidth: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                }}>
                                                    <img style={{ width: "100%", objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem' }} src={edit && feature.image && feature.image.url ? (() => { console.log(feature.image.url); return feature.image.url })() : feature.image && !feature.image.url ? URL.createObjectURL(feature.image) : null} alt="" />
                                                    <div style={{ fontFamily: `${formData.font}`, fontSize: "1rem", textAlign: "justify", padding: '0 1rem 1rem', fontWeight: '600' }}>{feature.description}</div>
                                                    <a href={feature.link} target='_blank' style={{ fontFamily: `${formData.font}`, textDecoration: 'none' }}><div className='link_btn'>{feature.buttonLabel}</div></a>
                                                </div>
                                            ) : null}
                                        </div>
                                    );
                                })}
                        </div>
                        {
                            formData && formData.qr ?
                                <div>
                                    <img style={{ borderRadius: '5px', marginTop: '4rem', marginBottom: '4rem', width: '80%', minWidth: '200px' }} src={formData.qr} alt="" />
                                </div>
                                : null
                        }
                    </div>
                </div> :
                    <Loader />
            }
        </>
    )
}

export default ScreenArea