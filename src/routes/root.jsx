import { Outlet, Link, useLoaderData,} from "react-router-dom";
import { getContacts } from "../contacts";
export async function loader() {
    const contacts = await getContacts();
    return { contacts };
  }

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
                    <Link to={`/hello-world`}>Hello_World</Link>
                </li>
                <li>
                    <Link to={`/test`}>Test</Link>
                </li>
                <li>
                    <Link to={`/test/1`}>test1</Link>
                </li>
                <li>
                    <Link to={`/test/2`}>test2</Link>
                </li>
                </ul>
            </nav>
            </div>
            <div id="detail">
                <Outlet></Outlet>
            </div>
        </>
        );
  }
  