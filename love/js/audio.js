var music_html =
    '<div class="musicBox">' +
    '<div class="musicImgBox">' +
    '<img class="musicAll playerOne" src="http://images.cnblogs.com/cnblogs_com/gaoht/1345582/o_music_stop.png">' +
    '<img class="musicAll playerTwo" src="http://images.cnblogs.com/cnblogs_com/gaoht/1345582/o_music_play.png">' +
    '<img class="musicPlayer playerOne"  src="https://images.cnblogs.com/cnblogs_com/gaoht/1345582/o_191106035445play.png">' +
    '<img class="musicPlayer playerTwo"  src="https://images.cnblogs.com/cnblogs_com/gaoht/1345582/o_191106035453played.png">' +
    '<img class="music-note" id="music-one" src="https://images.cnblogs.com/cnblogs_com/gaoht/1345582/o_191106031359f1.png">' +
    '<img class="music-note" id="music-two" src="https://images.cnblogs.com/cnblogs_com/gaoht/1345582/o_191106031409f2.png">' +
    '</div>' +
    '</div>' +
    '<audio id="myAudio" loop="loop" src="http://music.163.com/song/media/outer/url?id=1363343839.mp3"></audio>'
$("body").append(music_html);

let music_ok = false
$('.musicPlayer').click(function () {
    if (music_ok) {
        music_ok = false
        $(".playerOne").css("display", "block");
        $(".playerTwo").css("display", "none");
        $('#myAudio')[0].pause()
    } else {
        music_ok = true
        $(".playerOne").css("display", "none");
        $(".playerTwo").css("display", "block");
        $('#myAudio')[0].play()
    }

})