import $ from "https://cdn.skypack.dev/jquery@3.6.0";

$(document).ready(function () {
    function cardsScroller() {

        $(".scroll-position").click(function () {
            var $scrollPosition = $(".card").offset().left;

            alert($scrollPosition);
        });

        $(".element-after-active-position").click(function () {
            var $scrollPosition = $(".card").offset().left;
            var $nextCard = $(".card.active").next(".card");
            var $nextCardOffset = $nextCard.offset().left;
            var $target = $nextCardOffset - $scrollPosition;

            alert($target);
        });

        $(".next").click(function () {
            var $scrollPosition = $(".card").offset().left;
            var $nextCard = $(".card.active").next(".card");
            var $nextCardOffset = $nextCard.offset().left;
            var $target = $nextCardOffset - $scrollPosition;

            $(".cards").scrollLeft($target);
            $(".card.active").removeClass("active");
            $($nextCard).addClass("active");
        });

        $(".previous").click(function () {
            var $scrollPosition = $(".card").offset().left;
            var $previousCard = $(".card.active").prev(".card");
            var $previousCardOffset = $previousCard.offset().left;
            var $target = $previousCardOffset - $scrollPosition;

            $(".cards").scrollLeft($target);
            $(".card.active").removeClass("active");
            $($previousCard).addClass("active");
        });

        $(".cards").scroll(function () {
            var $scrollPosition = $(".card").offset().left;
            var $nextCard = $(".card.active").next(".card");
            var $nextCardOffset = $nextCard.offset().left;
            var $target = $nextCardOffset - $scrollPosition;

            if ($scrollPosition == -$target) {
                $(".card.active").removeClass("active");
                $($nextCard).addClass("active");
            }
        });

        $(".cards").scroll(function () {
            var $scrollPosition = $(".card").offset().left;
            var $previousCard = $(".card.active").prev(".card");
            var $previousCardOffset = $previousCard.offset().left;
            var $target = $previousCardOffset - $scrollPosition;

            if ($scrollPosition == -$target) {
                $(".card.active").removeClass("active");
                $($previousCard).addClass("active");
            }
        });

        $(".card").click(function () {
            $(".card.active").removeClass("active");
            $(this).addClass("active");
        });
    }

    cardsScroller();
});
