/*-------------------10th dec---------------------
//...load git apis...
// communicate between localserver and github server
const api = "https://api.github.com/users";
window.fetch(api)
.then(data => {//json object
    console.log(data.json().then(gituser => {
        console.log(gituser);
    })
    .catch(err => console.log(err)));
})
.catch(err => console.log(err));
-------------------------------------------------*/
/*----connecting localserver and github server ----

const api = "https://api.github.com/users";
console.log(window.fetch(api));
-------------------------------------------------*/
/*-------fetching respose bjects-------------
const api = "https://api.github.com/users";
window
.fetch(api)
.then(data)
.catch(err=>console.log(err);
 console.log(data); // pending(promises)
 -----------------------------------------*/
 /*---fetching respose bjects--------------

const api = "https://api.github.com/users";
window
.fetch(api)
.then(data => {
    console.log(data);
})
.catch(err=>console.log(err);

----------------------------------------*/

const api = "https://api.github.com/users";
window
.fetch(api)
.then(data => {
    data.json()
    .then(users => {
        var output =[];
        for(let user of users){
         output+= `
            <div class="container">
                <table class="table table-bordered mt-4">
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>repo</th>
                    <th>url</th>
                </tr>
                <tr>
                    <td>${user.id}</td>
                    <td>${user.login}</td>
                    <td><img style= width:100px;
                                    height:100px;
                                    border-radius:100%; 
                             src="${user.avatar_url}"/>
                    </td>
                    <td>${user.repos_url}</td>
                    <td>${user.url}</td>
                </tr>
                </table>
            </div>
            `;
            document.getElementById("template").innerHTML=output;
            //console.log(user.login);
        }
    })
    .catch(err => console.log(err));
})
.catch(err=>console.log(err));
