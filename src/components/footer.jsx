import React from 'react'

const FooterPage = () => {
    const logoSOFI = "src/assets/Erick WEB/logosofi.png"

    return (
        <div className='w-screen h-1/2 bg-[#292929]'>
            <a href="/" className=''>
                <img className='h-20 w-auto' src={logoSOFI} alt="LOGOTIPO" />
            </a>
        </div>
    )
}

export default FooterPage
