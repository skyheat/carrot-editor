import { Html, Head, Main, NextScript } from "next/document"
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
 return (
  <Html>
   <Head />
   <link rel="icon" href="/favicon.ico" sizes="any" />
   <link rel="manifest" href="/site.webmanifest" />
   <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
   <body>
    <Main />
    <NextScript />
    <Analytics />
   </body>
  </Html>
 )
}
