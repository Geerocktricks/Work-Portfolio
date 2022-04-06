export class MetoringUsers {
    constructor(
        public name: string,
        public email: string,
        public phone: number | string,
        public topic: string,
        public startDate: string,
        public timePreference: string,
        public subscribe: boolean
    ){}
}