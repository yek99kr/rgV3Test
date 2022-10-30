import React from "react";
import { RichText } from "prismic-reactjs";

const DetailText = ({ slice }) => (
  <section>
    {slice.primary.text ? <RichText render={slice.primary.text} /> : null}
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default DetailText;
