import { Component, Input } from "@angular/core";
import { DatePipe } from "@angular/common";
import { WorkHistoryItem } from "../../types/WorkHistoryItem"

@Component({
    selector: 'work-history-item',
    template: `
        <h3>{{workHistoryDetails.companyName}}</h3>
        <h4>{{workHistoryDetails.jobTitleName}}</h4>
        <h5>{{workHistoryDetails.startDate | date: 'MM/yyyy'}} - {{workHistoryDetails.endDate | date: 'MM/yyyy'}}</h5>
        <ul>
        @for (responsibility of workHistoryDetails.responsibilities; track responsibility) {
            <li>{{responsibility}}</li>
        }
        <br/>
    `,
    imports: [DatePipe]
})

export class WorkHistoryItemComponent {
    @Input() workHistoryDetails: WorkHistoryItem = new WorkHistoryItem(0, '', '', new Date(), new Date(), []);
}