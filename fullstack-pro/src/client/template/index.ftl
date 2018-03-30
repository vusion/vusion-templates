<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <% for (var css in htmlWebpackPlugin.files.css) { %>
    <link rel="stylesheet" type="text/css" href="<%= htmlWebpackPlugin.files.css[css] %>" />
    <% } %>
</head>

<body>
    <div id="app">
        <router-view></router-view>
    </div>
    <% for (var js in htmlWebpackPlugin.files.js) { %>
    <script src="<%= htmlWebpackPlugin.files.js[js] %>"></script>
    <% } %>
</body>

</html>