# Handy Dualkey

Born out of my own need an [cjpais/Handy/discussions/746](https://github.com/cjpais/Handy/discussions/746#discussioncomment-18781893),
this Fork of Handy adds support for two transcribe shortcuts pointing to different models.

<img width="792" height="682" alt="image" src="https://github.com/user-attachments/assets/c4190e44-2378-448b-879f-0eab0594e7eb" />

Note that model settings are shown for the currently loaded model.

## Build

Check the mainline repo for detailed instructions.

Assuming you have built Handy before and have a local repo, first fetch this fork:

```sh
git fetch https://github.com/port19x/Handy-Dualkey.git handy-dualkey &&
git switch -c handy-dualkey FETCH_HEAD
```

Then do the final build step as usual:

```sh
bun install --frozen-lockfile &&
bun run tauri build --bundles app \
  --config '{"bundle":{"createUpdaterArtifacts":false}}'
```

## Contributing & Support

I'll try to track the new upstream releases occasionally.
If there are foreseeable merge conflicts, I appreciate a heads up or PR.

## Official Discord (of Handy, not this fork)

[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/WVBeWsNXK4)
