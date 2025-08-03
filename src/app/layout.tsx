import React from 'react'
import "./globals.css";
type Props = {}

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <html lang='en'>
        <body>
            {children}
        </body>
    </html>
  )
}

