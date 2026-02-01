'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const faqData = [
        {
            question: 'Apa itu ppob.id?',
            answer: 'ppob.id adalah platform pembelian produk digital terpercaya yang menyediakan berbagai produk virtual seperti pulsa, token listrik, dan pembayaran tagihan dengan transaksi yang cepat dan aman.'
        },
        {
            question: 'Berapa biaya pendaftaran ppob.id?',
            answer: 'Pendaftaran di ppob.id 100% gratis. Anda hanya membayar untuk transaksi yang Anda lakukan.'
        },
        {
            question: 'Bagaimana cara mendapatkan diskon?',
            answer: 'Dapatkan diskon dengan mengikuti promo-promo menarik kami, menggunakan kode voucher, atau menjadi member premium untuk mendapatkan harga spesial.'
        },
        {
            question: 'Berapa lama proses transaksi?',
            answer: 'Proses transaksi akan diproses secara instans menggunakan sistem otomatis.'
        }
    ]

    const testimonials = [
        {
            name: 'Neni',
            type: 'Pengguna',
            avatar: '/customer/neni.png.webp',
            text: 'Pertama kali coba, dari 300 pesanan voucher sangat mudah sekali dalam pemakaiannya & diskonnya juga banyak banget, jadi untung banget deh'
        },
        {
            name: 'Sudarno',
            type: 'Pengguna',
            avatar: '/customer/sudarno.png.webp',
            text: 'Pertama kali coba, dari 300 pesanan voucher sangat mudah sekali dalam pemakaiannya & diskonnya juga banyak banget, jadi untung banget deh'
        },
        {
            name: 'Zaelani',
            type: 'Pengguna',
            avatar: '/customer/zaelani.png.webp',
            text: 'Pertama kali coba, dari 300 pesanan voucher sangat mudah sekali dalam pemakaiannya & diskonnya juga banyak banget, jadi untung banget deh'
        }
    ]

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="hero" id="beranda">
                <h1>
                    Kemudahan <span className="highlight-blue">Bertransaksi</span><br />
                    Dalam <span className="highlight-orange">Satu Genggaman</span>
                </h1>
                <p>
                    Ingin mulai usaha jualan pulsa, paket data, voucher game dll..? Tapi bingung mulai dari mana? Download ppob.id Solusinya!
                </p>
                <button className="hero-btn">Download Aplikasi Sekarang!</button>
            </section>

            {/* Features Section */}
            <section className="features" id="layanan-unggulan">
                <h2 className="section-title">Penawaran Kami</h2>
                <p className="section-subtitle">
                    Lebih dari sekadar aplikasi produk virtual, kami hadir dengan pelayanan terbaik untukmu.
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Diskon Voucher<br />Hingga 30%</h3>
                        <p>
                            Dapatkan penawaran menarik dari kami
                        </p>
                        <a href="#" className="feature-link">
                            Selengkapnya →
                        </a>
                    </div>

                    <div className="feature-card">
                        <h3>100% Gratis<br />Pendaftaran</h3>
                        <p>
                            Tidak ada biaya sama sekali untuk<br />mendaftar
                        </p>
                        <a href="#" className="feature-link">
                            Selengkapnya →
                        </a>
                    </div>

                    <div className="feature-card">
                        <h3>Biaya Transaksi<br />Sangat Bersahabat</h3>
                        <p>
                            Biaya aplikasi bersahabat yang akan<br />memaksimalkan keuntungan anda
                        </p>
                        <a href="#" className="feature-link">
                            Selengkapnya →
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials" id="apa-itu-ppob">
                <div className="testimonials-container">
                    <h2 className="section-title">Apa Kata Mereka Tentang ppob.id?</h2>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-header">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={50}
                                        height={50}
                                        className="testimonial-avatar"
                                    />
                                    <div className="testimonial-name">{testimonial.name}</div>
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq">
                <h2 className="section-title">Kenali Kami Lebih Dalam</h2>

                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">▼</span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* App Download Section */}
            <section className="app-download">
                <div className="app-download-container">
                    <div className="app-download-content">
                        <h2>
                            Transaksi <span className="highlight">Produk Virtual</span><br />
                            yang Mudah & Cepat
                        </h2>
                        <p>
                            Dapatkan kemudahan transaksi terbaik di aplikasi ppob.id.
                            Download sekarang dan nikmati berbagai promo menarik!
                        </p>
                        <div className="store-buttons">
                            <Image
                                src="/google-play.webp"
                                alt="Download on Google Play"
                                width={130}
                                height={40}
                                className="store-btn"
                            />
                            <Image
                                src="/app-store.webp"
                                alt="Download on App Store"
                                width={130}
                                height={40}
                                className="store-btn"
                            />
                        </div>
                    </div>
                    <div className="app-preview-wrapper">
                        <Image
                            src="/home.png"
                            alt="ppob.id App Preview"
                            width={160}
                            height={240}
                            className="app-preview"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
