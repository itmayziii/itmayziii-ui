import { type CodegenConfig } from '@graphql-codegen/cli'
import { fileURLToPath } from 'url'

const config: CodegenConfig = {
  schema: fileURLToPath(new URL('../schema.graphql', import.meta.url)),
  documents: fileURLToPath(new URL('./graphql/queries', import.meta.url)),
  generates: {
    './src/graphql/generated/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
        {
          add: {
            content: ['/* eslint-disable */', '// @ts-nocheck']
          }
        }
      ]
    }
  }
}

export default config
