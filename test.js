var curry = require('./index.js'),
  sinon = require('sinon'),
  expect = require('expect.js');

function namedFunction(name) {}
describe('chickencurry', function() {
  var obj = {}, add, join;
  beforeEach(function() {
    add = function(a, b) {
      return a + b;
    };

    join = function(a, b, sep) {
      return a + sep + b;
    };
    obj.greeting = 'Hello';
    obj.greet = function(name) {
      return this.greeting + ' ' + name;
    };
  });

  it('should return a function', function() {
    expect(curry(add)).to.be.a('function');
  });

  it('should create a curryied function with the given arguments', function() {
    var add1 = curry(add, 1);
    var add12 = curry(add, 1, 2);
    var spy = sinon.spy();
    var spyCurry = curry(spy, 1, 2);

    expect(add1(2)).to.equal(3);
    expect(add1(3)).to.equal(4);
    expect(add12()).to.equal(3);
    spyCurry();
    expect(spy.calledWith(1, 2)).to.be.ok();
    spyCurry(3);
    expect(spy.calledWith(1, 2, 3)).to.be.ok();
  });

  it('should have a placeholder variable', function() {
    expect(curry.__).to.be(undefined);
  });

  it('should create a curryied function using a placeholder', function() {
    var __ = curry.__;
    var join_ = curry(join, __, __, '_');
    var join_A = curry(join, __, 'A', '_');
    var join_B = curry(join, undefined, 'B', '_');
    var joinA_ = curry(join, 'A', __, '_');
    var spy = sinon.spy();
    var spyCurry = curry(spy, __, 2);

    expect(join_('a', 'b')).to.equal('a_b');
    expect(join_A('a')).to.equal('a_A');
    expect(join_A('b')).to.equal('b_A');
    expect(join_B('b')).to.equal('b_B');
    expect(joinA_('a')).to.equal('A_a');
    spyCurry(1);
    expect(spy.calledWith(1, 2)).to.be.ok();
    spyCurry(1, 3);
    expect(spy.calledWith(1, 2, 3)).to.be.ok();
  });

  it('should keep the scope of a function', function() {
    var greetChicken = curry(obj.greet.bind(obj), 'Chicken');

    expect(greetChicken()).to.equal('Hello Chicken');
  });
});
