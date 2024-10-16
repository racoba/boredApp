import React from 'react';
import TextField from '@mui/material/TextField';

import './styles.scss';

interface InputProps {
    label?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'file';
    required?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, required, type = 'text', value, onChange }) => {
        return (
            <TextField
                label={label}
                variant="outlined"
                required={required}
                type={type}
                value={value}
                onChange={onChange}
                className='input-container'
                sx={{
                    '& .MuiOutlinedInput-root': {
                        fontSize: '1rem',
                        borderRadius: '1rem',
                        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)',
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'black',
                        }
                    },
                    '& .MuiInputLabel-root': {
                        fontSize: '1rem',
                        color: 'black'
                    },

                }}
            />
        );
    }
);

export default Input;
