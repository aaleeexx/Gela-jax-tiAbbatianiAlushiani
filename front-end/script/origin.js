$.getJSON('../back-end/loader.php', data => {
    let html = ``

    $(data).each((ind, item) => {
        html += `
        <tr>
            <td>`+item.ID+`</td>
            <td>`+item.name+`</td>
            <td>`+item.cost+`</td>
            <td>`+item.producer+`</td>
        </tr>`
    })

    $('.content > table').html(html)
})

$('#make').click(() => {
    window.open('pages/insert.html', '_self')
})

$('#home').click(() => {
    window.open('../index.html', '_self')
})