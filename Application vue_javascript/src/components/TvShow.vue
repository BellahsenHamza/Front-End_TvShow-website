<template>
    <router-link :to="{ name: 'DetailsTvShow', params: { TvShowId: tv.TvShowId } }">
                    <div class="card rounded">
                        <img class="card-img-top" v-bind:src="tv.Image"/>
                        <div class="card-body text-center" style="max-heigth:210px;">
                            <h4 class="card-title" style="min-height:50px;max-height:50px;">
                                {{tv.Title}}
                            </h4>
                            <!--afficher SeasonCount suivi du mot "season" si SeasonCount est égal à 1-->
                            <div v-if="tv.SeasonCount==1">{{tv.SeasonCount}} season</div>
                            <!--afficher SeasonCount suivi du mot seasons si SeasonCount est plus grand que 1-->
                            <div v-if="tv.SeasonCount>1">{{tv.SeasonCount}} seasons</div>
                        </div>
                    </div>
    </router-link>
</template>
<script>
export default {
     name: 'TvShow',
    props:{
        tv: Object
    }
}
</script>