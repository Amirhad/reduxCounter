import React from 'react'
import Copyright from './Copyright'
import FooterLogo from './FooterLogo'
import FooterMenu from './FooterMenu'

function Footer() {
  return (
    <div>
        <FooterLogo/>
        <FooterMenu/>
        <Copyright/>
    </div>
  )
}

export default Footer