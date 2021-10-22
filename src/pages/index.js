import React from 'react'
import Layout from '../components/layout'
import HomeIntro from '../components/home-intro'
import SkillList from '../components/skillList'
import Gallery from '../components/gallery'
// import Amplify from 'aws-amplify'
// import config from './aws-exports'
// Amplify.configure(config)

export default function Home() {
    return( 
        <Layout pageTitle='Andrea Home'>
            <HomeIntro />
            <h4>legal attorney's assistant</h4>
            <SkillList />
            <Gallery />
        </Layout>
    )
}