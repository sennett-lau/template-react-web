import { IDynamicObject, IGenericObject } from '../types'

export const listToObjMap = <T>(list: IDynamicObject[], key: string): IGenericObject<T> => {
  const obj: IGenericObject<T> = {}

  list.forEach((item: IDynamicObject) => {
    obj[item[key]] = item as T
  })

  return obj
}

export const objMapToList = <T>(obj: IGenericObject<T>): T[] => {
  // this function will ignore the key and only push the value to the list
  // { key1: value1, key2: value2 } => [value1, value2]

  const list: T[] = []

  Object.keys(obj).forEach((key: string) => {
    list.push(obj[key])
  })

  return list
}

export const keyObjMapToList = <T>(obj: IGenericObject<T>, keyName: string, valueName: string): { [key: string]: IGenericObject<T> }[] => {
  // this function will push the key and value to the list
  // keyName = 'key', valueName = 'value'
  // { key1: value1, key2: value2 } => [{ key: key1, value: value1 }, { key: key2, value: value2 }]

  const list= []

  Object.keys(obj).forEach((key: string) => {
    list.push({
      [keyName]: key as string,
      [valueName]: obj[key] as T,
    })
  })

  return list
}
