import React, { Component } from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <>
            <footer>
                <ul className="socials">
                    <a target='blank' href="https://github.com/GLHFranco322"><li><img src="/icons/github.png" alt="" /></li></a>
                    <a target='blank'href="mailto:francospiazzi96@gmail.com"><li><img src="/icons/gmail.png" alt="" /></li></a>
                    <a target='blank' href="https://www.linkedin.com/in/francospiazzi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><li><img src="/icons/linkedin.png" alt="" /></li></a>
                    <a target='blank' href="https://wa.me/qr/W63LXI3NKJKLD1"><li><img src="/icons/whatsapp.png" alt="" /></li></a>
                </ul>
            </footer>
        </>
    )
  
}
