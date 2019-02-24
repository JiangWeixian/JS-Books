import { getVaildFolders, isDirectory, isMdFiles } from './utils'
import * as fs from 'fs'

const isEmpty = require('lodash/isEmpty')

export const rename = (value: string[] = getVaildFolders()) => {
  value.forEach(parentPath => {
    let childFolders = fs
      .readdirSync(parentPath)
      .filter(e => isDirectory(`${parentPath}/${e}`))
    if (!isEmpty(childFolders)) {
      childFolders.forEach(folder => {
        let files = fs
          .readdirSync(`${parentPath}/${folder}`)
          .filter(e => isMdFiles(e) && e === 'README.md')
        files.forEach(e => {
          const childFolderPath = `${parentPath}/${folder}`
          const filePath = `${childFolderPath}/${e}`
          const _filePath = `${childFolderPath}/${folder}.md`
          fs.renameSync(filePath, _filePath)
        })
      })
    }
  })
}

rename()
