import Loader from '../Loader/Loader';

import { StyledButton } from './Button.styled';


interface Props {
    active?: boolean;
    children: React.ReactNode;
    disabled?: boolean;
    href?: string;
    loading?: boolean;
    onClick?: () => void;
    size?: string;
    variant?: string;
}


function Button({
    active,
    children,
    disabled,
    href,
    loading,
    onClick,
    size,
    variant
}: Props): JSX.Element {
    return (
        <StyledButton
            active={active}
            disabled={disabled}
            onClick={onClick}
            size={size}
            variant={variant}
        >
            {loading ? <Loader /> : children}
        </StyledButton>
    );
}


Button.defaultProps = {
    active: false,
    children: null,
    disabled: false,
    href: undefined,
    loading: false,
    onClick: () => { },
    size: 'default',
    variant: 'primary'
};


export default Button;