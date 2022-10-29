import { DotFlashing } from './Loader.styled';


interface Props {
    animation?: string;
}


function Loader({ animation }: Props): JSX.Element {
    switch (animation) {
        case ('dot-flashing'):
            return <DotFlashing />;
        default:
            return <DotFlashing />;
    };
}


Loader.defaultProps = {
    animation: 'dot-flashing'
};


export default Loader;