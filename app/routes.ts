import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routeConfig: RouteConfig = [
  index("routes/home.tsx"),
  route("/notes", "routes/notes.tsx"),
  route("/notes/:noteId", "routes/note-details.tsx"),
];

export default routeConfig;
