<template>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="title m-b-md italic" style="margin-top: -125pt;">
                {{ title }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'welcome',
    props:['title']
}
</script>
<style scoped>
html, body {
    background-color: #fff;
    color: #636b6f;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    height: 100vh;
    margin: 0;
}

.full-height {
    height: 100vh;
}

.flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
}

.position-ref {
    position: relative;
}

.top-right {
    position: absolute;
    right: 10px;
    top: 18px;
}

.content {
    text-align: center;
}

.title {
    font-size: 84px;
}

.links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
}

</style>
