export interface IDynamicObject {
  [key: string]: any
}

export interface IGenericObject<T> {
  [key: string]: T
}
