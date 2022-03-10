import React from 'react'
import './IphoneMockup.css'

function IphoneMockup() {
  return (
      <div className='iphone_mockup'>
        <div className='iphone_mockup_left_btns_wrapper'>
            <div className='iphone_mockup_mute_btn'></div>
            <div className='iphone_mockup_volume_btns_wrapper'>
                <div className='iphone_mockup_volume_up_btn'></div>
                <div className='iphone_mockup_volume_down_btn'></div>
            </div>
        </div>
        <div className='outer'>
            <div className='band_wrapper'>
                <div className='band'></div>
            </div>
            <div className='band_wrapper'>
                <div className='band lower_band'></div>
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
        <div className='iphone_mockup_power_btn'></div>
    </div>
  )
}

export default IphoneMockup