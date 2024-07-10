import React from 'react'

const FooterPage = () => {
    const logoSOFI = "src/assets/Erick WEB/logosofi.png"

    return (
        <footer className='w-full h-1/2 bg-[#292929]'>
            <div className=''>
                <a href="/" className=''>
                    <img className='h-20 w-fit' src={logoSOFI} alt="LOGOTIPO" />
                </a>
            </div>
        </footer>
    )
}

export default FooterPage
