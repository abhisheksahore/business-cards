import React, { useState, useRef, useEffect } from 'react';
import './GenInfo.css';
import { Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import ReactDragListView from 'react-drag-listview';
import Divider from '@mui/material/Divider';
import uuid from 'react-uuid';

//icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '@mui/icons-material/Telegram';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookMessenger,
  faWeixin,
  faSkype,
  faViber,
} from '@fortawesome/free-brands-svg-icons';

function GenInfo({ formData, setformData }) {
  const profilePictureInput = useRef();
  const imageGalleryInput = useRef();
  const LogoInput = useRef();
  const coverInput = useRef();
  const listItems = [
    'Entertainment',
    'Private Time',
    'Rest',
    'Meal',
    'Exercise',
    'Work',
    'Home Projects',
    'Family',
  ];
  console.log(formData);

  useEffect(() => {
    console.log(formData);
  }, []);

  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      const data = formData.PrimaryButtons;
      const item = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, item);
      setformData((formState) => ({
        ...formState,
        PrimaryButtons: data,
      }));
    },
    nodeSelector: 'li',
    handleSelector: 'a',
  };
  const dragPropsProFeatures = {
    onDragEnd(fromIndex, toIndex) {
      const data = formData.ProFeaturesList;
      const item = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, item);
      setformData((formState) => ({
        ...formState,
        ProFeaturesList: data,
      }));
    },
    nodeSelector: 'li',
    handleSelector: 'a',
  };

  console.log(formData, '<-------------------------');

  return (
    <div>
      <div className="gen_info_heading">General Information</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <OutlinedInput
          variant="outlined"
          name={'Name'}
          placeholder={'Name'}
          sx={{
            width: '450px',
            borderRadius: '5px',
            marginTop: '15px',
            border: '0.5px solid #6a97ae',
            color: '#fff',
            backgroundColor: '#283046;',
          }}
          onChange={(e) => {
            setformData((formState) => ({
              ...formState,
              Name: e.target.value,
            }));
          }}
        />

        {/* Card name */}
        <OutlinedInput
          variant="outlined"
          name={'cardName'}
          placeholder={'Card Name'}
          sx={{
            width: '450px',
            borderRadius: '5px',
            marginTop: '15px',
            border: '0.5px solid #6a97ae',
            color: '#fff',
            backgroundColor: '#283046;',
          }}
          onChange={(e) => {
            setformData((formState) => ({
              ...formState,
              cardName: e.target.value,
            }));
          }}
        />

        {/* Card URL */}
        <OutlinedInput
          variant="outlined"
          name={'cardUrl'}
          placeholder={'Card URL'}
          sx={{
            width: '450px',
            borderRadius: '5px',
            marginTop: '15px',
            border: '0.5px solid #6a97ae',
            color: '#fff',
            backgroundColor: '#283046;',
          }}
          onChange={(e) => {
            setformData((formState) => ({
              ...formState,
              cardUrl: e.target.value,
            }));
          }}
        />

        {/* Gender Pronouns */}
        <OutlinedInput
          variant="outlined"
          name={'genderPronouns'}
          placeholder={'Gender pronouns'}
          sx={{
            width: '450px',
            borderRadius: '5px',
            marginTop: '15px',
            border: '0.5px solid #6a97ae',
            color: '#fff',
            backgroundColor: '#283046;',
          }}
          onChange={(e) => {
            setformData((formState) => ({
              ...formState,
              genderPronouns: e.target.value,
            }));
          }}
        />

        {/* Job Title */}
        <OutlinedInput
          variant="outlined"
          name={'genderPronouns'}
          placeholder={'Job Title'}
          sx={{
            width: '450px',
            borderRadius: '5px',
            marginTop: '15px',
            border: '0.5px solid #6a97ae',
            color: '#fff',
            backgroundColor: '#283046;',
          }}
          onChange={(e) => {
            setformData((formState) => ({
              ...formState,
              jobTitle: e.target.value,
            }));
          }}
        />

        <OutlinedInput
          variant="outlined"
          name={'Business'}
          placeholder={'Business Name'}
          sx={{
            width: '450px',
            borderRadius: '5px',
            marginTop: '15px',
            border: '0.5px solid #6a97ae',
            color: '#fff',
            backgroundColor: '#283046;',
          }}
          onChange={(e) => {
            setformData((formState) => ({
              ...formState,
              BusinessName: e.target.value,
            }));
          }}
        />

        {/* Business Description */}
        <OutlinedInput
          variant="outlined"
          name={'businessDescription'}
          placeholder={'Business Description'}
          sx={{
            width: '450px',
            borderRadius: '5px',
            marginTop: '15px',
            border: '0.5px solid #6a97ae',
            color: '#fff',
            backgroundColor: '#283046;',
          }}
          onChange={(e) => {
            setformData((formState) => ({
              ...formState,
              businessDescription: e.target.value,
            }));
          }}
        />

        <OutlinedInput
          variant="outlined"
          name={'Describe'}
          placeholder={'Describe yourself (optional) '}
          sx={{
            width: '450px',
            borderRadius: '5px',
            marginTop: '15px',
            border: '0.5px solid #6a97ae',
            color: '#fff',
            backgroundColor: '#283046;',
          }}
          onChange={(e) => {
            setformData((formState) => ({
              ...formState,
              DescribeYourself: e.target.value,
            }));
          }}
        />
        {formData && formData.Logo ? (
          <div
            style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}
          >
            <img
              src={formData.Logo}
              style={{ width: '55px', height: '55px', objectFit: 'cover' }}
            />
            <CloseIcon
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  Logo: null,
                }));
              }}
              style={{ cursor: 'pointer', marginLeft: '15px', color: '#fff' }}
            />
          </div>
        ) : (
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
          >
            <div
              onClick={() => {
                if (LogoInput) {
                  LogoInput.current.click();
                }
              }}
              style={{
                width: '55px',
                height: '55px',
                backgroundColor: '#374151',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <AddIcon style={{ color: '#fff' }} />{' '}
              <input
                ref={LogoInput}
                type="file"
                accept="image/*"
                style={{ width: '100%', height: '100%', display: 'none' }}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setformData((formState) => ({
                    ...formState,
                    Logo: URL.createObjectURL(e.target.files[0]),
                  }));
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '15px',
              }}
            >
              <Typography
                variant="h7"
                component="div"
                gutterBottom
                style={{ color: '#5d6473' }}
              >
                Add Logo{' '}
                {/* <span style={{ fontStyle: 'italic' }}>(PRO features)</span> */}
              </Typography>

              <Typography
                variant="subtitle3"
                component="div"
                style={{ color: '#5d6473' }}
              >
                Suggested formats: svg, png or gif
              </Typography>
            </div>
          </div>
        )}

        {/* C O V E R   P H O T O  */}

        {formData && formData.coverPhoto ? (
          <div
            style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}
          >
            <img
              src={formData.coverPhoto}
              style={{ width: '55px', height: '55px', objectFit: 'cover' }}
            />
            <CloseIcon
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  coverPhoto: null,
                }));
              }}
              style={{ cursor: 'pointer', marginLeft: '15px', color: '#fff' }}
            />
          </div>
        ) : (
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
          >
            <div
              onClick={() => {
                if (coverInput) {
                  coverInput.current.click();
                }
              }}
              style={{
                width: '55px',
                height: '55px',
                backgroundColor: '#374151',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <AddIcon style={{ color: '#fff' }} />{' '}
              <input
                ref={coverInput}
                type="file"
                accept="image/*"
                style={{ width: '100%', height: '100%', display: 'none' }}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setformData((formState) => ({
                    ...formState,
                    coverPhoto: URL.createObjectURL(e.target.files[0]),
                  }));
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '15px',
              }}
            >
              <Typography
                variant="h7"
                component="div"
                gutterBottom
                style={{ color: '#5d6473' }}
              >
                Add cover photo{' '}
                {/* <span style={{ fontStyle: 'italic' }}>(PRO features)</span> */}
              </Typography>

              <Typography
                variant="subtitle3"
                component="div"
                style={{ color: '#5d6473' }}
              >
                Suggested formats: svg, png or gif
              </Typography>
            </div>
          </div>
        )}

        {formData && formData.ProfilePicture ? (
          <div
            style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}
          >
            <img
              src={formData.ProfilePicture}
              style={{ width: '55px', height: '55px', objectFit: 'cover' }}
            />
            <CloseIcon
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  ProfilePicture: null,
                }));
              }}
              style={{ cursor: 'pointer', marginLeft: '15px', color: '#fff' }}
            />
          </div>
        ) : (
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
          >
            <div
              onClick={() => {
                if (profilePictureInput) {
                  profilePictureInput.current.click();
                }
              }}
              style={{
                width: '55px',
                height: '55px',
                backgroundColor: '#374151',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <AddIcon style={{ color: '#fff' }} />{' '}
              <input
                ref={profilePictureInput}
                type="file"
                accept="image/*"
                style={{ width: '100%', height: '100%', display: 'none' }}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setformData((formState) => ({
                    ...formState,
                    ProfilePicture: URL.createObjectURL(e.target.files[0]),
                  }));
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '15px',
              }}
            >
              <Typography
                variant="h7"
                component="div"
                gutterBottom
                style={{ color: '#5d6473' }}
              >
                Add profile picture
              </Typography>

              <Typography
                variant="subtitle3"
                component="div"
                style={{ color: '#5d6473' }}
              >
                Suggested formats: jpeg, png or gif{' '}
              </Typography>
            </div>
          </div>
        )}
        {/*------------------------- Primary Buttons---------------------------- */}
        <div className="gen_info_heading" style={{ marginTop: '40px' }}>
          Contact Info
        </div>
        <ReactDragListView {...dragProps}>
          <ol>
            {formData &&
              formData.PrimaryButtons.map((item, index) => (
                // <li key={index}>
                //   <a href="#">Drag</a>
                //   {item}
                // </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '15px',
                    // backgroundColor: 'red'
                  }}
                >
                  <a
                    href="#"
                    style={{
                      textDecoration: 'none',
                      color: 'grey',
                      fontSize: '22px',
                    }}
                  >
                    <DragIndicatorIcon />
                  </a>
                  <Box
                    sx={{
                      width: '55px',
                      height: '55px',
                      borderRadius: '50%',
                      backgroundColor: '#7367f0',
                      marginLeft: '5px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      '&:hover': {
                        transform: 'scale(1.2)',
                        transition: 'transform .2s',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    {item === 'TelegramIcon' ? (
                      <TelegramIcon style={{ color: '#fff' }} />
                    ) : item === 'WhatsAppIcon' ? (
                      <WhatsAppIcon style={{ color: '#fff' }} />
                    ) : item === 'CallIcon' ? (
                      <CallIcon style={{ color: '#fff' }} />
                    ) : item === 'MailOutlineIcon' ? (
                      <MailOutlineIcon style={{ color: '#fff' }} />
                    ) : item === 'LanguageIcon' ? (
                      <LanguageIcon style={{ color: '#fff' }} />
                    ) : item === 'AddLocationIcon' ? (
                      <AddLocationIcon style={{ color: '#fff' }} />
                    ) : item === 'storeIcon' ? (
                      <StorefrontIcon style={{ color: '#fff' }} />
                    ) : item === 'messengerIcon' ? (
                      <div>
                        <FontAwesomeIcon
                          className="font_size-1-2_and_color_white"
                          icon={faFacebookMessenger}
                        />
                      </div>
                    ) : item === 'viberIcon' ? (
                      <div>
                        <FontAwesomeIcon
                          className="font_size-1-2_and_color_white"
                          icon={faViber}
                        />
                      </div>
                    ) : item === 'calendarMonthIcon' ? (
                      <CalendarMonthIcon style={{ color: '#fff' }} />
                    ) : item === 'weChatIcon' ? (
                      <div>
                        <FontAwesomeIcon
                          className="font_size-1-2_and_color_white"
                          icon={faWeixin}
                        />
                      </div>
                    ) : item === 'skypeIcon' ? (
                      <div>
                        <FontAwesomeIcon
                          className="font_size-1-2_and_color_white"
                          icon={faSkype}
                        />
                      </div>
                    ) : null}{' '}
                  </Box>
                  {item === 'TelegramIcon' ? (
                    <OutlinedInput
                      variant="outlined"
                      name={'https://t.me/username'}
                      placeholder={'https://t.me/username'}
                      sx={{
                        width: '300px',
                        borderRadius: '5px',
                        marginLeft: '15px',
                        border: '0.5px solid #6a97ae',
                        color: '#fff',
                        backgroundColor: '#283046;',
                      }}
                      onChange={(e) => {
                        setformData((formState) => ({
                          ...formState,
                          Telegram: e.target.value,
                        }));
                      }}
                    />
                  ) : item === 'CallIcon' ? (
                    <OutlinedInput
                      variant="outlined"
                      name={'+1 XXXXXX XXXXX'}
                      placeholder={'+1 XXXXXX XXXXX'}
                      sx={{
                        width: '300px',
                        borderRadius: '5px',
                        marginLeft: '15px',
                        border: '0.5px solid #6a97ae',
                        color: '#fff',
                        backgroundColor: '#283046;',
                      }}
                      onChange={(e) => {
                        setformData((formState) => ({
                          ...formState,
                          Call: e.target.value,
                        }));
                      }}
                    />
                  ) : item === 'WhatsAppIcon' ? (
                    <OutlinedInput
                      variant="outlined"
                      name={'+1 XXXXXX XXXXX'}
                      placeholder={'+1 XXXXXX XXXXX'}
                      sx={{
                        width: '300px',
                        borderRadius: '5px',
                        marginLeft: '15px',
                        border: '0.5px solid #6a97ae',
                        color: '#fff',
                        backgroundColor: '#283046;',
                      }}
                      onChange={(e) => {
                        setformData((formState) => ({
                          ...formState,
                          WhatsApp: e.target.value,
                        }));
                      }}
                    />
                  ) : item === 'MailOutlineIcon' ? (
                    <OutlinedInput
                      variant="outlined"
                      name={'MailOutlineIcon'}
                      placeholder={'info@example.com'}
                      sx={{
                        width: '300px',
                        borderRadius: '5px',
                        marginLeft: '15px',
                        border: '0.5px solid #6a97ae',
                        color: '#fff',
                        backgroundColor: '#283046;',
                      }}
                      onChange={(e) => {
                        setformData((formState) => ({
                          ...formState,
                          Mail: e.target.value,
                        }));
                      }}
                    />
                  ) : item === 'LanguageIcon' ? (
                    <OutlinedInput
                      variant="outlined"
                      name={'LanguageIcon'}
                      placeholder={'https://example.com'}
                      sx={{
                        width: '300px',
                        borderRadius: '5px',
                        marginLeft: '15px',
                        border: '0.5px solid #6a97ae',
                        color: '#fff',
                        backgroundColor: '#283046;',
                      }}
                      onChange={(e) => {
                        setformData((formState) => ({
                          ...formState,
                          Website: e.target.value,
                        }));
                      }}
                    />
                  ) : item === 'AddLocationIcon' ? (
                    <OutlinedInput
                      variant="outlined"
                      name={'AddLocationIcon'}
                      placeholder={'Brocklyn,NYC'}
                      sx={{
                        width: '300px',
                        borderRadius: '5px',
                        marginLeft: '15px',
                        border: '0.5px solid #6a97ae',
                        color: '#fff',
                        backgroundColor: '#283046;',
                      }}
                      onChange={(e) => {
                        setformData((formState) => ({
                          ...formState,
                          Location: e.target.value,
                        }));
                      }}
                    />
                  ) : item === 'weChatIcon' ? (
                    <OutlinedInput
                      variant="outlined"
                      name={'AddLocationIcon'}
                      placeholder={'Brocklyn,NYC'}
                      sx={{
                        width: '300px',
                        borderRadius: '5px',
                        marginLeft: '15px',
                        border: '0.5px solid #6a97ae',
                        color: '#fff',
                        backgroundColor: '#283046;',
                      }}
                      onChange={(e) => {
                        setformData((formState) => ({
                          ...formState,
                          weChat: e.target.value,
                        }));
                      }}
                    />
                  ) : item === 'messengerIcon' ? (
                    <OutlinedInput
                      variant="outlined"
                      name={'AddLocationIcon'}
                      placeholder={'Brocklyn,NYC'}
                      sx={{
                        width: '300px',
                        borderRadius: '5px',
                        marginLeft: '15px',
                        border: '0.5px solid #6a97ae',
                        color: '#fff',
                        backgroundColor: '#283046;',
                      }}
                      onChange={(e) => {
                        setformData((formState) => ({
                          ...formState,
                          Location: e.target.value,
                        }));
                      }}
                    />
                  ) : null}{' '}
                  <CloseIcon
                    onClick={() => {
                      let list =
                        formData &&
                        formData.PrimaryButtons.filter(
                          (button) => button !== item,
                        );

                      setformData((formState) => ({
                        ...formState,
                        PrimaryButtons: list,
                      }));
                    }}
                    style={{
                      cursor: 'pointer',
                      marginLeft: '15px',
                      color: '#fff',
                    }}
                  />
                </li>
              ))}
          </ol>
        </ReactDragListView>
        {formData &&
        formData.PrimaryButtons &&
        formData.PrimaryButtons.length > 0 ? (
          <Divider
            style={{
              marginTop: '30px',
              backgroundColor: '#D3D3D3',
              opacity: '0.1',
            }}
          />
        ) : null}
        <div style={{ display: 'flex', maxWidth: '450px', flexWrap: 'wrap' }}>
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('CallIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [...formData.PrimaryButtons, 'CallIcon'],
                }));
              }}
            >
              <CallIcon style={{ color: '#fff' }} />
            </Box>
          )}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('TelegramIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [...formData.PrimaryButtons, 'TelegramIcon'],
                }));
              }}
            >
              <TelegramIcon style={{ color: '#fff' }} />
            </Box>
          )}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('WhatsAppIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [...formData.PrimaryButtons, 'WhatsAppIcon'],
                }));
              }}
            >
              <WhatsAppIcon style={{ color: '#fff' }} />
            </Box>
          )}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('MailOutlineIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [
                    ...formData.PrimaryButtons,
                    'MailOutlineIcon',
                  ],
                }));
              }}
            >
              <MailOutlineIcon style={{ color: '#fff' }} />
            </Box>
          )}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('LanguageIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [...formData.PrimaryButtons, 'LanguageIcon'],
                }));
              }}
            >
              <LanguageIcon style={{ color: '#fff' }} />
            </Box>
          )}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('AddLocationIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [
                    ...formData.PrimaryButtons,
                    'AddLocationIcon',
                  ],
                }));
              }}
            >
              <AddLocationIcon style={{ color: '#fff' }} />
            </Box>
          )}

          {/*  W E C H A T  */}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('weChatIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [...formData.PrimaryButtons, 'weChatIcon'],
                }));
              }}
            >
              <div>
                <FontAwesomeIcon
                  className="font_size-1-2_and_color_white"
                  icon={faWeixin}
                />
              </div>
            </Box>
          )}

          {/* m e s s e n g e r */}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('messengerIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [...formData.PrimaryButtons, 'messengerIcon'],
                }));
              }}
            >
              <div>
                <FontAwesomeIcon
                  className="font_size-1-2_and_color_white"
                  icon={faFacebookMessenger}
                />
              </div>
            </Box>
          )}

          {/* v i b e r */}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('viberIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [...formData.PrimaryButtons, 'viberIcon'],
                }));
              }}
            >
              <div>
                <FontAwesomeIcon
                  className="font_size-1-2_and_color_white"
                  icon={faViber}
                />
              </div>
            </Box>
          )}

          {/* s t o r e */}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('storeIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [...formData.PrimaryButtons, 'storeIcon'],
                }));
              }}
            >
              <StorefrontIcon style={{ color: '#fff' }} />
            </Box>
          )}

          {/* S k y p e */}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('skypeIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [...formData.PrimaryButtons, 'skypeIcon'],
                }));
              }}
            >
              <div>
                <FontAwesomeIcon
                  className="font_size-1-2_and_color_white"
                  icon={faSkype}
                />
              </div>
            </Box>
          )}

          {/* S k y p e */}
          {formData &&
          formData.PrimaryButtons &&
          formData.PrimaryButtons.includes('calendarMonthIcon') ? null : (
            <Box
              sx={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                backgroundColor: '#7367f0',
                marginRight: '20px',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform .2s',
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  PrimaryButtons: [
                    ...formData.PrimaryButtons,
                    'calendarMonthIcon',
                  ],
                }));
              }}
            >
              <CalendarMonthIcon style={{ color: '#fff' }} />
            </Box>
          )}

          {/*------------------------- Primary Buttons---------------------------- */}
          <ReactDragListView {...dragPropsProFeatures}>
            <ol>
              {formData &&
                formData.ProFeaturesList &&
                formData.ProFeaturesList.map((featured, index) => {
                  return (
                    <li>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginTop: '20px',
                        }}
                      >
                        {featured.type === 'image' ? (
                          <div
                            style={{
                              width: '450px',
                              border: '0.5px solid #6a97ae',
                              backgroundColor: '#283046',
                              borderRadius: '10px',
                              padding: '10px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <a
                                  href="#"
                                  style={{
                                    textDecoration: 'none',
                                    color: 'grey',
                                    fontSize: '22px',
                                    cursor: 'grab',
                                    marginLeft: '5px',
                                  }}
                                >
                                  <DragIndicatorIcon />
                                </a>
                                <OutlinedInput
                                  variant="outlined"
                                  name={'title'}
                                  placeholder={'Title'}
                                  sx={{
                                    width: '300px',
                                    borderRadius: '5px',
                                    marginLeft: '15px',
                                    border: '0.5px solid #6a97ae',
                                    color: '#fff',
                                    backgroundColor: '#283046;',
                                  }}
                                  onChange={(e) => {
                                    let list = formData.ProFeaturesList;
                                    if (list && list.length > 0) {
                                      list.forEach((currentItem) => {
                                        if (currentItem.id === featured.id) {
                                          currentItem.title = e.target.value;
                                        }
                                      });

                                      setformData((formState) => ({
                                        ...formState,
                                        ProFeaturesList: list,
                                      }));
                                    }
                                  }}
                                />
                              </div>
                              <CloseIcon
                                onClick={() => {
                                  if (
                                    formData &&
                                    formData.ProFeaturesList &&
                                    formData.ProFeaturesList.length > 0
                                  ) {
                                    let list = formData.ProFeaturesList.filter(
                                      (currentItem) => {
                                        return currentItem.id !== featured.id;
                                      },
                                    );

                                    setformData((formState) => ({
                                      ...formState,
                                      ProFeaturesList: list,
                                    }));
                                  }
                                }}
                                style={{
                                  cursor: 'pointer',
                                  marginRight: '15px',
                                  color: '#fff',
                                }}
                              />
                            </div>
                            <div
                              style={{
                                width: '100%',
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginTop: '15px',
                              }}
                            >
                              {featured &&
                                featured.images &&
                                featured.images.map((image, index) => {
                                  console.log('@##########################');

                                  {
                                    return (
                                      <div
                                        style={{
                                          width: '80px',
                                          height: '80px',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          marginTop: '15px',
                                          position: 'relative',
                                        }}
                                      >
                                        <CloseIcon
                                          onClick={() => {
                                            let list = formData.ProFeaturesList;
                                            console.log(list);
                                            if (list && list.length > 0) {
                                              list.forEach((currentItem) => {
                                                console.log(
                                                  currentItem,
                                                  featured.id,
                                                );
                                                if (
                                                  currentItem.id === featured.id
                                                ) {
                                                  console.log(
                                                    currentItem.id,
                                                    featured.id,
                                                  );
                                                  if (
                                                    featured &&
                                                    featured.images &&
                                                    featured.images.length > 0
                                                  ) {
                                                    let updated_images =
                                                      featured.images.filter(
                                                        (image, i) =>
                                                          i !== index,
                                                      );
                                                    currentItem.images = [
                                                      ...updated_images,
                                                    ];
                                                  }
                                                  setformData((formState) => ({
                                                    ...formState,
                                                    ProFeaturesList: list,
                                                  }));
                                                }
                                              });
                                            }
                                          }}
                                          style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            backgroundColor: 'black',
                                            color: '#fff',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                          }}
                                        />
                                        <img
                                          src={image}
                                          style={{
                                            width: '55px',
                                            height: '55px',

                                            objectFit: 'cover',
                                          }}
                                        />
                                      </div>
                                    );
                                  }
                                })}
                            </div>
                            <label
                              htmlFor={featured.id}
                              style={{
                                width: '98%',
                                border: '1px solid grey',
                                padding: '10px',
                                borderRadius: '5px',
                                marginTop: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                cursor: 'pointer',
                              }}
                            >
                              <AddPhotoAlternateIcon
                                style={{ color: '#fff' }}
                              />{' '}
                              <Typography
                                style={{
                                  color: '#fff',
                                  fontSize: '15px',
                                  marginTop: '10px',
                                }}
                              >
                                Add Image
                              </Typography>
                            </label>
                            <input
                              id={featured.id}
                              type="file"
                              accept="image/*"
                              style={{
                                width: '100%',
                                height: '100%',
                                display: 'none',
                              }}
                              onChange={(e) => {
                                console.log(e.target.files[0]);
                                let list = formData.ProFeaturesList;
                                console.log(list);
                                if (list && list.length > 0) {
                                  list.forEach((currentItem) => {
                                    console.log(currentItem, featured.id);
                                    if (currentItem.id === featured.id) {
                                      console.log(currentItem.id, featured.id);
                                      if (
                                        featured &&
                                        featured.images &&
                                        featured.images.length > 0
                                      ) {
                                        currentItem.images = [
                                          ...featured.images,
                                          window.URL.createObjectURL(
                                            e.target.files[0],
                                          ),
                                        ];
                                      } else {
                                        currentItem.images = [
                                          window.URL.createObjectURL(
                                            e.target.files[0],
                                          ),
                                        ];
                                      }
                                      setformData((formState) => ({
                                        ...formState,
                                        ProFeaturesList: list,
                                      }));
                                    }
                                  });
                                }
                              }}
                            />
                          </div>
                        ) : featured.type === 'media' ? (
                          <div
                            style={{
                              width: '450px',
                              border: '0.5px solid #6a97ae',
                              backgroundColor: '#283046',
                              borderRadius: '10px',
                              padding: '10px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <a
                                  href="#"
                                  style={{
                                    textDecoration: 'none',
                                    color: 'grey',
                                    fontSize: '22px',
                                    cursor: 'grab',
                                    marginLeft: '5px',
                                  }}
                                >
                                  <DragIndicatorIcon />
                                </a>
                                <OutlinedInput
                                  variant="outlined"
                                  name={'title'}
                                  placeholder={'Title'}
                                  sx={{
                                    width: '300px',
                                    borderRadius: '5px',
                                    marginLeft: '15px',
                                    border: '0.5px solid #6a97ae',
                                    color: '#fff',
                                    backgroundColor: '#283046;',
                                  }}
                                  onChange={(e) => {
                                    let list = formData.ProFeaturesList;
                                    if (list && list.length > 0) {
                                      list.forEach((currentItem) => {
                                        if (currentItem.id === featured.id) {
                                          currentItem.title = e.target.value;
                                        }
                                      });

                                      setformData((formState) => ({
                                        ...formState,
                                        ProFeaturesList: list,
                                      }));
                                    }
                                  }}
                                />
                              </div>
                              <CloseIcon
                                onClick={() => {
                                  if (
                                    formData &&
                                    formData.ProFeaturesList &&
                                    formData.ProFeaturesList.length > 0
                                  ) {
                                    let list = formData.ProFeaturesList.filter(
                                      (currentItem) => {
                                        return currentItem.id !== featured.id;
                                      },
                                    );

                                    setformData((formState) => ({
                                      ...formState,
                                      ProFeaturesList: list,
                                    }));
                                  }
                                }}
                                style={{
                                  cursor: 'pointer',
                                  marginRight: '15px',
                                  color: '#fff',
                                }}
                              />
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                              }}
                            >
                              {featured &&
                                featured.videos &&
                                featured.videos.map((video, index) => {
                                  return (
                                    <div
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: '20px',
                                      }}
                                    >
                                      <OutlinedInput
                                        variant="outlined"
                                        name={'title'}
                                        placeholder={
                                          video === 'youtube'
                                            ? 'Add youtube video URL here'
                                            : 'Add facebook video URL here'
                                        }
                                        sx={{
                                          width: '400px',
                                          borderRadius: '5px',
                                          marginLeft: '15px',
                                          border: '0.5px solid #6a97ae',
                                          color: '#fff',
                                          backgroundColor: '#283046;',
                                        }}
                                        onChange={(e) => {
                                          let list = formData.ProFeaturesList;
                                          console.log(list);
                                          if (list && list.length > 0) {
                                            list.forEach((currentItem) => {
                                              console.log(
                                                currentItem,
                                                featured.id,
                                              );
                                              if (
                                                currentItem.id === featured.id
                                              ) {
                                                console.log(
                                                  currentItem.id,
                                                  featured.id,
                                                );
                                                if (
                                                  featured &&
                                                  featured.links
                                                ) {
                                                  // currentItem.links[index] = [
                                                  // ...featured.links,
                                                  // e.target.value,
                                                  // ];

                                                  currentItem.links[index] =
                                                    e.target.value;
                                                }
                                                setformData((formState) => ({
                                                  ...formState,
                                                  ProFeaturesList: list,
                                                }));
                                              }
                                            });
                                          }
                                        }}
                                      />
                                      <CloseIcon
                                        onClick={() => {
                                          let list = formData;
                                          if (
                                            list &&
                                            list.ProFeaturesList &&
                                            list.ProFeaturesList.length > 0
                                          ) {
                                            list.ProFeaturesList.forEach(
                                              (currentItem) => {
                                                if (
                                                  currentItem.id === featured.id
                                                ) {
                                                  if (
                                                    currentItem &&
                                                    currentItem.videos &&
                                                    currentItem.videos.length >
                                                      0
                                                  ) {
                                                    currentItem.videos.pop();

                                                    console.log(
                                                      currentItem.videos,
                                                    );
                                                  }
                                                }
                                              },
                                            );
                                            console.log(list);
                                            setformData((formState) => ({
                                              ...formState,
                                              ProFeaturesList:
                                                list.ProFeaturesList,
                                            }));
                                          }
                                        }}
                                        style={{
                                          cursor: 'pointer',
                                          marginRight: '15px',
                                          color: '#fff',
                                        }}
                                      />
                                    </div>
                                  );
                                })}
                            </div>

                            <div
                              style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-arround',
                                marginTop: '20px',
                              }}
                            >
                              <div
                                onClick={() => {
                                  let list = formData.ProFeaturesList;
                                  console.log(list);
                                  if (list && list.length > 0) {
                                    list.forEach((currentItem) => {
                                      console.log(currentItem, featured.id);
                                      if (currentItem.id === featured.id) {
                                        console.log(
                                          currentItem.id,
                                          featured.id,
                                        );
                                        if (
                                          featured &&
                                          featured.videos &&
                                          featured.videos.length > 0
                                        ) {
                                          currentItem.videos = [
                                            ...featured.videos,
                                            'youtube',
                                          ];
                                        } else {
                                          currentItem.videos = ['youtube'];
                                        }
                                        setformData((formState) => ({
                                          ...formState,
                                          ProFeaturesList: list,
                                        }));
                                      }
                                    });
                                  }
                                }}
                                style={{
                                  width: '45%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  border: '0.5px solid #374151',
                                  borderRadius: '5px',
                                  cursor: 'pointer',
                                  padding: '10px',
                                  marginRight: '20px',
                                }}
                              >
                                <YouTubeIcon style={{ color: '#fff' }} />
                                <Typography style={{ color: 'white' }}>
                                  Youtube link
                                </Typography>
                              </div>
                              <div
                                onClick={() => {
                                  let list = formData.ProFeaturesList;
                                  console.log(list);
                                  if (list && list.length > 0) {
                                    list.forEach((currentItem) => {
                                      console.log(currentItem, featured.id);
                                      if (currentItem.id === featured.id) {
                                        console.log(
                                          currentItem.id,
                                          featured.id,
                                        );
                                        if (
                                          featured &&
                                          featured.videos &&
                                          featured.videos.length > 0
                                        ) {
                                          currentItem.videos = [
                                            ...featured.videos,
                                            'facebook',
                                          ];
                                        } else {
                                          currentItem.videos = ['facebook'];
                                        }
                                        setformData((formState) => ({
                                          ...formState,
                                          ProFeaturesList: list,
                                        }));
                                      }
                                    });
                                  }
                                }}
                                style={{
                                  width: '45%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  border: '0.5px solid #374151',
                                  borderRadius: '5px',
                                  cursor: 'pointer',
                                  padding: '10px',
                                }}
                              >
                                <FacebookIcon style={{ color: '#fff' }} />
                                <Typography style={{ color: 'white' }}>
                                  Facebook link
                                </Typography>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
            </ol>
          </ReactDragListView>
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
          >
            <div
              onClick={() => {
                setformData((formState) => ({
                  ...formState,
                  ProFeaturesList: [
                    ...formData.ProFeaturesList,
                    { id: uuid(), type: 'image' },
                  ],
                }));
              }}
              style={{
                width: '55px',
                height: '55px',
                backgroundColor: '#374151',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <AddIcon style={{ color: '#fff' }} />{' '}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '15px',
              }}
            >
              <Typography
                variant="h7"
                component="div"
                gutterBottom
                style={{ color: '#5d6473' }}
              >
                Add image gallery{' '}
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
        >
          <div
            onClick={() => {
              setformData((formState) => ({
                ...formState,
                ProFeaturesList: [
                  ...formData.ProFeaturesList,
                  { id: uuid(), type: 'media', links: [] },
                ],
              }));
            }}
            style={{
              width: '55px',
              height: '55px',
              backgroundColor: '#374151',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <AddIcon style={{ color: '#fff' }} />{' '}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '15px',
            }}
          >
            <Typography
              variant="h7"
              component="div"
              gutterBottom
              style={{ color: '#5d6473' }}
            >
              Add video{' '}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenInfo;
