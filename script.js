
const options = {
	method: 'GET',
};
const getWeather = (id) => {
	idName.innerHTML = id;
	fetch('https://jsonplaceholder.typicode.com/users/' + id, options)
		.then(response => response.json())
		.then(response => {
			console.log(response);
	
			Name.innerHTML =  response.name  
			email.innerHTML =  response.email 
			address.innerHTML =  response.address.city 
			company.innerHTML =  response.company.name 
		})
		.catch(err => {
			console.error(err);
			idName.innerHTML = "invalid";
			Name.innerHTML =  "undefined"
			email.innerHTML =  "undefined"
			address.innerHTML =  "undefined"
			company.innerHTML =  "undefined"
		});
}


submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(id.value)
})
getWeather("2")
