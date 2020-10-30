<template>
    <div class="container">
        <h2 style="text-align:center">Profile</h2>
        <form id="profile">
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
                    <button type="submit" class="btn btn-primary">
                        Update Profile
                    </button>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-3"></div>
                <div id="diverror" class="col-9">
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
        name: "Profile"
    };
</script>

<style></style>
