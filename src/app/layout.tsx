import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'ppob.id - Kemudahan Bertransaksi Dalam Satu Genggaman',
    description: 'Agen pulsa dan ppob termurah dengan berbagai pilihan produk digital. Transaksi cepat, aman, dan mudah.',
    keywords: 'ppob, voucher, pulsa, token listrik, game voucher, digital product',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    )
}
