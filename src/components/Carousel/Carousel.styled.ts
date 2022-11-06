import styled, { css } from 'styled-components';


interface SliderProps {
    infinite?: boolean;
    translateValue: number;
}


const borderRadius = css`
    border-radius: 20px;
`;

export const StyledCarousel = styled.div`
    display: flex;
    flex: 1;
    position: relative;
    width: 100%;
    height: 600px;
    white-space: nowrap;
    overflow: hidden;
    ${borderRadius}
`;

export const Slider = styled.div<SliderProps>`
    width: 100%;
    height: inherit;
    transform: ${({ translateValue }) => css`translateX(-${translateValue}%)`};
    transition: transform 1s ease-in-out 0s;
    ${borderRadius}
`;

export const Slide = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #000;
    color: #FFF;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;