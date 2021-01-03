import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import { useRouter } from 'next/router';
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

const Startup = ({ entries }) => {

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


export async function getStaticProps() {

  // Add contentfull requests here
  try {
    const entries = await client
      .getEntry({
        content_type: "pageHome"
      })

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

Startup.propTypes = {
  url: PropTypes.string,
};


export default Startup;
