import React from 'react';
import Button from '@mui/material/Button';

import './styles.scss';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const ButtonComponent = React.forwardRef<HTMLInputElement, ButtonProps>(
    ({ onClick, text }) => {
        return (
            <Button
                variant="contained"
                onClick={onClick}
                className="button-container"
            >
                {text}
            </Button>
        );
    }
);

export default ButtonComponent;
