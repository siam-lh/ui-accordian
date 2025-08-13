$(".accordian-header").click(function () {
    let item = $(this).parent();

    // Close others (single-open)
    $(".accordian-item")
        .not(item)
        .removeClass("active")
        .find(".acordian-answer")
        .slideUp();

    // Toggle this one
    item.toggleClass("active").find(".acordian-answer").slideToggle();
});
