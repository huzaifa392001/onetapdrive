import React from 'react'
import "./AdminHeader.scss"
import { AdminServices } from '@/Services/AdminServices/AdminServices'

function AdminHeader() {
    const handleLogout = () => {
        AdminServices.logout()
    }
    return (
        <div className="adminHeader">
            <div>AdminHeader</div>
            <button onClick={handleLogout} class="themeBtn">
                Logout
            </button>
        </div>
    )
}

export default AdminHeader