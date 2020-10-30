<template>
    <div class="container" v-if="Episode != null">
        <div class="row mb-4">
            <div class="col-5">
                <router-link v-bind:to="{ name: 'ViewEpisode', params: { EpisodeId: Episode.EpisodeId } }">
                    <img
                        style="max-width:450px;min-width:450px;"
                        v-bind:src="Episode.Image"
                        v-bind:alt="Episode.Title"
                    />
                </router-link>
            </div>
            <div class="col-7">
                <div class="row">
                    <div class="col-12">
                        <router-link
                            v-bind:to="{ name: 'DetailsTvShow', params: { TvShowId: Episode.Season.TvShow.TvShowId } }">
                            <h1>{{ Episode.Season.TvShow.TvShowTitle }}</h1>
                        </router-link>
                    </div>
                    <div class="col-12">
                        <h3>
                            <router-link v-bind:to="{ name: 'Episode', params: { SeasonId: Episode.Season.SeasonId } }">
                                {{ Episode.Season.ShortSeasonName }}
                            </router-link>
                            <span> - </span>
                            <span>{{ Episode.E00Format }}</span>
                            <span> - </span>
                            <span>{{ Episode.Title }}</span>
                        </h3>
                    </div>
                    <div class="col-2">
                        <p>{{ Episode.Runtime }}</p>
                    </div>
                    <div class="col-10">
                        <p>{{ Episode.Season.TvShow.TVParentalGuideline }}</p>
                    </div>
                    <div class="col-12">
                        <p class="text-justify">
                            {{ Episode.Plot }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailsEpisode',
        props: {
            EpisodeId: Number
        },
        data: function() {
            return {
                Episode: null
            };
        },
        methods: {
            GetDataEpisode: function() {
                fetch(`${this.$root.$data.srvURL}/api/episode?EpisodeId=${this.EpisodeId}`)
                    .then(response => {
                        if (!response.ok) throw response;
                        return response.json();
                    })
                    .then(data => {
                        this.Episode = data;
                    })
                    .catch(error => {
                        error.json().then(errorMessage => {
                            console.error(errorMessage);
                        });
                    });;
            }
        },
        mounted: function() {
            this.GetDataEpisode();
        }
    };
</script>

<style scoped>
    a {
        text-decoration: none !important;
        color: black;
    }
</style>
