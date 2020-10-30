<template>
    <div class="container">
        <h2 style="text-align:center">Login</h2>
        <form id="frmLogin">
            <div id="grpEmail" class="form-group row">
                <label for="email" class="col-3 col-form-label">Email</label>
                <div class="col-9">
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                        required
                        maxlength="100"
                    />
                </div>
            </div>
            <div id="grpPassword" class="form-group row">
                <label for="password" class="col-3 col-form-label">Password</label>
                <div class="col-9">
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                        required
                        minlength="4"
                        maxlength="15"
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-3"></div>
                <div class="col-9">
                    <button type="submit" class="btn btn-primary" v-on:click.prevent="getToken">
                        Login
                    </button>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-3"></div>
                <div id="diverror" class="col-9">
                    <div
                        id="msgerror"
                        class="alert alert-danger"
                        style="display:inline-block;margin:0 auto; visibility:hidden"
                        role="alert">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    let srvURL = 'http://tvshowapi.sv55.cmaisonneuve.qc.ca'; 
    export default {
        name: "Login",
        methods: {
             getToken: function() {
            let tokenURL = `${srvURL}/token`
            let encodedEmail = encodeURIComponent(document.getElementById("email").value);
            let encodedPassword = encodeURIComponent(document.getElementById("password").value);
            let bodyContent = `grant_type=password&username=${encodedEmail}&password=${encodedPassword}`;
            fetch(tokenURL, {
                method: "POST",
                body: bodyContent,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response)=> {
                if (!response.ok) { throw response; }
                return response.json();
            }).then((data) => {
                console.log(data);
                this.$root.access_token=data.access_token;
                this.$router.push("/");
            }).catch((error) => {
               
                   error.json().then(errorMessage => {
                    //traiter l'erreur

                    console.error(errorMessage);
                    if (errorMessage.error_description != null)
                        document.getElementById("msgerror").style.visibility ="visible";                       
                        document.getElementById("msgerror").innerHTML = errorMessage.error_description;
                });
                
                    
                
                
            });
        },
        
        
    }
};
    
</script>