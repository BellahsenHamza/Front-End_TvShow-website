<template>
    <div class="container">
        <h2 style="text-align:center">Sign Up</h2>
        <form id="signup">
            <div class="form-group row">
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
            <div class="form-group row">
                <label for="password" class="col-3 col-form-label">Password</label>
                <div class="col-9">
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                        minlength="4"
                        maxlength="15"
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="passwordconfirm" class="col-3 col-form-label">Password Confirmation</label>
                <div class="col-9">
                    <input
                        type="password"
                        class="form-control"
                        id="passwordconfirm"
                        placeholder="Password"
                        minlength="4"
                        maxlength="15"
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-3"></div>
                <div class="col-9">
                    <button v-on:click.prevent="SignUp" type="submit" class="btn btn-primary">
                        SignUp
                    </button>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-3"></div>
                <div id="diverror" class="row">
                    <div
                        id="msgerror"
                        class="alert alert-danger"
                        style="display:inline-block;margin:0 auto;"
                        role="alert">
                        {{ errorText }}
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SignUp"
    };
</script>
