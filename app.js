
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
        .then(response => {
            console.log(response)
            ShowNewUser(response.data)
        })
        .catch(error => console.log(error))

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/482ecc20abe7477a88e458fd5ca81571/users")
        .then((response) => {
            console.log(response)
            for (let i = 0; i < response.data.length; i++) {
                ShowNewUser(response.data[i]);
            }
        })
        .catch((error) => {
            console.log(error)
        })
})


function ShowNewUser(u) {
    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("phn").value = "";

    let ul = document.getElementById("ul")



    let li = document.createElement("li");
    let t = document.createTextNode(u.name + " " + u.email + " " + u.phone);
    console.log(t);

    li.appendChild(t);

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    let list = document.getElementById("ul")
    deleteButton.addEventListener("click", function(){
        // deleteUser(u);
        axios.delete(`https://crudcrud.com/api/482ecc20abe7477a88e458fd5ca81571/users/${u._id}`)
        .then((response) => {
            li.remove();
        })
        .catch((error) => console.log(error));

    })

    var editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';

    li.appendChild(deleteButton);
    li.appendChild(editbtn);
    ul.appendChild(li);



}

// function deleteUser(x){
//     axios.delete(`https://crudcrud.com/api/482ecc20abe7477a88e458fd5ca81571/users/${x._id}`)
//         .then((response) => {
//             li.remove();
//         })
//         .catch((error) => console.log(error));
// }