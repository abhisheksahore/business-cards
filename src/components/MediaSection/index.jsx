import React, { useState, useRef, useEffect } from 'react';
import { Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import ReactDragListView from 'react-drag-listview';
import uuid from 'react-uuid';

//icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Media = ({ formData, setformData }) => {
  const dragPropsProFeatures = {
    onDragEnd(fromIndex, toIndex) {
      const data = formData.ProFeaturesList;
      const item = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, item);
      setformData((formState) => ({
        ...formState,
        ProFeaturesListe: data,
      }));
    },
    nodeSelector: 'li',
    handleSelector: 'a',
  };
  return (
    <>
      <div>
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
                                                      (image, i) => i !== index,
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
                            <AddPhotoAlternateIcon style={{ color: '#fff' }} />{' '}
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
                                              if (featured && featured.links) {
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
                                                  currentItem.videos.length > 0
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
                                      console.log(currentItem.id, featured.id);
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
                                      console.log(currentItem.id, featured.id);
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
                                        currentItem.videos = ['Vimeo'];
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
                                Vimeo link
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
                                      console.log(currentItem.id, featured.id);
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
                      ) : featured.type === 'text' ? (
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
                          <OutlinedInput
                            variant="outlined"
                            name={'description'}
                            placeholder={'Description'}
                            sx={{
                              width: '300px',
                              height: '200px',
                              borderRadius: '5px',
                              marginTop: '20px',
                              border: '0.5px solid #6a97ae',
                              color: '#fff',
                              backgroundColor: '#283046;',
                            }}
                            inputProps={{
                              style: {
                                display: 'flex',
                                alignItems: 'flex-start',
                              },
                            }}
                            onChange={(e) => {
                              let list = formData.ProFeaturesList;
                              if (list && list.length > 0) {
                                list.forEach((currentItem) => {
                                  if (currentItem.id === featured.id) {
                                    currentItem.description = e.target.value;
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
                      ) : featured.type === 'link' ? (
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

                          <OutlinedInput
                            variant="outlined"
                            name={'description'}
                            placeholder={'Description'}
                            sx={{
                              width: '300px',
                              borderRadius: '5px',
                              marginTop: '20px',
                              border: '0.5px solid #6a97ae',
                              color: '#fff',
                              backgroundColor: '#283046;',
                            }}
                            inputProps={{
                              style: {
                                display: 'flex',
                                alignItems: 'flex-start',
                              },
                            }}
                            onChange={(e) => {
                              let list = formData.ProFeaturesList;
                              if (list && list.length > 0) {
                                list.forEach((currentItem) => {
                                  if (currentItem.id === featured.id) {
                                    currentItem.description = e.target.value;
                                  }
                                });

                                setformData((formState) => ({
                                  ...formState,
                                  ProFeaturesList: list,
                                }));
                              }
                            }}
                          />
                          <div
                            style={{
                              width: '300px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              marginTop: '20px',
                            }}
                          >
                            <OutlinedInput
                              variant="outlined"
                              name={'link'}
                              placeholder={'Button link'}
                              sx={{
                                width: '140px',
                                borderRadius: '5px',
                                border: '0.5px solid #6a97ae',
                                color: '#fff',
                                backgroundColor: '#283046;',
                              }}
                              inputProps={{
                                style: {
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                },
                              }}
                              onChange={(e) => {
                                let list = formData.ProFeaturesList;
                                if (list && list.length > 0) {
                                  list.forEach((currentItem) => {
                                    if (currentItem.id === featured.id) {
                                      currentItem.link = e.target.value;
                                    }
                                  });

                                  setformData((formState) => ({
                                    ...formState,
                                    ProFeaturesList: list,
                                  }));
                                }
                              }}
                            />

                            <OutlinedInput
                              variant="outlined"
                              name={'btnLabel'}
                              placeholder={'Button label'}
                              sx={{
                                width: '140px',
                                borderRadius: '5px',
                                border: '0.5px solid #6a97ae',
                                color: '#fff',
                                backgroundColor: '#283046;',
                              }}
                              inputProps={{
                                style: {
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                },
                              }}
                              onChange={(e) => {
                                let list = formData.ProFeaturesList;
                                if (list && list.length > 0) {
                                  list.forEach((currentItem) => {
                                    if (currentItem.id === featured.id) {
                                      currentItem.buttonLabel = e.target.value;
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

                          {featured.image ? (
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
                                      console.log(currentItem, featured.id);
                                      if (currentItem.id === featured.id) {
                                        console.log(
                                          currentItem.id,
                                          featured.id,
                                        );
                                        currentItem.image = '';
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
                                src={featured.image}
                                style={{
                                  width: '55px',
                                  height: '55px',

                                  objectFit: 'cover',
                                }}
                              />
                            </div>
                          ) : (
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
                          )}

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

                                    currentItem.image =
                                      window.URL.createObjectURL(
                                        e.target.files[0],
                                      );

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
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
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

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <div
          onClick={() => {
            setformData((formState) => ({
              ...formState,
              ProFeaturesList: [
                ...formData.ProFeaturesList,
                { id: uuid(), type: 'text', title: '', description: '' },
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
            Add Text{' '}
          </Typography>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <div
          onClick={() => {
            setformData((formState) => ({
              ...formState,
              ProFeaturesList: [
                ...formData.ProFeaturesList,
                {
                  id: uuid(),
                  type: 'link',
                  title: '',
                  link: '',
                  description: '',
                  buttonLabel: '',
                  image: '',
                },
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
            Add Custom Link{' '}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Media;
