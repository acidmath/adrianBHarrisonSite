<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';
	import '../app.css';
	let { children } = $props();
</script>
<DarkMode size="lg"/>
{@render children()}
