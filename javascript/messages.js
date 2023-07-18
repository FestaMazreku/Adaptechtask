function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Delete message
function deleteMessage(id, button) {
    if (confirm("Are you sure you want to delete this message?")) {
        $.ajax({
            url: 'database/messages.php',
            type: "POST",
            data: "deleteid=" + id,
            success: function (response) {
                console.log(response);
                if (response == "1") {
                    $(button).closest('tr').remove();
                    alert("The message is deleted successfully!");
                }
                else {
                    alert("The message is not deleted.");
                }
            },
            error: function (error) {
                console.log(error);
                alert("Error: The message is not deleted. " + error);
            },
        });
    }
}

//Get All
function GetAll(page, perPage) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    history.pushState({}, '', `?page=${page}`);

    $.ajax({
        type: 'GET',
        url: 'database/messages.php?messages',
        dataType: 'json',
    }).then((data) => {
        const totalUsers = data.length;
        const totalPages = Math.ceil(totalUsers / perPage);

        const from = (page - 1) * perPage;
        const to = page * perPage;
        const tableRows = data.slice(from, to).map((message) => {
            return `<tr id="row-${message.messageid}">
          <td><p class="table-element1">${message.messageid}</p></td>
          <td><p class="table-element2">${message.name}</p></td>
          <td><p class="table-element5">${message.email}</p></td>
          <td><p class="table-element5">${message.usermessage}</p></td>
          <td>
          <button class="btn7" onclick="deleteMessage(${message.messageid}, this)">Delete</button>
          </td>
        </tr>`;
        });

        tableBody.innerHTML = tableRows.join('');

        const paginationLinks = document.querySelectorAll('#pagination li.page-item');
        paginationLinks.forEach((link) => {
            link.classList.remove('active');
        });

        const currentPageLink = document.querySelector(`#pagination li.page-item:nth-child(${page})`);
        currentPageLink.classList.add('active');
        updatePagination(totalPages, page);

    }).catch((error) => {
        console.error('Error retrieving user data:', error);
    });
}

function updatePagination(totalPages, currentPage) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    //Previous page
    const prevPageLink = document.createElement('li');
    prevPageLink.classList.add('page-item');
    const prevPageButton = document.createElement('a');
    prevPageButton.classList.add('page-link');
    prevPageButton.href = 'javascript:void(0);';
    prevPageButton.onclick = () => GetAll(currentPage - 1, 10);
    prevPageButton.innerHTML = '&laquo;';
    prevPageLink.appendChild(prevPageButton);
    pagination.appendChild(prevPageLink);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('li');
        pageLink.classList.add('page-item');
        const pageButton = document.createElement('a');
        pageButton.classList.add('page-link');
        pageButton.href = 'javascript:GetAll(' + i + ', 10)';
        pageButton.innerHTML = i;
        pageLink.appendChild(pageButton);
        pagination.appendChild(pageLink);

        if (i === currentPage) {
            pageLink.classList.add('active');
        }
    }

    //Next page
    const nextPageLink = document.createElement('li');
    nextPageLink.classList.add('page-item');
    const nextPageButton = document.createElement('a');
    nextPageButton.classList.add('page-link');
    nextPageButton.href = 'javascript:void(0);';
    nextPageButton.onclick = () => GetAll(currentPage + 1, 10);
    nextPageButton.innerHTML = '&raquo;';
    nextPageLink.appendChild(nextPageButton);
    pagination.appendChild(nextPageLink);
}

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    if (currentUrl.indexOf("messages.html") > 0) {
        const page = searchParams.get('page');
        if (page == null) {
            GetAll(1, 10);
        } else {
            GetAll(page, 10);
        }
    }
});
