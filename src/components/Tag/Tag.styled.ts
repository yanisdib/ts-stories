import styled, { css } from 'styled-components';


interface Props {
    disabled?: boolean;
    selected?: boolean;
}


export const StyledTag = styled.div<Props>`
    --tag-font-size-sm: 0.8em;
    --tag-font-size-def: 0.95em;
    --tag-font-size-lg: 1.1em;

    --tag-bg: none;
    --tag-border-color: #404EED;
    --tag-bg-selected: var(--purple);
    --tag-bg-disabled: #D9D9D9;

    --tag-label-color: var(--ui-body-color);
    --tag-label-color-disabled: #767676;

    --tag-padding-x: 15px;
    --tag-padding-y: 7px;


    width: fit-content;
    min-width: 50px;
    height: fit-content;
    padding: var(--tag-padding-y) var(--tag-padding-x);
    background-color: ${({
        disabled,
        selected
    }: Props) => {
        if (disabled) {
            return css`var(--tag-bg-disabled)`
        } else if (selected) {
            return css`var(--tag-bg-selected)`
        }
        
        return css`var(--tag-bg)`;
    }};

    font-family: var(--primary-font);
    font-size: .85em;
    font-weight: 500;
    text-align: center;
    color: ${({
        disabled,
        selected
    }: Props) => {
        if (disabled) {
            return css`var(--tag-label-color-disabled)`;
        } else if (selected) { 
            return css`var(--dim-white)`;
        }

        return css`var(--purple)`;
    }};

    border: ${({
        disabled,
        selected
    }: Props) => {
        if (disabled) {
            return css`var(--tag-bg-disabled)`;
        } else if (selected) {
            return css`1px solid var(--tag-bg-dark)`;
        }

        return css`solid 1px var(--tag-bg-selected)`;
    }};

    border-radius: calc(var(--tag-padding-x)*2);
    cursor: pointer;
`;