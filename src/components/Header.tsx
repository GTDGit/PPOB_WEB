import React from 'react'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Image
                    src="/logo.png"
                    alt="PPOB.ID Logo"
                    width={100}
                    height={30}
                    className="logo"
                    priority
                />
                <nav className="nav">
                    <a href="#beranda">Beranda</a>
                    <a href="#kontak">Kontak Kami</a>
                    <a href="#produk-unggulan">Produk Unggulan</a>
                    <a href="#insight">Insight</a>
                    <button className="download-btn">Download Aplikasi</button>
                </nav>
            </div>
        </header>
    )
}
