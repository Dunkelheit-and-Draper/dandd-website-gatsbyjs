import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

const ContactPage = () => (
  <Layout innerHeight="100%" outerHeight="60vh">
    <SEO title="Contact" />
    <ContactForm></ContactForm>
  </Layout>
)

export default ContactPage
