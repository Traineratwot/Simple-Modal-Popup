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
		this.init();
		this.FadeDurability = 500;
	}
	setTemp(TEMPLATE) {
		this.TEMPLATE = TEMPLATE;
		this.init();
		return this;
	}
	init() {
		if (this.body) {
			this.body.remove();
		}
		this.body = $(`<div class="SMP-wrap">`).appendTo('body');

	}
	/**
	 * @param  {} R=null
	 * @param  {} OPTION={}
	 */
	gen() {
		if (!this.ativity) {
			this.HTML = this.strstr(this.TEMPLATE, this.R);
			if (Object.keys(this.OPTION).length) {
				this.modal = $(`<div class="SMP-modal SMP-custom">`).appendTo(this.body);
				if (this.OPTION.css) {
					this.modal.css(this.OPTION.css)
				}
				if (this.OPTION.offset) {
					this.modal.offset(this.OPTION.offset)
				}
				// if (this.OPTION.css) {
				// 	this.modal.css(this.OPTION.css)
				// }

			} else {
				this.modal = $(`<div class="SMP-modal SMP-center">`).appendTo(this.body);
			}
			this.modal.html("");
			this.ativity = $(this.HTML).appendTo(this.modal);
		}
		return this;
	}
	open(R = null, OPTION = {}) {
		var regen = false;
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
	change(R = null) {
		if (R) {
			this.R = R;
		}
		this.HTML = this.strstr(this.TEMPLATE, R);
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
}