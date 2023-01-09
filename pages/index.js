import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import PropertyVip from '../components/PropertyVip'

import Carousel from '../components/Carousel'
import PropertySection from '../components/PropertySection'
import Features from '../components/Features'
import { propertiesMock } from '../src/constants'
import MapboxComponent from '../components/Mapbox/Mapbox'
import MapboxComponentTest from '../components/Mapboxtest'
import Image from 'next/image'
import CardSection from '../components/CardSection'
import Header from '../components/Header'
import Link from 'next/link'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit'

// import videoBg from "../src/videos/cut.mp4"

export default function Home() {
  return (
    <div>
      <Head>
        <title>News Sensei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container-fluid p-0 m-0">
          <div className="row">
            <div className="col main">
              <video
                style={{ width: '100%', height: '100%' }}
                muted
                autoPlay
                loop
                src="/videos/intro.mp4"
                className="main p-0 m-0 videoBg"
                type="video/mp4"
              />
              <div className="content">
                <div className="row">
                  <div className="col maintext">
                    Todo lo que tienes que saber,
                    <br /> sobre todo lo que
                    <br /> importa.trasciende. impacta.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
