/*jshint esversion: 6 */
class SMP {

	constructor(TEMPLATE = null, R = null) {
		this.R = R;
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
		$('.SMP-wrap').remove();
		this.body = $(`<div class="SMP-wrap">`).appendTo('body');
		return this;
	}
	open(R = null) {
		if (R) {
			this.R = R;
		}
		if (!this.ativity) {
			this.HTML = this.strstr(this.TEMPLATE, this.R);
			this.modal = $(`<div class="SMP-modal">`).appendTo(this.body);
			this.modal.html("");
			this.ativity = $(this.HTML).appendTo(this.modal);
		}
		this.body.fadeIn(this.FadeDurability);
		return this;
	}
	close() {
		this.body.fadeOut(this.FadeDurability);
		return this;
	}
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