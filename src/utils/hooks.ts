import React, {useState, useEffect} from 'react'

const MOBILE_WIDTH = 576
const TABLET_WIDTH = 786

interface ScreenTypes {
    width?: number
    height?: number
    isMobile?: boolean
    isDesktop?: boolean
    isTablet?: boolean
}

export const useScreen = () => {
    const [screen, setScreen] = useState<ScreenTypes>({
        width: undefined,
        height: undefined,
        isMobile: undefined,
        isDesktop: undefined,
        isTablet: undefined
    })

    useEffect(() => {
        function handleResize() {
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: MOBILE_WIDTH > window.innerWidth,
                isDesktop: MOBILE_WIDTH < window.innerWidth,
                isTablet:
                    MOBILE_WIDTH < window.innerWidth &&
                    window.innerWidth < TABLET_WIDTH
            })
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return screen
}

export const useOutSideClick = (
    element: React.MutableRefObject<any>,
    callback: () => void,
    always = false
) => {
    const [isOutSide, setIsOutSide] = useState<boolean>(true)
    useEffect(() => {
        let elementOpened = 'false'

        function handleClick(event: any) {
            if (element.current) {
                if (elementOpened !== element.current.dataset.open && !always) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    let target = event.target
                    let outSideClicked = true
                    do {
                        if (target === element.current) {
                            outSideClicked = false
                            return
                        }
                        target = target?.parentNode
                    } while (target)
                    if (element.current.dataset.open === 'true') {
                        setIsOutSide(outSideClicked)
                        callback()
                    }
                }
                elementOpened = element.current.dataset.open
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [])
    return isOutSide
}
