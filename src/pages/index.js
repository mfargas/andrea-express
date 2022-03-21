import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HomeIntro from '../components/HomeIntro'
import SkillList from '../components/SkillList'
import Gallery from '../components/Gallery'
import Seo from '../components/Seo'
// import Amplify from 'aws-amplify'
// import config from './aws-exports'
// Amplify.configure(config)

export default function Home({data}) {
    return( 
        <Layout pageTitle={Home} author='Marjoree' description='home'>
            <Seo title='Home' author='Marjoree E. F.' />
            <HomeIntro />
            <SkillList />
            <Gallery />
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
    `