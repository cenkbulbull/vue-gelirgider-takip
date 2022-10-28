import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./components/Home"
import IncomeAdd from "./components/IncomeAdd"
import ExpensesAdd from "./components/ExpensesAdd"
import IncomeReport from "./components/IncomeReport"
import GetOperation from "./components/GetOperation"



Vue.use(VueRouter)

export const router = new VueRouter({
	routes :[
		{path:"/", component:Home},
		{path:"/incomeadd", component:IncomeAdd},
		{path:"/expensesadd", component:ExpensesAdd},
		{path:"/incomereport", component:IncomeReport},
		{path:"/getoperation", component:GetOperation},
		{path:"*", redirect:"/"},
	],
	mode:"history"
})