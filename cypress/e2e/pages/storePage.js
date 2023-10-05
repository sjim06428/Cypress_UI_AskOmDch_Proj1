require('cypress-xpath');

class Store {
    get PageHeader() {
        return cy.contains('h1', 'Store')
    }
}

const store = new Store()

export default store