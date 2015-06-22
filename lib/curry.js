'use strict';

exports.__esModule = true;
exports['default'] = curry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _countDefinedItems = require('./countDefinedItems');

var _countDefinedItems2 = _interopRequireDefault(_countDefinedItems);

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

function curry(fn, length, curryArgs) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var concatArgs = curryArgs.concat(args),
        mergedArgs = [];

    if (length <= _countDefinedItems2['default'](concatArgs)) {
      mergedArgs = _merge2['default'](args, curryArgs);
      return fn.apply(null, mergedArgs);
    } else {
      if (length >= concatArgs.length) {
        return curry(fn, length, concatArgs);
      } else {
        return curry(fn, length, _merge2['default'](args, curryArgs));
      }
    }
  };
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvY3VycnkuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxQkFJd0IsS0FBSzs7OztpQ0FKQyxxQkFBcUI7Ozs7cUJBQ2pDLFNBQVM7Ozs7QUFHWixTQUFTLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtBQUNuRCxTQUFPLFlBQWE7c0NBQVQsSUFBSTtBQUFKLFVBQUk7OztBQUNiLFFBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3JDLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRWxCLFFBQUksTUFBTSxJQUFJLCtCQUFrQixVQUFVLENBQUMsRUFBRTtBQUMzQyxnQkFBVSxHQUFHLG1CQUFNLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNwQyxhQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ25DLE1BQU07QUFDTCxVQUFJLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQy9CLGVBQU8sS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7T0FDdEMsTUFBTTtBQUNMLGVBQU8sS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsbUJBQU0sSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7T0FDbEQ7S0FDRjtHQUNGLENBQUM7Q0FDSCIsImZpbGUiOiJzcmMvbGliL2N1cnJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvdW50RGVmaW5lZEl0ZW1zIGZyb20gJy4vY291bnREZWZpbmVkSXRlbXMnO1xuaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5KGZuLCBsZW5ndGgsIGN1cnJ5QXJncykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICB2YXIgY29uY2F0QXJncyA9IGN1cnJ5QXJncy5jb25jYXQoYXJncyksXG4gICAgICBtZXJnZWRBcmdzID0gW107XG5cbiAgICBpZiAobGVuZ3RoIDw9IGNvdW50RGVmaW5lZEl0ZW1zKGNvbmNhdEFyZ3MpKSB7XG4gICAgICBtZXJnZWRBcmdzID0gbWVyZ2UoYXJncywgY3VycnlBcmdzKTtcbiAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBtZXJnZWRBcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxlbmd0aCA+PSBjb25jYXRBcmdzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gY3VycnkoZm4sIGxlbmd0aCwgY29uY2F0QXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY3VycnkoZm4sIGxlbmd0aCwgbWVyZ2UoYXJncywgY3VycnlBcmdzKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=