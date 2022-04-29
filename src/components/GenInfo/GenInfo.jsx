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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';

function GenInfo({
  formData,
  setformData,
  iconsNameContactMap,
  heading,
  keyName,
  color,
}) {


  const [editHeading, setEditHeading] = useState(false);
  const [newHeading, setNewHeading] = useState();

  const getIconComponent = (name) => {
    const compToReturn = iconsNameContactMap.find((e) => e.name === name);
    return (
      <Box
        sx={{
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          backgroundColor: keyName && keyName === 'socialMedia' || keyName === 'commerce' ? compToReturn.color : formData.buttonBackgroundColor,
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
        {compToReturn.component}
      </Box>
    )
  };

  const returnOutlineInput = (name) => {
    const comp = iconsNameContactMap.find((e) => e.name === name);
    return (
      <OutlinedInput
        variant="outlined"
        type={comp.type}
        name={name}
        placeholder={comp.placeholder}
        value={formData[name]}
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
    );
  };

  const returnButtons = (btnName, iconComponent, tooltip, smColor) => {
    return (
      <div className='tooltip_container' style={keyName && keyName === 'socialMedia' ? { width: '100%' } : null}>
        <div className='tooltip_text'>{tooltip}</div>
        <div className='tooltip' style={keyName && keyName === 'socialMedia' ? { width: '100%' } : null}>
          <Box
            sx={{
              width: keyName && keyName === 'socialMedia' ? '100%' : '55px',
              height: '55px',
              borderRadius: keyName && keyName === 'socialMedia' ? '10px' : '50%',
              backgroundColor: keyName && keyName === 'socialMedia' || keyName === 'commerce' ? smColor : formData.buttonBackgroundColor,
              marginRight: '20px',
              marginTop: '25px',
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              alignItems: 'center',
              fontsize: keyName && keyName === 'socialMedia' ? '1.5rem' : 'inherit',
              '&:hover': {
                transform: keyName && keyName === 'socialMedia' ? 'scale(1.02)' : 'scale(1.2)',
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
            {iconComponent}
            {keyName && keyName === 'socialMedia' ? <div style={{ color: 'white', fontSize: '1rem', fontWeight: '800' }}>{tooltip}</div> : null}
          </Box>
        </div>
      </div>
    );
  };

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


  const changeHeading = () => {
    setformData({ ...formData, })
  }


  return (
    <>

      {/* {editHeading ?
        <>
        <div className='dark_model_background' onClick={() => setEditHeading(false)}></div>
          <div className='modal'>
            <div className='modal_message'>Cannot create more than 2 cards.</div>
            <div><FontAwesomeIcon className='modal_close' onClick={() => setEditHeading(false)} icon={faXmark} /></div>
          </div>
        </> :
        null
      } */}
      {/*------------------------- Primary Buttons---------------------------- */}
      <div
        className="gen_info_heading"
        style={{ marginTop: '8rem', minWidth: '320px', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
        {heading}
        {
          !editHeading ?
            <FontAwesomeIcon style={{ marginLeft: '.5rem', fontSize: '1rem', cursor: 'pointer' }} icon={faEdit} onClick={() => {
              setEditHeading(true);
              if (keyName === 'PrimaryButtons') {
                setNewHeading(formData.contactHeading)
              } else if (keyName === 'socialMedia') {
                setNewHeading(formData.socialMediaHeading)
              } else if (keyName === 'commerce') {
                setNewHeading(formData.commerceHeading)
              }
            }} /> :
            <div className='edit_heading_popup'>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <input className='heading_input' type="text" value={newHeading} onChange={(e) => setNewHeading(e.target.value)} />
                <button className='heading_save_btn' onClick={()=>{
                  if (keyName === 'PrimaryButtons') {
                    setformData({ ...formData, contactHeading: newHeading })
                  } else if (keyName === 'socialMedia') {
                    setformData({ ...formData, socialMediaHeading: newHeading })
                  } else if (keyName === 'commerce') {
                    setformData({ ...formData, commerceHeading: newHeading })
                  }
                  setEditHeading(false);
                }}>
                  Save
                </button>
              </div>
              <div><FontAwesomeIcon icon={faXmark} className='xmark_close_btn' onClick={()=>setEditHeading(false)} /></div>

            </div>
        }
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

                {getIconComponent(item)}
                {returnOutlineInput(item)}
                < CloseIcon
                  onClick={() => {
                    let list =
                      formData &&
                      formData[keyName].filter((button) => button !== item);

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
      {
        formData && formData[keyName] && formData[keyName].length > 0 ? (
          <Divider
            style={{
              marginTop: '30px',
              backgroundColor: '#D3D3D3',
              opacity: '0.1',
            }}
          />
        ) : null
      }
      <div style={{ display: 'flex', maxWidth: '450px', width: '100%', minWidth: '300px', flexWrap: 'wrap' }}>
        {iconsNameContactMap.map((icon) => {
          return formData &&
            formData[keyName] &&
            formData[keyName].includes(icon.name)
            ? null
            : returnButtons(icon.name, icon.component, icon.tooltip, icon.color);
        })}
      </div>
    </>
  );
}

export default GenInfo;
