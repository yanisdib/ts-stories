import { ChevronLeft, ChevronRight } from '@styled-icons/heroicons-outline';

import { StyledArrow } from './Arrow.styled';


export enum ArrowPositions {
    ABSOLUTE = 'absolute',
    FIXED = 'fixed',
    STATIC = 'static',
}

interface Props {
    disabled?: boolean;
    next: boolean;
    onClick: () => void;
    position?: ArrowPositions;
}


function Arrow({
    disabled,
    next,
    onClick,
    position
}: Props): JSX.Element {
    return next ? (
        <StyledArrow
            disabled={disabled}
            next={next}
            onClick={!disabled ? onClick : () => { }}
            position={position}
        >
            <ChevronRight />
        </StyledArrow>
    ) : (
        <StyledArrow
            disabled={disabled}
            next={next}
            onClick={!disabled ? onClick : () => { }}
            position={position}
        >
            <ChevronLeft />
        </StyledArrow>
    );
}


Arrow.defaultProps = {
    disabled: false,
    next: true,
    onClick: () => { },
    position: ArrowPositions.ABSOLUTE
};


export default Arrow;