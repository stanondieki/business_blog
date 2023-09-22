import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function MarketPost() {
  return (
    <>
      <Head>
        <title>MarketPost</title>
      </Head>
      <h1>MARKETING</h1>
      <Image src="/images/marketing.png" width={120} height={90} priority />
      <h2> Welcome To Our Business Blog </h2>
      <p>
        {" "}
        At <b>Stan Business</b>, we are dedicated to providing you with valuable
        insights, <br /> industry trends, and expert advice to help you thrive
        in your business endeavors.
      </p>
      <p>
        Stay up to date with the latest news and developments in the{" "}
        <b>
          <i>Stan Industry</i>
        </b>
        . Our blog covers a wide range of topics,
        <br /> including:
      </p>
      <li>Industry best practices and strategies</li>
      <li>Product and service updates</li>
      <li>Guides and Tutorials</li>
      <li>Success stories and case studies</li>
      <li>Market trends and analysis</li>
      <li>Expert interviews and thought leadership</li>
      <p>
        Whether you are a seasoned entreprenuer or just starting your business
        journey, <br /> our blog aims to empower you with knowledge and
        resources you need to make informed decisions, overcome challenges and
        drive growth.
      </p>
      <p>
        {" "}
        Join our community of business proffesionals, thought leaders and
        industry enthusiasts by subscribing to our blog.
        <br /> By subscribing, you'll receive regular updates delivered straight
        to your inbox,
        <br /> ensuring you never miss a valuable post.
      </p>
      <p>
        Do not forget to engage with our content by leaving comments and sharing
        your thoughts.
        <br /> We value your feedback and encourage lively discussions among
        readers.
      </p>
      <h2>
        Thank you for visiting our blog and we look forward to sharing valuable
        insights with you!
      </h2>
      <h2>
        <Link href="/">Back home </Link>
      </h2>
    </>
  );
}
