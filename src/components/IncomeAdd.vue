<template>
	<div class="row p-3">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <div class="col-md-12 mb-3 d-flex justify-content-center">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a @click="$router.push('/incomeadd')" class="nav-link active" aria-current="page">INCOME</a>
              </li>
              <li class="nav-item">
                <a @click="$router.push('/expensesadd')" class="nav-link " aria-current="page">EXPENSES</a>
              </li>
            </ul>
          </div>

          <form @submit.prevent="addIncome()" class="needs-validation" novalidate>

            <div class="input-group mb-3">
              <span class="input-group-text">TL</span>
              <input v-model="income.price" type="number" pattern="\d*" class="form-control" id="validationCustom05" name="income_price" required aria-label="Amount (to the nearest dollar)">
              <span class="input-group-text">.00</span>
            </div>

            <div class="mb-3">
              <select v-model="income.type" class="form-control" required>
                <option>
                  Gelir kategorisi seçin
                </option>
                <option value="Kira">
                  Kira
                </option>
                <option value="Satış">
                  Satış
                </option>
                <option value="Sponsor">
                  Sponsor
                </option>
                <option value="Diğer">
                  Diğer
                </option>
              </select>
            </div>


            <div class="input-group date mt-3" id="datepicker">
              <input v-model="income.date" type="date" class="form-control" required name="income_date">
            </div>
            <div class="mt-3">
             <button type="submit" name="income_add" href="#" class="btn btn-outline-secondary w-100 btn-lg"><i class="bi bi-plus"></i>
             Gelir Ekle</button>
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
        income:{
          operation:"Income",
          price:null,
          type:null,
          date:null,
        }
      }
    },
    methods:{
      addIncome(){
        this.$store.dispatch("postChangeState",this.income)
        this.$router.push("/getoperation")
      }
    }
  }
</script>

<style>
</style>