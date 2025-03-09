import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ request, params, context }: Route.LoaderArgs) {
  context.app.env.COOKIE_SECRET;
}

export default function Home() {
  return <div>Hellow World</div>;
}
