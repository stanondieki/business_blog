import Head from "next/head";
import Link from "next/link";

export default function ResourcePost(){

    return(
        <>
       <Head>
            <title>Resources</title>
        </Head> 
        <h1>RESOURCES</h1>
         <h2>Resources for Business Success</h2>
         <h3>For thrival in business the following resources are required: </h3>
         <ul>
            - How-To Guides <br/>
            - Case Studies <br/>
            - Industry Reports <br/>
            - Product Reviews <br/>
            - Expert Interviews <br/>
            - Resources Lists <br/>
            - Best Practices <br/>
            - Infographics<br/>
            - Templates and Worksheets<br/>
            - Video Tutorials<br/>
         </ul>
         <h2>
            <Link href='/'>Back Home</Link>
         </h2>
        </>
    )
}