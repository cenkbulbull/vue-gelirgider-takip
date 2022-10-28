import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";



Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		firebase:[]
	},
	getters:{
		getState(state){
			return state.firebase
		}
	},
	mutations:{
		postchangestate(state,value){
			state.firebase.push(value)
		},
		getchangestate(state,value){
			var data = value
			for(let key in data){
				state.firebase.push(data[key])
			}
		}
	},
	actions:{
		postChangeState({commit},params){
			axios.post("https://vue-gelirgider-default-rtdb.firebaseio.com/operation.json",params)
			.then(response =>{
				//console.log(response)
				commit("postchangestate",params)
			})
		},
		getChangeState({commit}){
			axios.get("https://vue-gelirgider-default-rtdb.firebaseio.com/operation.json")
			.then(response =>{
				//console.log(response)
				commit("getchangestate",response.data)	
			})
		}
	}
})