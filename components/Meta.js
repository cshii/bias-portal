import Head from 'next/head';

// next/seo third party package for this use it!! :)
const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Bias Brands',
    keywords: 'fashion, sustainable, vintage, upcycle, rework',
    description: 'choose sustainable fashion'
}

export default Meta;