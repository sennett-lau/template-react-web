export interface IDynamicObject {
  [key: string]: any
}

export interface IGenericObject<T> {
  [key: string]: T
}

export interface ILogLevels {
  verbose: number
  debug: number
  info: number
  error: number
  none: number
}
