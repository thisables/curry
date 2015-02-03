var curry = require('./index.js'),
  sinon = require('sinon'),
  expect = require('expect.js'),
  obj;

function add(a, b) {
  return a + b;
}

function join(a, b, sep) {
  return a + sep + b;
}

function joinArgs() {
  return Array.prototype.slice.call(arguments).join();
}

obj = {
  greeting : 'Hello',

  greet : function(name) {
    return this.greeting + ' ' + name;
  }
};

describe('chickencurry', () => {
  it('should return a function', () => {
    expect(curry(add)).to.be.a('function');
  });

  it('should create a curryied function with the given arguments', () => {
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

  it('should have a placeholder variable', () => {
    expect(curry.__).to.be(undefined);
  });

  it('should create a curryied function using a placeholder', () => {
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

  it('should keep the scope of a function', () => {
    var greetChicken = curry(obj.greet.bind(obj), 'Chicken');

    expect(greetChicken()).to.equal('Hello Chicken');
  });

  it('should wrap the function if no argument to curry is passed', () => {
    var __ = curry.__;
    var addCurry = curry(add);
    var joinCurry = curry(join);
    var joinDot = curry(join, '.');

    expect(addCurry).to.be.a('function');
    expect(addCurry(1)).to.be.a('function');
    expect(addCurry(1, 2)).to.equal(3);
    expect(addCurry(1)(2)).to.equal(3);
    expect(addCurry(__, 2)(1)).to.equal(3);
    expect(addCurry(__)(2)(1)).to.equal(3);
    expect(addCurry(2, __)(1)).to.equal(3);
    expect(addCurry(2)(__)(1)).to.equal(3);

    expect(joinCurry).to.be.a('function');
    expect(joinCurry('_')).to.be.a('function');
    expect(joinCurry('_', '_')).to.be.a('function');
    expect(joinCurry('_', '_', 'chicken')).to.equal('_chicken_');
    expect(joinCurry('_')('_')).to.be.a('function');
    expect(joinCurry('_', '_')('chicken')).to.equal('_chicken_');
    expect(joinCurry('_')('_')('chicken')).to.equal('_chicken_');
    expect(joinCurry('_')('_', 'fish')).to.equal('_fish_');

    expect(joinCurry(__)).to.be.a('function');
    expect(joinCurry(__, '_')).to.be.a('function');
    expect(joinCurry(__, '_', 'chicken')).to.be.a('function');
    expect(joinCurry(__, '_', 'chicken')('_')).to.equal('_chicken_');
    expect(joinCurry(__)('_')).to.be.a('function');
    expect(joinCurry(__, '_')('chicken')).to.be.a('function');
    expect(joinCurry(__, '_')('chicken')('$')).to.equal('$chicken_');

    expect(joinCurry(curry.__, '_')('_', 'chicken')).to.equal('_chicken_');
    expect(joinCurry('_', curry.__)('-', 'chicken')).to.equal('_chicken-');
    expect(joinCurry(curry.__)('.')('curry')('$')).to.equal('$curry.');
    expect(joinCurry('_', curry.__, 'chicken')('-')).to.equal('_chicken-');
    expect(joinCurry(curry.__, '_', 'chicken')('-')).to.equal('-chicken_');

    expect(joinDot('$', 'chicken')).to.equal('.chicken$');
    expect(joinDot('$')('chicken')).to.equal('.chicken$');
    expect(joinDot(__, 'chicken')('$')).to.equal('.chicken$');
    expect(joinDot(__)('chicken')('$')).to.equal('.chicken$');
    expect(joinDot('$', __)('chicken')).to.equal('.chicken$');
    expect(joinDot('$')(__)('chicken')).to.equal('.chicken$');
    expect(joinDot(__, __)('$', 'chicken')).to.equal('.chicken$');
    expect(joinDot(__, __)('$')('chicken')).to.equal('.chicken$');
    expect(joinDot(__)(__)('$', 'chicken')).to.equal('.chicken$');
    expect(joinDot(__)(__)('$')('chicken')).to.equal('.chicken$');
  });

  it('should be possible to curry arguments of any type', () => {
    var ajax = function(config, callback) {
      callback('response for: ' + config.url);
    };
    var spy = sinon.spy();
    var ajaxSpy = curry(ajax, curry.__, spy);
    var ajaxGoogle = curry(ajax, {
      url: 'google.ch'
    });

    ajaxSpy({
      url: 'stoeffel.ch'
    });
    expect(spy.calledWith('response for: stoeffel.ch')).to.be.ok();

    ajaxGoogle(function(response) {
      expect(response).to.equal('response for: google.ch');
    });
  });

  it('should curry n arguments', () => {
    expect(curry.n(joinArgs, 1)(4)).to.equal('4');
    expect(curry.n(joinArgs, 2)(1, 2)).to.equal('1,2');
    expect(curry.n(joinArgs, 4)(1, 2, 3)(4)).to.equal('1,2,3,4');
    expect(curry.n(joinArgs, 4)(1)(2)(3)(4)).to.equal('1,2,3,4');
    expect(curry.n(joinArgs, 4, 1, 2, 3)(4)).to.equal('1,2,3,4');
    expect(curry.n(joinArgs, 4, void 0, 2, 3, 4)(0)).to.equal('0,2,3,4');
  });
});
