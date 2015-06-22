'use strict';

exports.__esModule = true;
exports['default'] = curry;
// istanbul ignore next

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jdXJyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUJBSXdCLEtBQUs7Ozs7O2lDQUpDLHFCQUFxQjs7OztxQkFDakMsU0FBUzs7OztBQUdaLFNBQVMsS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO0FBQ25ELFNBQU8sWUFBYTtzQ0FBVCxJQUFJO0FBQUosVUFBSTs7O0FBQ2IsUUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDckMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFbEIsUUFBSSxNQUFNLElBQUksK0JBQWtCLFVBQVUsQ0FBQyxFQUFFO0FBQzNDLGdCQUFVLEdBQUcsbUJBQU0sSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLGFBQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDbkMsTUFBTTtBQUNMLFVBQUksTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDL0IsZUFBTyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztPQUN0QyxNQUFNO0FBQ0wsZUFBTyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxtQkFBTSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztPQUNsRDtLQUNGO0dBQ0YsQ0FBQztDQUNIIiwiZmlsZSI6ImxpYi9jdXJyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3VudERlZmluZWRJdGVtcyBmcm9tICcuL2NvdW50RGVmaW5lZEl0ZW1zJztcbmltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeShmbiwgbGVuZ3RoLCBjdXJyeUFyZ3MpIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgdmFyIGNvbmNhdEFyZ3MgPSBjdXJyeUFyZ3MuY29uY2F0KGFyZ3MpLFxuICAgICAgbWVyZ2VkQXJncyA9IFtdO1xuXG4gICAgaWYgKGxlbmd0aCA8PSBjb3VudERlZmluZWRJdGVtcyhjb25jYXRBcmdzKSkge1xuICAgICAgbWVyZ2VkQXJncyA9IG1lcmdlKGFyZ3MsIGN1cnJ5QXJncyk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgbWVyZ2VkQXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChsZW5ndGggPj0gY29uY2F0QXJncy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJ5KGZuLCBsZW5ndGgsIGNvbmNhdEFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGN1cnJ5KGZuLCBsZW5ndGgsIG1lcmdlKGFyZ3MsIGN1cnJ5QXJncykpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9