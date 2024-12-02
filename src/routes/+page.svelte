<script>
	import { Card } from 'flowbite-svelte';
	import PrimeBoy from '../components/primeBoy.svelte';
	import About from '../components/About.svelte';
</script>
<div class="min-vh-100">
<div class="w-full flex flex-wrap justify-center h-full">
	<div class="p-10">	
		<About/>	
	</div>	

</div>
</div>
<div class="w-full flex flex-wrap justify-center">
	<Card class="col-lg-4 col-md-6 col-sm-8 col-11 m-5">
		<h1 class="mb-2 dark:text-white">Hello, I am a website created by Adrian Harrison</h1>
		<h3 class="dark:text-gray-360">Adrian is a C# developer</h3>
	</Card>
	<Card class="col-lg-4 col-md-6 col-sm-8 col-11 m-5">
		<PrimeBoy />
	</Card>
</div>
