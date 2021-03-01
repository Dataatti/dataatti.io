import { useRef, useEffect } from 'react';

// Hook
export function useEventListener(eventName, handler, customElement) {
    // Create a ref that stores handler
    const savedHandler = useRef();
    const element = useRef(customElement);
    useEffect(() => {
        if (!customElement && process.browser) {
            element.current = window;
        }
    }, [process.browser])

    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            // Make sure element supports addEventListener
            // On 
            if (!process.browser) return;
            const isSupported = element.current && element.current.addEventListener;
            if (!isSupported) return;

            // Create event listener that calls handler function stored in ref
            const eventListener = event => savedHandler.current(event);

            // Add event listener
            element.current.addEventListener(eventName, eventListener);

            // Remove event listener on cleanup
            return () => {
                element.current.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element, process.browser] // Re-run if eventName or element changes
    );
};