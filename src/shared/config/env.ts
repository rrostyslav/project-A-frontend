export const getEnvVariable = (key: string): string => {
  const value = import.meta.env[key]
  if (!value) {
    throw new Error(`Env variable ${key} is not defined`)
  }
  return String(value)
}

export const appEnv = {
  MODE: getEnvVariable('VITE_NODE_ENV'),
  API_URL: getEnvVariable('VITE_API_URL'),
  BASE_URL: getEnvVariable('VITE_BASE_URL'),
  PORT: getEnvVariable('VITE_PORT'),
  HOST: getEnvVariable('VITE_HOST'),
  PREVIEW_PORT: getEnvVariable('VITE_PREVIEW_PORT'),
  APOLLO_URL: getEnvVariable('VITE_APOLLO_URL'),
}
