import { CartProvider, useCart } from "react-use-cart";
import AllNav from "../AllNav";
import Footer from "../Footer";
import { Col, Container, Row } from "reactstrap";
import Sections from "./Sections";
import Subnav from "../Subnav";
import ScrollToTop from "react-scroll-to-top";

function Page() {
    const { addItem } = useCart();

    const products = [
        {
            "id": 117,
            "title": "Apple Earbuds Pro In-Ear True",
            "price": "12,000",
            "img": "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/332803/1.jpg?6189"
        },
        {
            "id": 118,
            "title": "Oraimo True Wireless Earbuds",
            "price": "1,200",
            "img": "https://m.media-amazon.com/images/I/61MnfXCpF3L._AC_UF894,1000_QL80_.jpg"
        },
        {
            "id": 119,
            "title": "Anker soundcore life note e",
            "price": "3,000",
            "img": "https://m.media-amazon.com/images/I/61-uda1MkpL._AC_UF894,1000_QL80_.jpg"
        },
        {
            "id": 120,
            "title": "realme Buds T100 True Wireless",
            "price": "1,000",
            "img": "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/487204/1.jpg?4244"
        },
        {
            "id": 121,
            "title": "ErgoFit True Wireless",
            "price": "6,000",
            "img": "https://shop.panasonic.com/cdn/shop/products/23-0091_HEA_shopPana_maincarousel_2048x2048_RZ-B310W.jpg?v=1695395511&width=2048"
        },
        {
            "id": 122,
            "title": "Buds VS102 Truly Wireless",
            "price": "2,500",
            "img": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/15622444/2023/6/15/414359a3-d249-45e3-89ee-87327078c1db1686812736703-NOISE-Buds-VS102-Truly-Wireless-Earbuds-with-50hrs-playtime--1.jpg"
        },
        {
            "id": 123,
            "title": "Tronsmart Battle Gaming Earbuds",
            "price": "4,500",
            "img": "https://www.tronsmart.com/3278-home_default/tronsmart-battle-gaming-earbuds.jpg"
        },
        {
            "id": 124,
            "title": "Xiaomi Mi True Wireless",
            "price": "1,500",
            "img": "https://m.media-amazon.com/images/I/51uOkE72PZL._AC_UF894,1000_QL80_.jpg"
        },
        {
            "id": 125,
            "title": "Air3 True Wireless Earbuds",
            "price": "8,500",
            "img": "https://digitalwalker.ph/cdn/shop/products/SoundpeatsAir34_1_8d0e7528-6700-420f-8a6d-0c044812ad3d_1000x1000.png?v=1666233267"
        },
        {
            "id": 126,
            "title": "Appslite Buds Pro Bluetooth",
            "price": "10,000",
            "img": "https://www.jiomart.com/images/product/original/rvhz5iwlb2/appslite-buds-pro-bluetooth-truly-wireless-in-ear-earbuds-with-mic-smart-adaptive-noise-cancellation-10-minutes-warp-charge-upto-38-hours-battery-zen-mode-bluetooth-5-2-product-images-orvhz5iwlb2-p599500408-3-202303171210.jpg?im=Resize=(420,420)"
        },
        {
            "id": 127,
            "title": "Hammer G-Shots Truly",
            "price": "5,500",
            "img": "https://hammeronline.in/cdn/shop/files/HammerG-ShotsGamingEarbuds.webp?v=1692360860&width=1080"
        },{
            "id": 128,
            "title": "EarFun Air - Black",
            "price": "8,500",
            "img": "https://api.myearfun.com/image/product/100871whcpv.jpg"
        },
        {
            "id": 129,
            "title": "Skullcandy Grind in-Ear ",
            "price": "7,000",
            "img": "https://m.media-amazon.com/images/I/61ETx+hCkWL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "id": 130,
            "title": "JBUDS MINI",
            "price": "1,600",
            "img": "https://ca.jlab.com/cdn/shop/files/JLab-JBuds-Mini-True-Wireless-Earbuds-Black-Front.jpg?v=1693519036"
        },
        {
            "id": 131,
            "title": "Air3 Compact yet Powerful",
            "price": "1,500",
            "img": "https://soundpeats.com/cdn/shop/products/Air3_1_1-min_600x600_crop_center.png?v=1630635832"
        },
        {
            "id": 132,
            "title": "JBL Wave Buds True wireless",
            "price": "12,000",
            "img": "https://jblstore.com.ph/cdn/shop/files/JBLWaveBuds_Black_1_600x.png?v=1688295299"
        },
        {
            "id": 133,
            "title": "BRAVE Earbuds 3 True Wireless",
            "price": "1,800",
            "img": "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/S300817953_1?1696352337"
        },
        {
            "id": 134,
            "title": "Airdopes Alpha",
            "price":"3,000",
            "img": "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_1__3_-removebg-preview.png?v=1686628064"
        },
        {
            "id": 135,
            "title": "oraimo AirBuds 3 Powerful",
            "price": "9,000",
            "img": "https://media.ke.oraimo.com/catalog/product/cache/260d56349d48a602b23f9645dee29150/2/0/20220427-094020.jpeg"
        },
        {
            "id": 136,
            "title": "EDGE 20 TRUE WIRELESS EARBUDS",
            "price": "2,000",
            "img": "https://www.kitsound.co.uk/images/products/15/69/600x600/10325094.webp"
        },
        {
            "id": 137,
            "title": "HOPPUP GRAND",
            "price": "1,800",
            "img": "https://www.hoppup.in/cdn/shop/files/ggggggggggggg.png?v=1690446227"
        },
        {
            "id": 138,
            "title": "WAVE AUDIO ENC TRUE WIRELESS ",
            "price": "35,000",
            "img": "https://waveaudio.com.au/cdn/shop/products/20220308-3S-2300_ae4db224-a7d1-455d-8828-7fba4b2c5de1_3000x3000.png?v=1649129523"
        },
        {
            "id": 139,
            "title": "boat Airdopes 141 ANC True",
            "price": "8,500",
            "img": "https://cdn1.smartprix.com/rx-iZgUQ66R0-w420-h420/boat-airdopes-141-an.jpg"
        },
        {
            "id": 140,
            "title": "SoundPEATS Opera03 Wireless",
            "price": "35,000",
            "img": "https://allmytech.pk/wp-content/uploads/2023/06/soundpeats-opera03-earbuds-allmytech-pakistan-square10.jpg"
        },
        {
            "id": 141,
            "title": "BoomAir HiFi TWS Noise",
            "price": "12,000",
            "img": "https://digifon.ng/cdn/shop/files/Untitled-1_0006_IMG_6317.jpg?v=1695033436"
        },
        {
            "id": 142,
            "title": "Bose QuietComfort",
            "price": "5,000",
            "img": "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds_ii/product_silo_image/COM-3679_QCEBII-LE_Buds_Front_EclipseGrey_hero.png/_jcr_content/renditions/cq5dam.web.320.320.png"
        },
        {
            "id": 143,
            "title": "Blackview AirBuds 7 IPX7",
            "price": "3,500",
            "img": "https://store.blackview.hk/cdn/shop/products/Airbuds7-Black_01.jpg?v=1662713578"
        },
        {
            "id": 144,
            "title": "Wireless Earbuds, Bluetooth 5.3",
            "price": "2,500",
            "img": "https://m.media-amazon.com/images/I/716gAr0KA6L.jpg"
        },
        {
            "id": 145,
            "title": "Tunifi A520 Earbuds 13mm HD",
            "price": "2,500",
            "img": "https://rukminim1.flixcart.com/image/850/1000/xif0q/headphone/l/e/2/a520-earbuds-13mm-hd-dynamic-driver-touch-controls-tunifi-original-imaghasakuutvs2a.jpeg?q=20"
        }
    ];

    return (
        <div>
            <Container>
                <Row>

                    {products.map((item) => (
                        <Col md="4" key={item.id}>
                            <div style={{ height: "430px" }} className="card2">
                                <Container>
                                    <img src={item.img} style={{ width: "75%" }} class="img-fluid" />
                                    <div className="text">
                                        <h4>{item.title}</h4>
                                        <div className="ttee tteee">
                                            <p>{item.price}EGP</p>
                                            <button onClick={() => addItem(item)}><span>add to cart</span></button>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </Col>))}
                </Row>
            </Container>
        </div>
    );
}


function EarBuds() {
    return (
        <CartProvider>
            <Subnav />
            <AllNav />
            <Sections />
            <Page />
            <Footer />
            <ScrollToTop smooth />
        </CartProvider>
    );
}
export default EarBuds
