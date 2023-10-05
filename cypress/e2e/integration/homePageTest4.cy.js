import login from "../pages/homePage"

describe('template spec', () => {

    let data

    before(() => {
        cy.fixture('testData.json').then((testData) => {
            data = testData
        })
    })

    beforeEach(() => {
        cy.visit('/')
    })

    it('verify article one header text', () => {
        login.ArticleOneImageHeader.should('have.text', data.home.articleOneImageHeaderText)
    })
})