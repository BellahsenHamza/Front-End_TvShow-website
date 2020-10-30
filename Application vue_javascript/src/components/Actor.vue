<template>
    <div class="card">
        <img class="card-img-top mx-auto rounded role-img"  v-bind:src="a.Image" v-bind:alt="a.Name">
            <div  class="card-body text-center" style="min-height: 140px;">
                <p class="card-title small" style="font-weight: bold;">{{a.Name}}</p>
                <p class="small">{{a.Character}}</p>
            </div>     
    </div>
</template>

<script>
export default {
    name: 'Actor',
    props:{
        a: Object
    }

}
</script>