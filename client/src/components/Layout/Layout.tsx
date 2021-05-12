import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props: any) => {

    return (
        <React.Fragment>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}
export default Layout;
