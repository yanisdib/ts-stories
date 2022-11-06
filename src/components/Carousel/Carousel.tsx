import {
    useEffect,
    useRef,
    useState
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useResizableDimensions } from '../../hooks/useResizableDimensions';

import { CarouselSettings } from '../../interfaces/CarouselSettings';

import Arrow, { ArrowPositions } from '../Arrow/Arrow';

import {
    Slide,
    Slider,
    StyledCarousel
} from './Carousel.styled';


interface Props extends CarouselSettings {
    slides: JSX.Element[];
}


function Carousel({
    controls,
    current,
    delay,
    infinite,
    slides,
    swipeable
}: Props): JSX.Element {
    const CAROUSEL_LIMIT = slides.length - 1;

    const [currentSlide, setCurrentSlide] = useState(current ?? 0);
    const [translateValue, setTranslateValue] = useState(0);


    return (
        <StyledCarousel>
            <Slider translateValue={translateValue}>
                {slides
                    .map(slide => <Slide key={uuidv4()}>{slide}</Slide>)
                }
            </Slider>
            {controls && (
                <>
                    {(currentSlide !== CAROUSEL_LIMIT && slides.length > 1) &&
                        <Arrow
                            next
                            onClick={() => {
                                setCurrentSlide(previousState => previousState + 1);
                                setTranslateValue(previousState => previousState + 100);
                            }}
                            position={ArrowPositions.ABSOLUTE}
                        />
                    }
                    {currentSlide > 0 &&
                        <Arrow
                            next={false}
                            onClick={() => {
                                setCurrentSlide(previousState => previousState - 1);
                                setTranslateValue(previousState => previousState - 100);
                            }}
                            position={ArrowPositions.ABSOLUTE}
                        />
                    }
                </>
            )}
        </StyledCarousel>
    );
}


Carousel.defaultProps = {
    controls: true,
    current: 0,
    delay: 3000,
    infinite: false,
    slides: [
        <img src='https://jeuxvideo.rds.ca/wp-content/uploads/sites/2/2021/03/bravely-default-2.original-1920x1080.jpg' />,
        <img src='https://gamingbolt.com/wp-content/uploads/2021/02/Bravely-Default-2.jpg' />,
        <img src='https://images.gnwcdn.com/2020/usgamer/octopath_traveler_featured.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/octopath-traveler-celebrates-two-million-sales-mark-with-bravely-default-crossover-art.jpg' />,
    ],
    swipeable: false,
};


export default Carousel;