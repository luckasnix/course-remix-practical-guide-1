import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routeConfig: RouteConfig = [
  index("routes/home.tsx"),
  route("/example", "routes/example.tsx"),
];

export default routeConfig;
