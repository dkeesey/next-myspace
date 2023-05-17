import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About page",


    // ...
};


export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This is a social media company!</p>
    </main>
  );
}