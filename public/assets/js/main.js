var type = ['html', 'css'];
for (var i = 0; i < type.length; ++i) {
    var e = ace.edit(type[i]);
    e.setTheme('ace/theme/monokai');
    e.getSession().setMode('ace/mode/' + type[i]);
}

var html, css, content;
var live = $("#live");

$(document).ready(function () {
    $('.button').click(function () {
        live.html(render());
        console.log(content, html, css)
    });
});

function render() {
    html = document.getElementsByClassName("ace_content")[0].textContent;
    css = document.getElementsByClassName("ace_content")[1].textContent;
    content = '<style>' + css + '</style>' + html;
    return content
    html = '';
    css = '';
    content = '';
}