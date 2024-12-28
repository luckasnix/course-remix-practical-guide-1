import { Link } from "react-router";

import homeStylesheet from "~/styles/home.css?url";

import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [
  { title: "Notes App" },
  { name: "description", content: "Save your notes!" },
];

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: homeStylesheet,
  },
];

const Home = () => {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
};

export default Home;
