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

function IphoneMockup({ formData }) {
  return (
    <div className="outer">
      <div className="band_wrapper">
        <div className="band"></div>
      </div>
      <div className="middle">
        <div className="inner">
          <div className="inner_most">
            <div className="iphone_notch"></div>
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
                  <Typography variant="subtitle1" gutterBottom component="div">
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

                <AwesomeSlider animation="cubeAnimation" cssModule={CubeStyles}>
                  <div data-src="https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png" />
                  <div data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png" />
                  <div data-src="https://i.ytimg.com/vi/weOF9_FGjOk/maxresdefault.jpg" />
                </AwesomeSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IphoneMockup;
