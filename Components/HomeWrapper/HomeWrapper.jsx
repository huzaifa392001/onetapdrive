'use client'
import React, { memo, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { GeneralServices } from '@/Services/FrontServices/GeneralServices'
function HomeWrapper({ children }) {

    useEffect(() => {
        GeneralServices.setCategories()
    }, [])

    return (
        <main className="wrapper">
            <Header />{children}
            <Footer />
        </main>
    )
}

export default memo(HomeWrapper)