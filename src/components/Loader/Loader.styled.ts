import styled, { css } from 'styled-components';


const pseudoElementRule = css`
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
`;

const dotRule = css`
    width: var(--dot-size);
    height: var(--dot-size);
    border-radius: calc(var(--dot-size)/2);
    background-color: var(--purple);
    color: var(--purple);
    animation: flashing 1s linear alternate infinite;
`;


export const DotFlashing = styled.div`
    --dot-size: 8px;

    @keyframes flashing {
        0% {
            background-color: var(--purple);
        }

        50%,
        100% {
            background-color: #EBE6FF;
        }
    }

    ${dotRule}
    position: relative;
    animation-delay: .5s;

    &::before,
     ::after {
        ${pseudoElementRule}
    }

    &::before {
        ${dotRule}
        left: -11px;
        animation-delay: 0s;
    }

    &::after {
        ${dotRule}
        left: 11px;
        animation-delay: 1s;
    }
`;
