var template = require('./template')
  , Overlay = require('overlay')
  , dom = require('dom')
  , type = require('type')
  , showForTimeout

var Spinner = function(){}

Spinner.prototype.constructor = Spinner;

Spinner.prototype.show = function(_msToShowFor) {

	var self = this;

	if (self['el']) return;

	self.el = dom(template);
	self.el.addClass('bounceInUp');

	self.overlay = new Overlay();
	self.overlay.el.addClass('overlay-spinner').addClass('animated').addClass('fadeIn')
	self.overlay.show();

	dom('body').append(self.el);

	if (type(_msToShowFor) == 'number' && _msToShowFor > 0) {

		clearTimeout(showForTimeout);

		showForTimeout = setTimeout(function(){

			self.hide();

		}, _msToShowFor);

	}

}

Spinner.prototype.hide = function() {

	var self = this;
	
	if ( ! self.el) return;

	// self.el.removeClass('bounceInUp');
	// self.el.els[0].offsetWidth;
	// self.el.addClass('fadeOut');

	// setTimeout(function(){

		self.el.remove();
		self.overlay.el.addClass('fadeOut');
		
	// }, 200);

	setTimeout(function(){

		self.overlay.hide();
		self.overlay = null;
		self.el.remove();
		self.el = null;
		
	}, 500);

}

Spinner.prototype.defaults = {



}

module.exports = new Spinner();