import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`hello`}>hello world</Link>
            </li>
            <li>
              <Link to={`test`}>test</Link>
            </li>
            <li>
              <Link to={`test/1`}>test id 1</Link>
            </li>
            <li>
              <Link to={`test/2`}>test id 2</Link>
            </li>
            {/* <li>
              <Link to={`contacts/1`}></Link>
                
            </li> */}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}