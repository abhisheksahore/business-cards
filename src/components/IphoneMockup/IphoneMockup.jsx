import React, { useEffect } from 'react';
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function IphoneMockup({ formData, setformData }) {
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
              <div className="iphone_notch">
                <div className="iphone_notch_cam visibility_hidden"></div>
                <div className="iphone_notch_speaker"></div>
                <div className="iphone_notch_cam"></div>
              </div>

              <div className="screen_area">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  {formData && formData.Logo && (
                    <img
                      src={formData && formData.Logo}
                      style={{
                        width: '40px',
                        height: '40px',
                        // backgroundColor: 'red',
                        borderRadius: '50%',
                        marginTop: '2rem',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  {formData && formData.ProfilePicture && (
                    <img
                      src={formData && formData.ProfilePicture}
                      style={{
                        width: '100px',
                        height: '100px',
                        // backgroundColor: 'red',
                        borderRadius: '50%',
                        marginTop:
                          formData && formData.Logo ? '1.1rem' : '5.2rem',
                        objectFit: 'cover',
                      }}
                    />
                  )}

                  <div style={{ marginTop: '20px' }}>
                    <Typography variant="h6" component="div">
                      {formData && formData.Name}{' '}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      {formData && formData.BusinessName}
                    </Typography>
                    <div style={{ marginTop: '20px' }}>
                      <Typography variant="body2" gutterBottom>
                        {formData && formData.DescribeYourself}
                      </Typography>
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Grid
                          container
                          spacing={3}
                          columns={3}
                          sx={{ marginTop: '30px' }}
                        >
                          {formData &&
                            formData.PrimaryButtons &&
                            formData.PrimaryButtons.map((icon) => {
                              return (
                                <>
                                  {icon === 'CallIcon' ? (
                                    <Grid
                                      xs={1}
                                      item
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: '35px',
                                          height: '35px',
                                          borderRadius: '50%',
                                          backgroundColor: '#1f2937',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          justifyItems: 'center',
                                          marginBottom: '10px',
                                        }}
                                      >
                                        <CallIcon
                                          style={{
                                            color: '#fff',
                                            fontSize: '17px',
                                          }}
                                        />
                                      </Box>{' '}
                                      <Typography
                                        style={{
                                          color: '#1f2937',
                                          fontSize: '12px',
                                        }}
                                      >
                                        Call
                                      </Typography>
                                    </Grid>
                                  ) : icon === 'TelegramIcon' ? (
                                    <Grid
                                      xs={1}
                                      item
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: '35px',
                                          height: '35px',
                                          borderRadius: '50%',
                                          backgroundColor: '#1f2937',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          justifyItems: 'center',
                                          marginBottom: '10px',
                                        }}
                                      >
                                        <TelegramIcon
                                          style={{
                                            color: '#fff',
                                            fontSize: '17px',
                                          }}
                                        />
                                      </Box>{' '}
                                      <Typography
                                        style={{
                                          color: '#1f2937',
                                          fontSize: '12px',
                                        }}
                                      >
                                        Telegram
                                      </Typography>
                                    </Grid>
                                  ) : icon === 'WhatsAppIcon' ? (
                                    <Grid
                                      xs={1}
                                      item
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: '35px',
                                          height: '35px',
                                          borderRadius: '50%',
                                          backgroundColor: '#1f2937',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          justifyItems: 'center',
                                          marginBottom: '10px',
                                        }}
                                      >
                                        <WhatsAppIcon
                                          style={{
                                            color: '#fff',
                                            fontSize: '17px',
                                          }}
                                        />
                                      </Box>{' '}
                                      <Typography
                                        style={{
                                          color: '#1f2937',
                                          fontSize: '12px',
                                        }}
                                      >
                                        WhatsApp
                                      </Typography>
                                    </Grid>
                                  ) : icon === 'MailOutlineIcon' ? (
                                    <Grid
                                      xs={1}
                                      item
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: '35px',
                                          height: '35px',
                                          borderRadius: '50%',
                                          backgroundColor: '#1f2937',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          justifyItems: 'center',
                                          marginBottom: '10px',
                                        }}
                                      >
                                        <MailOutlineIcon
                                          style={{
                                            color: '#fff',
                                            fontSize: '17px',
                                          }}
                                        />
                                      </Box>{' '}
                                      <Typography
                                        style={{
                                          color: '#1f2937',
                                          fontSize: '12px',
                                        }}
                                      >
                                        Mail
                                      </Typography>
                                    </Grid>
                                  ) : icon === 'LanguageIcon' ? (
                                    <Grid
                                      xs={1}
                                      item
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: '35px',
                                          height: '35px',
                                          borderRadius: '50%',
                                          backgroundColor: '#1f2937',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          justifyItems: 'center',
                                          marginBottom: '10px',
                                        }}
                                      >
                                        <LanguageIcon
                                          style={{
                                            color: '#fff',
                                            fontSize: '17px',
                                          }}
                                        />
                                      </Box>{' '}
                                      <Typography
                                        style={{
                                          color: '#1f2937',
                                          fontSize: '12px',
                                        }}
                                      >
                                        Website
                                      </Typography>
                                    </Grid>
                                  ) : icon === 'AddLocationIcon' ? (
                                    <Grid
                                      xs={1}
                                      item
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: '35px',
                                          height: '35px',
                                          borderRadius: '50%',
                                          backgroundColor: '#1f2937',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          justifyItems: 'center',
                                          marginBottom: '10px',
                                        }}
                                      >
                                        <AddLocationIcon
                                          style={{
                                            color: '#fff',
                                            fontSize: '17px',
                                          }}
                                        />
                                      </Box>{' '}
                                      <Typography
                                        style={{
                                          color: '#1f2937',
                                          fontSize: '12px',
                                        }}
                                      >
                                        Locate
                                      </Typography>
                                    </Grid>
                                  ) : null}
                                </>
                              );
                            })}
                        </Grid>
                      </div>
                    </div>
                  </div>
                  {formData &&
                    formData.ProFeaturesList &&
                    formData.ProFeaturesList.map((feature) => {
                      return (
                        <div
                          style={{
                            width: '100%',
                            padding: '10px',
                            marginTop: '50px',
                          }}
                        >
                          <Typography
                            variant="h7"
                            component="div"
                            gutterBottom
                            style={{ color: '#5d6473' }}
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
                                feature.images.map((image) => {
                                  return (
                                    <img
                                      style={{
                                        height: '200px',
                                        objectFit: 'cover',
                                      }}
                                      src={image}
                                    />
                                  );
                                })}
                            </Carousel>
                          ) : feature.type === 'media' ? (
                            <div
                              style={{
                                maxWidth: '100%',
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
                                        maxWidth: '275px',
                                        marginTop: '10px',
                                      }}
                                      url={link}
                                    />
                                  );
                                })}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="iphone_mockup_power_btn"></div>
    </div>
  );
}

export default IphoneMockup;
