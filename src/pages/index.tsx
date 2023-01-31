import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome To DevStickers! 💻">
      {/* <StaticImage
        src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
        alt="Stickers on the wall"
      /> */}
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker) => (
          <article>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name as string}
            />
            <Link to={`/products/${sticker.id}`}>
              <h2>{sticker.name}</h2>
              <h4>${sticker.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;

export default IndexPage;
