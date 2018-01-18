<template>
    <footer id="MyFooter" class="footer">
        <div class="container-fluid">
            <p class="copyright pull-right">
                {{ footerMsg }}
            </p>
        </div>
    </footer>
</template>


<script>
    export default {
        name: 'MyFooter',
        data() {
            return {
                footerMsg: 'Developed by Nicolás Fredes'
            }
        }
    }
</script>