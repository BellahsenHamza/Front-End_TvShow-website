<template>
    <router-link v-bind:to="{ name: 'DetailsEpisode', params: { EpisodeId: Episode.EpisodeId } }">
                    <div class="card">
                        <img
                            class="card-img-top mx-auto rounded"
                            v-bind:src="Episode.Image"
                            v-bind:alt="Episode.Title"
                        />
                        <div class="card-body text-center">
                            <h5 class="card-title">{{ Episode.Title }}</h5>
                            <p>Episode {{ Episode.Number }}</p>
                        </div>
                    </div>
                </router-link>
</template>
<script>
export default {
    name: 'Episode',
    props:{
        Episode: Object
    }
}
</script>