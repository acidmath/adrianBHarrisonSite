export class WorkHistoryItem {
    id: number = 0;
    companyName: string = '';
    jobTitleName: string = '';
    startDate: Date = new Date();
    endDate: Date = new Date();
    responsibilities: string[] = [];

    constructor(_id: number, _companyName: string, _jobTitleName: string, _startDate: Date, _endDate: Date, _responsibilities: string[]){
        this.id = _id;
        this.companyName = _companyName;
        this.jobTitleName = _jobTitleName;
        this.startDate = _startDate;
        this.endDate = _endDate;
        this.responsibilities = _responsibilities;
    }
}

