import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import * as Yup from 'yup';

import Sticky from 'react-sticky-el';

import Theme, { theme } from '@pagerland/themes/src/Startup';
import {
    Navbar,
    Welcome,
    Services,
    About,
    Team,
    Contact,
} from '@pagerland/themes/src/Startup/containers';

import SEO from '../components/SEO';

import { createClient } from 'contentful';
import { locale } from 'core-js';

// 52qlh6k2p2ly
const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "52qlh6k2p2ly",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "SvsZP-sQaZK1v-v3so-iuvBmrMMGTy82Q0VBPXfMzUQ"
});

const Logo = props => <img src="/logo.svg" alt="dataatti logo" width="150px" height="50px" {...props} />;

const fields = [
    {
        name: "fullName",
        type: "string",
        placeholder: "Full-name",
        label: "Full-name",
        initialValue: ""
    },
    {
        name: "company",
        type: "string",
        placeholder: "Company",
        label: "Company",
        initialValue: ""
    },
    {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Email",
        initialValue: ""
    },
    {
        name: "phone",
        type: "number",
        label: "Phone",
        placeholder: "Phone",
        initialValue: ""
    },
    {
        name: "contact-reason",
        type: "string",
        label: "Contact reason",
        placeholder: "Contact reason",
        initialValue: ""
    }
]

const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    company: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.number().required().positive().integer().max(9999999999),
});

const StartupFi = ({ entries }) => {

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const handleSubmit = async (values, actions) => {
        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    ...values,
                })
            })

            await actions.resetForm()

            await actions.setSubmitting(false)
        } catch (err) {
            console.warn(err);
        }
    }

    return (
        <Theme>
            <Head>
                <link href={theme.typography.googleFont} rel="stylesheet" />
                <meta name="theme-color" content={theme.colors.primary} />
            </Head>
            <SEO title="Dataatti.io" />

            <Sticky style={{ zIndex: 999, position: 'relative' }}>
                <Navbar Logo={Logo} actions={[]} />
            </Sticky>

            <Welcome name="" title={entries.fields.headline} text={entries.fields.headerText} />
            <Services name="services" />
            <About name="about" />
            <Team name="team" />
            <Contact name="contact" mailer={{
                onSubmit: (e) => handleSubmit(e), fields: fields, cta: "Contact", title: "Contact us", validationSchema: validationSchema
            }} />
        </Theme>
    )
};


export async function getStaticProps() {

    // Add contentfull requests here
    try {
        const entries = await client
            .getEntry("5pymhLgyj8UGm4hNxtlKE5")

        return {
            props: {
                entries: entries,
            }
        }
    } catch (err) {
        console.warn(err);

        return {
            props: {
                entries: null,
            }
        }
    }
}


export default StartupFi;
