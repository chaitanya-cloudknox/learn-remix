import type { MetaFunction } from "@remix-run/deno";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches
} from "@remix-run/react";
import { LinksFunction } from "https://esm.sh/v91/@remix-run/react@1.6.4/dist/routeModules.d.ts";
import * as React from "react";

import globalStyles from "./styles/index.css";
import darkStyles from "./styles/theme/dark.css";
import desktopStyles from "./styles/theme/desktop.css";
import lightStyles from "./styles/theme/light.css";
import mobileStyles from "./styles/theme/mobile.css";
import tabletStyles from "./styles/theme/tablet.css";

export const links: LinksFunction = () => {
  return [{
    rel: "stylesheet",
    href: darkStyles,
    media: "screen and (prefers-color-scheme: dark)",
  }, {
    rel: "stylesheet",
    href: lightStyles,
    media: "screen and (prefers-color-scheme: light)",
  }, {
    rel: "stylesheet",
    href: mobileStyles,
    media: "screen and (max-width: 767px)",
  }, {
    rel: "stylesheet",
    href: tabletStyles,
    media: "screen and (min-width: 768px) and (max-width: 1024px)",
  }, {
    rel: "stylesheet",
    href: desktopStyles,
    media: "screen and (min-width: 1025px)",
  }, { rel: "stylesheet", href: globalStyles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Chaitanya's Blog",
  viewport: "width=device-width,initial-scale=1",
  "color-scheme": "dark light",
});

export default function App() {
  const matches = useMatches();

  // If at least one route wants to hydrate, this will return true
  const includeScripts = matches.some(
    (match) => match.handle?.hydrate,
  );
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {includeScripts ? <Scripts /> : null}
        <LiveReload />
      </body>
    </html>
  );
}
