import Link from 'next/link'
import { useState, useEffect } from 'react';

import Box from '@pagerland/common/src/components/Box';
import Squares from '@pagerland/themes/src/Startup/components/Squares/Square';
import SquaresBlur from '@pagerland/themes/src/Startup/components/Squares/SquareBlur';
import Head from 'next/head';

export default function FourOhFour() {
    const [lang, setLang] = useState();

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang === "fi-FI") {
            setLang("fi")
        } else {
            setLang("en")
        }
    }, [])

    return (
        <>
            <Head>
                <title>Dataatti - 404</title>
            </Head>
            <div className="wrapper">
                <div className="inner-wrapper">
                    <Box>
                        <Box>
                            <Squares className="squares-1" />
                            <Squares className="squares-2" />
                            <Squares className="squares-3" />
                            <Squares className="squares-4" />

                            <SquaresBlur className="squaresBlur-1" />
                            <SquaresBlur className="squaresBlur-2" />
                            <SquaresBlur className="squaresBlur-3" />
                            <SquaresBlur className="squaresBlur-4" />
                        </Box>
                    </Box>
                    <img src="/logo.svg" alt="Dataatti logo" width="300px" height="100px" />
                    <h1>404 - Page Not Found</h1>
                    <Link href="/[lang]" as={`/${lang}`}>
                        Go back home
          </Link>
                </div>
                <style jsx>{`
                .wrapper {
                    width: 100%;
                    height:100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    font-family: Hind, sans-serif;
                }

                .wrapper > div {
                    display: flex;
                    justify-content: center;
                    align-items:center;
                    flex-wrap: wrap;
                }
            `}</style>
                <style global jsx>{`
            .inner-wrapper > * {
                width: 100%;
                text-align: center;
            }
{/* 
            .squares-1 {
                position: absolute;
                top: 20%;
                left: 20%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63);
            }

            .squares-2 {
                position: absolute;
                top: 75%;
                left: 32%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squares-3 {
                position: absolute;
                top: 15%;
                left: 66%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squares-4 {
                position: absolute;
                top: 86%;
                left: 70%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63); 
            } */}


            .squares-1 {
                position: absolute;
                top: 32%;
                left: 32%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63);
            }

            .squares-2 {
                position: absolute;
                top: 75%;
                left: 32%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squares-3 {
                position: absolute;
                top: 30%;
                left: 66%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squares-4 {
                position: absolute;
                top: 67%;
                left: 69%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63); 
            }

            .squaresBlur-1 {
                position: absolute;
                top: 33%;
                left: 31%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63);
            }

            .squaresBlur-2 {
                position: absolute;
                top: 73%;
                left: 30%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squaresBlur-3 {
                position: absolute;
                top: 31%;
                left: 65%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squaresBlur-4 {
                position: absolute;
                top: 68%;
                left: 68%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63); 
            }

            @media only screen and (max-width: 1000px) {

                .squares-1 {
                position: absolute;
                top: 30%;
                left: 20%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63);
            }

            .squares-2 {
                position: absolute;
                top: 65%;
                left: 20%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squares-3 {
                position: absolute;
                top: 25%;
                left: 66%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squares-4 {
                position: absolute;
                top: 70%;
                left: 80%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63); 
            }
                .squaresBlur-1 {
                position: absolute;
                top: 31%;
                left: 19%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63);
            }

            .squaresBlur-2 {
                position: absolute;
                top: 66%;
                left: 19%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squaresBlur-3 {
                position: absolute;
                top: 26%;
                left: 65%;
                height: 50px;
                width:50px;
                color: rgb(81, 179, 167);
            }

            .squaresBlur-4 {
                position: absolute;
                top: 71%;
                left: 79%;
                height: 50px;
                width:50px;
                color: rgb(208, 111, 63); 
            }
            }
            `}</style>
            </div>
        </>
    )
}