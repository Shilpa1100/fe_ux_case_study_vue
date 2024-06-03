import Summary from "./components/Summary.js"
import projectProgressSummary from "./components/projectProgressSummary.js"
import latestActivity from "./components/latestActivity.js"
import newProducts from "./components/newProducts.js"
import whatsNew from "./components/whatsNew.js"
import salesGraph from "./components/salesGraph.js"
import dealsAnalytics from "./components/dealsAnalytics.js"

          
const app = Vue.createApp({
   template: `
   <dealsAnalytics />
   <Summary />
   <projectProgressSummary />
   <salesGraph />
   <whatsNew />  
   <latestActivity /> 
   <newProducts />`,
   components: { Summary, projectProgressSummary, latestActivity, newProducts, whatsNew, salesGraph, dealsAnalytics}
})
app.mount('#app')