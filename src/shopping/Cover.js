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
            "id": 30,
            "title": "cover iphone blue black",
            "price": "125",
            "img": "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/485004/1.jpg?7455"
        },
        {
            "id": 31,
            "title": "cover iphone brown",
            "price": "125",
            "img": "https://images.shopkees.com/uploads/cdn/images/1000/3485792455_1611678796.jpg"
        },
        {
            "id": 32,
            "title": "cover iphone orange",
            "price": "125",
            "img": "https://as-images.apple.com/is/MHL83_AV3?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1601149109000"
        },
        {
            "id": 33,
            "title": "cover iphone green",
            "price": "125",
            "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK053?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1617321716000"
        },
        {
            "id": 34,
            "title": "cover iphone blue",
            "price": "125",
            "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK043_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1617321711000"
        },
        {
            "id": 35,
            "title": "cover iphone black",
            "price": "125",
            "img": "https://i0.wp.com/techub.com.eg/wp-content/uploads/2021/09/black-1-3.jpg"
        },
        {
            "id": 36,
            "title": "cover iphone purple",
            "price": "125",
            "img": "https://holdit.com/en/wp-content/uploads/sites/2/2022/09/15606-holdit-2.jpg"
        },
        {
            "id": 37,
            "title": "cover iphone leather brown",
            "price": "125",
            "img": "https://www.sandmarc.com/cdn/shop/products/ProLeatherBrownCase-iPhone12ProforMagSafeCharging-1.jpg?v=1611800488"
        },
        {
            "id": 38,
            "title": "cover iphone red",
            "price": "125",
            "img": "https://images.shopkees.com/uploads/cdn/images/1000/6893496934_1612001842.jpg"
        },
        {
            "id": 39,
            "title": "cover iphone yellow",
            "price": "125",
            "img": "https://shopinplanet.com/wp-content/uploads/2020/10/iPhone-12-Pro-Max-Silicone-Case-Walnut.jpg"
        },
        {
            "id": 40,
            "title": "cover iphone flowers",
            "price": "150",
            "img": "https://cdn.webshopapp.com/shops/221036/files/336781859/1652x1652x2/fooncase-iphone-12-pro-max-case-pink-leaves.jpg"
        },
        {
            "id": 41,
            "title": "cover iphone wooden",
            "price": "150",
            "img": "https://jomla.ae/_next/image/?url=https%3A%2F%2Fwp.jomla.ae%2Fwp-content%2Fuploads%2F2023%2F09%2FNudient-Bold-iPhone-15-Pro-Tangerine-Orange.jpg&w=640&q=75"
        },
        {
            "id": 42,
            "title": "cover iphone white",
            "price": "150",
            "img": "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwf6c2d88d/images/medium/95115004_1.png"
        },
        {
            "id": 43,
            "title": "cover iphone baby blue",
            "price": "125",
            "img": "https://cdn.shopify.com/s/files/1/0687/4327/products/nb_main_image_14pm_1024x1024.jpg?v=1662406547"
        },
        {
            "id": 44,
            "title": "cover iphone spiderman",
            "price": "200",
            "img": "https://www.redwolf.in/image/cache/catalog/mobile-covers/apple-iphone-14/i-am-amazing-mobile-cover-india-1-255x340.jpg"
        },
        {
            "id": 45,
            "title": "cover iphone birds",
            "price": "200",
            "img": "https://i.pinimg.com/1200x/42/3d/3e/423d3e87694f73dfaec40e44ceb3d830.jpg"
        },
        {
            "id": 46,
            "title": "cover iphone faces black and white",
            "price": "175",
            "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/rockcms/2023-08/DIFFBOT-a9a930.jpg"
        },
        {
            "id": 47,
            "title": "cover iphone choclate",
            "price": "175",
            "img": "https://www.beyoung.in/api/cache/catalog/i/_/i_phone_x_dairymilk_700x700.jpg"
        },
        {
            "id": 48,
            "title": "cover iphone space",
            "price": "150",
            "img": "https://ih1.redbubble.net/image.3029995597.6734/icr,iphone_15_tough,back,a,x600-pad,600x600,f8f8f8.jpg"
        },
        {
            "id": 49,
            "title": "cover iphone space",
            "price": "175",
            "img": "https://m.media-amazon.com/images/I/91efqxu6BdL._AC_UF894,1000_QL80_.jpg"
        },
        {
            "id": 50,
            "title": "cover iphone beach",
            "price": "200",
            "img": "https://m.media-amazon.com/images/I/81+g02+09fL._AC_UF894,1000_QL80_.jpg"
        },
        {
            "id": 51,
            "title": "cover iphone panda",
            "price": "175",
            "img": "https://m.media-amazon.com/images/I/81pCEepPAEL._AC_UF350,350_QL50_.jpg"
        },
        {
            "id": 52,
            "title": "cover iphone forest",
            "price": "175",
            "img": "https://m.media-amazon.com/images/I/81Df7X9mm4L._AC_UF894,1000_QL80_.jpg"
        },
        {
            "id": 53,
            "title": "cover iphone cat",
            "price": "200",
            "img": "https://m.media-amazon.com/images/I/71WytqEsHSL.jpg"
        },
        {
            "id": 54,
            "title": "cover iphone space",
            "price": "200",
            "img": "https://m.media-amazon.com/images/I/818gW51JQOL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "id": 55,
            "title": "cover iphone water",
            "price": "200",
            "img": "https://img.fruugo.com/product/6/15/465037156_max.jpg"
        },
        {
            "id": 56,
            "title": "cover iphone blue gem",
            "price": "200",
            "img": "https://i.etsystatic.com/18583075/r/il/4b783a/4204147104/il_570xN.4204147104_dy8o.jpg"
        },
        {
            "id": 57,
            "title": "cover iphone waterfall",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/O3FL5bq6EuEh-FcgjgnjuClCDzI/w_700/cases/iphone15/slim/back/~artwork,fw_1300,fh_2000,iw_1300,ih_2000/s6-0046/a/20301398_3003221/~~/study-for-tide-cases.jpg"
        },
        {
            "id": 58,
            "title": "cover iphone beach",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/CvbXo3i1hBJ5WkHeuw5iVOTc32g/w_700/cases/iphone14/slim/back/~artwork,fw_1300,fh_2000,fx_-1128,iw_3555,ih_2000/s6-original-art-uploads/society6/uploads/misc/497e51f7b39741f7849ce01596a00568/~~/texture-water-sea-cases.jpg"
        },
        {
            "id": 59,
            "title": "cover iphone every color",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/WW4yCk5ftec7URLPw-r-9M1EEno/w_700/cases/iphone15/slim/back/~artwork,fw_1300,fh_2000,fx_-350,iw_2000,ih_2000/s6-original-art-uploads/society6/uploads/misc/68d6d1b859f84af8b632cae759b646b0/~~/every-color-117-cases.jpg"
        },
        {
            "id": 60,
            "title": "cover iphone hearts",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/p2fgOfJ5UCIMsezwAt6vZ8GNobE/w_700/cases/iphone13-pro-max/slim/back/~artwork,fw_1300,fh_2000,fx_-350,iw_2000,ih_2000/s6-original-art-uploads/society6/uploads/misc/fab3d534ee564260b31f8703d0618868/~~/pastel-love484315-cases.jpg"
        },
        {
            "id": 61,
            "title": "cover iphone jazzy",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/5aTFSst-9Lh_MO6YsOYTUwppGv4/w_700/cases/iphone14/slim/back/~artwork,fw_1300,fh_2000,iw_1300,ih_2000/s6-0074/a/30000659_8077202/~~/milky-way-pmp-cases.jpg"
        },
        {
            "id": 62,
            "title": "cover iphone sky and clouds",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/ATvbNCsYUAtUuN9kboqMJf1Rpoo/w_700/cases/iphone14/slim/back/~artwork,fw_1300,fh_2000,fx_-17,iw_1333,ih_2000/s6-original-art-uploads/society6/uploads/misc/be0554030b8948c99049d7c6c8ad1a6c/~~/sky-and-clouds2586699-cases.jpg"
        },
        {
            "id": 63,
            "title": "cover iphone mountain",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/0fXJdSxsvKFA5uKF_eEQ1dskbIU/w_700/cases/iphone15/slim/back/~artwork,fw_1300,fh_2000,fx_-950,iw_3200,ih_2000/s6-original-art-uploads/society6/uploads/misc/f7c360bf6c464e2d96dc6555e4b74120/~~/the-mountain-awaits-cases.jpg"
        },
        {
            "id": 64,
            "title": "cover iphone blue sky",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/Gbn-eG1pztjHRnT149dq4QZIB50/w_700/cases/iphone14/slim/back/~artwork,fw_1300,fh_2000,fx_-1805,fy_-169,iw_4197,ih_2226/s6-original-art-uploads/society6/uploads/misc/fe9afc6e5b664d859c52929605f9182a/~~/blue-ridge-mountains385794-cases.jpg"
        },
        {
            "id": 65,
            "title": "cover iphone dark",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/DS35Y84bPFXzwkibshIJVhTtQVc/w_700/cases/iphone15/slim/back/~artwork,fw_1300,fh_2000,fx_-1128,iw_3555,ih_2000/s6-original-art-uploads/society6/uploads/misc/2d790ae1886b4ad3b6afba6001c2b97c/~~/dark-skies885600-cases.jpg"
        },
        {
            "id": 66,
            "title": "cover iphone waves",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/ZQy2nqvKI47-eNGKxClmKKyN8go/w_700/cases/iphone14/slim/back/~artwork,fw_1300,fh_2001,fx_-749,fy_66,iw_2799,ih_1866/s6-original-art-uploads/society6/uploads/misc/607e6925d61b4339b7fbe09c6f265f36/~~/waves722443-cases.jpg"
        },
        {
            "id": 67,
            "title": "cover iphone desert",
            "price": "200",
            "img": "https://ctl.s6img.com/society6/img/MJ8I7pBU-F2s95G3MRzwQPGzEkA/w_700/cases/iphone14/slim/back/~artwork,fw_1300,fh_2000,fx_-100,iw_1500,ih_2000/s6-original-art-uploads/society6/uploads/misc/3964b6019a8b4375953e2578c9582fba/~~/141700658-cases.jpg"
        },
        {
            "id": 68,
            "title": "cover iphone blue waves",
            "price": "200",
            "img": "https://ih1.redbubble.net/image.1175306446.9310/icr,iphone_15_tough,back,a,x600-pad,600x600,f8f8f8.jpg"
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


function Cover() {
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
export default Cover
