
const userFirstNameAdd  = document.getElementById('userFirstNameAdd')
const userLastNameAdd = document.getElementById('userLastNameAdd')
const userAgeAdd  = document.getElementById('userAgeAdd')
const userEmailAdd  = document.getElementById('userEmailAdd')
const userPasswordAdd  = document.getElementById('userPasswordAdd')

const adminRole = [{
    id: 1,
    name: 'ADMIN',
    users: [],
    authority: 'ADMIN'
},

    {
        id: 2,
        name: 'USER',
        users: [],
        authority: 'USER'
    }
]
const userRole = [{
    id: 2,
    name: 'USER',
    users: [],
    authority: 'USER'
}]

const addForm = document.querySelector('#addForm')

addForm.addEventListener('submit', (e) => {

        e.preventDefault()

        var selectedRole = addForm.roleToAdd.options.selectedIndex

        if (selectedRole == 0) {
            role = adminRole
        } else role= userRole;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({

                first_name: userFirstNameAdd.value,
                last_name: userLastNameAdd.value,
                age: userAgeAdd.value,
                email: userEmailAdd.value,
                password: userPasswordAdd.value,
                roles: role
            })

        }).then(response => response.json())
            .then(response => location.reload())
    }
)
