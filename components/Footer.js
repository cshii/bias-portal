import { useEffect, useState } from 'react';
import Link from 'next/Link';
import footerStyles from '../styles/Footer.module.css';
import InfoDrawer from './inventory/InfoDrawer';

import materialCareInstructions from '../material';
import sizeGuideDetails from '../size';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2406157_t97m96470x9.js',
});

const Footer = () => {
    const [materialCare, setMaterialCare] = useState(false);
    const [sizeGuide, setSizeGuide] = useState(false);

    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.textGroup}>
                <div className={footerStyles.group}>
                    <div className={footerStyles.heading}>HELP</div>
                    <Link href='/'>FAQ</Link>
                    <Link href='/contact'>CONTACT US</Link>
                    <Link href='/'>SHIPPING & RETURNS</Link>
                    <a onClick={()=> setMaterialCare(true)}>MATERIAL & CARE</a>
                    <a onClick={()=> setSizeGuide(true)}>SIZE GUIDE</a>
                </div>
                <div className={footerStyles.group}>
                    <div className={footerStyles.heading}>BIAS</div>
                    <Link href='/'>BRAND</Link>
                    <Link href='/'>GIFT CERTIFICATE</Link>
                    <Link href='/'>TERMS & CONDITIONS</Link>
                </div>
            </div>

            <InfoDrawer title={materialCare ? 'Material & Care' : 'Size Guide'} details={materialCare ? materialCareInstructions : sizeGuideDetails} visible={materialCare ? materialCare : sizeGuide} setClose={materialCare ? setMaterialCare : setSizeGuide} placement='right'/>

            <div className={footerStyles.iconGroup}>
                <div className={footerStyles.heading}>SOCIALIZE WITH US!</div>
                <div className={footerStyles.iconlist}>
                    <IconFont type="icon-instagram1" onClick={gotoSocial} />
                    <IconFont type="icon-twitter1" onClick={gotoSocial} />
                    <IconFont type="icon-tiktok" onClick={gotoSocial} />
                    <IconFont type="icon-pinterest" onClick={gotoSocial} />
                    <IconFont type="icon-facebook1" onClick={gotoSocial} />
                    <IconFont type="icon-spotify" onClick={gotoSocial} />
                </div>
            </div>
        </div>
    )
}

const gotoSocial = (e) => {
    const site = event.target.href ? event.target.href.baseVal : event.target.childNodes[0].href.baseVal;
    switch (site) {
        case '#icon-instagram1':
            window.open('https://www.instagram.com/biasbrands');
            break;
        case '#icon-facebook1':
            window.open('https://www.facebook.com/Bias-Brands-111838804290904');
            break;
        case '#icon-twitter1':
            window.open('https://twitter.com/biasbrands');
            break;
        case '#icon-tiktok':
            window.open('https://www.tiktok.com/@biasbrands');
            break;
        case '#icon-pinterest':
            window.open('https://www.pinterest.com/biasbrands');
            break;
        case '#icon-spotify':
            window.open('https://open.spotify.com/playlist/4IBNgRteI8cLVw930ftB6J?si=684c73149a8f4aa9');
            break;
        default:
            break;
    }

}

export default Footer;