import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLocalStorage } from "../../hooks/useLocalStorage";

const PrivacyModal = ({ privacyText }) => {
    const router = useRouter();
    const [accepted, setAccepted] = useLocalStorage("accepted", false);

    return !accepted && process.browser &&
        createPortal(
            <div className="privacy-modal__wrapper">
                <div>{privacyText} <Link href="/en/privacy-policy"><a>{router.query.lang === "fi" ? "Lue lisää" : "Learn more"}</a></Link></div>
                <button onClick={() => setAccepted(true)}>Accept</button>
                <style jsx>{`
                    .privacy-modal__wrapper {
                        position: fixed;
                        bottom: 0px;
                        left: 0px;
                        width: 100%;
                        padding: 18px;
                        background: white;
                        display: flex;
                        align-items: center;
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
                        background-color: rgb(12, 75, 91);
                        color: #FFFFFF;
                        line-height: 1.6;
                        font-weight: bold;
                    }
                `}</style>
            </div>, document.body)
}

export default PrivacyModal
