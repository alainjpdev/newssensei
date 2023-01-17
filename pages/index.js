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
import emailjs from '@emailjs/browser'

import { useRef } from 'react'

// import videoBg from "../src/videos/cut.mp4"

export default function Home() {
  const onSubmit = (event) => {
    event.preventDefault()
    router.push('/')
  }

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_t42ges4',
        'template_i02jnzw',
        form.current,
        'LWhLzpN2d1Yzzs4DY'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <Head>
        <title>News Sensei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container-fluid p-0 m-0">
          <div className="row">
            <div className="col main p-0 m-0">
              <video
                style={{ width: '100%', height: '100%' }}
                muted
                autoPlay
                loop
                src="/videos/intro.mp4"
                className="main p-0 m-0 videoBg"
                type="video/mp4"
              />
              <div className="content p-0 m-0">
                <div className="row p-0 m-0">
                  <div className="col maintext">
                    Todo lo que tienes que <br />
                    saber,
                    <br /> sobre todo lo que <br />
                    <div className="inner">
                      <span>
                        importa.
                        <br />
                        trasciende.
                        <br />
                        <br />
                        impacta.
                      </span>
                    </div>
                    <h6>
                      <br />
                      Recibe nuestro brief inteligente todas las mañanas.
                      ¡Ingresa tu e-mail!
                    </h6>
                  </div>
                </div>
                <MDBRow>
                  <MDBCol className="col-12">
                    <form ref={form}>
                      <div className="md-form">
                        <div className="form-group">
                          <label HtmlFor="email">
                            <h6>Ingresa tu correo electrónico</h6>
                          </label>
                          <input
                            type="email"
                            name="user_email"
                            class="form-control"
                            id="email"
                            placeholder="email"
                          />
                        </div>

                        {/* <MDBInput
                                type="text"
                                id="form-contact-phone"
                                label="Phone"
                              /> */}
                      </div>
                    </form>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <div className="md-form mb-0">
                      <MDBBtn
                        className="me-2 my-1 py-3 mx-1 px-6 py-2 btn-block smBtn"
                        onClick={sendEmail}
                        target="_top"
                      >
                        Suscribirse
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
                <h6>Suscríbete gratis</h6>
              </div>
            </div>
          </div>
          <div className="container-fluid p-0 m-0">
            <div className="row bg-image">
              <div className="col-md-5 p-5 m-3 mt-5 mx-2">
                <h2>
                  <strong>Nuestro brief inteligente.</strong>
                </h2>
                <span>
                  News Sensei te permite ahorrar tiempo y recursos, e iniciar el
                  día con información clave, como lo haría el presidente de una
                  nación o el CEO de una multinacional.
                </span>
              </div>
              <div className="col-md-5 mt-5 mx-2 ">
                <div className="row">
                  <div className="col-md-6 border p-1 ">
                    <div className="circle d-inline-flex">
                      <i className="fas fa-tasks "></i>
                    </div>
                    <spam>Agenda Política</spam>
                  </div>
                  <div className="col-md-6 border p-1">
                    <div className="circle d-inline-flex">
                      <i className="fas fa-dollar-sign mr-2 "></i>
                    </div>
                    <spam>Finanzas</spam>
                  </div>
                  <div className="col-md-6 border p-1">
                    <div className="circle d-inline-flex">
                      <i className="fas fa-assistive-listening-systems"></i>
                    </div>
                    <spam>Social Listening</spam>
                  </div>
                  <div className="col-md-6 border p-1">
                    <div className="circle d-inline-flex">
                      <i className="far fa-calendar-alt"></i>
                    </div>
                    <spam>Agenda Económica</spam>
                  </div>
                  <div className="col-md-6 border p-1">
                    <div className="circle d-inline-flex">
                      <i className="fas fa-power-off"></i>
                    </div>
                    <spam>Innovación y Tecnología</spam>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0">
          <div className="row">
            <div className="col main2 p-0 m-0">
              <video
                style={{ width: '100%', height: '100%' }}
                muted
                autoPlay
                loop
                src="/videos/ojo.mp4"
                className="main2 p-0 m-0 videoBg2"
                type="video/mp4"
              />
              <div className="content6 p-0 m-0">
                <div className="row pt-5 mt-5">
                  <div className="col maintext2 pt-5">
                    Ayúdanos a ser cada <br />
                    vez más inteligentes.
                    <br />
                    <h6>
                      <br />
                      Con tu ayuda queremos que el servicio que proveemos siga{' '}
                      <br />
                      mejorando. Ayúdanos, llenando nuestra encuesta.
                    </h6>
                    <MDBBtn className="p">Llena la encuesta</MDBBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0">
          <div className="row">
            <div className="col content3 mt-1">
              <h2>
                <strong>Anúnciate con nosotros.</strong>
              </h2>
              <spam className="content4">
                Ventajas de anunciarte en el Brief de News Sensei:
              </spam>
              <ul>
                <li>Posicionamiento y crecimiento de tu marca.</li>
                <li>
                  Atención a la audiencia específica que requiere tu marca.
                </li>
                <li>Tráfico eficiente a tu website.</li>
                <li>Costos menores a los de la publicidad tradicional.</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
