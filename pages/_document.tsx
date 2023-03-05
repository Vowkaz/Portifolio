import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gradient-to-tr from-zinc-900 via-slate-900 to-black font-extralight antialiased min-h-screen text-sky-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
