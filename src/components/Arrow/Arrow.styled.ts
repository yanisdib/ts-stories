import styled, { css } from 'styled-components';

import { ArrowPositions } from './Arrow';


interface Props {
    disabled?: boolean;
    next?: boolean;
    position?: ArrowPositions;
}


export const StyledArrow = styled.span<Props>`
    display: flex;
    justify-content: center;
    position: ${({ position }) => position};
    width: 40px;
    height: 40px;
    background-color: ${({ disabled }) => css`var(${disabled ? '--bg-disabled ': '--dim-white'})`};
    text-align: center;
    top: 0;
    left: ${({ next }) => !next && '10px'};
    right: ${({ next }) => next && '10px'};
    bottom: 0;
    margin: auto;
    border-radius: 12px;
    cursor: ${({ disabled }) => !disabled && 'pointer'};

    svg {
        align-self: center;
        height: 23px;
        color: ${({ disabled }) => disabled ? css`var(--color-disabled)` : css`var(--purple)`};
        stroke-width: 3;
    }
`;