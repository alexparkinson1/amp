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
            }
              `
          }}
        />
      </Head>
      <div>
        <amp-img
          src={`https:${banner.image_url_mobile}`}
          height="50"
          width="414"
        />
      </div>
      <section className="container">
        <div>
          <h1>{category.heading}</h1>
          <p>{category.description}</p>
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
                    width="150"
                    height="150"
                  />
                  <p>{title}</p>
                  <p>{`£${priceString}`}</p>
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
