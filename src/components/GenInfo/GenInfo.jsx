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
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';


function GenInfo({ formData, setformData, iconsNameContactMap, heading, keyName, color }) {
  

  const getIconComponent = (name) => {
    const compToReturn = iconsNameContactMap.find(e => e.name === name);
    return compToReturn.component;
  }

  const returnOutlineInput = (name) => {
    const comp = iconsNameContactMap.find(e => e.name === name);
    return <OutlinedInput
      variant="outlined"
      type={comp.type}
      name={name}
      placeholder={comp.placeholder}
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
          [name]: e.target.value,
        }));
      }}
    />
  }


  const returnButtons = (btnName, iconComponent) => {
    return <Box
      sx={{
        width: '55px',
        height: '55px',
        borderRadius: '50%',
        backgroundColor: color,
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
          [keyName]: [...formData[keyName], btnName],
        }));
      }}
    >
      {
        iconComponent
      }
    </Box>
  }

  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      const data = formData[keyName];
      const item = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, item);
      setformData((formState) => ({
        ...formState,
        [keyName]: data,
      }));
    },
    nodeSelector: 'li',
    handleSelector: 'a',
  };


  console.log(formData, '<-------------------------');

  return (

    <>
        {/*------------------------- Primary Buttons---------------------------- */}
        <div className="gen_info_heading" style={{ marginTop: '40px', color: 'white' }}>
          {heading}
        </div>
        <ReactDragListView {...dragProps}>
          <ol>
            {formData &&
              formData[keyName].map((item, index) => (
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
                      backgroundColor: color,
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
                    {
                      getIconComponent(item)
                    }
                  </Box>
                    {returnOutlineInput(item)}
                  <CloseIcon
                    onClick={() => {
                      let list =
                        formData &&
                        formData[keyName].filter(
                          (button) => button !== item,
                        );

                      setformData((formState) => ({
                        ...formState,
                        [keyName]: list,
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
          formData[keyName] &&
          formData[keyName].length > 0 ? (
          <Divider
            style={{
              marginTop: '30px',
              backgroundColor: '#D3D3D3',
              opacity: '0.1',
            }}
          />
        ) : null}
        <div style={{ display: 'flex', maxWidth: '450px', flexWrap: 'wrap' }}>
          {

            iconsNameContactMap.map(icon => {
              return (
                formData &&
                  formData[keyName] &&
                  formData[keyName].includes(icon.name) ? null : (
                  returnButtons(icon.name, icon.component)
                )
              )
            })
          }
        </div>


        
    </>
  );
}

export default GenInfo;
