
import React, { useState, useRef, useEffect } from 'react';
import { Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';



const GeneralInfo = ({ formData, setformData }) => {
    const LogoInput = useRef();
    const coverInput = useRef();
    const profilePictureInput = useRef();
    return (
        <>
         <div className="gen_info_heading">General Information</div>
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


        </>
    )
}

export default GeneralInfo