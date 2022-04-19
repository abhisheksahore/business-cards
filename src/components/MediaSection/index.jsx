import React, { useState, useRef, useEffect, useContext } from 'react';
import { TextField, Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import ReactDragListView from 'react-drag-listview';
import uuid from 'react-uuid';
import Switch from '@mui/material/Switch';
import './index.css';

//icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import AuthContext from '../../context/AuthContext/AuthContext';
import Loader from '../Loader/Loader';
import { TextFields, TextFieldsOutlined } from '@mui/icons-material';

const Media = ({ formData, setformData, edit }) => {

    const { currentUser } = useContext(AuthContext);
    const dragPropsProFeatures = {
        onDragEnd(fromIndex, toIndex) {
            const data = formData.ProFeaturesList;
            const item = data.splice(fromIndex, 1)[0];
            data.splice(toIndex, 0, item);
            setformData({...formData, ProFeaturesList: data});
            setTriggerSetFeatureList(!triggerSetFeatureList)
        },
        nodeSelector: 'li',
        handleSelector: 'a',
    };

    const [rerender, setRerender] = useState(false);
    const [featureList, setFeatureList] = useState();
    const [triggerSetFeatureList, setTriggerSetFeatureList] = useState(false)

    //   fetch photo url using path of photo in firestrore
    // const fetchPhoto = async (filePath) => {
    //     const newToken = await currentUser.getIdToken(true);
    //     const promise = await fetch(process.env.REACT_APP_API_URL+`/user/fileupload/getImageUrl`, {
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



    useEffect(() => {
        // setFeatureList(undefined);

        // let featureListTemp = JSON.parse(JSON.stringify(formData.ProFeaturesList));


        // for (let i = 0; i < featureListTemp.length; i++) {
        //     if (featureListTemp[i].images && featureListTemp[i].images.length > 0) {
        //         for (let j = 0; j < featureListTemp[i].images.length; j++) {
        //             if (edit && typeof (featureListTemp[i].images[j]) === 'string') {
        //                 const newToken = await currentUser.getIdToken(true);
        //                 const promise = await fetch(process.env.REACT_APP_API_URL+`/user/fileupload/getImageUrl`, {
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
        //             const promise = await fetch(process.env.REACT_APP_API_URL+`/user/fileupload/getImageUrl`, {
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
        console.log(formData);

    }, [formData])


    // useEffect(()=>{
    //     setRerender(!rerender);
    // }, [featureList])
    


    return (
        <>
            {formData && currentUser ?
                <div style={{marginTop: '6rem'}}>

                    <h1 style={{color: "white", marginTop: "4rem"}}>Media</h1>
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
                                                                        value={formData.ProFeaturesList[index].title}
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
                                                                    featured.images.map((image, iIndex) => {


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

                                                                                            if (list && list.length > 0) {
                                                                                                list.forEach((currentItem) => {

                                                                                                    if (
                                                                                                        currentItem.id === featured.id
                                                                                                    ) {

                                                                                                        if (
                                                                                                            featured &&
                                                                                                            featured.images &&
                                                                                                            featured.images.length > 0
                                                                                                        ) {
                                                                                                            let updated_images =
                                                                                                                featured.images.filter(
                                                                                                                    (image, i) => i !== iIndex,
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
                                                                                        src={edit && image.url ? (()=>{ console.log(image.url);return image.url})() : image && !image.url? URL.createObjectURL(image) : null}
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

                                                                    let list = formData.ProFeaturesList;

                                                                    if (list && list.length > 0) {
                                                                        list.forEach((currentItem) => {

                                                                            if (currentItem.id === featured.id) {

                                                                                if (
                                                                                    featured &&
                                                                                    featured.images &&
                                                                                    featured.images.length > 0
                                                                                ) {
                                                                                    currentItem.images = [
                                                                                        ...featured.images,
                                                                                        // window.URL.createObjectURL(
                                                                                        e.target.files[0],
                                                                                        // ),
                                                                                    ];
                                                                                } else {
                                                                                    currentItem.images = [
                                                                                        // window.URL.createObjectURL(
                                                                                        e.target.files[0],
                                                                                        // ),
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
                                                                        value={formData.ProFeaturesList[index].title}
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
                                                                    featured.videos.map((video, i) => {
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
                                                                                    value={
                                                                                        formData.ProFeaturesList[index].links[i]
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

                                                                                        if (list && list.length > 0) {
                                                                                            list.forEach((currentItem) => {

                                                                                                if (
                                                                                                    currentItem.id === featured.id
                                                                                                ) {

                                                                                                    if (featured && featured.links) {
                                                                                                        // currentItem.links[index] = [
                                                                                                        // ...featured.links,
                                                                                                        // e.target.value,
                                                                                                        // ];

                                                                                                        currentItem.links[i] =
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


                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                            );

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

                                                                        if (list && list.length > 0) {
                                                                            list.forEach((currentItem) => {

                                                                                if (currentItem.id === featured.id) {

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

                                                                        if (list && list.length > 0) {
                                                                            list.forEach((currentItem) => {

                                                                                if (currentItem.id === featured.id) {

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

                                                                        if (list && list.length > 0) {
                                                                            list.forEach((currentItem) => {

                                                                                if (currentItem.id === featured.id) {

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
                                                                        value={formData.ProFeaturesList[index].title}
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
                                                            <textarea
                                                            className='textarea_scroll_settings'
                                                                // variant="outlined"
                                                                name={'description'}
                                                                placeholder={'Description'}
                                                                value={formData.ProFeaturesList[index].description}
                                                                style={{
                                                                    width: '300px',
                                                                    height: '200px',
                                                                    borderRadius: '5px',
                                                                    marginTop: '20px',
                                                                    border: '0.5px solid #6a97ae',
                                                                    color: '#fff',
                                                                    backgroundColor: '#283046',
                                                                    overflow: 'auto',
                                                                    fontFamily: formData && formData.font
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
                                                            ></textarea>
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
                                                                        value={formData.ProFeaturesList[index].title}
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
                                                                value={formData.ProFeaturesList[index].description}
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
                                                                    value={formData.ProFeaturesList[index].link}
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
                                                                    value={
                                                                        formData.ProFeaturesList[index].buttonLabel
                                                                    }
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

                                                                            if (list && list.length > 0) {
                                                                                list.forEach((currentItem) => {

                                                                                    if (currentItem.id === featured.id) {

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
                                                                        src={edit && featured.image && featured.image.url ? (()=>{console.log(featured.image.url);return featured.image.url})() : featured.image && !featured.image.url ? URL.createObjectURL(featured.image) : null}
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

                                                                    let list = formData.ProFeaturesList;

                                                                    if (list && list.length > 0) {
                                                                        list.forEach((currentItem) => {

                                                                            if (currentItem.id === featured.id) {


                                                                                currentItem.image =
                                                                                    //   window.URL.createObjectURL(
                                                                                    e.target.files[0]
                                                                                //   );

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
                    {/* <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <Switch
                            onChange={(e) => {
                                setformData((formState) => ({
                                    ...formState,
                                    SaveToContact: e.target.checked,
                                }));
                            }}
                        />
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
                                Save to contact{' '}
                            </Typography>
                        </div>
                    </div> */}
                </div> :
                <Loader />
            }
        </>
    );
};

export default Media;
