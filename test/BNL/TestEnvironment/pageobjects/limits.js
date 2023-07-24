const { isDisplayed, isClickable, waitUntilLimitIsChanged } = require("../../../functions")

class Limits
{
    get profileBtn() {return $(".header__user-menu-toggle")}
    get limitsBtn() {return $$(".accordion li a")}
    get depositBtn() {return $("(//div[@class='d-flex'])[1]").$("button")}
    get depositImput() {return $("input[name='limit_amount_week']")}
    get limitsSubmitBtn() {return $("(//form)[1]/div/div/button")}
    get depositLimitValue() {return $("(//p[@class='play-limits__limit-total text-primary'])[1]/span")}
    get lossBtn() {return $("(//div[@class='d-flex'])[2]/button")}
    get lossImput() {return $("#limit_amount_day")}
    get lossSubmitBtn() {return $("(//form)[2]/div/div/button")}
    get dailyLimit () {return $("(//p[@class='play-limits__limit-total text-primary'])[2]/span")}

    async Limits(depositLimit,dailyLoss){
    // await browser.url("")
    await isClickable(this.profileBtn, 20000)
    await this.profileBtn.click()
    for(var i=0; i<await this.limitsBtn.length; i++){
        if(await this.limitsBtn[i].getText() === "Mes limites de jeu" || await this.limitsBtn[i].getText() === "Speellimieten" ){
            await this.limitsBtn[i].click()
        }
    }
    await this.depositBtn.click()
    await browser.pause(4000)
    await isClickable(this.depositImput, 10000)
    await this.depositImput.setValue(depositLimit)
    await this.limitsSubmitBtn.click()
    // console.log(await this.depositLimit.getText())
    // await browser.pause(5000)
    await waitUntilLimitIsChanged(this.depositLimitValue, depositLimit)
    await this.lossBtn.click()
    await isClickable(this.lossImput, 10000)
    await this.lossImput.setValue(dailyLoss)
    await this.lossSubmitBtn.click()
    await waitUntilLimitIsChanged(this.dailyLimit, dailyLoss)
    }


}

module.exports = new Limits()