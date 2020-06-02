//右键菜单
jQuery(document).ready(function ($) {
    $(document.body).append(
        `<div id="spig" class="spig"><div id="message">加载中……</div><div id="mumu" class="mumu"></div></div>`
    );
    $("#spig").mousedown(function (e) {
        if (e.which == 3) {
            showMessage(
                "秘密通道:<br /> <a style='color: #5bf71d' href=\"https://github.com/ght5935\" title=\"gitHub\">gitHub</a> ",
                10000);
        }
    });
    $("#spig").bind("contextmenu", function (e) {
        return false;
    });
});

//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
        $("#message").fadeTo("100", 1);
    });
});
// 文本复制提示
try {
    document.body.oncopy = function () {
        alert("复制成功！若要转载请务必保留原文链接，申明来源，谢谢合作！")
    }
} catch (e) { }

//鼠标在上方时
jQuery(document).ready(function ($) {
    $(".mumu").mouseover(function () {
        $(".mumu").fadeTo("300", 0.3);
        msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开我才出来！"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});

//开始
// var visitor = $('#tbCommentAuthor').val();
var visitor = '平平';
jQuery(document).ready(function ($) {
    if (visitor == 'echo丶若梦') { //如果是主页  isindex
        showMessage('主人你来啦...', 6000);
    } else {
        showMessage('欢迎' + visitor + '来到若梦博客阅读 ' + ' ', 6000);
    }
    var now = (new Date()).getHours();
    if (now > 0 && now <= 6) {
        showMessage(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
    } else if (now > 6 && now <= 11) {
        showMessage(visitor + ' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);
    } else if (now > 11 && now <= 14) {
        showMessage(visitor + ' 中午了，吃饭了么？不要饿着了，饿死了谁给我玩呀！', 6000);
    } else if (now > 14 && now <= 18) {
        showMessage(visitor + ' 真是忙碌的一个下午！还好有你在！', 6000);
    } else if (now > 18 && now <= 22) {
        showMessage(visitor + ' 晚上了啊,是不是该睡觉啦！', 6000);
    } else {
        showMessage(visitor + ' 快来逗我玩吧！', 6000);
    }


    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    }, {
        queue: false,
        duration: 1000
    });
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('.postTitle a').click(function () { //标题被点击时
        showMessage('正在用吃奶的劲加载《<span style="color:#0099cc;">' + $(this).text() + '</span>》请稍候');
    });

    $('.postTitle a').mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》这篇文章么？');
    });
    $('.pager').mouseover(function () {
        showMessage('是要翻页了吗?');
    });

    $('#nav_next_page').mouseover(function () {
        showMessage('要翻到下一页吗?');
    });

    $('#sidebar_postcategory li a').mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });

    $('.comment_textarea').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
    });

    $('#btn_comment_submit').mouseover(function () {
        showMessage('确认提交了么？');
    });

    $('#sidebar_shortcut').mouseover(function () {
        showMessage('点击跳到想看的链接哈');
    });

    $('#sidebar_toptags').mouseover(function () {
        showMessage('点击查看此标签下的所有文章了');
    });

    $('#sidebar_categories').mouseover(function () {
        showMessage('点击查看此分类下得所有文章');
    });

    $('#sideCatalogBtn').mouseover(function () {
        showMessage('我是目录啊...');
    });

    $('#q').focus(function () {
        showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
        $(".spig").animate({
            top: $("#q").offset().top - 70,
            left: $("#q").offset().left - 170
        }, {
            queue: false,
            duration: 1000
        });
    });

});


//无聊讲点什么
jQuery(document).ready(function ($) {

    window.setInterval(function () {
        msgs = ["我得意地飘！~飘！~", "看我筋斗云...哎呀,翻过了~~", "你抓不到我喔，你这个傻瓜!~"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});

//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["你是不是无聊呀！", "不和若梦玩了么~", "是不是不喜欢我呀...", "天行健君子...", "摸摸头,摸摸头...",];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
        $(".spig").animate({
            left: document.body.offsetWidth / 2 * (1 + s[i1]),
            top: document.body.offsetheight / 2 * (1 + s[i1])
        }, {
            duration: 2000,
            complete: showMessage(msgs[i])
        });
    }, 45000);
});

