import {animated, useSpring, config} from '@react-spring/web'

export function useAnimation(delay){
    const spring = useSpring({
        from: {
            opacity: 0,
            scale: 1.2

        },
        to: {
            opacity: 1,
            scale: 1
        },
        config: config.wobbly,
        delay: delay
    });
    return spring;
}

