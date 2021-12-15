/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import {
    FunctionComponent,
    useState,
    MouseEvent,
    TouchEvent,
} from 'react';
import { Item, SlideDirection } from './types';

export interface ItemProviderProps {
    items: Item[];
    show: number;
    slide: number;
    widthCallBack: (width: number) => void;
    dragCallback: (transform: number) => void;
    slideCallback: (direction: SlideDirection) => void;
    transition: number;
    transform: number;
    swiping: boolean;
    swipeOn: number;
    responsive: boolean;
    infinite: boolean;
}

export const ItemProvider: FunctionComponent<ItemProviderProps> = (
    props: ItemProviderProps,
) => {
    const width = 100
    const [drag, setDrag] = useState({
        initial: props.transform,
        start: 0,
        isDown: false,
        drag: 0,
        finished: true,
        pointers: true,
    });
    const handleDragStart = (e: MouseEvent | TouchEvent) => {
        e.persist();
        setDrag({
            ...drag,
            isDown: true,
            initial: props.transform,
            finished: false,
        });
    };
    const handleDragFinish = (e: MouseEvent | TouchEvent) => {
        e.persist();
        if (drag.finished) {
            return;
        }
        if (Math.abs(drag.drag) < width * props.swipeOn) {
            props.dragCallback(props.transform);
            return setDrag({
                initial: props.transform,
                start: 0,
                isDown: false,
                drag: 0,
                finished: true,
                pointers: true,
            });
        }

        props.slideCallback(drag.drag > 0 ? SlideDirection.Right : SlideDirection.Left);
        setDrag({ ...drag, drag: 0, isDown: false, finished: true, pointers: true });
        return;
    };
    const handleDragMove = (e: MouseEvent | TouchEvent) => {
        e.persist();
        if (!drag.isDown) {
            return;
        }
        setDrag({ ...drag, drag: drag.start, pointers: false });
    };
    const swipeProps = props.swiping
        ? {
            onTouchCancel: handleDragFinish,
            onTouchEnd: handleDragFinish,
            onTouchMove: handleDragMove,
            onTouchStart: handleDragStart,
            onMouseDown: handleDragStart,
            onMouseLeave: handleDragFinish,
            onMouseUp: handleDragFinish,
            onMouseMove: handleDragMove,
        }
        : {};

    return (
        <div css={styles}>
            <div
                className="list-container"
                {...swipeProps}
                style={{
                    transform: `translateX(${props.transform - drag.drag}px)`,
                    transition: `transform ${props.transition}s ease 0s`,
                    width: width * props.items.length,
                }}
            >
                {props.items.map((item, i) => (
                    <div
                        key={i}
                        style={{ width, pointerEvents: drag.pointers ? 'all' : 'none' }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = css`
  position: relative;
  overflow: hidden;
  background-color: darkcyan;
  
  .list-container{
    display: flex;
  }
`