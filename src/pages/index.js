import React from 'react'
import Layout from '../components/Layout'
import HomeIntro from '../components/HomeIntro'
import SkillList from '../components/SkillList'
import Gallery from '../components/Gallery'
import Seo from '../components/Seo'
// import Amplify from 'aws-amplify'
// import config from './aws-exports'
// Amplify.configure(config)

export default function Home() {
    return( 
        <Layout pageTitle={Home}>
            <Seo title={Home} author={Marjoree} />
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
    }`