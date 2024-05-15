
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogPost from '../BlogPost/BlogPost';

const Blogs = () => {
  // Example data, you can replace it with actual data fetched from an API
  const blogPosts = [
    {
      id: 1,
      title: 'What is an access token and refresh token?',
      content:
        '1. Access Token: An access token is a credential used by an application to gain access to protected resources on behalf of a user. Access tokens have a limited lifespan and are used to authenticate API requests until they expire. And 2. Refresh Token: A refresh token is a special token that is used to obtain a new access token when the current one expires. While access tokens have a short lifespan to enhance security, refresh tokens have a longer lifespan. Refresh tokens are usually long-lived and are securely stored by the client application.',
    },
    {
      id: 2,
      title:
        'How do they work and where should we store them on the client side?',
      content:
        'Access tokens and refresh tokens are crucial components in authentication processes, typically used in web applications and APIs. After a user successfully logs in, the authentication server issues an access token and a refresh token. The access token grants permission to access protected resources, while the refresh token allows obtaining a new access token when the current one expires. It is essential to follow security best practices to protect tokens and ensure the integrity of the authentication process.',
    },
    {
      id: 2,
      title: 'What is Express.js?',
      content:
        'Express.js is a popular web application framework for Node.js, designed to build web applications and APIs quickly and with minimal effort. It provides a robust set of features for web and mobile applications, including routing, middleware support, template engines, and HTTP utility methods. Express.js simplifies the process of building server-side logic and handling HTTP requests and responses, making it a preferred choice for developers looking to create scalable and efficient web applications in JavaScript. Its simplicity, flexibility, and extensive ecosystem of middleware and plugins have made it one of the most widely used frameworks in the Node.js community.',
    },
    {
      id: 2,
      title: 'What is Nest JS (google it)?',
      content: 'NestJS is a framework for building efficient, reliable, and scalable server-side applications in Node.js. It is heavily inspired by Angular, which means it shares some architectural concepts and design patterns with Angular. NestJS utilizes TypeScript, a superset of JavaScript that adds static typing and other features, to enable developers to build robust and maintainable applications.',
    },
  ];

  return (
    <div className="mt-[100px]">
      <Helmet>
        <title>Blogs Jobs</title>
      </Helmet>
      <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
        <h2 className="animate__animated animate__fadeInLeft">Blogs</h2>
      </div>
      <div className="container mx-auto">
        {blogPosts.map(post => (
          <BlogPost key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
