<template>
    <div class="container" v-if="TvShow != null">
        <div class="row mb-4">
            <div class="col-5">
                <img v-bind:src="TvShow.Image" width="450" />
            </div>
            <div class="col-7">
                <div class="row">
                    <div class="col-8">
                        <h2>{{TvShow.Title}}</h2>
                    </div>
                    <div class="col-4" style="text-align:right;">
                        <div v-if="this.$root.access_token!=null" >
                            <button id="addFavoris" class="btn btn-success" v-if="fav==false" v-on:click="addFavoris">Add favorite</button>
                            <button id="suppFavoris" class="btn btn-danger" v-if="fav==true" v-on:click="deleteFavoris">Remove favorite</button>                            
                        </div>
                    </div>
                    <h5 class="col-12">{{TvShow.Year}}</h5>
                    <div class="col-3">
                        <p>{{TvShow.EpisodeCount}} episodes</p>
                    </div>
                    <div class="col-2">
                        <p>{{TvShow.TVParentalGuideline}}</p>
                    </div>
                    <div class="col-7">
                        <p class="text-right">
                            <span v-for="g in TvShow.Genres" v-bind:key="g.GenreId">{{g.Name}},</span>
                        </p>
                    </div>
                    <div class="col-2">Studio</div>
                    <div class="col-10">
                        <p>{{TvShow.Studio.Name}}</p>
                    </div>
                    <div class="col-12 text-justify">
                        <p>{{TvShow.Plot}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div
                class="col-lg-2 col-md-2 col-sm-3 col-4 mb-4"
                v-for="a in TvShow.Roles"
                v-bind:key="a.RoleId"
            >
                <Actor v-bind:a="a" />
            </div>
        </div>
        <div class="row">
            <div
                class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                v-for="s in TvShow.Seasons"
                v-bind:key="s.SeasonId"
            >
                <Season v-bind:s="s" />
            </div>
        </div>

        <!--Complétez le html nécessaire pour l'affichage -->
        <!--Vous devez avoir complété la méthode GetTvShow -->
    </div>
</template>

<script>
import Actor from "@/components/Actor.vue";
import Season from "@/components/Season.vue";
let srvURL = "http://tvshowapi.sv55.cmaisonneuve.qc.ca";

export default {
    name: "DetailsTvShow",
    components: {
        Actor,
        Season
    },
    props: ["TvShowId"],
    data: function() {
        return {
            TvShow: null,
            fav:false,
            ajout:null,
            del:null
        };
    },
    methods: {
        GetTvShow: function() {
            fetch(
                `http://tvshowapi.sv55.cmaisonneuve.qc.ca/api/tvshow?TvShowId=${this.TvShowId}`
            )
                .then(response => {
                    if (!response.ok) {
                        console.log(response);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    this.TvShow = data;
                });

        },
        getFavoris: function() {
            let bearerToken = "bearer " + this.$root.access_token;
            fetch(`${srvURL}/api/userfavorites?TvShowId=${this.TvShowId}`, {
                method: "GET",
                headers: {
                    Authorization: bearerToken
                }
            })
                .then((response)=> {
                    if (!response.ok) {
                        throw response;
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    this.fav=data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        addFavoris: function() {
            let bearerToken = "bearer " + this.$root.access_token;
            fetch(`${srvURL}/api/userfavorites?TvShowId=${this.TvShowId}`, {
                method: "POST",
                headers: {
                    Authorization: bearerToken
                }
            })
                .then((response)=> {
                    if (!response.ok) {
                        throw response;
                    }
                    this.fav=true;
                })


                .catch(error => {
                    console.error(error);
                });
        },
        deleteFavoris: function() {
            let bearerToken = "bearer " + this.$root.access_token;
            fetch(`${srvURL}/api/userfavorites?TvShowId=${this.TvShowId}`, {
                method: "DELETE",
                headers: {
                    Authorization: bearerToken
                }
            })
                .then((response)=> {
                    if (!response.ok) {
                        throw response;
                    }
                    this.fav=false;                    
                })


                .catch(error => {
                    console.error(error);
                });
        },
    },
    
    
    mounted: function() {
        this.GetTvShow();
        this.getFavoris();
    }
};
</script>

<style scoped>
a {
    text-decoration: none !important;
    color: black;
}
</style>
