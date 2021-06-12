<template>
	<div class="favorite">
		<div v-if="favorite && favorite.length">
			<div
				v-for="image in favorite"
				:key="image.title"
				class="favorite__image-item"
			>
				<div class="favorite__image-title">{{ image.title }}</div>
				<ImageItem
					:favorite="favorite"
					:image="image"
					@remove-favorite="removeFromFavorite(image.id)"
				/>
			</div>
		</div>
		<p v-else>Not Found</p>
	</div>
</template>

<script>
import ImageItem from "@/components/ImageItem.vue"

export default {
	components: {
		ImageItem,
	},
	data() {
		return {
			favorite: [],
		}
	},
	methods: {
		removeFromFavorite(id) {
			const idx = this.favorite.findIndex(f => f.id === id)
			if (idx !== -1) {
				this.favorite.splice(idx, 1)
				localStorage.setItem("favorite", JSON.stringify(this.favorite))
			}
		},
	},
	created() {
		this.favorite = JSON.parse(localStorage.getItem("favorite")) || []
	},
}
</script>

<style lang="scss"></style>
