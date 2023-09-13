import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data);
  // const fluid =
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Home</h2>
          <h3>Design & Deploy</h3>
          <p>Full Stack Software Devloper</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects{" "}
          </Link>
        </div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="banner"
        />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
