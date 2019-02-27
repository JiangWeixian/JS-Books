"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var fs = __importStar(require("fs"));
var isEmpty = require('lodash/isEmpty');
exports.rename = function (value) {
    if (value === void 0) { value = utils_1.getVaildFolders(); }
    value.forEach(function (parentPath) {
        var childFolders = fs
            .readdirSync(parentPath)
            .filter(function (e) { return utils_1.isDirectory(parentPath + "/" + e); });
        if (!isEmpty(childFolders)) {
            childFolders.forEach(function (folder) {
                var files = fs
                    .readdirSync(parentPath + "/" + folder)
                    .filter(function (e) { return utils_1.isMdFiles(e) && e === 'README.md'; });
                files.forEach(function (e) {
                    var childFolderPath = parentPath + "/" + folder;
                    var filePath = childFolderPath + "/" + e;
                    var _filePath = childFolderPath + "/" + folder + ".md";
                    fs.renameSync(filePath, _filePath);
                });
            });
        }
    });
};
exports.rename();
