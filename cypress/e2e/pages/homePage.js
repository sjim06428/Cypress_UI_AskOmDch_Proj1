require('cypress-xpath');

class Home {
    constructor() {
        this.logo = 'h1[itemprop="name"] a'
    }

    get Logo() {
        return cy.get('h1[itemprop="name"] a')
    }

    get NavbarElements() {
        return cy.xpath("(//ul[@id='ast-hf-menu-1'])[1]")
    }

    get PageHeader() {
        return cy.contains('h1', 'Raining Offers for Hot Summer!')
    }

    get ShopNow() {
        return cy.get('a[href="/store"]')
    }

    get StoreLinkOnNavbar() {
        return cy.get('a[href="https://askomdch.com/store/"]').eq(0)
    }

    get FindMoreLink() {
        return cy.contains('a', 'Find More')
    }

    get PageSubHeading() {
        return cy.contains('h3', '25% OFF On all products')
    }

    get EmptyCart() {
        return cy.get('div[id="ast-desktop-header"] span')
    }

    get ShopNowLink() {
        return cy.get('a[href="/store"]')
    }

    get ArticleOneImage() {
        return cy.xpath("(//div[@class='wp-block-cover has-background-dim-40 has-background-dim'])[1]//img")
    }
}

const home = new Home()

export default home