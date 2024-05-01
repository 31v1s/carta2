$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        $(".words.line1").html("<p>TE AMO SAMI ME ENAMORE DE TI MI NIÑA, ¿TU TAMBIEN DE MI? YA SE MI NOVIA :3</p>");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        $(".words").text("");
    }
});
