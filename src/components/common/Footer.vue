<template>
	<footer>
		<section >
			<nav class="navbar fixed-bottom navbar-light bg-light p-0 m-0 col-md-12">
				<div class="container p-0">
					<div class="btn-group col-12 nested ">

						<router-link 
							to="/"
							tag="a"
							class="btn btn-outline-secondary btn-lg"
							active-class="active"
							exact
						>
							<i class="bi bi-house" style="font-size: 2rem;"></i>
						</router-link>

						<router-link 
							to="/incomereport"
							tag="a"
							class="btn btn-outline-secondary btn-lg "
							active-class="active"
						>
							<i class="bi bi-cash" style="font-size: 2rem;"></i>
						</router-link>

						<router-link 
							to="/getoperation"
							tag="a"
							class="btn btn-outline-secondary btn-lg "
							active-class="active"
							exact
						>
							<i class="bi bi-info" style="font-size: 2rem;"></i>
						</router-link>
					</div>
				</div>
			</nav>
		</section>
	</footer>
</template>

<script>
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	/*(function () {
		'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
  .forEach(function (form) {
  	form.addEventListener('submit', function (event) {
  		if (!form.checkValidity()) {
  			event.preventDefault()
  			event.stopPropagation()
  		}

  		form.classList.add('was-validated')
  	}, false)
  })
})() */

export default{

}
</script>

<style>
	
</style>