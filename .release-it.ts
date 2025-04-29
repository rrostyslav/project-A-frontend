import type { Config } from 'release-it';

export default {
  git: {
    commit: true,
    tag: true,
    push: true,
    changelog: true,
  },
  github: {
    release: true
  },
} satisfies Config;
