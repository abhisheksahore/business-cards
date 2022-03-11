import React from 'react';
import { Typography } from '@mui/material';
import './IphoneMockup.css';

function IphoneMockup({ formData }) {
    return (
        <div className='iphone_mockup'>
            <div className='iphone_mockup_left_btns_wrapper'>
                <div className='iphone_mockup_mute_btn'></div>
                <div className='iphone_mockup_volume_btns_wrapper'>
                    <div className='iphone_mockup_volume_up_btn'></div>
                    <div className='iphone_mockup_volume_down_btn'></div>
                </div>
            </div>
            <div className="outer">
                <div className="band_wrapper">
                    <div className="band"></div>
                    <div className="band lower_band"></div>
                </div>
                <div className="middle">
                    <div className="inner">
                        <div className="inner_most">
                            <div className="iphone_notch">
                                <div className='iphone_notch_cam visibility_hidden'></div>
                                <div className='iphone_notch_speaker'></div>
                                <div className='iphone_notch_cam'></div>
                            </div>

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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='iphone_mockup_power_btn'></div>
        </div>
    );
}

export default IphoneMockup;
