
describe('Тестирование staya', function () {
    
    it('Авторизируюсь на сайте', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('aleksandra-basova@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('44Misterpup');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы')
    })

         it('Проверка данных', function() {
            cy.get('[href="/profile/user"]').click();
            cy.contains('Телефон')
         })

          it('Проверка эффекта наведения на поле Изменить пароль', function() {
            cy.get('.profile-password--btn').trigger('mouseover')
          })

          it('Сохранение изменений', function() {
            cy.get('.ni_checkbox-input-fake').click();
            cy.get('form').should('not.be.disabled')
        })

          it('Ввод неверного пароля', function () {
            cy.get('button.profile__nav-link').click();
            cy.get('.box__button_ok').click();
            cy.get('.header-bottom__right--link').click();
            cy.get('.auth-form > form > [type="email"]').type('aleksandra-basova@yandex.ru');
            cy.get('.auth-form > form > [type="password"]').type('43Misterpup');
            cy.get('.auth-form__submit').click();
            cy.contains('Невозможно войти с предоставленными учетными данными.')
    })
})