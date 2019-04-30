/* SLIDER */

$('.carousel').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover',
    wrap: true
});

/* TOOLTIPS */

// Init tooltips

$('[data-toggle="tooltip"]').tooltip();

function showTooltip() {
    $('#html-tooltip').tooltip('show');
}

function hideTooltip() {
    $('#html-tooltip').tooltip('hide');
}

function toggleTooltip() {
    $('#html-tooltip').tooltip('toggle');
}

// Tooltips Events

$('#html-tooltip').on('show.bs.tooltip', function () {
    console.log('Tooltip Show');
});

$('#html-tooltip').on('shown.bs.tooltip', function () {
    console.log('Tooltip Shown');
});

$('#html-tooltip').on('hide.bs.tooltip', function () {
    console.log('Tooltip Hide');
});

$('#html-tooltip').on('hidden.bs.tooltip', function () {
    console.log('Tooltip Hidden');
});

// Init popovers

$('[data-toggle="popover"]').popover();


/* SCROLL SPY */

$('body').scrollspy({target: "#mainNavbar"});

// Smooth scrolling

$('#mainNavbar a').on('click', function (e) {

    // Check for a hash value

    if (this.hash !== '') {

        // Prevent default behavior

        e.preventDefault();

        // Store hash

        const hash = this.hash;

        // Animate smooth scroll

        $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash to URL after scroll

                window.location.hash = hash;

            });
    }
});