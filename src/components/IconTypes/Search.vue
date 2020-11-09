<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" :width="width" :height="height"><g stroke-linecap="square" stroke-linejoin="miter" :stroke-width="strokewidth" :fill="_secondaryfill" :stroke="_secondaryfill"><line x1="29" y1="29" x2="20.777" y2="20.777" fill="none" stroke-miterlimit="10"/> <circle cx="13" cy="13" r="11" fill="none" stroke-miterlimit="10" :stroke="fill"/></g></svg></template>

<script>
export default {
	props: {
		width: {
			type: [Number, String],
			default: "100%"
		},
		height: {
			type: [Number, String],
			default: "100%"
		},
		strokewidth: {
			type: [Number, String],
			default: 3
		},
		fill: {
			type: String,
			default: "currentColor"
		},
		secondaryfill: {
			type: String
		}
	},
	computed: {
		_secondaryfill: function () {
			return this.secondaryfill || this.fill
		}
	}
}
</script>