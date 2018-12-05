$('#load').click(() =>
{
    setInterval(() => {
        $.get('../back-end/loader.php', data => {
            let html = `<ul>`

            $(data).each((ind, item) => {
                html += `
                <ul>
                    <li>`+item.ID+`</li>
                    <li>`+item.ID+`</li>
                    <li>`+item.ID+`</li>
                    <li>`+item.ID+`</li>`
            })
            html += `</ul>`
            $('.content').html(html)
        })
    }, 500)
})

$('#make').click(() => {
    window.open('pages/insert.html', '_self')
})

$('#home').click(() => {
    window.open('../index.html', '_self')
})