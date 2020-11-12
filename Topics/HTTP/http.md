# How the Web / HTTP requests work

## HTTP

- **A client-server protocol** which allows the fetching of resources, such as HTML documents.
- Requests are initiated by the recipient, usually the Web browser.
- A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.
- Requests & Responses
  - Clients and servers communicate by exchanging individual messages (as opposed to a stream of data).
  - The messages sent by the client, usually a Web browser, are called requests and
  - The messages sent by the server as an answer are called responses.
- HTTP is **an extensible protocol**
  - It is an application layer protocol that is sent over TCP, or over a TLS-encrypted TCP connection, though any reliable transport protocol could theoretically be used.
  - Due to its extensibility, it is used to not only fetch hypertext documents, but also images and videos or to post content to servers, like with HTML form results. HTTP can also be used to fetch parts of documents to update Web pages on demand.

  > A **protocol** is *a system of rules that define how data is exchanged within or between computers*.
  > Communications between devices require that the devices agree on the format of the data that is being exchanged. The set of rules that defines a format is called a protocol.
  >

  > TCP(Transmission Control Protocol)
  >
  > - A network protocol that lets two hosts connect and exchange data streams
  > - TCP guarantees the delivery of data and packets in the ame order as they were sent.
  > - TCP role is to ensure the packets are reliably delivered, error free.

---

## Components of HTTP-based systems

> - Client: the user-agent
> - The Web server
> - Proxies

### Client: the user-agent

- **The request is initiated by not the server but the browser, always.**
  - The browser is **always** the entity initiating the request. It is never the server (though some mechanisms have been added over the years to simulate server-initiated messages).

- To present a Web page:
    1. the browser sends an original request to fetch the HTML document that represents the page.
    2. It then parses this file, making additional requests corresponding to execution scripts, layout information (CSS) to display, and sub-resources contained within the page (usually images and videos).
    3. The Web browser then mixes these resources to present to the user a complete document, the Web page.
    4. Scripts executed by the browser can fetch more resources in later phases and the browser updates the Web page accordingly.

- **A Web page is a hypertext document.**
  - This means some parts of displayed text are links which can be activated (usually by a click of the mouse) to fetch a new Web page, allowing the user to direct their user-agent and navigate through the Web.
  - The browser translates these directions in HTTP requests, and further interprets the HTTP responses to present the user with a clear response.

### The Web server

- The server *serves* the document as requested by the client.
- A server appears as only a single machine virtually:
  - This is becuase it may actually be a collection of servers, sharing the load (load balancing) or a complex piece of software interrogating other computers (like cache, a DB server, or e-commerce servers), totally or partially generating the document on demand.

- A server is not necessarily a single machine, but several server software instances can be hosted on the same machine. With HTTP/1.1 and the Host header, they may even share the same IP address.

### Proxies

- **Between the Web browser and the server,** numerous computers and machins relay the HTTP messages.
- Due to the layered structure of the Web stack, most of these operate at the transport, network or physical levels, becoming transparent at the HTTP layer and **potentially making a significant impact on performance.** Those operating at the application layers are generally called proxies. These can be **transparent**, forwarding on the requests they receive without altering them in any way, or **non-transparent**, in which case they will change the request in some way before passing it along to the server.

- Proxies may perform numerous functions:
  - caching (the cache can be public or private, like the browser cache)
  - filtering (like an antivirus scan or parental controls)
  - load balancing (to allow multiple servers to serve the different requests)
  - authentication (to control access to different resources)
  - logging (allowing the storage of historical information)

---

## Basic aspects of HTTP

### Simple

- HTTP messages can be read and understood by humans
- HTTP messages, as defined in HTTP/1.1 and earlier, are human-readable. In HTTP/2, these messages are embedded into a binary structure, a frame, allowing optimizations like compression of headers and multiplexing.

### Extensibility

- **HTTP headers** makes HTTP protocol easy to extend and experiment with.
- New functionality can even be introduced by a simple agreement between a client and a server about a new header's semantics.

### Stateless but not sessionless

- HTTP is stateless: there is no link between two requests being successively carried out on the same connection. This immediately has the prospect of being problematic for users attempting to interact with certain pages coherently, for example, using e-commerce shopping baskets.
- But **HTTP cookies allow the use of stateful sessions.** Using header extensibility, HTTP Cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state.

### HTTP and connections

- HTTP relies on the TCP standard because it requires the underlying transport protocol *reliable*.
  - A connection is fundamentally out of scope for HTTP since it is controlled at the transport layer.
  - Though HTTP doesn't require the underlying transport protocol to be connection-based; only requiring it to be reliable, or not lose messages (so at minimum presenting an error).
  - Among the two most common transport protocols on the Internet, **TCP is reliable** and UDP isn't. HTTP therefore relies on the TCP standard, which is connection-based.

- TCP connection, pipelining, and persistent connections
  - Before a client and server can exchange an HTTP request/response pair, they must establish a TCP connection, a process which requires several round-trips. The default behavior of HTTP/1.0 is to open a separate TCP connection for each HTTP request/response pair. This is less efficient than sharing a single TCP connection when multiple requests are sent in close succession.
  - In order to mitigate this flaw, pipelining and persistent connections were introduced.
    - HTTP pipelining has proven difficult to implement in existing networks, where old pieces of software coexist with modern versions. HTTP pipelining has been superseded in HTTP/2 with more robust multiplexing requests within a frame.

## What can be controlled by HTTP

- Caching
- Relaxing the origin constraint
- Authentication
- Proxy and tunneling
- Sessions : Using HTTP cookies allows you to link requests with the state of the server. This creates sessions, despite basic HTTP being a state-less protocol.

---

## HTTP flow

1. Open a TCP connection
2. Send an HTTP message
3. Read the response sent by the server
4. Close or reuse the connection for further requests

---

## HTTP messages

### Elements of HTTP requests

- HTTP method
- The path of the resource to fetch
- The version of the HTTP protocol
- Optional headers
Body

### Elements of HTTP responses

- Version of the protoco
- Status code
- Status message
- HTTP headers, like those for requests
- Optionally, a body containing the fetched resource


## APIs based on HTTP

- The most commonly used API based on HTTP is the *`XMLHttpRequest` API*.
- The modern *Fetch API* provides the same features with a more powerful and flexible feature set.

---

## References

- [An Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