//评论资料
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("留下你的尊姓大名！");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        }, {
            queue: false,
            duration: 1000
        });
    });
    $("#email").click(function () {
        showMessage("留下你的邮箱，不然就是无头像人士了！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        }, {
            queue: false,
            duration: 1000
        });
    });
    $("#url").click(function () {

        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        }, {
            queue: false,
            duration: 1000
        });
    });
    $("#tbCommentBody").mouseover(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".spig").animate({
            top: $("#tbCommentBody").offset().top - 70,
            left: $("#tbCommentBody").offset().left - 170
        }, {
            queue: false,
            duration: 1000
        });
    });
});

var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f + 300
        }, {
            queue: false,
            duration: 1000
        });
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "你是不是喜欢我呀 !"];
                var i = Math.floor(Math.random() * msgs.length);
            } else {
                msgs = ["筋斗云！~我飞！", "别摸我，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会咬你你的！ 哼哼",
                    "喜欢我的话,就告诉我呀 ~~"];
                var i = Math.floor(Math.random() * msgs.length);
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -
                0.75];
            var i1 = Math.floor(Math.random() * s.length);
            var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
                left: document.body.offsetWidth / 2 * (1 + s[i1]),
                top: document.body.offsetheight / 2 * (1 + s[i1])
            }, {
                duration: 500,
                complete: showMessage(msgs[i])
            });
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
    jQuery("#message").css({
        "opacity": "0.5",
        "color": '#1fec0c',
        "background": '#333',
        "padding": '10px',
        "box-sizing": "border-box",
        "border-radius": '10px',
        "text-shadow": '1px 1px #3305f8'
    });
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
    });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x;
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if (x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x,
                }); //控件新位置
                ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});


(function ($) {
    $.fn.extend({
        Scroll: function (opt, callback) {
            if (!opt) {
                var opt = {}
            }
            var _this = this.eq(0).find("ul:first");
            var lineH = _this.find("li:first").height(),
                line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10),
                speed = opt.speed ? parseInt(opt.speed, 10) : 7000,
                timer = opt.timer ? parseInt(opt.timer, 10) : 7000;
            if (line == 0) {
                line = 1
            }
            var upHeight = 0 - line * lineH;
            scrollUp = function () {
                _this.animate({
                    marginTop: upHeight
                }, speed, function () {
                    for (i = 1; i <= line; i++) {
                        _this.find("li:first").appendTo(_this)
                    }
                    _this.css({
                        marginTop: 0
                    })
                })
            };
            _this.hover(function () {
                clearInterval(timerID)
            }, function () {
                timerID = setInterval("scrollUp()", timer)
            }).mouseout()
        }
    })
})(jQuery);
$(document).ready(function () {
    $(".bulletin").Scroll({
        line: 1,
        speed: 1000,
        timer: 5000
    })
});
try {
    if (window.console && window.console.log) {
        console.log("%c欢迎访问若梦的博客！", "color:green");
        console.log("%cQQ：2681155168 Email：2681155168@qq.com", "color:green")
    }
} catch (e) { }
var sweetTitles = {
    x: 10,
    y: 20,
    tipElements: "a",
    noTitle: true,
    init: function () {
        var noTitle = this.noTitle;
        $(this.tipElements).each(function () { // 获取所有的a标签console.log(this)

            $(this).mouseover(function (e) {
                if (noTitle) {
                    isTitle = true
                } else {
                    isTitle = $.trim(this.title) != ""
                }
                if (isTitle) { //  console.log(this.className, '11111')
                    this.title = this.innerText;
                    this.myTitle = this.title;
                    this.myHref = this.href;
                    this.myHref = (this.myHref.length > 30 ? this.myHref.toString().substring(0,
                        30) + "..." : this.myHref);
                    this.title = "";

                    showMessage(this.myTitle)
                }
            }).mouseout(function () {
                if (this.myTitle != null) {
                    this.title = this.myTitle;

                }
            }).mousemove(function (e) {

            })
        })
    }
};
$(function () {
    sweetTitles.init()
});