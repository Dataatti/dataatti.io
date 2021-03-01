import { useState, useRef, useCallback } from 'react';
import { useEventListener } from '../../hooks/useEventListener';

export const Header = ({ children }) => {
    const [onTop, setOnTop] = useState(true);
    const headerRef = useRef();
    const handler = useCallback((e) => {
        if (window.scrollY > 20) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    }, [setOnTop, process.browser])

    useEventListener('scroll', handler);

    return (
        <div ref={headerRef} className={`header-wrapper ${!onTop ? "" : "white-background"}`}>
            {children}
            <style jsx>{`
                .header-wrapper {
                    position: sticky;
                    top: 0;
                    left: 0;
                    z-index: 9999;
                    transition: 0.2s ease-in-out;
                    width: 100%;
                }

                .white-background {
                    background: white;
                    box-shadow: 0 36px 64px rgb(34 39 43 / 6%);
                }

                @media only screen and (max-width: 1170px) {
                    .header-wrapper {
                        background-color: white;
                    }
                }
            `}</style>
        </div>
    )
}

export default Header;