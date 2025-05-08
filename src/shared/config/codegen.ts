import { config as loadDotenv } from 'dotenv'
import type { CodegenConfig } from '@graphql-codegen/cli'

loadDotenv({ path: `.env` })

const GRAPHQL_URL = process.env.VITE_APOLLO_URL ?? 'http://localhost:4000/graphql'

const codegenConfig: CodegenConfig = {
  schema: GRAPHQL_URL,
  documents: ['src/**/*.{vue,ts,graphql}'],
  ignoreNoDocuments: true,
  generates: {
    'src/shared/gql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
      config: {
        withCompositionFunctions: true,
        vueCompositionPlugin: true,
        namingConvention: { typeNames: 'keep', enumValues: 'keep' },
        pluckConfig: {
          modules: [
            { name: 'graphql-tag', identifier: 'gql' },
            { name: '@vue/apollo-composable', identifier: 'gql' },
          ],
        },
      },
    },
  },
}

export default codegenConfig
