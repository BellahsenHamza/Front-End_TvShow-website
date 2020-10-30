<template>
    <div class="container" v-if="TvShows!=null">
        <div class="row">
            <h1 id="msg"
                class="text-danger col-12"
                v-if="TvShows.length==0"
            >You must add a TvShow to your favorites first</h1>
            <div
                class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                v-for="tv in TvShows"
                v-bind:key="tv.TvShowId"
            >
                <TvShow v-bind:tv="tv" />
            </div>
        </div>
    </div>
</template>

<script>
let srvURL = "http://tvshowapi.sv55.cmaisonneuve.qc.ca";
import TvShow from "@/components/TvShow.vue";

export default {
    name: "FavoriteShows",
    data: function() {
        return {
            TvShows: null
        };
    },
    components: {
        TvShow
    },
    methods: {
        getUserInfo: function() {
            let bearerToken = "bearer " + this.$root.access_token;
            fetch(`${srvURL}/api/favoriteTvshows`, {
                method: "GET",
                headers: {
                    Authorization: bearerToken
                }
            })
                .then(function(response) {
                    if (!response.ok) {
                        throw response;
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    this.TvShows = data;
                })
                .catch(error => {
                    console.error(error);
                    document.getElementById("msg").innerHTML=error.statusText;
                });
        }
    },
    
    mounted: function() {
        this.getUserInfo();
    }
};
</script>

<style></style>
