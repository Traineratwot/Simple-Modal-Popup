class SMP {

	constructor(TEMPLATE = null) {
		this.TEMPLATE = TEMPLATE;
		this.init();
	}
	setTemp(TEMPLATE) {
		this.TEMPLATE = TEMPLATE;
	}
	init() {
		$('.SMP-wrap').remove();
		this.body = $(`<div class="SMP-wrap">`).appendTo('body');
	}
	open(R) {
		this.TEMPLATE = this.strstr(this.TEMPLATE, R);
		this.modal = $(`<div class="SMP-modal">`).appendTo(this.body);
		this.modal.html("");
		this.ativity = $(this.TEMPLATE).appendTo(this.modal);
		this.body.fadeIn(500);
	}
	close() {

	}
	change() {

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