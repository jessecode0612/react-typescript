/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import {
    useState,
    FunctionComponent,
    useRef,
    ReactElement,
} from 'react';
import { Arrow } from './Arrow';
import { ItemProvider } from './Item';
import {
    getTransformAmount,
    initItems,
    getShowArrow,
    cleanItems,
    getCurrent
} from './helpers'
import {
    SlideDirection,
    Item,
} from './types';


export interface CarouselProps {
    children: Item[];
    show: number;
    slide: number;
    transition?: number;
    swiping?: boolean;
    swipeOn?: number;
    responsive?: boolean;
    infinite?: boolean;
    className?: string;
    useArrowKeys?: boolean;
    a11y?: { [key: string]: string };
    dynamic?: boolean;
    paginationCallback?: ((direction: SlideDirection) => any) | null;
    pageCount?: number;
    leftArrow?: ReactElement | null;
    rightArrow?: ReactElement | null;
}

export const defaultProps: Required<CarouselProps> = {
    children: [],
    show: 1,
    slide: 1,
    transition: 0.5,
    swiping: false,
    swipeOn: 1,
    responsive: false,
    infinite: true,
    className: '',
    useArrowKeys: false,
    a11y: {},
    dynamic: false,
    paginationCallback: null,
    pageCount: 0,
    rightArrow: null,
    leftArrow: null
};

export const Carousel: FunctionComponent<CarouselProps> = (userProps: CarouselProps) => {
    const props: Required<CarouselProps> = { ...defaultProps, ...userProps };

    const [width] = useState(0);
    const [animation, setAnimation] = useState({
        transform: 0,
        transition: 0,
        isSliding: false,
    });
    const [current, setCurrent] = useState(0);
    const [showArrow, setShowArrow] = useState(
        getShowArrow(props.children.length, props.show, props.infinite, current),
    );

    const [page] = useState<number>(0);
    const itemsRef = useRef(initItems(props.children, props.slide, props.infinite));
    const isPaginating = useRef(false);

    const slide = (direction: SlideDirection) => {
        if (
            animation.isSliding ||
            (direction === SlideDirection.Right && !showArrow.right) ||
            (direction === SlideDirection.Left && !showArrow.left)
        ) {
            return;
        }

        if (
            props.paginationCallback &&
            direction === SlideDirection.Right &&
            page < props.pageCount - 1 &&
            !isPaginating.current
        ) {
            isPaginating.current = true;
            props.paginationCallback(direction);
            return;
        }

        const elements = props.children;

        const next = getCurrent(current, props.slide, elements.length, direction);

        setAnimation({
            transform:
                animation.transform + getTransformAmount(width, props.slide, direction),
            transition: props.transition,
            isSliding: true,
        });
        setCurrent(next);
        setShowArrow(getShowArrow(elements.length, props.show, props.infinite, next));
        setTimeout(() => {
            if (props.infinite) {
                const cleanedItems = cleanItems(
                     itemsRef.current,
                    props.slide,
                    direction,
                );
                itemsRef.current = cleanedItems;
            }
            setAnimation({
                transform: props.infinite
                    ? getTransformAmount(width, props.slide, SlideDirection.Right)
                    : animation.transform +
                    getTransformAmount(width, props.slide, direction),
                transition: 0,
                isSliding: false,
            });
        }, props.transition * 1_0_0_0);
        isPaginating.current = false;
    };

    const widthCallBack = (calculatedWidth: number) => {
        // setWidth(calculatedWidth);
        setAnimation({
            transform: props.infinite
                ? getTransformAmount(calculatedWidth, props.slide, SlideDirection.Right)
                : 0,
            transition: 0,
            isSliding: false,
        });
    };

    const dragCallback = (translateX: number) => {
        setAnimation({
            transform: translateX,
            transition: props.transition,
            isSliding: false,
        });
        setTimeout(
            () => setAnimation({ ...animation, transition: 0 }),
            props.transition * 1_0_0_0,
        );
    };

    const slideCallback = (direction: SlideDirection) => {
        slide(direction);
    };

    return (
        <div css={styles}>
            {showArrow.left && (
                <div onClick={() => slide(SlideDirection.Left)}>
                    {props.leftArrow ?? <Arrow direction="left" />}
                </div>
            )}
            <ItemProvider
                {...props}
                transition={animation.transition}
                items={itemsRef.current}
                transform={animation.transform}
                slideCallback={slideCallback}
                dragCallback={dragCallback}
                widthCallBack={widthCallBack}
            />
            {showArrow.right && (
                <div onClick={() => slide(SlideDirection.Right)}>
                    {props.rightArrow ?? <Arrow direction="right" />}
                </div>
            )}
        </div>
    );
};

const styles = css`
    display: flex;
`