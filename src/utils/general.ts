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

export const keyObjMapToList = <T>(obj: IGenericObject<T>, keyName: string, valueName: string): { [key: string]: IGenericObject<T> }[] => {
  const list= []

  Object.keys(obj).forEach((key: string) => {
    list.push({
      [keyName]: key as string,
      [valueName]: obj[key] as T,
    })
  })

  return list
}
