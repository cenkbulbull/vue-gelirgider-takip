<template>
	<div class="row p-3">
		<div class="col-md-12">
			<div class="card">
				<div class="card-body">
					<div class="col-md-12 mb-3 d-flex justify-content-center">
						<div class="d-flex justify-content-center">
							<h2>Report</h2>

						</div>
					</div>
					<div class="row mt-4 text-center d-flex justify-content-center">
						<div class="col-6 w-25 mx-2 alert alert-success">
							<p>Gelir: <span class="fs-3"> {{income}}₺ </span></p>
						</div>
						<div class="col-6 w-25 alert alert-danger">
							<p>Gider: <span class="fs-3">{{expenses}}₺</span></p>
						</div>
					</div>
					<div class="row text-center d-flex justify-content-center" >
						<div v-if="gain>=0" class="col-12 w-25 alert alert-info">
							<p>Toplam: <span class="fs-3">+ {{gain}}₺</span></p>
						</div>
						<div v-else class="col-12 w-25 alert alert-warning">
							<p>Toplam: <span class="fs-3">{{gain}}₺</span></p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"

	export default{
		data(){
			return{
				income:null,
				expenses:null,
				gain:null
			}
		},
		created(){
			axios.get("https://vue-gelirgider-default-rtdb.firebaseio.com/operation.json")
			.then(response =>{
				//console.log(response)
				var data = response.data
				var income=0
				var expenses=0
				for(let key in data){
					//console.log(data[key])
					if (data[key].operation=="Income") {
						income+=parseInt(data[key].price)
					}
					else if(data[key].operation=="Expenses"){
						expenses+= parseInt(data[key].price)
					}
				}

				this.income = income
				this.expenses = expenses
				this.gain = this.income - this.expenses


			})
		}
	}
</script>


<style>

</style>
