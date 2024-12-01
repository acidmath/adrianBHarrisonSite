<script>
	import { Card } from 'flowbite-svelte';
	import PrimeBoy from '../components/primeBoy.svelte';
</script>
<div class="w-full mx-auto flex justify-center">
	<div class="col-lg-4 col-md-6 col-sm-8 col-11 mx-auto flex-col">
		<Card>
			<h1 class="mb-2 dark:text-white">Hello, I am a website created by Adrian Harrison</h1>
			<h3 class="dark:text-gray-360">He's a C# desktop developer</h3>
		</Card>
		<Card>
			<PrimeBoy />
		</Card>
	</div>
</div>