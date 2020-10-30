<template>
    <div class="container" v-if="Season != null">
        <h1>{{ Season.EpisodeCount }} episodes</h1>
        <div class="row">
            <div
                class="col-md-4 col-sm-6 col-12 mb-4"
                v-for="Episode in Season.Episodes"
                v-bind:key="Episode.EpisodeId">
                <Episode v-bind:Episode="Episode"/>
            </div>
        </div>
    </div>
</template>

<script>
import Episode from '@/components/Episode.vue'

    export default {
        name: "EpisodeList",
         components:{
            Episode
        },
        props: {
            SeasonId: Number
        },
        data: function() {
            return {
                Season: null
            };
        },
        methods: {
            GetDataEpisodes: function() {
                fetch(`${this.$root.$data.srvURL}/api/episodes?SeasonId=${this.SeasonId}`)
                    .then(response => {
                        if (!response.ok) throw response;
                        return response.json();
                    })
                    .then(data => {
                        this.Season = data;
                    })
                    .catch(error => {
                        error.json().then(errorMessage => {
                            console.error(errorMessage);
                        });
                    });;
            }
        },
        mounted: function() {
            this.GetDataEpisodes();
        }
    };
</script>

<style scoped>
    a {
        text-decoration: none !important;
        color: black;
    }
    div.card {
        max-width: 325px;
        min-width: 325px;
    }
    img {
        max-width: 325px;
        max-height: 180px;
        min-width: 325px;
        min-height: 180px;
    }
    h5.card-title {
        max-height: 50px;
    }
</style>
