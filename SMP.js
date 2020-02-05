/*jshint esversion: 6 */
class SMP {
	/**
	 * @param  {} TEMPLATE=null
	 * @param  {} R=null
	 * @param  {} OPTION={}
	 */
	constructor(TEMPLATE = null, R = null, OPTION = {}) {
		this.R = R;
		this.OPTION = OPTION;
		this.TEMPLATE = TEMPLATE;
		this.cls = this.makeRandomClass(5);
		this.FadeDurability = 500;
		this.events = {};
		this.init();
	}
	setTemp(TEMPLATE) {
		this.TEMPLATE = TEMPLATE;
		this.gen();
		return this;
	}
	init() {
		var self = this;
		if (this.body) {
			this.body.remove();
		}
		if (this.OPTION.background) {
			this.body = $(`<div class="${this.cls} SMP-wrap SMP-wrap-custom">`).appendTo('body');
			this.body.css(this.OPTION.background.css)
		} else {
			this.body = $(`<div class="${this.cls} SMP-wrap SMP-wrap-defult">`).appendTo('body');
		}
		this.body.on("click touch", (event) => {
			self.events.body = event
			if ($(event.target).index() == self.body.index()) {
				self.close()
			}
		})
		this.gen()
	}
	/**
	 * @param  {} R=null
	 * @param  {} OPTION={}
	 */
	gen() {
		var self = this;
		this.HTML = this.strstr(this.TEMPLATE.pattern, this.R);
		if (Object.keys(this.OPTION.popup).length) {
			this.modal = $(`<div class="SMP-modal SMP-modal-custom">`).appendTo(this.body);
			if (this.OPTION.popup.css) {
				this.modal.css(this.OPTION.popup.css)
			}
			if (this.OPTION.popup.offset) {
				this.modal.offset(this.OPTION.popup.offset)
			} else {
				this.modal.addClass("SMP-modal-center");
			}
			// if (this.OPTION.css) {
			// 	this.modal.css(this.OPTION.css)
			// }
		} else {
			this.modal = $(`<div class="SMP-modal SMP-modal-center">`).appendTo(this.body);
		}
		this.modal.html("");
		this.ativity = $(this.HTML).appendTo(this.modal);

		for (const key in this.TEMPLATE.action) {
			if (this.TEMPLATE.action.hasOwnProperty(key)) {
				const e = this.TEMPLATE.action[key];
				$(`.${this.cls} ${key}`).on(e.event, function (event) {
					self.events[key] = (event);
					return e.function(event, self, self.AnyValue)
				})
			}
		}
		return this;
	}
	open(AnyValue = null, R = null, OPTION = {}) {
		var regen = false;
		this.AnyValue = AnyValue;
		if (R) {
			this.R = R;
			regen = true;
		}
		if (Object.keys(OPTION).length) {
			this.OPTION = OPTION;
			regen = true;
		}
		if (regen) {
			this.gen()
		}
		this.body.fadeIn(this.FadeDurability);
		return this;
	}
	close() {
		this.body.fadeOut(this.FadeDurability);
		return this;
	}
	/**
	 * @param  {} R=null
	 */
	setData(R) {
		if (R) {
			this.R = R;
		}
		this.gen()
		return this;
	}
	setOption(OPTION) {
		if (OPTION) {
			this.R = OPTION;
		}
		this.gen()
		return this;
	}

	strstr(haystack, needle) {	// Find first occurrence of a string
		for (const k in needle) {
			if (needle.hasOwnProperty(k)) {
				const e = needle[k];
				do {
					var _haystack = haystack;
					haystack = haystack.replace(`{${k}}`, e);
				} while (_haystack != haystack);
			}
		}
		return haystack;
	}

	makeRandomClass(length) {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
}