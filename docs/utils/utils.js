"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var isEmpty = require('lodash/isEmpty');
var folders = [];
exports.isDirectory = function (value) {
    return fs.statSync(value).isDirectory();
};
exports.getVaildFolders = function () {
    if (!isEmpty(folders)) {
        return folders;
    }
    var allFolders = fs.readdirSync(config_1.rootPath);
    var valildFolders = allFolders
        .filter(function (v) {
        var isVaild = config_1.ignoreFolders.indexOf(v) === -1;
        return isVaild;
    })
        .map(function (v) {
        return config_1.rootPath + "/" + v;
    })
        .filter(function (v) {
        return exports.isDirectory(v);
    });
    folders = valildFolders;
    return valildFolders;
};
exports.isMdFiles = function (value) {
    return path.extname(value).toLowerCase() === '.md';
};
