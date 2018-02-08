<template>
<div :class="$style.root">
    <main :class="$style.body">
        <div>
            <h2>Welcome to Vukoa 模板</h2>
        </div>
    </main>
</div>
</template>

<script>
export default {};
</script>

<style module>
.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 68px;
    background: $brand-primary;
    color: white;
    box-shadow: 0 3px 4px rgba(0,0,0,0.1);
    padding: 0 10px;
    z-index: 1;
}

.wrap {
    width: 1180px;
    margin: 0 auto;
}

.left {
    float: left;
}

.right {
    float: right;
}

.banner {
    margin-top: 68px;
    height: 480px;
    background: #f0f6fa;
    color: #676975;
}

.bannerContent {
    width: 1180px;
    margin: 0 auto;
    padding: 80px;
}

.heading {
    font-size: 52px;
    font-weight: normal;
    margin-bottom: 20px;
}

.subtitle {
    font-size: 28px;
    font-weight: normal;
    margin: 0;
}
</style>


