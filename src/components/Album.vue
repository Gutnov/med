<template>
	<div>
		<custom-dropdown
			:title="album.title"
			:loaded="loaded"
			@dropdown-click="downloadImages(album.id)"
		>
			<li
				v-for="image in images"
				:key="image.title"
				style="line-height: 0"
			>
				<ImageItem
					:favorite="favorite"
					:image="image"
					@add-favorite="addToFavorite(image)"
					@remove-favorite="removeFromFavorite(image.id)"
				/>
			</li>
		</custom-dropdown>
	</div>
</template>

<script>
import { fetchData } from "@/api";
import ImageItem from "@/components/ImageItem.vue";

export default {
	components: {
		ImageItem,
	},
	props: {
		album: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			images: [],
			loaded: false,
			favorite: []
		};
	},
	created() {
		this.favorite = JSON.parse(localStorage.getItem("favorite")) || [];
	},
	methods: {
		async downloadImages(id) {
			try {
				if (!this.images.length) {
					this.images = await fetchData(`/photos?albumId=${id}`);
					this.loaded = true;
				}
			} catch (error) {
				console.log(error);
			}
		},
		addToFavorite(img) {
			this.favorite.push(img);
			localStorage.setItem("favorite", JSON.stringify(this.favorite));
		},
		removeFromFavorite(id) {
			const idx = this.favorite.findIndex(f => f.id === id);
			if (idx !== -1) {
				this.favorite.splice(idx, 1);
				localStorage.setItem("favorite", JSON.stringify(this.favorite));
			}
		},
		inFavorite(id) {
			return typeof this.favorite.find(f => f.id === id) !== "undefined";
		}
	},
};
</script>
<style lang="scss"></style>
