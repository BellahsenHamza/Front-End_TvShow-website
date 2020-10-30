<template>
    <nav id="nav" class="navbar navbar-expand navbar-light bg-light" style="margin-bottom:20px">
            <router-link class="navbar-brand" to="/">TP3</router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Library</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/SignUp" v-if="this.$root.access_token==null">Sign Up</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/Login" v-if="this.$root.access_token==null">Login</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/Profile" v-if="this.$root.access_token!=null">Profile</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/FavoriteShows" v-if="this.$root.access_token!=null">Favorite Shows</router-link>
                    </li>
                    <li class="nav-item active">
                        <span class="nav-link" style="cursor:pointer" v-if="this.$root.access_token!=null" v-on:click="logout">Logout</span>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </nav>
</template>
<script>
export default {
    name:'NavBar',
    methods:{
        logout: function(){
             this.$root.access_token=null;
             this.$router.push("/");

        }
    }

}
</script>
<