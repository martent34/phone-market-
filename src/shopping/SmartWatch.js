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
            "id": 98,
            "title": "MUKTRICS Mens Smart Watch",
            "price": "1,350",
            "img": "https://m.media-amazon.com/images/I/610OiiTm9PL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "id": 99,
            "title": "Redmi Smart Watch 3",
            "price": "4,000",
            "img": "https://dream2000.com/media/catalog/product/cache/df0fd26a5939738811f1a7c10cac02a5/m/i/mi---redmi-smart-watch-3-black-1.jpg"
        },
        {
            "id": 100,
            "title": "Smart watch full touch screen gold",
            "price": "1,450",
            "img": "https://m.media-amazon.com/images/I/51HSZPg8JCL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "id": 101,
            "title": " HW 22 plus smart watch",
            "price": "850",
            "img": "https://www.iphoneteam.net/wp-content/uploads/2022/02/61GRfW0cXDL._AC_UL600_SR600600_.jpg"
        },
        {
            "id": 102,
            "title": "T800 Ultra Smart Watch 49mm ",
            "price": "800",
            "img": "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/641074/1.jpg?2711"
        },
        {
            "id": 103,
            "title": "Signature Smart Watch",
            "price": "3,000",
            "img": "https://www.greenlion.net/web/image/product.template/973/image_1024?unique=221aded"
        },
        {
            "id": 104,
            "title": "DT Ultra - sport - Smart Watch",
            "price": "900",
            "img": "https://ultraeg.com/image/cache/catalog/smart%20watch%20-%20ultra/dt-ultra-removebg-preview-320x320.png"
        },
        {
            "id": 105,
            "title": "Imilab Smart Watch KW66/2 ",
            "price": "4,000",
            "img": "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/w/t/wt997-1-min.jpg"
        },
        {
            "id": 106,
            "title": "Samsung Galaxy Watch5",
            "price": "10,000",
            "img": "https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/8e279240a6612e9579d3be696bac1c07/6/1/616rtlzgrfl._ac_sl1500__1.jpg"
        },
        {
            "id": 107,
            "title": "LEAF WATCH WIRELESS BT",
            "price": "5,000",
            "img": "https://www.leafstudios.in/cdn/shop/products/Main_a66bce90-71a9-4c4f-9469-078ec70933e0_800x.jpg?v=1673960414"
        },
        {
            "id": 108,
            "title": "Titan Smart Watch 3.0",
            "price": "15,000",
            "img": "https://staticimg.titan.co.in/Titan/Catalog/90188AP03_1.jpg?impolicy=pqmed&imwidth=640"
        },
        {
            "id": 109,
            "title": "Imilab Smart Watch W12",
            "price": "1,900",
            "img": "https://ehabgroup.com/media/catalog/product/i/m/imilab_smart_watch_w12_46mm_black.jpg?width=265&height=265&store=ar&image-type=image"
        },
        {
            "id": 110,
            "title": "Hammer Cyclone Round dial",
            "price": "5,500",
            "img": "https://hammeronline.in/cdn/shop/files/Smartwatchwithmorethan100watchfaces.webp?v=1693833126&width=1080"
        },
        {
            "id": 111,
            "title": "Trendy Bluetooth Smart Watch",
            "price": "8,000",
            "img": "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Trendy-Bluetooth-Calling-Smart-Watch-1.jpg"
        },
        {
            "id": 112,
            "title": "Oraimo Tempo W3 Smart Watch",
            "price": "1500",
            "img": "https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/25cea0c82894394efe4a4c68d730cbeb/3/9/39115c3873ff8679d02712b6de7554fde3e4d64fbe4962aeb788ef9e6457a834.jpeg"
        },
        {
            "id": 113,
            "title": "Oraimo Watch 2 Pro ",
            "price": "3,000",
            "img": "https://m.media-amazon.com/images/I/51j9K7zXzzL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "id": 114,
            "title": "Male Black Digital Smart Watch",
            "price": "25,000",
            "img": "https://justintime.in/cdn/shop/products/FTW4060.jpg?v=1682021990"
        },
        {
            "id": 115,
            "title": "WATERPROOF SMART WATCH",
            "price": "500",
            "img": "https://www.mytrendyphone.ie/images/Waterproof-Smart-Watch-Q26PRO-Heart-Rate-Bluetooth-5-0-200mAh-IP68-Pink-26082022-01-p.webp"
        },
        {
            "id": 116,
            "title": "Smart watch Y4",
            "price": "1,200",
            "img": "https://hocotech.com/wp-content/uploads/2021/11/hoco-y4-smart-watch.jpg"
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


function SmartWatch() {
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
export default SmartWatch
