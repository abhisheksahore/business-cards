import React, { useState, useRef } from 'react';
import './GenInfo.css';
import { Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import ReactDragListView from 'react-drag-listview';
import Divider from '@mui/material/Divider';

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

function GenInfo({ formData, setformData }) {
  const profilePictureInput = useRef();
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
                      // onChange={(e) => {
                      //   setformData((formState) => ({
                      //     ...formState,
                      //     DescribeYourself: e.target.value,
                      //   }));
                      // }}
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
                      // onChange={(e) => {
                      //   setformData((formState) => ({
                      //     ...formState,
                      //     DescribeYourself: e.target.value,
                      //   }));
                      // }}
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
        <Divider
          style={{
            marginTop: '30px',
            backgroundColor: '#D3D3D3',
            opacity: '0.1',
          }}
        />
        <div style={{ display: 'flex', maxWidth: '450px', flexWrap: 'wrap' }}>
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
        </div>
      </div>
    </div>
  );
}

export default GenInfo;
