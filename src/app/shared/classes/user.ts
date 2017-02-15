
export class User {

    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private streetName: string,
        private streetNumber: number,
        private streetNumberAddition: string,
        private zipCode: string,
        private city: string,
        private phoneNumber: string
    ) { }


    getDetails () {}

    updateDetails () {}

}
