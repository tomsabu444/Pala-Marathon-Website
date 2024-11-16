import React from 'react';

const Footer = () => {
    const footerNavs = [
        {
            label: "Company",
            items: [
                { href: '#', name: 'Partners' },
                { href: '#', name: 'Blog' },
                { href: '#', name: 'Team' },
                { href: '#', name: 'Careers' },
            ],
        },
        {
            label: "Resources",
            items: [
                { href: '#', name: 'Contact' },
                { href: '#', name: 'Support' },
                { href: '#', name: 'Docs' },
                { href: '#', name: 'Pricing' },
            ],
        },
        {
            label: "About",
            items: [
                { href: '#', name: 'Terms' },
                { href: '#', name: 'License' },
                { href: '#', name: 'Privacy' },
                { href: '#', name: 'About Us' },
            ],
        },
    ];

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <img src="/runninglogo.svg" className="w-32" alt="Logo" />
                        <p className="leading-relaxed mt-2 text-[15px]">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label className="block pt-4 pb-2">Stay up to date</label>
                        <div className="max-w-sm flex items-center border rounded-md p-1">
                            <input 
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2.5 outline-none"
                            />
                            <button
                                className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {footerNavs.map((nav, idx) => (
                        <ul className="space-y-4" key={idx}>
                            <h4 className="text-gray-800 font-medium">{nav.label}</h4>
                            {nav.items.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href} 
                                        className="hover:underline hover:text-indigo-600"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2022 Float UI All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">
                                <svg className="svg-icon w-6 h-6 text-blue-400" viewBox="0 0 20 20">
                                    <path fill="none" d="M18.258,3.266c..."></path>
                                </svg>
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">
                                <svg className="svg-icon w-6 h-6 text-blue-700" viewBox="0 0 20 20">
                                    <path fill="none" d="M11.344,5.71c..."></path>
                                </svg>
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">
                                <svg className="svg-icon w-6 h-6 text-blue-500" viewBox="0 0 20 20">
                                    <path fill="none" d="M10,2.531c..."></path>
                                </svg>
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">
                                <svg className="svg-icon w-6 h-6 text-red-600" viewBox="0 0 20 20">
                                    <path fill="none" d="M9.797,2.214c..."></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
