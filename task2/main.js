$(document).ready(function() {

    hideDeletedCells();
    markColumnItems();

    $('.image-item').click(function() {
        const imagePath = $(this).attr('src');
        openModal(imagePath);
    });

    $('.modal-semitransparent-background').click(function() {
        closeModal();
    })

    $('.cross').click(function() {
        closeModal();
    })

    $('#countImagesButton').click(function() {
        let itemCount = $('.grid-item:not(.hidden)').length;

        let currentDate = new Date();
        let formattedDate = currentDate.toLocaleString('uk-UA');

        $('#imageCounterCountSection').text(itemCount);
        $('#imageCounterDateSection').text(formattedDate);
    });

    $('.image-cross').click(function() {
        let gridItem = $(this).closest('.grid-item');
        addItemToLocalStorage(gridItem);

        gridItem.addClass('hidden');

        markColumnItems();
    });

    $('#restoreButton').click(function() {

        clearLocalStorage();

        $('.grid-item').removeClass('hidden');
        markColumnItems();
    });
    
});

$(window).resize(function() {
    markColumnItems();
});

function markColumnItems() {
    let items = $('.grid-item:not(.hidden)');
    let screenWidth = $(window).width();
    let itemsPerRow;

    if (screenWidth > 900) {
        itemsPerRow = 4;
    }
    else if (screenWidth > 500 && screenWidth <= 900) {
        itemsPerRow = 2;
    }
    else {
        itemsPerRow = 1;
    }

    markFirstColumnItem(items, itemsPerRow);
}

function markFirstColumnItem(items, itemsPerRow) {

    items.removeClass('first-column');

    items.each(function(index) {
        if (index % itemsPerRow === 0) {
            $(this).addClass('first-column');
        }
    });

    console.log(itemsPerRow);
}

function hideDeletedCells() {
    let removedImages = JSON.parse(localStorage.getItem('removedImages')) || [];

    $('.grid-item').each(function() {
        let itemId = $(this).data('id');
        if (removedImages.includes(itemId)) {
            $(this).addClass('hidden');
        }
    });
}

function addItemToLocalStorage(gridItem) {
    let removedImages = JSON.parse(localStorage.getItem('removedImages')) || [];

    let itemId = $(gridItem).data('id');

    if (!removedImages.includes(itemId)) {
        removedImages.push(itemId);
    }

    localStorage.setItem('removedImages', JSON.stringify(removedImages));
}

function clearLocalStorage() {
    removedImages = [];
    localStorage.removeItem('removedImages');
}

function openModal(imagePath) {
    $('.modal-image').attr('src', imagePath);
    $('.modal-semitransparent-background').addClass('active');
    $('.modal').addClass('active');
}

function closeModal() {
    $('.modal-semitransparent-background').removeClass('active');
    $('.modal').removeClass('active');
}