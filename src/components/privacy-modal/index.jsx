import { createPortal } from 'react-dom';
import { useState } from 'react';
import Link from 'next/link';
import { PrivacyContainer } from './styled.components';
import Button from '@pagerland/common/src/components/Button';

const PrivacyModal = () => {

    const [open, setOpen] = useState(true);

    return open && process.browser &&
        createPortal(
            <PrivacyContainer>
                <div>Dataatti websites use cookies to deliver and improve the website experience. <Link href="/en/privacy-policy"><a>See our</a></Link> cookie policy for further details on how we use cookies and how to change your cookie settings.</div>
                <Button onClick={() => setOpen(false)}>Accept</Button>
            </PrivacyContainer>, document.body)
}

export default PrivacyModal