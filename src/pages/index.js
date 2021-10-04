import React from 'react'
import Layout from '../components/layout'
import HomeIntro from '../components/home-intro'
import Gallery from '../components/gallery'

export default function Home() {
    return( 
        <Layout pageTitle='Andrea Home'>
            <HomeIntro />
            <h4>legal attorney's assistant</h4>
            <Gallery />
        </Layout>
    )
}