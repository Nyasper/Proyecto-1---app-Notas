<template>
	<form id="formContainer" @submit.prevent="submitEvent">
		<label for="username" style="text-align: center">Username</label>
		<input type="text" name="username" id="username" v-model.trim="username" />
		<label for="password" style="text-align: center">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			v-model.trim="password"
		/>
		<button type="submit" id="submitButton">
			{{ $props.buttonLabel }}
		</button>
	</form>
</template>

<script setup>
	defineProps(['buttonLabel', 'submitEvent']);

	const username = defineModel('username');
	const password = defineModel('password');
</script>

<style scoped>
	#formContainer {
		display: flex;
		flex-direction: column;
		width: 100%;
		font-size: 1.3em;
	}

	#username {
		margin: 10px auto;
		width: 30%;
	}

	#password {
		margin: 10px auto;
		width: 30%;
	}

	#submitButton {
		display: block;
		width: 225px;
		margin: 40px auto;
	}
</style>
