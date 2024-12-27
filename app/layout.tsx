import { ReduxProvider } from './redux/Provider'
import type { Metadata } from "next"
import "./globals.scss"

export const metadata: Metadata = {
  title: "Experiments",
  description: "The libraries I know something about",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ReduxProvider>
            <html lang="en">
                <body>
                    <main>
                        {children}
                    </main>
                </body>
            </html>
        </ReduxProvider>
    )
}

