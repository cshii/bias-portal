// https://nextjs.org/docs/advanced-features/custom-document

// use to custom html on your site
// rendered on server theres documentation on the site

// props
// caveats
// no onclicks cuz server rendered

// prob dont want to mess with this

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html land='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument