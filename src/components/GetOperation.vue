<template>

	<div>
		<div class="table-responsive">
			<table class="table text-center text-white">
				<thead class="table-dark">
					<tr>
						<th>#</th>
						<th>Operation</th>
						<th>Type</th>
						<th>Date</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr v-if="item.operation=='Income' ? colorClass='text-success' : colorClass='text-danger'" :class="colorClass" v-for="(item,index) in getFirebase">
						<td>{{index+1}}</td>
						<td>{{item.operation}}</td>
						<td>{{item.type}}</td>
						<td>{{item.date}}</td>
						<td>{{item.price}} ₺</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				colorClass:null
			}
		},
		computed:{
			getFirebase(){
				return this.$store.getters.getState
			}
		}
	}
</script>
<style scoped>
	.table-responsive {
		overflow-y:auto;
		height:550px;
	}
</style>