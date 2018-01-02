<template>
<u-form gap="large">
    <u-form-item label="实例名称">
        <u-input size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item label="实例名称">
        <u-radios>
            <u-radio>苹果</u-radio>
            <u-radio>杯子</u-radio>
            <u-radio>沙发</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="规格">
        <u-capsules value="0101">
            <u-capsule value="0101">1核 1GB</u-capsule>
            <u-capsule value="0102">1核 2GB</u-capsule>
            <u-capsule value="0204">2核 4GB</u-capsule>
            <u-capsule value="0408">4核 8GB</u-capsule>
            <u-capsule value="0816">8核 16GB</u-capsule>
            <u-capsule value="0832">8核 32GB</u-capsule>
            <u-capsule value="1664">16核 64GB</u-capsule>
        </u-capsules>
    </u-form-item>
    <u-form-item label="端口号">
        <u-select>
            <u-select-item>test</u-select-item>
            <u-select-item>test</u-select-item>
            <u-select-item>test</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="端口号">
        <u-input size="huge" maxlength="5" placeholder="1150-65535" value="3306"></u-input>
    </u-form-item>
    <u-form-item label="详情">
        <u-textarea size="huge"></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
</template>

<style scoped>
.test {}
</style>
