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
var formater_1 = require("./formater");
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var isEmpty = require('lodash/isEmpty');
exports.getChildMenus = function (dirPath) {
    var menus = [];
    var _files = fs
        .readdirSync(dirPath);
    _files.forEach(function (e) {
        if (utils_1.isDirectory(dirPath + "/" + e) && e !== 'node_modules') {
            menus = menus.concat(exports.getChildMenus(dirPath + "/" + e));
        }
        else {
            var isVaild = utils_1.isMdFiles(e) && e !== 'README.md';
            isVaild && formater_1.amendPathName([e], dirPath);
            var dirFolder = path.basename(dirPath);
            isVaild && menus.push(dirFolder + "/" + e.slice(0, e.length - 3).trim());
        }
    });
    return menus;
};
exports.getMenus = function () {
    var valildFolders = utils_1.getVaildFolders();
    var menus = {};
    valildFolders.forEach(function (dirpath) {
        var _files = fs
            .readdirSync(dirpath);
        var _folders = _files.filter(function (v) { return utils_1.isDirectory(dirpath + "/" + v); });
        _files = _files.filter(function (v) { return utils_1.isMdFiles(v) && v !== 'README.md'; });
        _files = formater_1.amendPathName(_files, dirpath)
            .map(function (v) { return v.slice(0, v.length - 3).trim(); });
        var _folderName = path.basename(dirpath);
        _files = [''].concat(_files);
        menus[formater_1.createRouterUrl(_folderName)] = _files;
        if (!isEmpty(_folders)) {
            var childMenus_1 = [];
            _folders.forEach(function (e) {
                childMenus_1 = childMenus_1.concat(exports.getChildMenus(dirpath + "/" + e));
            });
            if (!isEmpty(childMenus_1)) {
                menus[formater_1.createRouterUrl(_folderName)] = _files.concat(childMenus_1);
            }
        }
    });
    return menus;
};
console.log(exports.getMenus());
