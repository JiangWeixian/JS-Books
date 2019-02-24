import { rootPath, ignoreFolders } from './config'
import * as fs from 'fs'
import * as path from 'path'

const isEmpty = require('lodash/isEmpty')

var folders: string[] = []

export const isDirectory = (value: string) => {
  return fs.statSync(value).isDirectory()
}

export const getVaildFolders = () => {
  if (!isEmpty(folders)) {
    return folders
  }
  const allFolders: string[] = fs.readdirSync(rootPath)
  const valildFolders = allFolders
    .filter(v => {
      const isVaild = ignoreFolders.indexOf(v) === -1
      return isVaild
    })
    .map(v => {
      return `${rootPath}/${v}`
    })
    .filter(v => {
      return isDirectory(v)
    })
  folders = valildFolders
  return valildFolders
}

export const isMdFiles = (value: string) => {
  return path.extname(value).toLowerCase() === '.md'
}
