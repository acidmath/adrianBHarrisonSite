import { Component } from "@angular/core";

@Component({
    selector: 'intro',
    template: `
    <section class="flex-center">
        <h1 class="m-2">Hello, I am a website created by Adrian Harrison</h1>
        <h3>Adrian is a C# developer</h3>
        <a href="https://super-panda-456179.netlify.app/">Space Lander</a>
    </section>
    `
})

export class IntroComponent {}