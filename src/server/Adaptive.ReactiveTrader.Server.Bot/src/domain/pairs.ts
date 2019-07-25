const pairSettings = new Map<string, {pipsPosition:number, ratePrecision:number}>()

pairSettings.set("EURUSD",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("USDJPY",{pipsPosition: 2, ratePrecision: 3})
pairSettings.set("GBPUSD",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("GBPJPY",{pipsPosition: 2, ratePrecision: 3})
pairSettings.set("EURGBP",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("USDCHF",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("EURJPY",{pipsPosition: 2, ratePrecision: 3})
pairSettings.set("EURCHF",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("AUDUSD",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("NZDUSD",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("EURCAD",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("EURAUD",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("AUDCAD",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("GBPCHF",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("CHFJPY",{pipsPosition: 2, ratePrecision: 3})
pairSettings.set("AUDJPY",{pipsPosition: 2, ratePrecision: 3})
pairSettings.set("AUDNZD",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("CADJPY",{pipsPosition: 2, ratePrecision: 3})
pairSettings.set("CHFUSD",{pipsPosition: 4, ratePrecision: 5})
pairSettings.set("EURNOK",{pipsPosition: 4, ratePrecision: 4})
pairSettings.set("EURSEK",{pipsPosition: 4, ratePrecision: 4})

export default pairSettings