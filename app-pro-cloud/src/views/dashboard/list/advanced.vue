<template>
<u-linear-layout direction="vertical">
    <div>这里汇聚了你在网易云基础服务上的所有 Kafka 服务集群。<u-link>如何创建 Kafka 集群？</u-link><u-link>如何创建 Connect 集群？</u-link></div>
    <u-tabs router>
        <u-tab title="Kafka 集群" to="/list/advanced/sub1"></u-tab>
        <u-tab title="Connect 集群" to="/list/advanced/sub2"></u-tab>
    </u-tabs>
    <router-view></router-view>
</u-linear-layout>
</template>
