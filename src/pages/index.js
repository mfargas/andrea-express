import React from 'react'
import Layout from '../components/Layout'
import HomeIntro from '../components/HomeIntro'
import SkillList from '../components/SkillList'
import Gallery from '../components/Gallery'
// import Amplify from 'aws-amplify'
// import config from './aws-exports'
// Amplify.configure(config)

export default function Home() {
    return( 
        <Layout pageTitle={Home}>
            <HomeIntro />
            <SkillList />
            <Gallery />
        </Layout>
    )
}