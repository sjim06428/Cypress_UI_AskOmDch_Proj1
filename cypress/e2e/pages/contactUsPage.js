require('cypress-xpath');

class ContactUs {
    get PageHeader() {
        return cy.contains('h1', 'Contact Us')
    }
}

const contactus = new ContactUs()

export default contactus