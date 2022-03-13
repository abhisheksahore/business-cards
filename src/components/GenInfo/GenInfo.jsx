import React, { useState, useRef } from 'react';
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
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function GenInfo({ formData, setformData }) {
  const profilePictureInput = useRef();
  const imageGalleryInput = useRef();
  const LogoInput = useRef();
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
                <span style={{ fontStyle: 'italic' }}>(PRO features)</span>
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
          Primary Buttons
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

          {/*------------------------- Primary Buttons---------------------------- */}
          {formData &&
            formData.ProFeaturesList &&
            formData.ProFeaturesList.map((featured, index) => {
              return (
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
                      <div style={{ display: 'flex' }}>
                        {featured &&
                          featured.images &&
                          featured.images.map((image) => {
                            console.log('@##########################');

                            {
                              return (
                                <img
                                  src={
                                    image && window.URL.createObjectURL(image)
                                  }
                                  style={{
                                    width: '55px',
                                    height: '55px',
                                    objectFit: 'cover',
                                  }}
                                />
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
                        <AddPhotoAlternateIcon style={{ color: '#fff' }} />{' '}
                        <Typography
                          style={{
                            color: '#fff',
                            fontSize: '15px',
                            marginTop: '10px',
                          }}
                        >
                          Add Image{featured.id}
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
                        onClick={(e) => {
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
                                    e.target.files[0],
                                  ];
                                } else {
                                  currentItem.images = [e.target.files[0]];
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
                  ) : null}
                </div>
              );
            })}

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
      </div>
    </div>
  );
}

export default GenInfo;
