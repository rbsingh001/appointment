
function addUser() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phn").value;

    const user = {
        name,
        email,
        phone
    }
    axios
        .post("https://crudcrud.com/api/482ecc20abe7477a88e458fd5ca81571/users",
            user
        )
        .then(response => console.log(response))
        .catch(error => console.log(error))

}
