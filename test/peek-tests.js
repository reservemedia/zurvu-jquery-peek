describe('jQuery#peek', function () {

  var elem;

  beforeEach(function () {

    elem = $('<div id="mocha-test">Test</div>');

    elem.appendTo('body');

  });

  afterEach(function () {
    $(window).off('scroll');
    elem.remove();
    elem = null;
  });

  it('should be chainable', function () {

    elem.peek().should.equal(elem);

  });

  it('should toggle class', function () {

    elem.peek({
      triggerDelta: 50,
      toggleClass: 'toggledClass'
    });

    var scrollPoint = 0,
        scrollStub = sinon.stub(jQuery.prototype, 'scrollTop', function () { return scrollPoint; });

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;

    scrollPoint = 55;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.be.ok;

    scrollPoint = 40;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.be.ok;

    scrollPoint = 0;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;

    scrollPoint = 49;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;

    scrollPoint = -50;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;

    scrollPoint = 0;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;


    scrollStub.restore();

  });

  it('show show when scrolling down', function () {

    elem.peek({
      triggerDelta: 50,
      toggleClass: 'toggledClass',
      showDirection: 'down'
    });

    var scrollPoint = 0,
        scrollStub = sinon.stub(jQuery.prototype, 'scrollTop', function () { return scrollPoint; });

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;

    scrollPoint = 55;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;

    scrollPoint = 40;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;

    scrollPoint = 0;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.be.ok;


    scrollPoint = 49;

    $(window).trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.be.ok;

    scrollStub.restore();

  });

  it('can have scroll trigger bound to any element', function () {

    $('<div id="triggerElement"></div>').appendTo('body');

    elem.peek({
      triggerDelta: 50,
      toggleClass: 'toggledClass',
      triggerElement: $('#triggerElement')
    });

    var scrollPoint = 0,
        scrollStub = sinon.stub(jQuery.prototype, 'scrollTop', function () { return scrollPoint; });

    $('#triggerElement').trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;

    scrollPoint = 55;

    $('#triggerElement').trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.be.ok;

    scrollPoint = 40;

    $('#triggerElement').trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.be.ok;

    scrollPoint = 0;

    $('#triggerElement').trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;


    scrollPoint = 49;

    $('#triggerElement').trigger('scroll.Peek');

    elem.hasClass('toggledClass').should.not.be.ok;


    scrollStub.restore();

  });

});
