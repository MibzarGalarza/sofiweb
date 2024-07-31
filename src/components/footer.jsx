import React from 'react';

const FooterPage = () => {
    const logoSOFI = "src/assets/Erick WEB/logosofi.png"
    return (
        <footer className="bg-[#292929] text-white py-6 mt-16">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <img src={logoSOFI} alt="Logo" className="mx-auto h-28" />
                </div>
                <p>Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis viverra ornare.</p>
                <div className="mt-4">
                    <p>(618) 171-5076</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="flex justify-center space-x-8 mt-4">
                    <a href="#" className="placeholder: text-white hover:text-gray-400">Contact</a>
                    <a href="#" className="placeholder: text-white hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="placeholder: text-white hover:text-gray-400">Terms and conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
