<script lang="ts">
    import { Input } from 'flowbite-svelte'
    import { IsPrime } from '../scripts/mathFunctions';
    let inputNumber: number = $state(0);
    let isPrime: boolean = $derived(IsPrime(inputNumber));
    let isPrimeMessage: string = $derived(
        isPrime
        ? inputNumber + ' is prime'
        : inputNumber + ' is not prime');

</script>

<Input type="number" bind:value={inputNumber} min=0 />
<p class="text-xl">{isPrimeMessage}</p>
