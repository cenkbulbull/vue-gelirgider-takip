<template>
	<div class="container-fluid p-0 " id="home">

		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Gelir</h5>
						<p class="card-text">Bir gelir işlemi girin.</p>
						<a @click="$router.push('/incomeadd')" class="btn btn-outline-secondary w-100 btn-lg"><i class="bi bi-plus"></i> Gelir Ekle</a>
					</div>
				</div>
			</div>
			<div class="col-md-12">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Gider</h5>
						<p class="card-text">Bir gider işlemi girin.</p>
						<a @click="$router.push('/expensesadd')" class="btn btn-outline-secondary w-100 btn-lg"><i class="bi bi-dash"></i>
						Gider Ekle</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style></style>