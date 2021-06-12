<template>
	<div>
		<div v-if="users && users.length">
			<User v-for="user in users" :key="user.name" :user="user" />
		</div>
		<p v-else>
			Not found
		</p>
	</div>
</template>
<script>
import User from "@/components/User.vue"
export default {
	components: { User },
	props: {
		users: {
			type: Array,
			default: () => [],
		},
	},
}
</script>
