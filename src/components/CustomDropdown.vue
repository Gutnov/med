<template>
	<div class="custom-dropdown">
		<div
			class="custom-dropdown-title"
			@click="dropdownClickHandler"
		>
			<div
				class="custom-dropdown__arrow-wr"
				:class="{ active: dropdownActive }"
			>
				<ArrowDown />
			</div>
			{{ title }}
		</div>
		<transition name="options">
			<ul
				v-if="dropDownVisible"
				class="custom-dropdown__list"
			>
				<slot />
			</ul>
		</transition>
	</div>
</template>
<script>
import ArrowDown from "@/assets/svg/expand-button.svg";

export default {
	components: {
		ArrowDown,
	},
	props: {
		title: {
			type: String,
			default: () => "Unnamed",
		},
		loaded: {
			type: Boolean,
			default: () => false,
		},
	},
	data() {
		return {
			dropdownActive: false,
		};
	},
	computed: {
		dropDownVisible() {
			return this.dropdownActive && this.loaded;
		},
	},
	methods: {
		dropdownClickHandler() {
			this.$emit("dropdown-click");
			this.dropdownActive = !this.dropdownActive;
		},
	},
};
</script>

<style lang="scss">
.custom-dropdown {
	overflow: hidden;
}
.custom-dropdown-title {
	display: flex;
	align-items: center;
	cursor: pointer;
}
.custom-dropdown__list {
	padding-top: 10px;
	list-style-type: none;
	padding-left: 20px;
	transition: all 0.5s;
	li {
		cursor: pointer;
		margin-bottom: 10px;
		width: max-content;
	}
}
.custom-dropdown__arrow-wr {
	margin-right: 10px;
	line-height: 0;
	transition: transform 0.3s;

	&.active {
		transform: rotateZ(180deg);
	}

	svg {
		width: 15px;
	}
}
.options-enter-active,
.options-leave-active {
	transition: all 0.5s;
}
.options-enter,
.options-leave-to {
	transform: translateX(-120%);
}
</style>
