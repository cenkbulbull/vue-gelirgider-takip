<template>
	<div class="row p-3">

		<div class="col-md-12">

			<div class="card">
				<div class="card-body">

					<div class="col-md-12 mb-3 d-flex justify-content-center">
						<ul class="nav nav-tabs">
							<li class="nav-item">
								<a @click="$router.push('/incomeadd')" class="nav-link " aria-current="page">INCOME</a>
							</li>
							<li class="nav-item">
								<a @click="$router.push('/expensesadd')" class="nav-link active " aria-current="page">EXPENSES</a>
							</li>
						</ul>
					</div>

					<form @submit.prevent="addExpenses()" class="needs-validation" novalidate>
						<div class="input-group mb-3">
							<span class="input-group-text">TL</span>
							<input v-model="expenses.price" type="number" pattern="\d*" class="form-control" id="validationCustom05" required aria-label="Amount (to the nearest dollar)" name="expenses_price">
							<span class="input-group-text">.00</span>
						</div>
						<div class="mb-3">
							<select v-model="expenses.type" class="form-control" required>
								<option>
									Gider kategorisi seçin
								</option>
								<option value="Kira">
									Kira
								</option>
								<option value="Vergi">
									Vergi
								</option>
								<option value="Yemek">
									Yemek
								</option>
								<option value="Yol">
									Yol
								</option>
								<option value="Diğer">
									Diğer
								</option>
							</select>
						</div>

						<div class="input-group date mt-3" id="datepicker">
							<input v-model="expenses.date" type="date" class="form-control" required name="income_date">
						</div>

						<div class="mt-3">
							<button type="submit" name="expenses_add" href="#" class="btn btn-outline-secondary w-100 btn-lg"><i class="bi bi-dash"></i>
							Gider Ekle</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				expenses:{
					operation:"Expenses",
					price:null,
					type:null,
					date:null,
				}
			}
		},
		methods:{
			addExpenses(){
				this.$store.dispatch("postChangeState",this.expenses)
				this.$router.push("/getoperation")
			}
		}
	}
</script>

<style>
	
</style>