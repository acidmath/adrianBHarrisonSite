import { Component } from "@angular/core";
import { WorkHistoryItemComponent } from "./work-history-item.component";
import { WorkHistoryItem } from "../../types/WorkHistoryItem";

@Component({
    selector: 'work-history',
    template: `
    <section class="m-5">
        <h2>Work History</h2>
        @for(workHistoryItem of workHistoryItems; track workHistoryItem.id){
            <work-history-item [workHistoryDetails]=workHistoryItem />
        }
    </section>
    `,
    imports: [WorkHistoryItemComponent]
})

export class WorkHistoryComponent {
    workHistoryItems = [
        new WorkHistoryItem(
            0,
            "Cox Manufacturing",
            "Software Developer",
            new Date('2023-12-14'),
            new Date('2024-11-27'),
            [
                "Maintain and develop features for .NET 8 WPF applications",
                "Expand test coverage with xUnit, some test creation built by automation",
                "Port legacy VBA code to new C# project, first in Blazor then in WPF",
                "Implement EFCore data access layer, merging multiple projects' queries into a single common library"
            ]
        ),
        new WorkHistoryItem(
            1,
            "MIMO LLC",
            "Lead Software Developer",
            new Date('2015-09-14'),
            new Date('2023-11-01'),
            [
                "Created a Cash Handling software solution from prototype to a market-ready product",
                "Built in WPF .NET 4.7.2 in order to be compatible with proprietary cash recycling drivers",
                "Built a SQL Server database utilizing transaction replication to support remote reporting",
                "React/Node website to deliver financial reports from an AWS hosted server",
                "Host sites on EC2 servers, run tasks with Lambda, utilize SES and SNS for customer defined alerts",
                "Integrated with various HR and financial software vendors to push/pull data as required by customers",
                "Interfaced with ATM peripheral devices such as cash recyclers, coin dispensers and palm scanners",
                "Diagnosed and resolved complex customer issues with precision and efficiency",
                "Led hiring calls and testing for technical team members (testers, desktop developers, web developers)",
                "Partnered with management in weekly meetings to best plan the course of the software",
                "Guided and mentored college graduate level programmers (up to three at a time)"                
            ]
        ),
        new WorkHistoryItem(
            2,
            "FurthrLA",
            "Intern - Mobile and Web Developer",
            new Date('2013-07-01'),
            new Date('2015-07-01'),
            [
                "Designed and built one cross-platform game and took over completing a second in Corona SDK using Lua",
                "Maintained Wordpress websites by updating media, updating plugins, and designing new pages",
                "Developed Angular websites to be used as pitch decks for films or further website development",
                "Developed a native Android app to demo smart headphones integrated with Spotify, Soundcloud and Rdio",
                "Implemented Proguard and Maven settings to obfuscate and optimize an audio driver wrapper"                            
            ]
        )
    ]
}