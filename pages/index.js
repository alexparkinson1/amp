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
              width: 50%;
            }

            .product-link {
              display: flex;
              flex-direction: column;
            }

            .product-image {
              margin: 0 auto;
            }

            .listings {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
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
            let imageUrl = product.images[0].href.replace("{size}", "preview");
            imageUrl.replace(
              "www.public.dev.noths.com",
              "cdn.notonthehighstreet.com"
            );

            return (
              <div className="product-card">
                <a className="product-link" href={product.links[0].href}>
                  <amp-img
                    className="product-image"
                    src={imageUrl}
                    width="150"
                    height="150"
                  />
                  <p>{product.title}</p>
                  <p>{product.prices[0].amount}</p>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </html>
  );
};

Index.getInitialProps = async function() {
  const res = await axios({
    url:
      "http://noths.service.shared.qa.noths.com/api/category/v1/products?category_path=/gifts"
  });

  return {
    products: res.data.products,
    category: res.data.category,
    banner: res.data.banner
  };
};

export default Index;
