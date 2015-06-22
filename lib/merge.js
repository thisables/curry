'use strict';

exports.__esModule = true;
var _merge = function _merge(args, i) {
  return typeof i === 'undefined' ? args.shift() : i;
};

exports['default'] = function (args, curryArgs) {
  return curryArgs.map(function (i) {
    return _merge(args, i);
  }).concat(args);
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZXJnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBSSxJQUFJLEVBQUUsQ0FBQztTQUNuQixBQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsR0FDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUNaLENBQUM7Q0FBQSxDQUFDOztxQkFFUyxVQUFDLElBQUksRUFBRSxTQUFTO1NBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7V0FBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztHQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0NBQUEiLCJmaWxlIjoibGliL21lcmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IF9tZXJnZSA9IChhcmdzLCBpKSA9PlxuICAodHlwZW9mIGkgPT09ICd1bmRlZmluZWQnKT9cbiAgICBhcmdzLnNoaWZ0KCk6XG4gICAgaTtcblxuZXhwb3J0IGRlZmF1bHQgKGFyZ3MsIGN1cnJ5QXJncykgPT4gY3VycnlBcmdzLm1hcChpID0+IF9tZXJnZShhcmdzLCBpKSkuY29uY2F0KGFyZ3MpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9