<script>
	import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
	import { ChevronRightOutline, GithubSolid } from 'flowbite-svelte-icons';
</script>

<Timeline order="vertical">
	<TimelineItem title="Cox Manufacturing | Software Developer" date="12/2023 - 11/2024">
		<p class="mb-4 text-base font-normal text-gray-800 dark:text-gray-400">
			Maintain and develop features for .NET 8 WPF applications
		</p>
		<p class="text-base font-normal text-gray-700 dark:text-gray-400">
			Responsibilities - Expand TDD with xUnit | Port VBA to C# | Implement EFCore data access
		</p>
	</TimelineItem>
	<TimelineItem title="MIMO LLC | Lead Software Developer" date="09/2015 - 11/2023">
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			Create a Cash Handling software solution from prototype to a product for sale
		</p>
		<p class="text-base font-normal text-gray-700 dark:text-gray-400">
			Responsibilities - Develop Microsoft desktop app stack | Interact daily with customers
			| Collaborate with hardware vendors
		</p>
	</TimelineItem>
	<TimelineItem title="FurthrLA | Intern Mobile and Web Developer" date="07/2013 - 07/2015">
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			Internship turned employment, support many projects for various contracts
		</p>
		<p class="text-base font-normal text-gray-700 dark:text-gray-400">
			Responsibilities - Collect requirements | Attend networking events to acquire clients | Jump
			between tech stacks a few times a week
		</p>
	</TimelineItem>
</Timeline>
<Button href="/resume">Learn more <ChevronRightOutline /></Button>
<br/>
<Button href="https://github.com/acidmath" class="mt-4"><GithubSolid/>Github</Button>
