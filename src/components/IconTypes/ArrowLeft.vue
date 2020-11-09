<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" :width="width" :height="height"><g :fill="_secondaryfill"><path d="M47,22H7.828l12-12L17,7.171L1.586,22.586c-0.781,0.781-0.781,2.047,0,2.828L17,40.829L19.828,38l-12-12H47 V22z" :fill="fill"/></g></svg></template>

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
			default: 1
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