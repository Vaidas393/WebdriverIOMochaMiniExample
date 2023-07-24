// const { isDisplayed, isClickable } = require("../../../functions")

class WbfSetLimits
{
    
    // get languageBtn() {return $(".lang-select-container").$$("button")}
    // get loginBtn() {return $(".login-dropdown__toggle")}
    get usernameInput() {return $("input[name='inputBox']")}
    get playerBtn() {return $("//button[3]")}
    get limitsLink() {return $("*=Limits")}
    get editBtn() {return $("(//a[@class='editDataButton'][normalize-space()='Edit'])[2]")}
    get depositInput() {return $("(//div[@class='col-3'])[5]/input")}
    get lossInput() {return $("(//div[@class='col-3'])[7]/input")}
    get saveBtn() {return $("(//button[normalize-space()='Save changes'])[1]")}

    async WbfLimits(username,deposit,dailyLoss){
    await this.usernameInput.setValue(username)
    // await this.passwordInput.setValue(wbfPassword)
    await this.playerBtn.click()
    await this.limitsLink.click()
    await this.editBtn.click()
    await this.depositInput.setValue(deposit)
    await this.lossInput.setValue(dailyLoss)
    await this.saveBtn.click()
    // await isDisplayed(this.userDiv, 20000)
    // console.log("Login succesfull")
    await browser.pause(5000)
    }

}

module.exports = new WbfSetLimits()