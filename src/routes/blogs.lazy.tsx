import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/blogs")({
  component: About,
});

function About() {
  return (
    <div className="col-span-2 overflow-y-auto bg-white/40 p-2 backdrop-blur-md lg:col-span-1 lg:mb-2 lg:mr-2 lg:rounded-xl">
      Hello from Blogs!
    </div>
  );
}
