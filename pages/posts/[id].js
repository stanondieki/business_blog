import {getAllPostIds, getPostData} from '../../lib/posts';

export default function post({postData}) {
    return (
    <>
        {postData.title}
        <br/>
        {postData.id}
        <br/>
        {postData.date}
        <br/>
    <div dangerouslySetInnerHTML= {{ __html: postData.contentHtml}}/>
    </>
    );
}

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps ({params}){
const postData = await getPostData(params.id);
return {
    props: {
        postData,
    },
};
}



