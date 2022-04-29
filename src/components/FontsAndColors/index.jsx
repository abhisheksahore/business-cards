import { MenuItem, Select, InputLabel } from '@mui/material';
import React from 'react';
import './FontsAndColors.css';


const FontsAndColors = ({ formData, setformData, colorInputVariables, fontOptions }) => {

    const colorInput = (colorInput) => {
        return (
            <div className='color_input_wrapper'>
                <label htmlFor={colorInput.stateName} className='display_color' style={{ backgroundColor: formData[colorInput.stateName] }}></label>
                <input
                    id={colorInput.stateName}
                    type={'color'}
                    name={colorInput.stateName}
                    placeholder={''}
                    style={{
                        width: '0px',
                        height: '0px',
                        visibility: 'none',
                        opacity: '0',
                        borderRadius: '5px',
                        marginLeft: '15px',
                        padding: '0px',
                        backgroundColor: 'transparent',
                    }}
                    value={formData[colorInput.stateName]}
                    onChange={(e) => {
                        setformData((formState) => ({
                            ...formState,
                            [colorInput.stateName]: e.target.value,
                        }));
                    }}
                />
                <span>{colorInput.name}</span>
            </div>
        )
    }


    const changeFont = (e) => {
        setformData({ ...formData, font: e.target.value })
    }


    return (
        <>
            <div className='color_input_container'>
                <div className='gen_info_heading'>Colors</div>
                {
                    colorInputVariables.map(colorInputName => {
                        return colorInput(colorInputName);
                    })
                }
            </div>

            <div className='font_input'>
                <div className='gen_info_heading'>Fonts</div>
                <Select
                    labelId="card-font-label"
                    id="card_input"
                    value={formData.font}
                    onChange={e => changeFont(e)}
                    sx={{
                        maxWidth: '450px',
                        width: '100%',
                        minWidth: '300px',
                        borderRadius: '5px',
                        marginTop: '15px',
                        border: '2px solid #6a97ae',
                        color: '#fff',
                        backgroundColor: '#283046;',
                    }}
                >
                    {
                        fontOptions.map(font => {
                            return <MenuItem value={font.fontFamily}>{font.name}</MenuItem>
                        })
                    }
                </Select>
            </div>
        </>
    )
}

export default FontsAndColors