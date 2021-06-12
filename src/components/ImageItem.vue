<template>
	<div class="image-item__img-wr">
		<div
			v-if="inFavorite"
			class="image-item__star-wr"
			@click="$emit('remove-favorite')"
		>
			<Star />
		</div>
		<div
			v-else
			class="image-item__star-wr image-item__star-wr--not-favorite"
			@click="$emit('add-favorite')"
		>
			<Star />
		</div>
		<img
			:src="image.thumbnailUrl"
			:alt="image.title"
			:title="image.title"
			@click="$bus.$emit('show-image', image)"
		/>
	</div>
</template>

<script>
import Star from "@/assets/svg/star.svg"

export default {
	components: {
		Star,
	},
	props: {
		image: {
			type: Object,
			default: () => ({}),
		},
		favorite: {
			type: Array,
			default: () => [],
		},
	},
	computed: {
		inFavorite() {
			return (
				typeof this.favorite.find(f => f.id === this.image.id) !== "undefined"
			)
		},
	},
	methods: {
		addClickHandler() {},
		removeClickHandler() {},
	},
}
</script>

<style lang="scss">
.image-item__img-wr {
	display: flex;
}
.image-item__star-wr {
	margin-right: 10px;
	cursor: pointer;
	height: max-content;
	svg {
		width: 20px;
	}
	&--not-favorite {
		svg path {
			fill: #ddd;
		}
	}
}
</style>
