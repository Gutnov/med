<template>
	<div
		class="app"
		:class="{fixed: imageData}"
	>
		<div class="container">
			<div class="app__tab-controls">
				<button
					v-for="tab in tabs"
					:key="tab.name"
					class="app__tab-control"
					@click="currentComponent = tab.name"
				>
					{{ tab.label }}
				</button>
			</div>
			<component
				:is="currentComponent"
				:users="users"
			/>
		</div>
		<FullImage
			v-if="imageData"
			:image="imageData"
			@hide-image="imageData = null"
		/>
	</div>
</template>

<script>
import Catalog from "@/components/Catalog.vue";
import Favorite from "@/components/Favorite.vue";
import FullImage from "@/components/FullImage.vue";

import { fetchData } from "@/api";
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
				{ name:  "Catalog", label: "Каталог" },
				{ name: "Favorite", label: "Избранное" },
			],
			imageData: null,
			users: [],
		};
	},
	async created() {
		try {
			const res = await fetchData("/users");
			this.users = res.filter(u => u.name);
		} catch (error) {
			console.log(error);
		}
		this.$bus.$on("show-image", img => {
			this.imageData = img;
		});
	},
};
</script>

<style lang="scss">
body {
	font-family: "Roboto", sans-serif;
	margin: 0;
	max-width: 320px;
	overflow-x: hidden;
}
button {
	padding: 0;
}
.container {
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 20px;
}
.app.fixed {
	max-height: 100vh;
	overflow-y: hidden;
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
