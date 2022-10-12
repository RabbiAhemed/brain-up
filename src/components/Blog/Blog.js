import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="m-5">
      <div>
        <h4 className="blog-title fw-bolder">Purpose of React Router</h4>
        <p className="description">
          React Router, and dynamic, client-side routing, allows us to build a
          single-page web application with navigation without the page
          refreshing as the user navigates. React Router uses component
          structure to call components, which display the appropriate
          information. By preventing a page refresh, and using Router or Link,
          the flash of a white screen or blank page is prevented. This is one
          increasingly common way of having a more seamless user experience.
          React router also allows the user to utilize browser functionality
          like the back button and the refresh page while maintaining the
          correct view of the application.
        </p>
      </div>
      <div>
        <h4 className="blog-title fw-bolder">How Context API works</h4>
        <p className="description">
          Context is designed to share data that can be considered “global” for
          a tree of React Components.It sits next to React to props and state.
          In other words, Context provides a way to pass data through the
          component tree without having to pass props down manually at every
          level.
          <br />
          React.createContext returns a consumer and a provider. Provider is a
          component that as it's names suggests provides the state to its
          children.It will hold the "data" and be the parent of all the
          components that might need that data. Consumer as it so happens is a
          component that consumes and uses the state.
        </p>
      </div>
      <div>
        <h4 className="blog-title fw-bolder">UseRef</h4>
        <p className="description">
          The useRef Hook in React can be used to directly access DOM nodes, as
          well as persist a mutable value across rerenders of a component.{" "}
          <br />
          The useRef is a hook that allows to directly create a reference to the
          DOM element in the functional component. The useRef returns a mutable
          ref object. This object has a property called .current. The value is
          persisted in the refContainer.current property. These values are
          accessed from the current property of the returned object. The object
          can persist a value for a full lifetime of the component. <br />
          Essentially, a React.ref is like a "box" that can hold a mutable value
          in its .current record field. <br />
        </p>
      </div>
    </div>
  );
};

export default Blog;
