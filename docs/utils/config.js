"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
exports.rootPath = path.resolve(__dirname, '../');
exports.ignoreFolders = [
    'utils',
    '.vuepress',
    'Menus',
    'Guide'
];
var config_1 = require("../config");
exports.base = config_1.base;
