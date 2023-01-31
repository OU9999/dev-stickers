import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function AboutUs() {
  return (
    <Layout title="About Us">
      <p>We are happies stickers store.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About Us" />;

export default AboutUs;
