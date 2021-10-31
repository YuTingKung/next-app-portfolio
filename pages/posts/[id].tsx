interface Post {
  id: string;
  title: string
} 

function About({posts} : { posts: any}) {
  return <div>{posts.map((p: Post) => <div key={p.id}>id={p.id}<br/>title={p.title}<br/><br/></div>)}</div>
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = [{
    params: { id: 'posts' },
  }]

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time
export async function getStaticProps({params} : { params: any}) {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/${params.id}`)
  const posts = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default About