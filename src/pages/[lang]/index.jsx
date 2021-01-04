import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router'
import * as Yup from 'yup';
import { Link } from 'react-scroll';

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
import { smoothLinkProps } from '@pagerland/common/src/utils';

import SEO from '../../components/SEO';

import { createClient } from 'contentful';

// 52qlh6k2p2ly
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "52qlh6k2p2ly",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "SvsZP-sQaZK1v-v3so-iuvBmrMMGTy82Q0VBPXfMzUQ"
});

const Logo = props => <img src="/logo.svg" alt="dataatti logo" width="150px" height="50px" {...props} />;

const Startup = ({ fields, langToggle }) => {

  // validation for the contact form
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, fields.contactFormValidationTooShort)
      .max(256, fields.contactFormValidationTooLong)
      .required(fields.contactFormValidationRequired),
    company: Yup.string()
      .min(2, fields.contactFormValidationTooShort)
      .max(256, fields.contactFormValidationTooLong)
      .required(fields.contactFormValidationRequired),
    email: Yup.string().email(fields.contactFormValidationInvalidEmail).required(fields.contactFormValidationRequired),
    phone: Yup.string(),
    contactReason: Yup.string().required(fields.contactFormValidationRequired)
  });

  // fields for the contact form
  const mailerFields = [
    {
      name: "fullName",
      type: "string",
      placeholder: fields.contactFormNameField,
      label: fields.contactFormNameField,
      initialValue: "",
    },
    {
      name: "company",
      type: "string",
      placeholder: fields.contactFormCompanyField,
      label: fields.contactFormCompanyField,
      initialValue: ""
    },
    {
      name: "email",
      type: "email",
      label: fields.contactFormEmailField,
      placeholder: fields.contactFormEmailField,
      initialValue: ""
    },
    {
      name: "phone",
      type: "string",
      label: fields.contactFormPhoneField,
      placeholder: fields.contactFormPhoneField,
      initialValue: ""
    },
    {
      name: "contactReason",
      type: "string",
      label: fields.contactFormContactReasonField,
      placeholder: fields.contactFormContactReasonField,
      initialValue: "",
      multiline: true
    }
  ]

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
      <SEO title="Dataatti" />

      <Sticky style={{ zIndex: 999, position: 'relative' }}>
        <Navbar Logo={Logo}
          links={[
            {
              to: '',
              label: fields.navbarHome,
            },
            {
              to: 'services',
              label: fields.navbarServices,
            },
            {
              to: 'about',
              label: fields.navbarAbout,
            },
            {
              to: 'team',
              label: fields.navbarTeam,
            },
          ]}
          actions={[
            langToggle,
            {
              to: 'contact',
              label: fields.navbarContact,
              as: Link,
              ...smoothLinkProps,
              variant: 'accent'
            },
          ]}
        />
      </Sticky>
      <Welcome name="" title={fields.headline} text={fields.headerText} avatars={[]} actions={[
        {
          label: fields.homeButtonText,
          to: 'services',
          as: Link,
          ...smoothLinkProps,
          variant: 'secondary',
        },
      ]} />
      <Services name="services" title={fields.servicesTitle} services={[
        {
          title: fields.servicesTitleOne,
          text: fields.servicesTextOne,
        },
        {
          title: fields.servicesTitleTwo,
          text: fields.servicesTextTwo,
        },
        {
          title: fields.servicesTitleThree,
          text: fields.servicesTextThree,
        }
      ]} />
      <About name="about" title={fields.aboutTitle} text={fields.aboutText} />
      <Team name="team" title={fields.meetOurTeamTitle} text={fields.meetOurTeamText} cta={{
        label: fields.meetOurTeamButton,
        to: 'contact',
        as: Link,
        ...smoothLinkProps,
        variant: 'secondary',
      }} />
      <Contact name="contact" title={fields.contactTitle} mailer={{
        onSubmit: (e) => handleSubmit(e), fields: mailerFields, cta: fields.contactFormSubmitButton, title: fields.contactFormTitle, validationSchema: validationSchema
      }} />
    </Theme>
  )
};

export async function getStaticPaths() {
  return {
    paths: ["/fi", "/en"],
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { lang } = context.params;
  // Add contentfull requests here
  try {
    let entries
    let langToggle
    if (lang === "fi") {
      entries = await client
        .getEntry("5pymhLgyj8UGm4hNxtlKE5", {
          locale: "fi",
        })
      langToggle = {
        label: 'In English',
        as: 'a',
        variant: 'default',
        size: 'small',
        href: '/en'
      }
    } else {
      entries = await client
        .getEntry("5pymhLgyj8UGm4hNxtlKE5", {
          locale: "en-US",
        })
      langToggle = {
        label: 'Suomeksi',
        as: 'a',
        variant: 'default',
        size: 'small',
        href: '/fi'
      }
    }

    return {
      props: {
        fields: entries.fields,
        langToggle
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

export default Startup;