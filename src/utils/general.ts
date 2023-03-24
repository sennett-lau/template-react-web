import { IDynamicObject, IGenericObject } from '../types'

export const listToObjMap = <T>(list: IDynamicObject[], key: string): IGenericObject<T> => {
  const obj: IGenericObject<T> = {}

  list.forEach((item: IDynamicObject) => {
    obj[item[key]] = item as T
  })

  return obj
}

export const objMapToList = <T>(obj: IGenericObject<T>): T[] => {
  const list: T[] = []

  Object.keys(obj).forEach((key: string) => {
    list.push(obj[key])
  })

  return list
}
