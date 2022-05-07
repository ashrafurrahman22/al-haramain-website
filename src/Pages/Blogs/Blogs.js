import React from "react";
import { Accordion, Dropdown, Stack } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <Accordion
      defaultActiveKey="0"
      className="my-5"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          What is the differences between javascript and nodejs ?
        </Accordion.Header>
        <Accordion.Body> <h3>JavaScript</h3>
          Javascript is a programming language that is used for writing scripts
          on the website. It can only be run in the browsers. It is basically
          used on the client-side. It is used in frontend development. <br />
          <h3>NodeJs</h3>
          NodeJS is a Javascript runtime environment. We can run Javascript
          outside the browser with the help of NodeJS. It is mostly used on the
          server-side. It is used in server-side development.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          When should you use nodejs and when should you use mongodb?
        </Accordion.Header>
        <Accordion.Body><h3>NodeJs</h3>
          Nodejs is a Javascript engine that you can write any application you
          want with by programming in the Javascript language. It runs your
          Javascript code. Most commonly, it is used to build servers that can
          respond to web requests, though it can be used for lots of other types
          of code too.
          <h3>MongoDB</h3>
          MongoDB is a database engine. Server uses MongoDB to save, query or
          update data in a database. There are many web servers built with
          nodejs that will then use MongoDB for storing data.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Differences between sql and nosql databases?
        </Accordion.Header>
        <Accordion.Body>
          <h4>SQL</h4>
          <ol>
            <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</li>
            <li>These databases have fixed or static or
          predefined schema.</li>
            <li>These databases are not suited for hierarchical
          data storage.</li>
            <li>These databases are best suited for complex queries.</li>
            <li>Vertically Scalable.</li>
            <li>Follows ACID property.</li>
            </ol> 
          <h4>NoSQL</h4>
          <ol>
            <li>Non-relational or distributed database system.</li>
            <li>They have dynamic schema.</li>
            <li> These databases are best suited for hierarchical data storage.</li>
            <li>These databases are not so good for complex queries.</li>
            <li>Horizontally scalable.</li>
            <li>Follows CAP(consistency, availability, partition tolerance)</li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          What is the purpose of jwt and how does it work?
        </Accordion.Header>
        <Accordion.Body>
          <p>
        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        <p>
        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. It works with Header, Payload and Signature. 
        </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blogs;
