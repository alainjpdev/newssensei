import React, { useState } from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from 'mdbreact'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { MDBCol } from 'mdb-react-ui-kit'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MDBNavbar className="p-0 m-0 navbarcss" expand="md">
      <MDBNavbarToggler onClick={handleToggle} />
      <MDBCol xs="1" className="text-center align-self-center">
        <Link href="/">
          <Image src="/images/logo.png" width={150} height={45} alt="LogoNav" />
        </Link>
      </MDBCol>
      <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
        <MDBNavbarNav left></MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active={router.pathname === '/'}>
            <Link href="/">
              <a className="nav-link">
                {/* <MDBIcon icon="home" className="mr-1" /> */}
                Nuestro brief inteligente
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            {/* <Link href="/properties" passHref> */}
            <a className="nav-link">
              {/* <MDBIcon icon="building" className="mr-1" /> */}
              ¿Qué hacemos?
            </a>
            {/* </Link> */}
          </MDBNavItem>
          <MDBNavItem>
            {/* <Link href="/rent" passHref> */}
            <a className="nav-link">
              {/* <MDBIcon icon="building" className="mr-1" /> */}
              Ayúdanos a ser más inteligentes
            </a>
            {/* </Link> */}
          </MDBNavItem>
          <MDBNavItem>
            {/* <Link href="/mapPdf" passHref> */}
            <a className="nav-link">
              {/* <MDBIcon icon="building" className="mr-1" /> */}
              Anúnciate con nosotros
            </a>
            {/* </Link> */}
          </MDBNavItem>
          <MDBNavItem>
            {/* <Link href="/agents/agents" passHref> */}
            <a className="nav-link">
              {/* <MDBIcon icon="building" className="mr-1" /> */}
              Contacto
            </a>
            {/* </Link> */}
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default Header
