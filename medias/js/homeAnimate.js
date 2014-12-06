/**
 * Created by luolinjia on 10/13/14.
 * Updated by luolinjia on 10/16/14.
 */

$(function(){
    var $point = $('#point'), $iPost = $('#w-post'), $iAbout = $('#w-about'), $iTags = $('#w-tags'), $iNone = $('#w-none');

    var _ = {
        showWord: function(obj, word, link){
            var $word = $('#word');
            obj.mouseover(function() {
                $word.fadeIn(800, function() {
                    $word.empty().append(word);
                });
            }).mouseleave(function() {
                $word.fadeOut(100).empty();
            }).click(function() {
                window.location = link;
            });
        }
    };
    
    $point.mouseover(function() {
        $('#w-post').fadeIn(200);
        $('#w-about').fadeIn(600);
        $('#w-tags').fadeIn(1000);
        $('#w-none').fadeIn(1400);
        $('#word').fadeIn(300, function() {
            $(this).empty().append('当你驻足这里，便是故事！');
        });

    }).mouseleave(function () {
        $('#word').fadeOut(300).empty();
    });

    _.showWord($iPost, '故事的主角总是善意地提醒周围人恶意的目光', 'http://www.llokt.com/Kevin');
    _.showWord($iAbout, '偶尔，他也总是自欺欺人！', 'http://www.llokt.com/Kevin/about');
    _.showWord($iTags, '他却用温暖的内心感染着身边的每个人', 'http://www.llokt.com/Kevin/tags');
    _.showWord($iNone, '然后，他在你的心中驻留。', 'http://www.llokt.com');

});
