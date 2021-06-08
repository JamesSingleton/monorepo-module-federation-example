# Module Federation in a Monorepo

## Goal

Provide an example on how to setup module federation in a monorepo where there is a root module that loads sub-modules.

## Outcome

- Root module loads sub-modules on routes
- Sub-modules can have routes of their own
- There should be one `webpack.config.js` at the root level instead of configs per module
- Remotes should be _dynamic_ and not static to just localhost
