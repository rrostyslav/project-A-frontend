import { useQuery } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { Match, Switch } from "solid-js";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const query = useQuery(() => ({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
        (res) => res.json(),
      ),
  }));

  return (
    <div class="p-2 flex flex-col gap-y-4 items-center">
      <h3 class="text-green-600 text-2xl">
        Starter SolidJS + Tanstack Router + Tanstack Query
      </h3>

      <Switch>
        <Match when={query.isPending}>Loading...</Match>
        <Match when={query.isError}>Error: {query.error?.message}</Match>
        <Match when={query.isSuccess}>
          <div>
            <p>{query.data.description}</p>
            <strong>👀 {query.data.subscribers_count}</strong>{" "}
            <strong>✨ {query.data.stargazers_count}</strong>{" "}
            <strong>🍴 {query.data.forks_count}</strong>
          </div>
        </Match>
      </Switch>
    </div>
  );
}
