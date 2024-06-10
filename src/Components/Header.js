import React, { useState, useEffect } from 'react';

function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <header
            className={`px-6 py-6 fixed top-0 w-full z-10 transition-all duration-300 ${
                visible ? 'bg-blue-900' : 'opacity-0'
            }`}
            style={{ backgroundColor: '#0a192f' }}
        >
            <nav className="flex justify-between items-center">
                <div className="text-2xl font-bold ml-6 md:ml-10 text-green-500 font-mono">TARANVEER.DEV</div>
                <ul className="flex list-none">
                    <li className="mr-6"><a href="#about" className="text-blue-200 hover:text-green-300 transition-colors">About</a></li>
                    <li className="mr-6"><a href="#experience" className="text-blue-200 hover:text-green-300 transition-colors">Experience</a></li>
                    <li className="mr-6"><a href="#projects" className="text-blue-200 hover:text-green-300 transition-colors">Projects</a></li>
                    <li className="mr-6"><a href="#contact" className="text-blue-200 hover:text-green-300 transition-colors">Contact</a></li>
                    <a href="/resume" className="text-blue-200 border border-green-500 py-0 px-2 rounded hover:bg-blue-300 hover:text-green-500 transition duration-300 ease-in-out" style={{ backgroundColor: 'transparent' }}>
                        Resume
                    </a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
