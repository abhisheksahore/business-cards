import React from 'react'
import BusinessInfo from '../BusinessInfo/BusinessInfo'
import GenInfo from '../GenInfo/GenInfo'
import PrimaryButtons from '../PrimaryButtons/PrimaryButtons'
import './CreationForm.css'

function CreationForm() {
  return (
    <div className='creation_form_container'>
        <GenInfo /> 
        <BusinessInfo /> 
        <PrimaryButtons />
    </div>
  )
}

export default CreationForm