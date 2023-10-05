import contactus from "../pages/contactUsPage"
import login from "../pages/homePage"
import store from "../pages/storePage"

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

    it('verify empty cart text', () => {
        login.EmptyCart.should('have.text', data.home.emptyCartText)
    })

    it('verify page header font weight', () => {
        login.PageHeader.invoke('css', 'font-weight').should('eq', data.home.pageHeaderFontWeight)
    })

    it('verify clicking on store link opens store page', () => {
        login.ShopNowLink.click()
        store.PageHeader.should('have.text', data.store.pageHeader)
    })

    it('verify clicking on find more opens contact us page', () => {
        login.FindMoreLink.click()
        contactus.PageHeader.should('have.text', data.contactus.pageHeader)
    })

    it('verify article one image src attr', () => {
        login.ArticleOneImage.invoke('attr', 'src').should('contain', data.home.articleOneImageHref)
    })
})