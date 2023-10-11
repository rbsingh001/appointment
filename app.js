
var e = 0;
var eid;
function addUser() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phn").value;

    const user = {
        name,
        email,
        phone
    }

    if (e = 0) {
        axios
            .post("https://crudcrud.com/api/e01dc420f2a94f3580b67c4c5f08b176/users",
                user
            )
            .then(response => {
                console.log(response)
                ShowNewUser(response.data)
            })
            .catch(error => console.log(error))
    }
    if (e = 1) {
        e = 0;
        axios.put(`https://crudcrud.com/api/e01dc420f2a94f3580b67c4c5f08b176/users/${eid}`,
            user
        )
            .then((response) => {
                console.log(response)
                location.reload();
            })
            .catch(error => console.log(error))
    }


}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/e01dc420f2a94f3580b67c4c5f08b176/users")
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

    li.appendChild(t);

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    let list = document.getElementById("ul")
    deleteButton.addEventListener("click", function () {
        deleteUser(u._id);

    })

    var editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.addEventListener("click", function () {
        editUser(u);
    })

    li.appendChild(deleteButton);
    li.appendChild(editbtn);


    li.setAttribute("id", `${u._id}`);
    ul.appendChild(li);



}

function deleteUser(x) {
    axios.delete(`https://crudcrud.com/api/e01dc420f2a94f3580b67c4c5f08b176/users/${x}`)
        .then((response) => {
            var liToRemove = document.getElementById(`${x}`);
            if (liToRemove) {
                liToRemove.remove();

            }
        })
        .catch((error) => console.log(error));
}
function editUser(z) {

    document.getElementById("name").value = z.name;

    document.getElementById("email").value = z.email;

    document.getElementById("phn").value = z.phone;

    e = 1;
    eid = z._id;
    console.log(eid);

}
