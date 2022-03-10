import React from 'react'
import './BusinessInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'

function BusinessInfo() {
  return (
    <div className='business_info_container'>
        <div className='business_info_heading'>
               Business Information 
        </div>
        <div className='input_fields_wrapper'>
            <div className='name_input_group'>
                <div className='input_entity flex_grow_1'>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Kakashi'/>
                </div>
                <div className='input_entity flex_grow_1'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="Hatake" />
                </div>
            </div>
            <div className='input_entity'>
                <label htmlFor="">Gender Pronouns</label>
                <input type="text" placeholder='eg. (he/his/him)'/>                
            </div>
            <div className='input_entity'>
                <label htmlFor="">Job Title</label>
                <input type="text" placeholder='Your job title'/>                
            </div>
            <div className='input_entity'>
                <label htmlFor="">Business Name</label>
                <input type="text" placeholder='Your business name'/>                
            </div>
            <div className='input_entity'>
                <label htmlFor="">Business description</label>
                <input type="text" placeholder='Describe your business'/>                
            </div>
            <div className='file_selector'>
                <label htmlFor="selection_btn__logo" className='selection_btn'>
                    <FontAwesomeIcon icon={faPlus}/>    
                </label>
                <input id='selection_btn__logo' type="file" />
                <div>
                    <div className='file_selector_btn_title'>Add Logo</div>
                    <div>Suggested Format: svg, png or gif.</div>
                </div>
            </div>
            <div className='file_selector'>
                <label htmlFor="selection_btn__profile_pic" className='selection_btn'>
                    <FontAwesomeIcon icon={faPlus}/>    
                </label>
                <input id='selection_btn__profile_pic' type="file" />
                <div>
                    <div className='file_selector_btn_title'>Add profile pic</div>
                    <div>Suggested Format: jpeg, png or gif.</div>
                </div>
            </div>
            <div className='file_selector'>
                <label htmlFor="selection_btn__cover_photo" className='selection_btn'>
                    <FontAwesomeIcon icon={faPlus}/>    
                </label>
                <input id='selection_btn__cover_photo' type="file" />
                <div>
                    <div className='file_selector_btn_title'>Add cover photo</div>
                    <div>Suggested Format: svg, jpeg, png or gif.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessInfo