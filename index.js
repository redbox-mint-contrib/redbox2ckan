module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash/lodash.min.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedboxToCkan = undefined;

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(2);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(3);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(5);

var _api = __webpack_require__(9);

var _builder = __webpack_require__(10);

var _url = __webpack_require__(6);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedboxToCkan = function () {
  function RedboxToCkan(redboxConfig) {
    (0, _classCallCheck3.default)(this, RedboxToCkan);

    this.redboxConfig = redboxConfig;
    this.ownerOrgId = redboxConfig.ckan.ownerOrgId;
    this.api = new _api.Api(redboxConfig.ckan);
  }

  (0, _createClass3.default)(RedboxToCkan, [{
    key: 'createAllRedboxDatasets',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(redboxRecords) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, redboxRecord, ckanPackage, response;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.checkAndSetOrganization();

              case 2:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 5;
                _iterator = (0, _getIterator3.default)(redboxRecords);

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 23;
                  break;
                }

                redboxRecord = _step.value;
                ckanPackage = this.buildCkanPackage(redboxRecord);
                _context.next = 12;
                return this.api.createPackage(ckanPackage);

              case 12:
                response = _context.sent;

                if (this.api.isResponseOk(response)) {
                  _context.next = 17;
                  break;
                }

                console.log('Error: ', response);
                _context.next = 20;
                break;

              case 17:
                console.log(response.data);
                _context.next = 20;
                return this.createAllRedboxDataLocations(response, redboxRecord);

              case 20:
                _iteratorNormalCompletion = true;
                _context.next = 7;
                break;

              case 23:
                _context.next = 29;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context['catch'](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 29:
                _context.prev = 29;
                _context.prev = 30;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 32:
                _context.prev = 32;

                if (!_didIteratorError) {
                  _context.next = 35;
                  break;
                }

                throw _iteratorError;

              case 35:
                return _context.finish(32);

              case 36:
                return _context.finish(29);

              case 37:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 25, 29, 37], [30,, 32, 36]]);
      }));

      function createAllRedboxDatasets(_x) {
        return _ref.apply(this, arguments);
      }

      return createAllRedboxDatasets;
    }()
  }, {
    key: 'buildCkanPackage',
    value: function buildCkanPackage(redboxRecord) {
      return new _builder.Builder.ckanPackage(redboxRecord).ownerOrg(this.ownerOrgId).build();
    }
  }, {
    key: 'createAllRedboxDataLocations',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(response, redboxRecord) {
        var packageId, ckanResources, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, resource, _response;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                packageId = response.data.result.id;
                ckanResources = this.buildCkanResources(redboxRecord, packageId);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 5;
                _iterator2 = (0, _getIterator3.default)(ckanResources);

              case 7:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context2.next = 16;
                  break;
                }

                resource = _step2.value;
                _context2.next = 11;
                return this.api.createResource(resource);

              case 11:
                _response = _context2.sent;

                if (!this.api.isResponseOk(_response)) {
                  console.log('Error: ', _response);
                }

              case 13:
                _iteratorNormalCompletion2 = true;
                _context2.next = 7;
                break;

              case 16:
                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2['catch'](5);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 22:
                _context2.prev = 22;
                _context2.prev = 23;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 25:
                _context2.prev = 25;

                if (!_didIteratorError2) {
                  _context2.next = 28;
                  break;
                }

                throw _iteratorError2;

              case 28:
                return _context2.finish(25);

              case 29:
                return _context2.finish(22);

              case 30:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 18, 22, 30], [23,, 25, 29]]);
      }));

      function createAllRedboxDataLocations(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return createAllRedboxDataLocations;
    }()
  }, {
    key: 'buildCkanResources',
    value: function buildCkanResources(redboxRecord, packageId) {
      return new _builder.Builder.allCkanResources(redboxRecord.metadata.dataLocations).packageId(packageId).url(this.getRedboxUrl()).build();
    }
  }, {
    key: 'getRedboxUrl',
    value: function getRedboxUrl() {
      return _url2.default.resolve(this.redboxConfig.urlBase, '/default/rdmp/');
    }
  }, {
    key: 'checkAndSetOrganization',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var id, hasOrganization, response;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = this.ownerOrgId;
                _context3.next = 3;
                return this.api.hasOrganization(id);

              case 3:
                hasOrganization = _context3.sent;

                if (hasOrganization) {
                  _context3.next = 11;
                  break;
                }

                console.log('organization, ' + id + ', does not exist. Creating...');
                _context3.next = 8;
                return this.api.createOrganization(id);

              case 8:
                response = _context3.sent;

                if (this.api.isResponseOk(response)) {
                  _context3.next = 11;
                  break;
                }

                throw new Error('Unable to create org: ' + this.ownerOrgId, response);

              case 11:
                console.log('organization id, ' + id + ', created.');

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function checkAndSetOrganization() {
        return _ref3.apply(this, arguments);
      }

      return checkAndSetOrganization;
    }()
  }]);
  return RedboxToCkan;
}();

exports.RedboxToCkan = RedboxToCkan;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Adapter = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _url = __webpack_require__(6);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Adapter = function () {
  function Adapter() {
    (0, _classCallCheck3.default)(this, Adapter);
  }

  (0, _createClass3.default)(Adapter, null, [{
    key: 'redboxToCkanPackage',
    value: function redboxToCkanPackage(data) {
      var dataset = _.assign({}, data.dataset);
      var ckan = {
        name: dataset.redboxOid,
        title: dataset.metadata.title,
        author: dataset.metaMetadata.createdBy,
        notes: dataset.metadata.description,
        owner_org: data.ownerOrgId
      };
      return ckan;
    }
  }, {
    key: 'redboxDataLocationToCkanResource',
    value: function redboxDataLocationToCkanResource(data) {
      var dataset = _.assign({}, data.dataset);
      var ckan = {
        name: dataset.name,
        format: dataset.mimeType,
        package_id: data.packageId
      };
      ckan.url = dataset.type !== 'url' ? _url2.default.resolve(data.urlBase, dataset.location) : dataset.location;
      return ckan;
    }
  }]);
  return Adapter;
}();

exports.Adapter = Adapter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = undefined;

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(3);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

__webpack_require__(5);

var _restErrorHandler = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Api = function () {
  function Api(config) {
    (0, _classCallCheck3.default)(this, Api);

    this.baseUrl = config.urlBase;
    this._api = _axios2.default.create({
      baseURL: this.baseUrl + '/api/action',
      timeout: 10000,
      headers: {
        common: {
          'Authorization': '' + config.apiKey
        }
      }
    });
    this.restErrorHandler = new _restErrorHandler.RestErrorHandler();
  }

  (0, _createClass3.default)(Api, [{
    key: 'getGroupList',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getFromCkan('/group_list');

              case 2:
                response = _context.sent;
                return _context.abrupt('return', response);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getGroupList() {
        return _ref.apply(this, arguments);
      }

      return getGroupList;
    }()
  }, {
    key: 'isResponseOk',
    value: function isResponseOk(response) {
      return response.status === 200;
    }
  }, {
    key: 'hasOrganization',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(value) {
        var response;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getOrganization(value);

              case 2:
                response = _context2.sent;
                return _context2.abrupt('return', this.isResponseOk(response));

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function hasOrganization(_x) {
        return _ref2.apply(this, arguments);
      }

      return hasOrganization;
    }()
  }, {
    key: 'getOrganization',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(value) {
        var response;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getFromCkan('/organization_show', {
                  id: value
                });

              case 2:
                response = _context3.sent;
                return _context3.abrupt('return', response);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getOrganization(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getOrganization;
    }()
  }, {
    key: 'getOrganization',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(value) {
        var response;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getFromCkan('/organization_show', {
                  id: value
                });

              case 2:
                response = _context4.sent;
                return _context4.abrupt('return', response);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getOrganization(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getOrganization;
    }()
  }, {
    key: 'createOrganization',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(value) {
        var response;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.postToCkan('/organization_create', {
                  name: value
                });

              case 2:
                response = _context5.sent;
                return _context5.abrupt('return', response);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createOrganization(_x4) {
        return _ref5.apply(this, arguments);
      }

      return createOrganization;
    }()
  }, {
    key: 'deleteOrganization',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(value) {
        var response;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.postToCkan('/organization_delete', {
                  id: value
                });

              case 2:
                response = _context6.sent;
                return _context6.abrupt('return', response);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function deleteOrganization(_x5) {
        return _ref6.apply(this, arguments);
      }

      return deleteOrganization;
    }()
  }, {
    key: 'purgeOrganization',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(value) {
        var response;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.postToCkan('/organization_purge', {
                  id: value
                });

              case 2:
                response = _context7.sent;
                return _context7.abrupt('return', response);

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function purgeOrganization(_x6) {
        return _ref7.apply(this, arguments);
      }

      return purgeOrganization;
    }()

    // NB: 'deletes', not purges

  }, {
    key: 'deletePackage',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(value) {
        var response;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.postToCkan('/package_delete', {
                  id: value
                });

              case 2:
                response = _context8.sent;
                return _context8.abrupt('return', response);

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function deletePackage(_x7) {
        return _ref8.apply(this, arguments);
      }

      return deletePackage;
    }()
  }, {
    key: 'purgePackage',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(value) {
        var response;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.postToCkan('/dataset_purge', {
                  id: value
                });

              case 2:
                response = _context9.sent;
                return _context9.abrupt('return', response);

              case 4:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function purgePackage(_x8) {
        return _ref9.apply(this, arguments);
      }

      return purgePackage;
    }()
  }, {
    key: 'createPackage',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(value) {
        var response;
        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.postToCkan('/package_create', value);

              case 2:
                response = _context10.sent;
                return _context10.abrupt('return', response);

              case 4:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function createPackage(_x9) {
        return _ref10.apply(this, arguments);
      }

      return createPackage;
    }()
  }, {
    key: 'createResource',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(value) {
        var response;
        return _regenerator2.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.postToCkan('/resource_create', value);

              case 2:
                response = _context11.sent;
                return _context11.abrupt('return', response);

              case 4:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function createResource(_x10) {
        return _ref11.apply(this, arguments);
      }

      return createResource;
    }()
  }, {
    key: 'postToCkan',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(path, data) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var response;
        return _regenerator2.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                response = void 0;
                _context12.prev = 1;
                _context12.next = 4;
                return this._api.post(path, data, {
                  params: params
                });

              case 4:
                response = _context12.sent;
                _context12.next = 10;
                break;

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12['catch'](1);

                response = this.restErrorHandler.showResponseDataError(_context12.t0);

              case 10:
                _context12.prev = 10;
                return _context12.abrupt('return', response);

              case 13:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this, [[1, 7, 10, 13]]);
      }));

      function postToCkan(_x11, _x12) {
        return _ref12.apply(this, arguments);
      }

      return postToCkan;
    }()
  }, {
    key: 'getFromCkan',
    value: function () {
      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(path) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var response;
        return _regenerator2.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                response = void 0;
                _context13.prev = 1;
                _context13.next = 4;
                return this._api.get(path, {
                  params: params
                });

              case 4:
                response = _context13.sent;
                _context13.next = 10;
                break;

              case 7:
                _context13.prev = 7;
                _context13.t0 = _context13['catch'](1);

                response = this.restErrorHandler.showResponseDataError(_context13.t0);

              case 10:
                _context13.prev = 10;
                return _context13.abrupt('return', response);

              case 13:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this, [[1, 7, 10, 13]]);
      }));

      function getFromCkan(_x14) {
        return _ref13.apply(this, arguments);
      }

      return getFromCkan;
    }()
  }]);
  return Api;
}();

