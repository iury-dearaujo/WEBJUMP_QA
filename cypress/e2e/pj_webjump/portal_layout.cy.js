/// <reference types="cypress" />

describe('Portal open', () => {

  it('Open WEBJUMP home page', () => {

    //OPEN THE URL
    cy.intercept('GET', '**/qa-test/*').as('getLoad')

    cy.visit('https://wj-qa-automation-test.github.io/qa-test/')

    cy.wait('@getLoad').its('response.statusCode').should('eq', 200)
  })

  it('Check the title page', () => {
    cy.get('.jumbotron').find('img').should('have.attr', 'src')
  })

  it('Click and Check the main button -- ONE', () => {

    cy.get('[id=panel_body_one]').should('contain', 'Button').within(() => {

      //ONE
      cy.get('button[type=button][id=btn_one]').as('principal_btt_one')

      cy.get('@principal_btt_one').should('not.have.property', 'display', 'none')
      cy.get('@principal_btt_one').click()
      cy.get('@principal_btt_one').should('not.be.disabled')
    })

  })

  it('Click and Check the main button -- TWO', () => {

    cy.get('[id=panel_body_one]').should('contain', 'Button').within(() => {

      //TWO
      cy.get('button[type=button][id=btn_two]').as('principal_btn_two')

      cy.get('@principal_btn_two').should('not.have.property', 'display', 'none')
      cy.get('@principal_btn_two').click()
      cy.get('@principal_btn_two').should('not.be.disabled')
    })
  })
  
  it('Click and Check the main button -- THREE', () => {

    cy.get('[id=panel_body_one]').should('contain', 'Button').within(() => {

      //THREE
      cy.get('button[type=button][id=btn_three]').as('principal_btn_three')

      cy.get('@principal_btn_three').should('not.have.property', 'display', 'none')
      cy.get('@principal_btn_three').click()
      cy.get('@principal_btn_three').should('not.be.disabled')
    })
  })
    
  it('Click and Check the main button -- FOUR', () => {

    cy.get('[id=panel_body_one]').should('contain', 'Button').within(() => {

      //FOUR
      cy.get('button[type=button][id=btn_link]').as('principal_btn_link4')

      cy.get('@principal_btn_link4').should('not.have.property', 'display', 'none')
      cy.get('@principal_btn_link4').click()
      cy.get('@principal_btn_link4').should('not.be.disabled')
    })
  })

  //reset_buttons Main button 1-4
  it('Click and Check the main button -- FOUR', () => {

    cy.get('[id=panel_body_one]').should('contain', 'Button').within(() => {

      cy.get('button[type=button][id=reset_buttons]').as('principal_reset_buttons')
      cy.get('@principal_reset_buttons').click()

    })

  })
    
  it('Click and Check IFrame Buttons - ONE|TWO|THREE|FOUR', () => {

    cy.get('[id=iframe_panel_body]').as('iframe_panel_body')
    cy.wait(3000)

    const getIframeDocument = () => {
      return cy
      .get('[id=iframe_panel_body] > iframe')
      .its('0.contentDocument').should('exist')
    }
    
    const getIframeBody = () => {
      return getIframeDocument()
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
    }
    
    //ONE
    getIframeBody().find('button[type=button][id=btn_one]').as('iframe_btn_one')
    
    cy.get('@iframe_btn_one').should('not.have.property', 'display', 'none')
    cy.get('@iframe_btn_one').click()
    cy.get('@iframe_btn_one').should('not.be.disabled')
    
    //TWO
    getIframeBody().find('button[type=button][id=btn_two]').as('iframe_btn_two')
    
    cy.get('@iframe_btn_two').should('not.have.property', 'display', 'none')
    cy.get('@iframe_btn_two').click()
    cy.get('@iframe_btn_two').should('not.be.disabled')
    
    //FOUR
    getIframeBody().find('button[type=button][id=btn_link]').as('iframe_btn_link4')
    
    cy.get('@iframe_btn_link4').should('not.have.property', 'display', 'none')
    cy.get('@iframe_btn_link4').click()
    cy.get('@iframe_btn_link4').should('not.be.disabled')
    
    //RESET
    getIframeBody().find('button[type=button][id=reset_buttons]').as('iframe_reset_buttons')
    cy.get('@iframe_reset_buttons').click()

  })

  it('IFrame INFOS - Name|Job|Age|Etc.', () => {
    
    cy.get('[id="iframe_panel_body_two"]').as('id="iframe_panel_body_two"')
    cy.wait(3000)

    const getIframeDocumentTwo = () => {
      return cy
      .get('[id=iframe_panel_body_two] > iframe')
      .its('0.contentDocument').should('exist')
    }
    
    const getIframeBodyTwo = () => {
      return getIframeDocumentTwo()
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
    }

    //First Name Field
    getIframeBodyTwo().find('input[type=text][id=first_name]').as('first_name')
    cy.get('@first_name').should('have.attr', 'placeholder', 'YourFirstName')

    cy.get('@first_name').type('Iury')
    .should('have.value', 'Iury')

    //Mid Name Field
    getIframeBodyTwo().find('input[type=text][id=mid_name]').as('mid_name')
    cy.get('@mid_name').should('have.attr', 'placeholder', 'YourMidName')

    cy.get('@mid_name').type('Calado')
    .should('have.value', 'Calado')

    //Last Name Field
    getIframeBodyTwo().find('input[type=text][id=last_name]').as('last_name')
    cy.get('@last_name').should('have.attr', 'placeholder', 'YourLastName')

    cy.get('@last_name').type('de Araújo')
    .should('have.value', 'de Araújo')

    //JOB - QA - WEBJUMP
    getIframeBodyTwo().find('input[type=text][id=job]').as('job')
    cy.get('@job').should('have.attr', 'placeholder', 'YourJob')

    cy.get('@job').type('QA - lead')
    .should('have.value', 'QA - lead')
  })

  it('Buttons - Questions | 3.', () => {
    
    cy.get('[id=panel_body_one]').should('contain', 'Button').within(() => {

      cy.get('button[type=button][id=btn_one]').as('principal_btt_one')
      cy.get('@principal_btt_one').should('not.have.property', 'display', 'none')
      cy.get('@principal_btt_one').click()
      cy.get('@principal_btt_one').should('not.be.disabled')

      cy.get('input[type=checkbox][id=opt_three]').as('opt_three')
      cy.get('@opt_three').check()
      
      cy.get('select[id=select_box]').as('select_box')

      cy.get('@select_box').select('option_two')
      cy.get('@select_box').should('have.value', 'option_two')
    })

  })

  

  it('Check the Selenium Img', () => {
    cy.get('[alt=selenium]').should('have.attr', 'src')
  })
  
})
