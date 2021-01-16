import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLocalStorage } from "../../hooks/useLocalStorage";

const PrivacyModal = ({ privacyText }) => {
  const router = useRouter();
  const [accepted, setAccepted] = useLocalStorage("accepted", false);
  const [visible, setVisible] = useLocalStorage("bannerVisible", true);

  const setCookies = (cookiesAccepted) => {
    setAccepted(cookiesAccepted);
    setVisible(false);
  }

  return visible && typeof window !== "undefined" &&
    createPortal(
      <div className="privacy-modal__wrapper">
        <div>{privacyText} <Link href="/en/privacy-policy"><a>{router.query.lang === "fi" ? "Lue lisää" : "Learn more"}</a></Link></div>
        <div className="privacy-button-container">
          <button onClick={() => setCookies(true)}>{router.query.lang === "fi" ? "Hyväksy" : "Accept"}</button>
          <button onClick={() => setCookies(false)}>{router.query.lang === "fi" ? "Älä hyväksy" : "Decline"}</button>
        </div>
        <style jsx>{`
                    .privacy-modal__wrapper {
                        position: fixed;
                        bottom: 0px;
                        left: 0px;
                        width: 100%;
                        padding: 12px;
                        background: white;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        box-shadow: 0 -10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                        z-index: 10;
                    }
                    .privacy-button-container {
                      height: 100%;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: flex-end;
                      margin: 5px
                    }
                    button {
                        all: unset;
                        border-radius: 24px;
                        box-shadow: 0 24px 32px rgba(208,111,63,0.14);
                        transition: all .2s ease-in-out;
                        padding: 4px 12px 4px;
                        cursor: pointer;
                        font-family: 'Hind',sans-serif;
                        background-color: rgb(12, 75, 91);
                        color: #FFFFFF;
                        line-height: 1.6;
                        font-weight: bold;
                        font-size: 14px;
                        margin-left: 5px;
                        text-align: center;
                    }
                    button:last-of-type {
                      background-color: #51B3A7
                    }
                    @media only screen and (max-width: 600px) {
                      .privacy-button-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                      }
                      button {
                        margin: 5px
                      }
                    }
                `}</style>
      </div>, document.body)
}

export default PrivacyModal
