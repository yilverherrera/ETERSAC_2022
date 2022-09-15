

const Browser = require("zombie");


describe("User visits the empresa index page.", function() {

    const browser = new Browser();

    before(() => browser.visit("http://localhost:3000/empresas") );

    it("should be successful.", () => {
        browser.assert.success();
    });

    it("should see the quizzes index page.", () => {
        browser.assert.url({pathname: "/empresas"});
    });
});


describe("No logged user tries to create a new empresa.", () => {

    const browser = new Browser();

    before(() => browser.visit("http://localhost:3000/empresas/new") );

    it("should be successful.", () => {
        browser.assert.success();
    });

    it("should see the page with the form to create a new empresa.", () => {
        browser.assert.url({pathname: "/empresas/new"});
    });

    describe("submit the create new empresa form.", () => {

        before(() => {
            browser.fill("ruc","Testing ruc");
            browser.fill("razon","Testing razon");
            browser.fill("direccion","Testing direccion");
            return browser.pressButton("");

        });

        it("should be successful.", () => {
            browser.assert.success();
        });

        it("should see the show empresa page with the created empresa.", () => {
            browser.assert.url({pathname: /^\/empresas\/\d+$/})
        });

    });
});
