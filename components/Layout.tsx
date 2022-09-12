import Link from 'next/link';
import React from 'react'
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
        return (
            <div className='max-w-[1920px] mx-auto '>
                <Header />
                <div className=''>
                    {children}
                </div>
            </div>
        );
}
export default Layout