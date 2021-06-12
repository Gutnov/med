<template>
	<div class="app">
		<div class="container">
			<div class="app__tab-controls">
				<button
					class="app__tab-control"
					v-for="tab in tabs"
					:key="tab.name"
					@click="currentComponent = tab.name"
				>
					{{ tab.label }}
				</button>
			</div>
			<component :users="users" :is="currentComponent"></component>
		</div>
		<FullImage
			:image="imageData"
			v-if="showFullImage"
			@hide-image="showFullImage = false"
		/>
	</div>
</template>

<script>
import Catalog from "@/components/Catalog.vue"
import Favorite from "@/components/Favorite.vue"
import FullImage from "@/components/FullImage.vue"

import { fetchData } from "@/api"
export default {
	components: {
		Catalog,
		Favorite,
		FullImage,
	},
	data() {
		return {
			currentComponent: "Catalog",
			tabs: [
				{ name: "Catalog", label: "Каталог" },
				{ name: "Favorite", label: "Избранное" },
			],
			imageData: "",
			showFullImage: false,
			users: [],
		}
	},
	async created() {
		try {
			const res = await fetchData("/users")
			this.users = res.filter(u => u.name)
		} catch (error) {
			console.log(error)
		}
		this.$bus.$on("show-image", img => {
			document.body.style.overflowY = "hidden"
			this.imageData = img
			this.showFullImage = true
		})
	},
}
</script>

<style lang="scss">
body {
	font-family: "Roboto", sans-serif;
}
.container {
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 20px;
}
.app__tab-controls {
	margin-bottom: 20px;
}
.app__tab-control {
	color: rgb(66, 133, 244);
	text-decoration: underline;
	cursor: pointer;
	background: transparent;
	outline: none;
	border: none;

	&:first-child {
		margin-right: 20px;
	}
	&:hover {
		text-decoration: none;
	}
}
</style>
