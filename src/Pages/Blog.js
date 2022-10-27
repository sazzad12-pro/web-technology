import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="w-50 mx-auto mt-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is cors</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing CORS is an HTTP-based security
            mechanism controlled and enforced by the client web browser. It
            allows a service API to indicate any origin other than its own from
            which the client can request resources. It has been designed in
            response to the same-origin policy SOP that restricts how a website
            HTML document or JS script loaded by one origin can interact with a
            resource from another origin. CORS is used to explicitly allow some
            cross-origin requests while rejecting others.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase ?what other options do you have to
            implement authentication
          </Accordion.Header>
          <Accordion.Body>
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together. &&Usually, authentication by a server entails
            the use of a user name and password. Other ways to authenticate can
            be through cards, retina scans, voice recognition, and fingerprints.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How dose privete route work</Accordion.Header>
          <Accordion.Body>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            what is the node ? how dose node js work
          </Accordion.Header>
          <Accordion.Body>
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. &&Node.js accepts the request
            from the clients and sends the response, while working with the
            request node.js handles them with a single thread. To operate I/O
            operations or requests node.js use the concept of threads. Thread is
            a sequence of instructions that the server needs to perform. It runs
            parallel on the server to provide the information to multiple
            clients. Node.js is an event loop single-threaded language. It can
            handle concurrent requests with a single thread without blocking it
            for one request
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
