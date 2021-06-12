<template>
	<div class="user">
		<custom-dropdown
			:title="user.name"
			:loaded="loaded"
			@dropdown-click="downloadAlbums(user.id)"
		>
			<li v-for="album in albums" :key="album.name">
				<Album :album="album" />
			</li>
		</custom-dropdown>
	</div>
</template>

<script>
import { fetchData } from "@/api"
import Album from "@/components/Album.vue"
export default {
	components: { Album },
	props: {
		user: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			albums: [],
			loaded: false,
		}
	},
	methods: {
		async downloadAlbums(id) {
			try {
				if (!this.albums.length) {
					this.albums = await fetchData(`/albums?userId=${id}`)
					this.loaded = true
				}
			} catch (error) {
				console.log(error)
			}
		},
	},
}
</script>

<style lang="scss">
.user {
	padding-bottom: 10px;
}
</style>
