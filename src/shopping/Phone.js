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
            "id": 1,
            "title": "iphone 14 pro",
            "price": "54,999",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQkxynoEegk4jYlqJi-TkkLXJoYyBmGfoxHTtKwrMJmBZTvjX7ODd11vfWGeA2nqePRw&usqp=CAU"
        },
        {
            "id": 2,
            "title": "pixel 6",
            "price": "24,999",
            "img": "https://m.media-amazon.com/images/I/716n8eAia+L.jpg"
        },
        {
            "id": 3,
            "title": "sumsung galaxy s21 ultra",
            "price": "34,999",
            "img": "https://cdn.dxomark.com/wp-content/uploads/medias/post-80404/SamsungGalaxys215g-1024x691.jpg"
        },
        {
            "id": 4,
            "title": "xiaomi redmi note 9",
            "price": "7,999",
            "img": "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_webp/mobizil.com/wp-content/uploads/2020/03/redmi-note-9s.jpg"

        },
        {
            "id": 5,
            "title": "xiaomi redmi note 10 pro",
            "price": "17,999",
            "img": "https://api.mobilaty.com/storage/uploads/2fDON1-1617195368.jpg"

        },
        {
            "id": 5,
            "title": "realme 6i",
            "price": "3,499",
            "img": "https://m.media-amazon.com/images/I/51XpwFHltKL.jpg"

        },
        {
            "id": 6,
            "title": "samsung a71",
            "price": "7,499",
            "img": "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/mobile/phones/galaxy-a/galaxy-a71/sm-a716uzknxaa/A71-black-01_1200x1200.jpg"

        },
        {
            "id": 7,
            "title": "samsung a72",
            "price": "9,999",
            "img": "https://mobizil.com/wp-content/uploads/2021/03/Samsung-Galaxy-A72.jpg"

        },
        {
            "id": 8,
            "title": "samsung galaxy s20 ultra",
            "price": "22,000",
            "img": "https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s20-ultra/galaxy-s20-ultra-cosmic-gray.jpg"

        },
        {
            "id": 9,
            "title": "samsung galaxy s22 ultra",
            "price": "34,999",
            "img": "https://m.media-amazon.com/images/I/81eJPRqZCfL._AC_UF894,1000_QL80_.jpg"

        },
        {
            "id": 10,
            "title": "iphone 15 pro max",
            "price": "120,000",
            "img": "https://m.media-amazon.com/images/I/71QTRrkGRlL._AC_UF894,1000_QL80_.jpg"

        },
        {
            "id": 11,
            "title": "iphone 13 pro max",
            "price": "65,000",
            "img": "https://rukminim1.flixcart.com/image/850/1000/ktketu80/mobile/r/m/8/iphone-13-pro-max-mllj3hn-a-apple-original-imag6vpgphrzuffg.jpeg?q=20"

        },
        {
            "id": 12,
            "title": "iphone 12 pro max",
            "price": "20,000",
            "img": "https://mobizil.com/wp-content/uploads/2020/10/Apple-iPhone-12-Pro-Max.jpg"

        },
        {
            "id": 13,
            "title": "oppo reno 10",
            "price": "15,000",
            "img": "https://mob4g.com/wp-content/uploads/2023/07/Oppo-Reno-10-Pro-2-600x600.webp"

        },
        {
            "id": 14,
            "title": "oppo reno 8t",
            "price": "12,000",
            "img": "https://m.media-amazon.com/images/I/61elxy1AgFL._AC_UF894,1000_QL80_.jpg"

        },
        {
            "id": 15,
            "title": "oppo reno 5",
            "price": "5,000",
            "img": "https://mobizil.com/wp-content/uploads/2021/02/Oppo-Reno-5-4G.jpg"

        },
        {
            "id": 16,
            "title": "oppo a93",
            "price": "8,000",
            "img": "https://m.media-amazon.com/images/I/51-Bq5BYXSL.jpg"

        },
        {
            "id": 17,
            "title": "oppo a73",
            "price": "6,000",
            "img": "https://mobizil.com/wp-content/uploads/2020/10/Oppo-A73-2.jpg"

        },
        {
            "id": 18,
            "title": "oppo a53",
            "price": "4,000",
            "img": "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_webp/mobizil.com/wp-content/uploads/2020/10/Oppo-A53-1.jpg"

        },
        {
            "id": 19,
            "title": "huawei p30 pro",
            "price": "12,000",
            "img": "https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFYTTFxYlVQVUwuX0FDX1NMMTAwMF8uanBn.jpg"

        },
        {
            "id": 20,
            "title": "huawei p40 pro",
            "price": "15,000",
            "img": "https://mobizil.com/wp-content/uploads/2020/03/Huawei-P40-Pro-2.jpg"

        },
        {
            "id": 21,
            "title": "huawei p50 pro",
            "price": "18,000",
            "img": "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50/list/black.png"

        },
        {
            "id": 22,
            "title": "huawei p20 pro",
            "price": "8,000",
            "img": "https://d1jbip55yyitxr.cloudfront.net/uploads/2018/03/01071933/HUAWEI-P20-Pro-6-1-Inch-6GB-128GB-Smartphone-Aurora-Color-611548-.jpg"

        },
        {
            "id": 23,
            "title": "oneplus 9 pro",
            "price": "17,000",
            "img": "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/compare/in/compare/9-pro/9pPineGreen.png"

        },
        {
            "id": 24,
            "title": "oneplus 7 pro",
            "price": "12,000",
            "img": "https://mobizil.com/wp-content/uploads/2019/05/OnePlus-7-Pro.jpg"

        },
        {
            "id": 25,
            "title": "oneplus 8 pro",
            "price": "15,000",
            "img": "https://mobizil.com/wp-content/uploads/2020/04/Oneplus-8-Pro.jpg"

        },
        {
            "id": 26,
            "title": "oneplus nord",
            "price": "9,000",
            "img": "https://mobizil.com/wp-content/uploads/2020/07/oneplus-nord.jpg"

        },
        {
            "id": 27,
            "title": "oneplus nord ce 2",
            "price": "15,000",
            "img": "https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/feb/0211/nord-ce-2-5g/Blue.png"

        },
        {
            "id": 28,
            "title": "vivo y51",
            "price": "12,000",
            "img": "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1610354065107/6b01d3993e6dbe5f4b50dc60a4f277d3.png"

        },
        {
            "id": 29,
            "title": "vivo y36",
            "price": "9,000",
            "img": "https://mobizil.com/wp-content/uploads/2023/06/Vivo-Y36.jpg"

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


function Phone() {
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
export default Phone
