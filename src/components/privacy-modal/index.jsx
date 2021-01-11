import { createPortal } from 'react-dom';
import { useState } from 'react';
import Link from 'next/link';

const PrivacyModal = () => {

    const [open, setOpen] = useState(true);

    return open && process.browser &&
        createPortal(
            <div className="privacy-modal__wrapper">
                <div>Dataatti websites use cookies to deliver and improve the website experience. <Link href="/en/privacy-policy"><a>See our</a></Link> cookie policy for further details on how we use cookies and how to change your cookie settings.</div>
                <button onClick={() => setOpen(false)}>Accept</button>
                <style jsx>{`
                    .privacy-modal__wrapper {
                        position: fixed;
                        bottom: 0px;
                        left: 0px;
                        width: 100%;
                        padding: 18px;
                        background: white;
                        display: flex;
                        justify-content: space-between;
                        box-shadow: 0 -10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                        z-index: 10;
                    }

                    .privacy-modal__wrapper > div {
                        width: 80%;
                    }
                    button {
                        all: unset;
                        border-radius: 24px;
                        box-shadow: 0 24px 32px rgba(208,111,63,0.14);
                        transition: all .2s ease-in-out;
                        padding: 11px 48px 12px;
                        cursor: pointer;
                        font-family: 'Hind',sans-serif;
                        background-color: #51B3A7;
                        color: #FFFFFF;
                    }
                `}</style>
            </div>, document.body)
}

export default PrivacyModal