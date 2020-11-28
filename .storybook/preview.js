import { wd } from "paths.macro";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  storySource: {
    repository: "https://github.com/example/repo-name",
    workingDir: wd || "/home/ba1ry/os/styled-wind-ui",
    branch: "branch1",
  },
};
