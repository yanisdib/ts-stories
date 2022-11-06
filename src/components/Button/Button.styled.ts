import styled, { css } from 'styled-components';


interface ButtonProps {
    active?: boolean;
    disabled?: boolean;
    loading?: boolean;
    size?: string;
    variant?: string;
}


export const StyledButton = styled.button<ButtonProps>`
    --btn-font-size-sm: 0.8em;
    --btn-font-size-def: 0.95em;
    --btn-font-size-lg: 1.1em;

    --btn-bg: #404EED;
    --btn-bg-dark: #202BAA;
    --btn-bg-disabled: #D9D9D9;

    --btn-label-color: var(--ui-body-color);
    --btn-label-color-disabled: #767676;

    --btn-padding-x: 20px;
    --btn-padding-y: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    padding: var(--btn-padding-y) var(--btn-padding-x);
    text-align: center;

    background-color: ${({
        disabled,
        active
    }) => {
        if (disabled) {
            return css`var(--btn-bg-disabled)`
        } else if (active) {
            return css`var(--btn-bg-dark)`
        };

        return css`var(--btn-bg)`;
    }};

    font-size: ${({ size }) => {
        switch (size) {
            case 'small':
                return css`var(--btn-font-size-sm)`;
            case 'large':
                return css`var(--btn-font-size-lg)`;
            default:
                return css`var(--btn-font-size-def)`;
        };
    }};

    font-weight: 400;

    color: ${({ disabled }) => disabled ? (
        css`var(--btn-label-color-disabled)`
    ) : (
        '#FFF'
    )};
    
    border: ${({ active }) => active ? css`solid 2px var(--btn-bg)` : 'none'};
    border-radius: calc(var(--btn-padding-x)*1.2);
    cursor: ${({ disabled }) => !disabled && 'pointer'};

    &:hover {
        background-color: ${({ disabled }) => !disabled && css`var(--btn-bg-dark)`};
    }
`;