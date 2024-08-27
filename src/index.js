const gha = require("@actions/core");

const { main } = require("./main");

async function entrypoint() {
  const inputs = getInputs();
  await main(inputs);
}

function getInputs() {
  return {
    githubToken: gha.getInput("github-token", { required: true }),
    path: gha.getInput("path", { required: true }),
    summary: gha.getBooleanInput("summary", {
      required: false,
    }),
    displayOptions: gha.getInput("display-options", { required: false }),
    failOnEmpty: gha.getBooleanInput("fail-on-empty", {
      required: false,
    }),
    title: gha.getInput("title", { required: false }),
  };
}

entrypoint();
