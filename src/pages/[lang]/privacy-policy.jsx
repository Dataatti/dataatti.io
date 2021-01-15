import { useRouter } from 'next/router'

const PrivacyPolicy = () => {

    const router = useRouter();
    return (
        <div className="policy-container">
            <button onClick={() => router.back()}>Back</button>
            <h1>Cookie Policy for Dataatti</h1>
            <p>This is the Cookie Policy for Dataatti, accessible from dataatti.io</p>
            <p><strong>What Are Cookies</strong></p>
            <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
            <p>For more general information on cookies, please read <a href="https://www.cookieconsent.com/what-are-cookies/">"What Are Cookies"</a>. Information regarding cookies from this Cookies Policy are from <a href="https://www.generateprivacypolicy.com/">the Privacy Policy Generator</a>.</p>
            <p><strong>How We Use Cookies</strong></p>
            <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
            <p><strong>Disabling Cookies</strong></p>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookies Policy Generator from CookiePolicyGenerator.com</a>.</p>
            <p><strong>Third Party Cookies</strong></p>
            <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
            <ul>
                <li>
                    <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
                    <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                </li>
            </ul>
            <p><strong>More Information</strong></p>
            <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
            <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
            <ul>
                <li>Email: hello@dataatti.io</li>
            </ul>
            <style jsx>{`
                .policy-container {
                    padding: 18px;
                    font-family: 'Hind',sans-serif;
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
                        line-height: 1.6;
                        font-weight: bold;
                    }
            `}</style>
        </div>
    )
}

export default PrivacyPolicy;