const { isDisplayed, isClickable } = require("../../../functions")

class LoginPage
{
    
    get languageBtn() {return $(".lang-select-container").$$("button")}
    get loginBtn() {return $(".login-dropdown__toggle")}
    get usernameInput() {return $("input[name='email']")}
    get passwordInput() {return $("input[name='password']")}
    get submitBtn() {return $("button[type='submit']")}
    get userDiv() {return $(".user-menu-dropdown")}

    async Login(language,username,password){
    await browser.url("")
    await browser.maximizeWindow()
    for(var i=0; i<await this.languageBtn.length; i++){
        if(await this.languageBtn[i].getText() === language){
            await this.languageBtn[i].click()
        }
    }
    await isClickable(this.loginBtn, 20000)
    await this.loginBtn.click()
    await this.usernameInput.setValue(username)
    await this.passwordInput.setValue(password)
    await this.submitBtn.click()
    await isDisplayed(this.userDiv, 20000)
    console.log("Login succesfull")
    // await browser.pause(6000)
    }

}

module.exports = new LoginPage()