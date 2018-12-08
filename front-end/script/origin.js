// This will take the jsion data from the PHP 'loader' page and show it into a stylized table
$.getJSON('../back-end/loader.php', data => {
    let html = `
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COST</th>
            <th>PRODUCER</th>
        </tr>`

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

// Simple controls for the 'Ice Creams' and 'Create One' buttons, in the main pag (index.html)
$('#make').click(() => window.open('pages/insert.html', '_self'))
$('#home').click(() => location.reload(true))

// This will send all the data to the page creator.php, which will insert them into the database
$.post('../../back-end/creator.php', res => {
    if(res == '200')
        window.open('../index.html', '_self')
    else
        alert("Error on creating the new ice cream")
})