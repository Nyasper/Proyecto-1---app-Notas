<script setup>
	defineProps(['taskTitle', 'taskDescription']);
</script>

<template>
	<div id="taskComponentContainer">
		<h2 id="taskTitle">{{ taskTitle }}</h2>
		<p id="taskDescription">{{ taskDescription }}</p>
	</div>
</template>

<style scoped>
	#taskComponentContainer {
		border: 2px solid white;
		width: 60%;
		overflow: auto;
		border-radius: 20px;
		padding: 10px 15px;
		margin-right: 100px;
	}

	#taskTitle {
		text-align: center;
		font-size: 1.6em;
		margin: 15px 0;
	}
	#taskDescription {
		margin-top: 30px;
		font-size: 1.5em;
		word-wrap: break-word;
		line-height: 1.3;
	}
</style>
