import { ILogLevels } from '../types'

const logLevels: ILogLevels = {
  verbose: 0,
  debug: 1,
  info: 2,
  error: 3,
  none: 99,
}

const logLevel = process.env.REACT_APP_LOG_LEVEL || 'info'

const getLinePair = (): { top: string; bottom: string } => {
  const date = new Date()
  const topLine = `${'-'.repeat(25)}[${date.toLocaleString()}]${'-'.repeat(25)}`
  let bottomLine = ''
  for (let i = 0; i < topLine.length; i++) {
    bottomLine += '-'
  }

  return { top: topLine, bottom: bottomLine }
}

export const simpleLogger = (message?: any, ...optionalParams: any[]): void => {
  const date = new Date()

  console.log(`[${date.toLocaleString()}]`, message, ...optionalParams)
}

const wrappedLogger = (messages: string[]): void => {
  console.log(getLinePair().top)
  messages.forEach((message) => {
    console.log(message)
  })
  console.log(getLinePair().bottom)
}

const moduleLogger = (moduleName: string, log: string): void => {
  const date = new Date()

  console.log(`[${date.toLocaleString()}][${moduleName}] ${log}`)
}

const wrappedModuleLogger = (moduleName: string, messages: string[]): void => {
  console.log(getLinePair().top)
  console.log(`[${moduleName}]`)
  messages.forEach((message) => {
    console.log(message)
  })
  console.log(getLinePair().bottom)
}

export const verboseLogger = (message?: any, ...optionalParams: any[]): void => {
  if (logLevels[logLevel] <= logLevels.verbose) {
    simpleLogger(message, ...optionalParams)
  }
}

export const verboseWrappedLogger = (messages: string[]): void => {
  if (logLevels[logLevel] <= logLevels.verbose) {
    wrappedLogger(messages)
  }
}

export const verboseModuleLogger = (moduleName: string, log: string): void => {
  if (logLevels[logLevel] <= logLevels.verbose) {
    moduleLogger(moduleName, log)
  }
}

export const verboseWrappedModuleLogger = (moduleName: string, messages: string[]): void => {
  if (logLevels[logLevel] <= logLevels.verbose) {
    wrappedModuleLogger(moduleName, messages)
  }
}

export const debugLogger = (message?: any, ...optionalParams: any[]): void => {
  if (logLevels[logLevel] <= logLevels.debug) {
    simpleLogger(message, ...optionalParams)
  }
}

export const debugWrappedLogger = (messages: string[]) => {
  if (logLevels[logLevel] <= logLevels.debug) {
    wrappedLogger(messages)
  }
}

export const debugModuleLogger = (moduleName: string, log: string): void => {
  if (logLevels[logLevel] <= logLevels.debug) {
    moduleLogger(moduleName, log)
  }
}

export const debugWrappedModuleLogger = (moduleName: string, messages: string[]): void => {
  if (logLevels[logLevel] <= logLevels.debug) {
    wrappedModuleLogger(moduleName, messages)
  }
}

export const errorLogger = (message?: any, ...optionalParams: any[]): void => {
  if (logLevels[logLevel] <= logLevels.error) {
    simpleLogger(message, ...optionalParams)
  }
}

export const errorWrappedLogger = (messages: string[]): void => {
  if (logLevels[logLevel] <= logLevels.error) {
    wrappedLogger(messages)
  }
}

export const errorModuleLogger = (moduleName: string, log: string): void => {
  if (logLevels[logLevel] <= logLevels.error) {
    moduleLogger(moduleName, log)
  }
}

export const errorWrappedModuleLogger = (moduleName: string, messages: string[]): void => {
  if (logLevels[logLevel] <= logLevels.error) {
    wrappedModuleLogger(moduleName, messages)
  }
}

export const infoLogger = (message?: any, ...optionalParams: any[]): void => {
  if (logLevels[logLevel] <= logLevels.info) {
    simpleLogger(message, ...optionalParams)
  }
}

export const infoWrappedLogger = (messages: string[]): void => {
  if (logLevels[logLevel] <= logLevels.info) {
    wrappedLogger(messages)
  }
}

export const infoModuleLogger = (moduleName: string, log: string): void => {
  if (logLevels[logLevel] <= logLevels.info) {
    moduleLogger(moduleName, log)
  }
}

export const infoWrappedModuleLogger = (moduleName: string, messages: string[]): void => {
  if (logLevels[logLevel] <= logLevels.info) {
    wrappedModuleLogger(moduleName, messages)
  }
}
