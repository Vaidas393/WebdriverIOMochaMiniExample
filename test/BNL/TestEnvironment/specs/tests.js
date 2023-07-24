const loginObject = require("../pageobjects/login")
const limitsObject = require("../pageobjects/limits")
const wbfObject = require("../pageobjects/wbfLogin")
const wbfLimitsObject = require("../pageobjects/wbfLimits")
const fs =require('fs')
const expectchai = require('chai').expect
let loginData =JSON.parse(fs.readFileSync('test/BNL/TestEnvironment/data/login.json'))
let limitData =JSON.parse(fs.readFileSync('test/BNL/TestEnvironment/data/limits.json'))
let wbflLoginData =JSON.parse(fs.readFileSync('test/BNL/TestEnvironment/data/wbfLogin.json'))
let wbflLimitsData =JSON.parse(fs.readFileSync('test/BNL/TestEnvironment/data/wbfLimits.json'))

describe("WbfLogin Wbf",async()=>{
    wbflLoginData.forEach(({wbfUsername,wbfPassword})=>{
        it("Wbf Limits",async()=>{
            await wbfObject.WbfLogin(wbfUsername,wbfPassword)
        })
    })
    })

describe("WbfLimits Wbf",async()=>{
    wbflLimitsData.forEach(({username,deposit,dailyLoss})=>{
        it("Wbf Limits",async()=>{
            await wbfLimitsObject.WbfLimits(username,deposit,dailyLoss)
        })
    })
    })


describe("Login BNL",async()=>{
loginData.forEach(({language,username,password})=>{
    it("Login test",async()=>{
        // await loginObject.Login(loginData[0]["language"])
        await loginObject.Login(language,username,password)
    })
})
})

describe("Setting limits BNL", async()=>{
    limitData.forEach(({depositLimit,dailyLoss})=>{
    it("Limits test",async()=>{
        await limitsObject.Limits(depositLimit,dailyLoss)
        expectchai(await limitsObject.depositLimitValue.getText()).to.equal("€" + depositLimit)
        expectchai(await limitsObject.dailyLimit.getText()).to.equal("€" + dailyLoss)

     })
})
})
