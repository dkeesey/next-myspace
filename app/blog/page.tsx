import Link from 'next/link';

interface Post {
    title: string;
    content: string;
    slug: string;
}

interface Props {
  params: { slug: string };
}

export default async function Blog() {
  const posts: Post[]= await fetch('http://localhost:3000/api/content').then((res) =>
    res.json()
  );


  return (
    <div>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
