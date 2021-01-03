import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

const Startup = () => {

  const router = useRouter();

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang === "fi-FI") {
      router.push("/fi");
    } else {
      router.push("/en")
    }
  }, [])
  return (
    <>
    </>
  )
};

export default Startup;
