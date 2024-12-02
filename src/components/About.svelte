<script>
	import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
	import { ChevronRightOutline } from 'flowbite-svelte-icons';
</script>

<Timeline order="vertical">
	<TimelineItem title="Cox Manufacturing | Software Developer" date="12/2023 - 11/2024">
		<p class="mb-4 text-base font-normal text-gray-800 dark:text-gray-400">
			Maintain and develop features for .NET 8 WPF applications
		</p>
		<p class="text-base font-normal text-gray-700 dark:text-gray-400">
			Responsibilities - TDD with xUnit | VBA Development | Implement EFCore data access
		</p>
	</TimelineItem>
	<TimelineItem title="MIMO LLC | Lead Software Developer" date="09/2015 - 11/2023">
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			Create a Cash Handling software solution from prototype to a product for sale
		</p>
		<p class="text-base font-normal text-gray-700 dark:text-gray-400">
			Responsibilities - Develop Microsoft desktop app stack | Interview and onboard new developers
			| Collaborate with hardware vendors
		</p>
	</TimelineItem>
	<TimelineItem title="FurthrLA | Intern Mobile and Web Developer" date="07/2013 - 07/2015">
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			Internship turned employment, support many projects for various contracts
		</p>
		<p class="text-base font-normal text-gray-700 dark:text-gray-400">
			Responsibilities - Requirements collection | The importance of people skills | How to jump
			between tech stacks a few times a week
		</p>
	</TimelineItem>
</Timeline>
<Button href="/resume">Learn more <ChevronRightOutline /></Button>
