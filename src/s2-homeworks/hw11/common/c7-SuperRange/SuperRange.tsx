import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '200px',
                color: '#3af653', /* Синий цвет ползунка и трека */
                '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    backgroundColor: '#fff',
                    border: '2px solid #007bff',
                },
                '& .MuiSlider-track': {
                    height: 4,
                },
                '& .MuiSlider-rail': {
                    height: 4,
                    backgroundColor: '#5a5959',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
