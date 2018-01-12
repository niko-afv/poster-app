<template>
    <form class="navbar-form navbar-left navbar-search-form" role="search">
        <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
            <input type="text" value="" class="form-control" :placeholder="placeholder">
        </div>
    </form>
</template>

<script>
    export default {
        name: 'InputSearch',
        data() {
            return {
                placeholder: "Search ..."
            }
        }
    }
</script>