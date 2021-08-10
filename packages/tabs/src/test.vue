<template>
  <div>
    <h1>{{uname}}</h1>
  </div>
</template>

<script>
export default {
	data() {
		return {
			age: 17
		};
    },
    props:['uname']
};
</script>

<style>
</style>