exports.Api = Api;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Builder = undefined;

var _getIterator2 = __webpack_require__(2);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _adapter = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Builder = function () {
  function Builder() {
    (0, _classCallCheck3.default)(this, Builder);
  }

  (0, _createClass3.default)(Builder, null, [{
    key: 'ckanPackage',
    get: function get() {
      var RedboxToCkanPackage = function () {
        function RedboxToCkanPackage(dataset) {
          (0, _classCallCheck3.default)(this, RedboxToCkanPackage);

          this.dataset = _.assign({}, dataset);
        }

        (0, _createClass3.default)(RedboxToCkanPackage, [{
          key: 'ownerOrg',
          value: function ownerOrg(id) {
            this.ownerOrgId = id;
            return this;
          }
        }, {
          key: 'build',
          value: function build() {
            return _adapter.Adapter.redboxToCkanPackage(this);
          }
        }]);
        return RedboxToCkanPackage;
      }();

      return RedboxToCkanPackage;
    }
  }, {
    key: 'ckanResource',
    get: function get() {
      var RedboxDataLocationToCkanResource = function () {
        function RedboxDataLocationToCkanResource(dataset) {
          (0, _classCallCheck3.default)(this, RedboxDataLocationToCkanResource);

          this.dataset = _.assign({}, dataset);
        }

        (0, _createClass3.default)(RedboxDataLocationToCkanResource, [{
          key: 'packageId',
          value: function packageId(id) {
            this.packageId = id;
            return this;
          }
        }, {
          key: 'url',
          value: function url(urlBase) {
            this.urlBase = urlBase;
            return this;
          }
        }, {
          key: 'build',
          value: function build() {
            return _adapter.Adapter.redboxDataLocationToCkanResource(this);
          }
        }]);
        return RedboxDataLocationToCkanResource;
      }();

      return RedboxDataLocationToCkanResource;
    }
  }, {
    key: 'allCkanResources',
    get: function get() {
      var AllRedboxDataLocationsToCkanResources = function () {
        function AllRedboxDataLocationsToCkanResources(datasets) {
          (0, _classCallCheck3.default)(this, AllRedboxDataLocationsToCkanResources);

          this.datasets = datasets;
        }

        (0, _createClass3.default)(AllRedboxDataLocationsToCkanResources, [{
          key: 'packageId',
          value: function packageId(id) {
            this.packageId = id;
            return this;
          }
        }, {
          key: 'url',
          value: function url(urlBase) {
            this.urlBase = urlBase;
            return this;
          }
        }, {
          key: 'build',
          value: function build() {
            var allCkanResources = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = (0, _getIterator3.default)(this.datasets), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var dataset = _step.value;

                allCkanResources.push(new Builder.ckanResource(dataset).packageId(this.packageId).url(this.urlBase).build());
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return allCkanResources;
          }
        }]);
        return AllRedboxDataLocationsToCkanResources;
      }();

      return AllRedboxDataLocationsToCkanResources;
    }
  }]);
  return Builder;
}();

exports.Builder = Builder;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redboxToCkan = __webpack_require__(7);
module.exports = {
  RedboxToCkan: redboxToCkan
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestErrorHandler = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RestErrorHandler = function () {
  function RestErrorHandler() {
    (0, _classCallCheck3.default)(this, RestErrorHandler);
  }

  (0, _createClass3.default)(RestErrorHandler, [{
    key: 'showResponse',
    value: function showResponse(error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  }, {
    key: 'showResponseDataError',
    value: function showResponseDataError(error) {
      if (error.response) {
        console.log(error.response.data.error);
        return error.response;
      }
    }
  }, {
    key: 'debugError',
    value: function debugError(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }]);
  return RestErrorHandler;
}();

exports.RestErrorHandler = RestErrorHandler;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);