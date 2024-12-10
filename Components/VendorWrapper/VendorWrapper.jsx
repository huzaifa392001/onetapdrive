'use client'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

function VendorWrapper({ children }) {
    const isVendor = useSelector((state) => state.auth.isVendor)
    return isVendor ? <main className="wrapper">{children}</main> : <h1>LOGIN</h1>
}

export default memo(VendorWrapper)
