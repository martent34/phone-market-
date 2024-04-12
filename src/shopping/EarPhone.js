
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
            "id": 69,
            "title": "CORN EARPHONE EX010",
            "price": "200",
            "img": "https://abcshop-eg.com/wp-content/uploads/2022/03/CORN-EARPHONE-EX010-1.png"
        },
        {
            "id": 70,
            "title": "Celebrat G13 Stereo Sound",
            "price": "50",
            "img": "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/465622/1.jpg?9685"
        },
        {
            "id": 71,
            "title": "HP61W - Earphones",
            "price": "100",
            "img": "https://amyz.com.eg/public/uploads/all/CivGKwbe8Bh4fzHkU1kYFjPFinSTjSj19yMM1Wz5.jpg"
        },
        {
            "id": 72,
            "title": "Celebrat G6 High-Fidelity",
            "price": "75",
            "img": "https://dokan-shop.com/wp-content/uploads/2021/06/g6.jpg"
        },
        {
            "id": 73,
            "title": "OFFICIAL VIVO IQOO",
            "price": "590",
            "img": "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/i/q/iqoo_headphones-.png"
        },
        {
            "id": 74,
            "title": "Recci Earphone Wired",
            "price": "180",
            "img": "https://dream2000.com/media/catalog/product/cache/df0fd26a5939738811f1a7c10cac02a5/u/n/untitled-3-recovered-recovered-recovered-recovered-recovered-recovered-recovered_2.jpg"
        },
        {
            "id": 75,
            "title": "In-Ear Earphones with Mic & Volume",
            "price": "390",
            "img": "https://media.verbatim.com.au/wp-content/uploads/2021/06/04110945/66607_volume-and-jack.jpg"
        },
        {
            "id": 76,
            "title": "Lenovo QE08 Neckband Bluetooth",
            "price": "420",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKjCpHsfTfgtrmJ3zSRaTR4aUD56ganeVjg&usqp=CAU"
        },
        {
            "id": 77,
            "title": "Wireless Bluetooth Headphones",
            "price": "1,200",
            "img": "https://itportal.co.in/wp-content/uploads/2022/11/1-164.jpg"
        },
        {
            "id": 78,
            "title": "OnePlus Bullets Z2 Neckband",
            "price": "1,000",
            "img": "https://www.reliancedigital.in/medias/OnePlus-Bullets-Z2-Earphone-492913029-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NTEyOXxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaGM2Lzk4NTc2ODk0MTk4MDYuanBnfGIyODZlNjc1YTc1ODIxOGE1ZmEzZDE4YWU1ZDFjYWViYjBlMGQzMDUxYzNjMDIwODAzN2JjNTE4ZmJmMWZlODM"
        },
        {
            "id": 79,
            "title": "Baseus Encok C17 Type-C ",
            "price": "750",
            "img": "https://i0.wp.com/gadgetstudiobd.com/wp-content/uploads/2023/09/baseus-encok-c17-type-c-lateral-in-ear-wired-earphone-1.jpg?fit=800%2C800&ssl=1"
        },
        {
            "id": 80,
            "title": "Bassheads 220",
            "price": "500",
            "img": "https://www.boat-lifestyle.com/cdn/shop/products/1neon_3105765c-e660-47c7-9deb-3482720df176_1500x.png?v=1592544752"
        },
        {
            "id": 81,
            "title": "Baseus GAMO Wired Earphone",
            "price": "400",
            "img": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/6/9/6953156292314-1-removebg-preview.png"
        },
        {
            "id": 82,
            "title": "Inbase Urban GTM Type C Earphone",
            "price": "300",
            "img": "https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/p/l/d/urban-gtm-type-c-earphone-inbase-original-imaguu97usb5p2kq.jpeg?q=90"
        },
        {
            "id": 83,
            "title": "Earphone for Huawei Y336",
            "price": "500",
            "img": "https://www.maxbhi.com/images/detailed/1084/earphone-for-huawei-y336-handsfree-in-ear-headphone-3-5mm-white-maxbhi-4-5-1.jpg"
        },
        {
            "id": 84,
            "title": "Riversong EA205 Rhythm L5",
            "price": "750",
            "img": "https://cdnprod.mafretailproxy.com/sys-master-root/hf5/h79/27995717140510/581027_main.jpg_480Wx480H"
        },
        {
            "id": 85,
            "title": "Stereo Bluetooth for Kids",
            "price": "200",
            "img": "https://m.media-amazon.com/images/I/61ndsFakD6L._AC_UF894,1000_QL80_.jpg"
        },
        {
            "id": 86,
            "title": "P9 Wireless headphone",
            "price": "400",
            "img": "https://ultraeg.com/image/cache/catalog/%20Charger%20YKC-720%20Apple/images%20(2)-320x320.jpg"
        },
        {
            "id": 87,
            "title": "WH-XB910N",
            "price": "150",
            "img": "https://www.sony-mea.com/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
        },
        {
            "id": 88,
            "title": "JBL Tune 760NC",
            "price": "4,000",
            "img": "https://m.media-amazon.com/images/I/61sMD9IwV3L._AC_UF894,1000_QL80_.jpg"
        },
        {
            "id": 89,
            "title": "AONIC 50 GEN 2",
            "price": "3,000",
            "img": "https://products.shureweb.eu/cdn-cgi/image/width=1400,height=1400,format=auto/shure_product_db/product_main_images/files/c25/16a/40-/header_transparent/ce632827adec4e1842caa762f10e643d.png"
        },
        {
            "id": 90,
            "title": "SBS DJ UP On-ear Wireless",
            "price": "385",
            "img": "https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/8e279240a6612e9579d3be696bac1c07/s/b/sbs-dj-up-headphones-ttheadphonedjup_2.jpg"
        },
        {
            "id": 91,
            "title": "Beats Studio Pro",
            "price": "350",
            "img": "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/global/serp/studiopro-pdp-global-serp-black.jpg"
        },
        {
            "id": 92,
            "title": "p47 wireless Bluetooth",
            "price": "150",
            "img": "https://www.elbaklystore.com/cdn/shop/products/p47-wireless-Bluetooth-headphones-Elbakly-Store-1668948195.jpg?v=1675397703"
        },
        {
            "id": 93,
            "title": "headphones BO104 Phantom",
            "price": "500",
            "img": "https://www.borofone.com/wp-content/uploads/2022/10/borofone-bo104-phantom-gaming-headphones.jpg"
        },
        {
            "id": 94,
            "title": "Hammer Bash 2.0 Wireless",
            "price": "2,000",
            "img": "https://hammeronline.in/cdn/shop/files/HammerBash2.0Headphones.webp?v=1690436990&width=720"
        },
        {
            "id": 95,
            "title": "P9 Bluetooth Wireless Headset ",
            "price": "300",
            "img": "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/609044/1.jpg?6298"
        },
        {
            "id": 96,
            "title": "Rockerz 450",
            "price": "2,000",
            "img": "https://www.boat-lifestyle.com/cdn/shop/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800.png?v=1673002681"
        },
        {
            "id": 97,
            "title": "Headphone Mickey Minnie",
            "price": "3,500",
            "img": "https://www.magiaeimaginacao.com.br/cdn/shop/products/download_2_e755d8be-89f7-4935-8424-2ef2431459a4.jpg?v=1673294094&width=1000"
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
                                        <h4 style={{marginBottom:"15px"}}>{item.title}</h4>
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


function EarPhone() {
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
export default EarPhone
