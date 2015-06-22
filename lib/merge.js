'use strict';

exports.__esModule = true;
var _merge = function _merge(args, i) {
  return typeof i === 'undefined' ? args.shift() : i;
};

/* istanbul ignore next */

exports['default'] = function (args, curryArgs) {
  return (function () {
    var _concat = [];

    for (var _iterator = curryArgs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var i = _ref;

      _concat.push(_merge(args, i));
    }

    return _concat;
  })().concat(args);
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvbWVyZ2UuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFJLElBQUksRUFBRSxDQUFDO1NBQ25CLEFBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxHQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFLEdBQ1osQ0FBQztDQUFBLENBQUM7Ozs7cUJBR1MsVUFBQyxJQUFJLEVBQUUsU0FBUztTQUM3Qjs7O3lCQUFXLFNBQVM7Ozs7Ozs7Ozs7OztVQUFkLENBQUM7O21CQUFlLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7O09BQUUsTUFBTSxDQUFDLElBQUksQ0FBQztDQUFBIiwiZmlsZSI6InNyYy9saWIvbWVyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgX21lcmdlID0gKGFyZ3MsIGkpID0+XG4gICh0eXBlb2YgaSA9PT0gJ3VuZGVmaW5lZCcpP1xuICAgIGFyZ3Muc2hpZnQoKTpcbiAgICBpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGRlZmF1bHQgKGFyZ3MsIGN1cnJ5QXJncykgPT5cbiAgW2ZvciAoaSBvZiBjdXJyeUFyZ3MpIF9tZXJnZShhcmdzLCBpKV0uY29uY2F0KGFyZ3MpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9