import React, { useState } from 'react';
import GenInfo from '../GenInfo/GenInfo';
import IphoneMockup from '../IphoneMockup/IphoneMockup';
import './CreationForm.css';

function CreationForm() {
  const [formData, setformData] = useState({
    Name: null,
    BusinessName: null,
    DescribeYourself: null,
    ProfilePicture: null,
    Logo: null,
    PrimaryButtons: [],
    Telegram: null,
    Call: null,
    WhatsApp: null,
    Mail: null,
    Website: null,
    Location: null,
    ProFeaturesList: [],
  });

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '30px',
        }}
      >
        <GenInfo formData={formData} setformData={setformData} />
      </div>
      <div style={{ width: '50%', marginLeft: '30px' }}>
        <IphoneMockup formData={formData} />
      </div>
    </div>
  );
}

export default CreationForm;
