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

  it('page title', () => {
    cy.title().should('eq', data.home.title)
  })

  it('logo text', () => {
    login.Logo.should('have.text', data.home.logoText)
  })

  it('navbar elements', () => {
    // cy.fixture('testData.json').then((data) => {
    //   login.NavbarElements.should("have.text", data.one.navElements)
    // })
    login.NavbarElements.should("have.text", data.home.navElements)
  })

  it('page header text', () => {
    login.PageHeader.should('have.text', data.home.pageHeader)
  })

  it('shop now link text', () => {
    login.ShopNow.should('have.text', data.home.shopNow)
  })

  it('shop now link href', () => {
    login.ShopNow.invoke('attr', 'href').should('contain', data.home.shopNowHref)
  })

  it('verify clicking on store link opens store page', () => {
    login.StoreLinkOnNavbar.click()
    store.PageHeader.should('have.text', data.store.pageHeader)
  })

  it('verify find more link text', () => {
    login.FindMoreLink.should('have.text', data.home.findMoreLinkText)
  })

  it('find more link href', () => {
    login.FindMoreLink.invoke('attr', 'href').should('contain', data.home.findMoreHref)
  })

  it('verify page sub heading text', () => {
    login.FindMoreLink.invoke('attr', 'href').should('contain', data.home.findMoreHref)
  })

})