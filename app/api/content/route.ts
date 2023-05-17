const posts = [
  {
    "title": "Introduction to JavaScript",
    "slug": "introduction-to-javascript",
    "content": "JavaScript is a versatile programming language that powers interactive web experiences. It is primarily used for adding behavior and interactivity to web pages. With JavaScript, you can dynamically manipulate the content of a page, handle user interactions, and communicate with servers to fetch or send data. It has a rich ecosystem of libraries and frameworks that make development easier and more efficient. Whether you're a beginner or an experienced developer, learning JavaScript is essential for web development."
  },
  {
    "title": "Python Crash Course",
    "slug": "python-crash-course",
    "content": "Python is a popular programming language known for its simplicity and readability. It is widely used for various purposes, including web development, data analysis, machine learning, and automation. Python's clean syntax and extensive standard library make it a great language for beginners. In this crash course, we'll cover the basics of Python programming, including variables, data types, control flow, functions, and more. By the end of this course, you'll have a solid foundation in Python and be ready to explore more advanced topics."
  },
  {
    "title": "Responsive Web Design",
    "slug": "responsive-web-design",
    "content": "Responsive web design is an approach to building websites that adapt to different screen sizes and devices. It involves creating flexible layouts and using media queries to apply different styles based on the device's characteristics. With responsive design, you can ensure that your website looks and functions well on desktops, tablets, and smartphones. This tutorial will guide you through the principles of responsive web design and provide practical tips and techniques to make your websites responsive and user-friendly."
  },
  {
    "title": "Introduction to Node.js",
    "slug": "introduction-to-nodejs",
    "content": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a web browser, making it possible to build server-side applications with JavaScript. Node.js provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. It has a vast ecosystem of libraries and frameworks that enable you to build web servers, APIs, command-line tools, and more. In this introduction to Node.js, we'll explore its core features and show you how to get started with building your first Node.js application."
  },
  {
    "title": "React Native Basics",
    "slug": "react-native-basics",
    "content": "React Native is a framework for building mobile applications using JavaScript and React. It allows you to write code once and deploy it to multiple platforms, including iOS and Android. With React Native, you can create native-like user interfaces and access platform-specific features using a single codebase. This tutorial will introduce you to the basics of React Native, including components, styling, navigation, and data fetching. By the end of this tutorial, you'll be able to build your own mobile app using React Native."
  },
  {
    "title": "MongoDB Crash Course",
    "slug": "mongodb-crash-course",
      "content": "MongoDB is a popular NoSQL database that provides high performance, scalability, and flexibility. It is designed to store and retrieve large volumes of unstructured data. MongoDB uses a document-oriented data model, which allows you to store data in a flexible, JSON-like format called BSON. In this crash course, we'll cover the basics of MongoDB, including data modeling, CRUD operations, indexing, and querying."
    },
    {
    "title": "CSS Flexbox Layout",
    "slug": "css-flexbox-layout",
    "content": "CSS Flexbox is a layout model that provides a flexible way to arrange and align elements within a container. It allows you to create responsive and dynamic layouts without relying on floats or positioning. With Flexbox, you can easily control the size, order, and alignment of items, making it a powerful tool for building modern web designs. This tutorial will teach you the fundamentals of CSS Flexbox and demonstrate how to use it to create various layout patterns."
  },
  {
    "title": "Introduction to Machine Learning",
    "slug": "introduction-to-machine-learning",
    "content": "Machine learning is a branch of artificial intelligence that focuses on developing algorithms that can learn and make predictions or decisions based on data. It enables computers to automatically learn from experience without being explicitly programmed. Machine learning has a wide range of applications, including image and speech recognition, natural language processing, recommendation systems, and more. In this introduction to machine learning, we'll cover the basic concepts and algorithms used in this field and provide examples to help you understand how machine learning works."
  },
  {
    "title": "Getting Started with Docker",
    "slug": "getting-started-with-docker",
    "content": "Docker is an open-source platform that allows you to automate the deployment, scaling, and management of applications using containerization. Containers provide a lightweight and isolated environment for running applications, ensuring consistency across different environments. With Docker, you can package your applications and their dependencies into a single unit, making it easy to deploy and manage them in any environment. This tutorial will guide you through the process of getting started with Docker, from installing Docker on your machine to creating and running your first containerized application."
  }
]

import { NextResponse } from "next/server";
import { getServerSession } from 'next-auth';



export async function GET() {

  const session = await getServerSession();
  
  try {
    // Your existing code
    
    return NextResponse.json(posts);
  } catch (error) {
    // Log the error details
    console.error("An error occurred while fetching the posts:", error);
    // Return an error response with a status code
    return NextResponse.error;
  }
}