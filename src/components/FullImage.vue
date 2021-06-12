<template>
	<div class="full-image">
		<div class="full-image__close" @click="$emit('hide-image')">
			<span></span>
			<span></span>
		</div>
		<img :src="image.url" :alt="image.title" :title="image.title" />
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: Object,
			default: () => ({}),
		},
	},
}
</script>

<style lang="scss">
.full-image {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.459);
	z-index: 1;
}
.full-image__close {
	position: absolute;
	right: 40px;
	top: 40px;
	width: 30px;
	height: 30px;
	cursor: pointer;
	span {
		display: block;
		width: 30px;
		height: 3px;
		background: #fff;

		&:first-child {
			transform: rotate(-45deg) translateY(1px);
		}
		&:last-child {
			transform: rotate(45deg) translateY(-3px);
		}
	}
}
</style>
