import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import './IphoneMockup.css';
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
import ScreenArea from '../ScreenArea/ScreenArea';
import { useLocation } from 'react-router-dom';
import { faBatteryFull, faSignalPerfect, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function IphoneMockup({ formData }) {


  const [edit, setEdit] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname && pathname.includes('/edit/')) {
      setEdit(true);
    }
    if (pathname && pathname.includes('/card/')) {
      setEdit(true);
    }
  }, [])


  return (
    <div className="iphone_mockup">
      <div className="iphone_mockup_left_btns_wrapper">
        <div className="iphone_mockup_mute_btn"></div>
        <div className="iphone_mockup_volume_btns_wrapper">
          <div className="iphone_mockup_volume_up_btn"></div>
          <div className="iphone_mockup_volume_down_btn"></div>
        </div>
      </div>
      <div className="outer">
        <div className="band_wrapper">
          <div className="band"></div>
          <div className="band lower_band"></div>
        </div>
        <div className="middle">
          <div className="inner">
            <div className="inner_most">
              <div style={{ display: 'flex', borderTopLeftRadius: "32px", borderTopRightRadius: "32px", justifyContent: 'space-between',  alignItems: 'flex-end', color: formData && formData.fontColor?formData.fontColor: 'black', backgroundColor: formData && formData.mainBackgroundColor? formData.mainBackgroundColor: 'transparent', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px', marginBottom: '3.5px' }}>
                  <div style={{fontWeight: '600', width: '45px', fontSize: '.75rem', textAlign: 'center'}}>9:41</div>
                </div>
                <div className="iphone_notch">
                  <div className="iphone_notch_cam visibility_hidden"></div>
                  <div className="iphone_notch_speaker"></div>
                  <div className="iphone_notch_cam"></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: '10px', marginBottom: '3.5px' }}>
                  <FontAwesomeIcon style={{ fontWeight: "800", fontSize: '.7rem' }} icon={faWifi} />
                  <FontAwesomeIcon style={{ display: 'flex', alignItems: 'flex-end', position: 'relative', top: '1px', fontSize: '1rem'  }} icon={faBatteryFull} />
                </div>
              </div>

              <ScreenArea formData={formData} edit={edit} />
            </div>
          </div>
        </div>
      </div>
      <div className="iphone_mockup_power_btn"></div>
    </div>
  );
}

export default IphoneMockup;
