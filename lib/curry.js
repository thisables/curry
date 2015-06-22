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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvY3VycnkuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxQkFJd0IsS0FBSzs7Ozs7aUNBSkMscUJBQXFCOzs7O3FCQUNqQyxTQUFTOzs7O0FBR1osU0FBUyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFDbkQsU0FBTyxZQUFhO3NDQUFULElBQUk7QUFBSixVQUFJOzs7QUFDYixRQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNyQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVsQixRQUFJLE1BQU0sSUFBSSwrQkFBa0IsVUFBVSxDQUFDLEVBQUU7QUFDM0MsZ0JBQVUsR0FBRyxtQkFBTSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDcEMsYUFBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNuQyxNQUFNO0FBQ0wsVUFBSSxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUMvQixlQUFPLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO09BQ3RDLE1BQU07QUFDTCxlQUFPLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLG1CQUFNLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO09BQ2xEO0tBQ0Y7R0FDRixDQUFDO0NBQ0giLCJmaWxlIjoic3JjL2xpYi9jdXJyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3VudERlZmluZWRJdGVtcyBmcm9tICcuL2NvdW50RGVmaW5lZEl0ZW1zJztcbmltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeShmbiwgbGVuZ3RoLCBjdXJyeUFyZ3MpIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgdmFyIGNvbmNhdEFyZ3MgPSBjdXJyeUFyZ3MuY29uY2F0KGFyZ3MpLFxuICAgICAgbWVyZ2VkQXJncyA9IFtdO1xuXG4gICAgaWYgKGxlbmd0aCA8PSBjb3VudERlZmluZWRJdGVtcyhjb25jYXRBcmdzKSkge1xuICAgICAgbWVyZ2VkQXJncyA9IG1lcmdlKGFyZ3MsIGN1cnJ5QXJncyk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgbWVyZ2VkQXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChsZW5ndGggPj0gY29uY2F0QXJncy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJ5KGZuLCBsZW5ndGgsIGNvbmNhdEFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGN1cnJ5KGZuLCBsZW5ndGgsIG1lcmdlKGFyZ3MsIGN1cnJ5QXJncykpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9