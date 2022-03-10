import React from 'react';
import './GenInfo.css'

function GenInfo() {
  return (
    <div className='gen_info_container'>
        <div className='gen_info_heading'>
            General Information
        </div>
        <div className='input_fields_wrapper'>
            <div className='input_entity'>
                <label htmlFor="">Bizcard Name</label>
                <input type="text" placeholder='eg. My Bizcard'/>
            </div>
            <div className='input_entity'>
                <label htmlFor="">Bizcard URL <span>(You will  not be able to change it.)</span></label>
                <div className='bizcards_url_input_fields_wrapper'>
                    <input className='bizcards_url_input' type="text" placeholder='eg. kakashis'/>
                    <input className="bizcards_url_disabled_input" type="text" value=".bizcards.you" disabled/>
                    <input className='bizcard_url_check_btn' type="button" value="Check"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GenInfo