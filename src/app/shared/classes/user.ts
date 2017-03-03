
export class User {

    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private street: string,
        private streetNumber: number,
        private city: string,
        private phoneNumber: string
    ) { }


    getDetails (type?: string) {
        if (!type) {
            return {
                firstName: this.firstName,
                lastName: this.lastName,
                street: this.street,
                streetNumber: this.streetNumber,
                city: this.city,
                phoneNumber: this.phoneNumber
            }
        }
        else if (type) {
            return this[type];
        }
    }

    updateDetails () {}

}
