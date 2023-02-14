import Hero from './components/Hero';

export default async function Home() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 30 },
    });
    const posts = await data.json();

    // console.log(posts);
    return <Hero />;
}
