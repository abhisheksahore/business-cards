
import React, { useState, useRef, useEffect, useContext } from 'react';
import './GeneralInfo.css'
import { Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import AuthContext from '../../context/AuthContext/AuthContext';
import { letterSpacing } from '@mui/system';



const GeneralInfo = ({ formData, setformData, edit, slugExists, setSlugExists, slugError, setSlugError }) => {



    const [logoUrl, setLogoUrl] = useState('')
    const [coverPhotoUrl, setCoverPhotoUrl] = useState('')
    const [profilePictureUrl, setProfilePictureUrl] = useState('')


    useEffect(async () => {

        // if (formData.Logo) {
        //     if (edit && typeof (formData.Logo) === 'string') {
        //         setLogoUrl(await fetchPhoto(formData.Logo));
        //     } else {
        //         setLogoUrl(URL.createObjectURL(formData.Logo))
        //     }
        // }

        // if (formData.coverPhoto) {
        //     if (edit && typeof (formData.coverPhoto) === 'string') {
        //         setCoverPhotoUrl(await fetchPhoto(formData.coverPhoto));
        //     } else {
        //         setCoverPhotoUrl(URL.createObjectURL(formData.coverPhoto))
        //     }
        // }
        // if (formData.ProfilePicture) {
        //     if (edit && typeof (formData.ProfilePicture) === 'string') {
        //         setProfilePictureUrl(await fetchPhoto(formData.ProfilePicture));
        //     } else {
        //         setProfilePictureUrl(URL.createObjectURL(formData.ProfilePicture))
        //     }
        // }
    }, [formData.Logo, formData.coverPhoto, formData.ProfilePicture])




    const { currentUser } = useContext(AuthContext);
    const LogoInput = useRef();
    const coverInput = useRef();
    const profilePictureInput = useRef();

    const deleteFile = async (file) => {
        const newToken = await currentUser.getIdToken(true);
        const promise = await fetch(process.env.REACT_APP_API_URL+`user/fileupload/deletefiles`, {
            method: "POST",
            headers: {
                token: newToken,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ urls: [file] })

        })
    }

    const checkSlug = async () => {

        if (/^[a-z](-?[a-z])*$/.test(formData.cardSlug)) {
            setSlugError('');
            const newToken = await currentUser.getIdToken(true);
            const promise = await fetch(process.env.REACT_APP_API_URL+`user/card/checkSlug?slug=${formData.cardSlug}`, {
                method: "GET",
                headers: {
                    token: newToken,
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            });
            const data = await promise.json();
            if (data.status === true) {
                setSlugExists(data.status);
                setSlugError('Slug already exists. Choose another one')
            } else {
                setSlugExists(data.status);
                setSlugError('');
            }
        } else {
            setSlugExists(undefined);
            setSlugError('Not a valid Slug.');
        }

    }


    const fetchPhoto = async (filePath) => {
        const newToken = await currentUser.getIdToken(true);
        const promise = await fetch(process.env.REACT_APP_API_URL+`user/fileupload/getImageUrl`, {
            method: "POST",
            headers: {
                token: newToken,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                urls: [filePath]
            })
        });
        const data = await promise.json();
        return data.urls[0]
    }


    return (
        <>
            <div className="gen_info_heading" style={{marginBottom: '2rem'}}>General Information</div>
            <OutlinedInput
                required
                variant="outlined"
                name={'Name'}
                value={formData.Name}
                placeholder={'Name'}
                sx={{
                    maxWidth: '450px',
                    width: '100%',
                    minWidth: '300px',
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
                required
                variant="outlined"
                name={'cardName'}
                value={formData.cardName}
                placeholder={'Card Name'}
                sx={{
                    maxWidth: '450px',
                    width: '100%',
                    minWidth: '300px',
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
            {edit === false ?
                <>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', maxWidth: '450px', minWidth: '300px' }}>
                        <OutlinedInput
                            variant="outlined"
                            name={'cardSlug'}
                            // placeholder={'Card URL'}
                            // disabled
                            sx={{
                                width: '30%',
                                borderRadius: '5px',
                                marginTop: '15px',
                                border: '0.5px solid #6a97ae',
                                color: '#fff',
                                backgroundColor: '#283046;',
                                fontWeight: '700',
                                letterSpacing: '2px'
                            }}
                            value={'qli.ink/'}
                        />
                        <OutlinedInput
                            required
                            variant="outlined"
                            name={'cardSlug'}
                            value={formData.cardSlug}
                            placeholder={'Card URL'}
                            sx={{
                                width: '35%',
                                borderRadius: '5px',
                                marginTop: '15px',
                                border: '0.5px solid #6a97ae',
                                color: '#fff',
                                backgroundColor: '#283046;',
                            }}
                            onChange={(e) => {
                                setformData((formState) => ({
                                    ...formState,
                                    cardSlug: e.target.value,
                                }));
                            }}
                        />
                        <button className='slug_check_button' onClick={checkSlug}>
                            Check
                        </button>
                    </div>
                    {
                        slugExists === true ?
                            <small className='slug_error'>
                                {slugError}
                            </small> :
                            slugExists === false ?
                                <small className='slug_success'>
                                    Available
                                </small> :
                                null
                    }
                    {
                        slugError !== "" ?
                            <small className='slug_error'>
                                {slugError}
                            </small> :
                            null
                    }
                </> :
                null}


            {/* Gender Pronouns */}
            <OutlinedInput
                variant="outlined"
                name={'genderPronouns'}
                placeholder={'Gender pronouns'}
                value={formData.genderPronouns}
                sx={{
                    maxWidth: '450px',
                    width: '100%',
                    minWidth: '300px',
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
                    maxWidth: '450px',
                    width: '100%',
                    minWidth: '300px',
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
                value={formData.jobTitle}
            />

            <OutlinedInput
                variant="outlined"
                name={'Business'}
                placeholder={'Business Name'}
                sx={{
                    maxWidth: '450px',
                    width: '100%',
                    minWidth: '300px',
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
                value={formData.BusinessName}
            />

            {/* Business Description */}
            <OutlinedInput
                variant="outlined"
                name={'businessDescription'}
                placeholder={'Business Description'}
                sx={{
                    maxWidth: '450px',
                    width: '100%',
                    minWidth: '300px',
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
                value={formData.businessDescription}
            />



            <OutlinedInput
                variant="outlined"
                name={'Describe'}
                placeholder={'Describe yourself (optional) '}
                sx={{
                    maxWidth: '450px',
                    width: '100%',
                    minWidth: '300px',
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
                value={formData.DescribeYourself}
            />







            {formData && formData.Logo ? (
                <div
                    style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}
                >
                    <img
                        src={edit && formData.Logo && formData.Logo.url ? formData.Logo.url : formData.Logo && !formData.Logo.url ? URL.createObjectURL(formData.Logo) : null}
                        style={{ width: '55px', height: '55px', objectFit: 'cover' }}
                    />
                    <CloseIcon
                        onClick={() => {
                            if (edit) {
                                deleteFile(formData.Logo);
                            }
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
                                setformData((formState) => ({
                                    ...formState,
                                    Logo: e.target.files[0],
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
                        src={edit && formData.coverPhoto && formData.coverPhoto.url ? formData.coverPhoto.url : formData.coverPhoto && !formData.coverPhoto.url ? URL.createObjectURL(formData.coverPhoto) : null}
                        style={{ width: '55px', height: '55px', objectFit: 'cover' }}
                    />
                    <CloseIcon
                        onClick={() => {
                            if (edit) {
                                deleteFile(formData.coverPhoto);
                            }
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
                                setformData((formState) => ({
                                    ...formState,
                                    coverPhoto: e.target.files[0],
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
                        src={edit && formData.ProfilePicture && formData.ProfilePicture.url ? formData.ProfilePicture.url : formData.ProfilePicture && !formData.ProfilePicture.url ? URL.createObjectURL(formData.ProfilePicture) : null}
                        style={{ width: '55px', height: '55px', objectFit: 'cover' }}
                    />
                    <CloseIcon
                        onClick={() => {
                            if (edit) {
                                deleteFile(formData.ProfilePicture);
                            }
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
                                setformData((formState) => ({
                                    ...formState,
                                    ProfilePicture: e.target.files[0],
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


        </>
    )
}

export default GeneralInfo