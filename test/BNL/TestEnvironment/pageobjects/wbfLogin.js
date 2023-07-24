// const { isDisplayed, isClickable } = require("../../../functions")

class WbfLogin
{
    get usernameInput() {return $("input[name='username']")}
    get passwordInput() {return $("input[name='password']")}
    get submitBtn() {return $("button[type='submit']")}
    
    async WbfLogin(wbfUsername,wbfPassword){
    await browser.url("https://bnl-test.tglab.dev/TGBetReactUI")
    await browser.maximizeWindow()
    await this.usernameInput.setValue(wbfUsername)
    await this.passwordInput.setValue(wbfPassword)
    await this.submitBtn.click()
    }

}

module.exports = new WbfLogin()