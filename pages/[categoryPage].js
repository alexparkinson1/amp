import axios from "axios";
import Head from "next/head";

export const config = {
  amp: true
};

const Index = ({ products, category, banner }) => {
  return (
    <html>
      <Head>
        <style
          amp-custom
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: system;
              font-style: normal;
              font-weight: 300;
              src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
            }

            @font-face {
              font-family: NOTHS2;
              src: url('https://crossorigin.me/http://www.cdn.notonthehighstreet.com/stylesheets/fonts/noths_sans_2_regular.eot?#iefixage') format('embedded-opentype'),
              url('static/noths_sans_2_regular.woff') format('woff'),
              url('static/noths_sans_2_regular.ttf') format('truetype');
            }

            @font-face {
              font-family: NOTHS2;
              src: url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sans_2_semibold.eot?#iefixage') format('embedded-opentype'),
              url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sans_2_semibold.woff') format('woff'),
              url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sans_2_semibold.ttf') format('truetype');
              font-weight: bold;
            }

            @font-face {
              font-family: NOTHS2SEMIBOLD;
              src: url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sans_2_semibold.eot?#iefixage') format('embedded-opentype'),
              url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sans_2_semibold.woff') format('woff'),
              url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sans_2_semibold.ttf') format('truetype');
            }

            @font-face {
              font-family: NOTHS2BOLD;
              src: url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sans_2_bold.woff') format('woff'),
              url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sans_2_bold.ttf') format('truetype');
            }

            @font-face {
              font-family: NOTHS2SAM;
              src: url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sams_regular.woff') format('woff'),
              url('//cdn.notonthehighstreet.com/stylesheets/fonts/noths_sams_regular.ttf') format('truetype');
            }
            body {
              margin: 0;
              font-family: 'system';
            }

            .container {
              margin: 0 5%;
            }

            .product-card {
              width: 45%;
              padding: 5px;
              padding-left: 0px;
            }

            .product-link {
              display: flex;
              flex-direction: column;
              text-decoration: none;
            }

            .product-image {
              margin: 0;
              position:relative;
            }

            .product-image::after{
              position: absolute;
              display: block;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-size: cover;
              z-index: 1;
              opacity: 0;
              box-sizing: border-box;
              padding: 8px;
              border: 1px solid rgba(0,0,0,.2);
              content: attr(aria-label);
              font-style: italic;
              color: #000;
              font-size: 12px;
            }

            .listings {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              margin-top: 10px;
            }

            .sort-and-refine {
              font-family: NOTHS2;
              display: inline-block;
              text-align: center;
              vertical-align: middle;
              touch-action: manipulation;
              cursor: pointer;
              background-repeat: no-repeat;
              white-space: nowrap;
              text-decoration: none;
              text-transform: uppercase;
              border-radius: 5px;
              box-shadow: inset 0 1px 0 #3ab4d9, 0 1px 1px rgba(0,0,0,.3);
              background: linear-gradient(180deg,#09b8ec 0,#09b8ec);
              width: auto;
              color: #fff;
              box-sizing: border-box;
              border: 1px solid #09b8ec;
              margin: 0;
              padding: 10px 20px;
            }

            .divider {
              height: 1px;
              width: 100%;
              margin: 8px 0;
              border: 0;
              border-bottom: 1px solid #eae8e6;
            }

            .pagination-previous{
              position: relative;
              width: 50px;
              height: 36px;
              border-radius: 5px;
              color: transparent;
              background-color: #fff;
              border: 1px solid #0ca6d4;
              cursor: pointer;
              margin: 0 5px;
              outline: none;

            }

            .pagination-previous::after{
              content: " ";
              height: 0;
              width: 0;
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              margin-top: -9px;
              border: 9px solid transparent;
              border-right-color: #d6d2ce;
              margin-left: -13.5px;
              border-right-color: #d6d2ce;
            }

            .sort-and-paginate{
              display: flex;
              justify-content: space-between;
            }

            .global-header{
              width: 415px;
              height: 50px;
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
            }

            .category-heading{
              color: #385a79;
              font-size: 28px;
               font-weight: 400;
               font-family: NOTHS2;
               margin-bottom: 5px;
            }

            .category-description{
              color: #999;
              font-family: NOTHS2;
              font-size: 14px;
            }

            .product-title{
              font-size: 14px;
              line-height: 18px;
              font-weight: 400;
              color: #555;
              font-family: NOTHS2;
              text-align: inherit;
              text-decoration: none;
            }

              `
          }}
        />
      </Head>
      <div>
      <amp-img
            className="global-header"
            src={'/static/global-header.png'}
            height="50"
            width="414"
                  />
        <amp-img
          src={`https:${banner.image_url_mobile}`}
          height="50"
          width="414"
        />
      </div>
      <section className="container">
        <div>
          <h1 className="category-heading">{category.heading.toUpperCase()}</h1>
          <p className="category-description">{category.description}</p>
          <div className="divider"></div>
          <div className="sort-and-paginate">
          <p className="sort-and-refine">SORT AND REFINE</p>
            <amp-img
            className="pagination"
            src={'/static/pagination.png'}
            height="40"
            width="214"
                  />
          </div>
          <div className="divider"></div>
        </div>
        <div className="listings">
          {products.map(product => {
            const { title, prices, links, images, on_sale } = product;
            const priceString = (prices[0].amount / 100).toFixed(2);
            const imageUrl = images[0].href.replace("{size}", "preview");

            return (
              <div className="product-card">
                <a className="product-link" href={links[0].href}>
                  <amp-img
                    className="product-image"
                    src={imageUrl}
                    width="181"
                    height="181"
                  />
                  <p className="product-title">{title}</p>
                  <p className="product-prices">{`£${priceString}`}</p>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </html>
  );
};

Index.getInitialProps = async function({ query }) {
  const { categoryPage } = query;
  const res = await axios({
    url: `http://noths.service.shared.qa.noths.com/api/category/v1/products?category_path=/${categoryPage}`
  });

  const { products, category, banner } = res.data;

  return {
    products,
    category,
    banner,
    categoryPage
  };
};

export default Index;
