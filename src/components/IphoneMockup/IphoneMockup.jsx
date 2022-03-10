import React from 'react'
import './IphoneMockup.css'

function IphoneMockup() {
  return (
    <div className='outer'>
        <div className='band_wrapper'>
            <div className='band'></div>
        </div>
        <div className='middle'>
            <div className='inner'>
                <div className='inner_most'>
                    <div className="iphone_notch">
                        <div className='iphone_notch_cam visibility_hidden'></div>    
                        <div className='iphone_notch_speaker'></div>    
                        <div className='iphone_notch_cam'></div>    
                    </div>
                    <div className='screen_area'>
                        Kakashi Hatake
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IphoneMockup