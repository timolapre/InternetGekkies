var soundHeight = null;
var slide = 0;

$(function () {

    //$('#page1').load('pages/page1.html');
    //$('#page2').load('pages/page1.html');
    //$('#page3').load('pages/page1.html');
    //$('#page4').load('pages/page1.html');
    $('#more').load('pages/popup.html');

    var audioElement = document.createElement('audio');

    var Flabber = [
        ["Heb ik bij de lidl gekocht", "flabber/lidlgekocht.jpg", "flabber/BijLidlGekocht.mp3", '110', '-1', '-1'],
        ["Broodje met beleg", "flabber/Broodjebeleg.jpg", "flabber/BroodjeMetBeleg.mp3" , '210', '-18', '-6'],
        ["Broodje Saté", "flabber/BroodjeSate.jpg", "flabber/BroodjeSate.mp3" , '110', '-1', '-1'],
        ["Diadeem, stellage", "flabber/Diadeem.jpg", "flabber/Diadeem.mp3" , '110', '-1', '-1'],
        ["HAM", "flabber/HAM.jpg", "flabber/Ham.mp3" , '130', '-3', '0'],
        ["Henk en Ingrid", "flabber/HenkEnIngrid.jpg", "flabber/HenkEnIngrid.mp3" , '100', '0', '0'],
        ["Meenemen", "flabber/HenkEnIngrid.jpg", "flabber/Meenemen.mp3" , '100', '0', '0'],
        ["Nahaha", "flabber/HenkEnIngrid.jpg", "flabber/Nahaha.mp3" , '100', '0', '0'],
        ["Nee beter", "flabber/NeeBeter.jpg", "flabber/NeeBeter.mp3" , '210', '-10', '-5'],
        ["Patat Mayones", "flabber/PatatMayones.jpg", "flabber/Patatmayones.mp3" , '210', '-18', '0'],
        ["Robot meneer", "flabber/RobotMeneer.jpg", "flabber/RobotMeneer.mp3" , '104', '-1', '0'],
        ["Van '96 al", "flabber/van96al.jpg", "flabber/van96al.mp3" , '104', '0', '0'],
        ["My husband is antiquair", "flabber/HusbandAntiquar.jpg", "flabber/HusbandAntiquair.mp3" , '100', '0', '0'],
    ];
    var PowNed = [
        ["Eventjes dansen", "powned/Dansmevrouw.jpg", "powned/eventjesdansen.mp3", '214', '-25', '0'],
        ["Jaaa", "powned/Jaaa.jpg", "powned/Jaaa.mp3", '188', '-10', '-1'],
        ["Nee = Nee", "powned/neeisnee.jpg", "powned/NeeisNee.mp3", '250', '-16', '-3'],
        ["Neuk de moeder", "powned/neukdemoeder.jpg", "powned/neukdemoeder.mp3", '195', '-10', '0'],
        ["Nou, nee", "powned/nounee.jpg", "powned/nounee.mp3", '110', '0', '0'],
        ["Ooh nee", "powned/ohnee.jpg", "powned/ohnee.mp3", '225', '-10', '-3'],
        ["Pan bami", "powned/panbami.jpg", "powned/PanBami.mp3", '240', '-11', '0'],
    ];
    var TV = [
        ["5 euro's?!", "tv/5euros.jpg", "tv/5euro.mp3", '140', '-6', '0'],
        ["Alemaal voldoende", "tv/rundfunk.jpg", "tv/allemaalvoldoende.mp3", '180', '-8', '0'],
        ["Of toch niet", "tv/rundfunk.jpg", "tv/oftochniet.mp3", '180', '-8', '0'],
        ["Bingo!", "tv/bingo.jpg", "tv/bingo.mp3", '154', '-8', '0'],
        ["Boe ba Bie song", "tv/Intervu.jpg", "tv/boebabie.mp3", '182', '-10', '0'],
        ["Intervu", "tv/Intervu.jpg", "tv/intervu.mp3", '182', '-10', '0'],
        ["De hemel", "tv/Intervu.jpg", "tv/dehemel.mp3", '182', '-10', '0'],
        ["Ctrl+Alt+Del", "tv/ctrlaltdelete.jpg", "tv/ctrlaltdelete.mp3", '110', '-1', '-2'],
        ["Gefeliciteerd hè!", "tv/gefeliciteerdhe.jpg", "tv/gefeliciteerdhe.mp3", '170', '-4', '-6'],
        ["Hekkie?!", "tv/hekkie.jpg", "tv/hekkie.mp3", '196', '-7', '0'],
        ["Helemaal mooi", "tv/blikwater.jpg", "tv/helemaalmooi.mp3", '184', '-17', '0'],
        ["Hondred euro", "tv/blikwater.jpg", "tv/Hondredeuro.mp3", '184', '-17', '0'],
        ["In de water", "tv/blikwater.jpg", "tv/indewater.mp3", '184', '-17', '0'],
        ["Homomuziek", "tv/homomuziek.jpg", "tv/homomuziek.mp3", '182', '-4', '0'],
        ["Kees", "tv/kees.jpg", "tv/kees.mp3", '100', '0', '0'],
        ["Koekoek jonguh!", "tv/Koekoek.jpg", "tv/koekoek.mp3", '181', '-10', '0'],
        ["Kom op dan", "tv/komopdan.jpg", "tv/komopdan.mp3", '110', '0', '0'],
        ["Krakaka", "tv/krakaka.jpg", "tv/krakaka.mp3", '110', '-1', '0'],
        ["Kukeleku haanmevrouw", "tv/kukelekuu.jpg", "tv/kukelekuu.mp3", '110', '0', '0'],
        ["Lingo Rookvrouw", "tv/lingorookvrouw.jpg", "tv/lingo.mp3", '110', '0', '0'],
        ["Loes", "tv/loes.jpg", "tv/loes.mp3", '110', '0', '0'],
        ["Man man man", "tv/manmanman.jpg", "tv/manmanman.mp3", '110', '0', '0'],
        ["Net pindakaas gegeten", "tv/rappersjors.jpg", "tv/rappersjors.mp3", '170', '-9', '0'],
        ["Rustaaghh", "tv/rustaaghh.jpg", "tv/rustaaghh.mp3", '100', '0', '0'],
        ["Stay connected", "tv/stayconnected.jpg", "tv/stayconnected.mp3", '110', '0', '0'],
        ["Tiny en Lau", "tv/tinyenlau.png", "tv/tinylau.mp3", '110', '0', '4'],
        ["Verkeerde kant", "tv/verkeerdekant.jpg", "tv/verkeerdekant.mp3", '177', '-14', '-4'],
    ];
    var Virals = [
        ["BIEM", "virals/Biem.jpg", "virals/BIEM.mp3", '110', '0', '0'],
        ["BWM AAAW", "virals/bmw.jpg", "virals/bmwschreeuw.mp3", '179', '-12', '0'],
        ["Dikke BWM", "virals/bmw.jpg", "virals/dikkebmw.mp3", '179', '-12', '0'],
        ["Boodschaaap", "virals/Boodschap.jpg", "virals/Boodschap.mp3", '225', '-14', '-1'],
        ["Broccooli", "virals/Broccoli.jpg", "virals/Broccooli.mp3", '190', '-1', '0'],
        ["Haha bier", "virals/hahabier.jpg", "virals/hahabier.mp3", '185', '-10', '0'],
        ["Helemaal knettah", "virals/helemaalknettah.jpg", "virals/helemaalknettah.mp3", '110', '0', '0'],
        ["Maat wat doe je?", "virals/maatwatdoeje.jpg", "virals/maatwatdoeje.mp3", '110', '0', '0'],
        ["Jeroen, doe normaal gek!", "virals/jeroen.jpg", "virals/jeroenWTF.mp3", '232', '-19', '0'],
        ["Ohhoh hoh hoh WTF!", "virals/jeroen.jpg", "virals/Ohohohoh.mp3", '232', '-19', '0'],
        ["Ik wil kaas", "virals/ikwilkaas.jpg", "virals/ikwilkaas.mp3", '110', '0', '0'],
        ["Jannes", "virals/jannes.jpg", "virals/Jannes.mp3", '110', '0', '0'],
        ["Scheidsrechter getackeld", "virals/Jannes.jpg", "virals/scheidsjannes.mp3", '110', '0', '0'],
        ["Lachmeneer", "virals/lachmeneer.jpg", "virals/lachmeneer.mp3", '110', '0', '0'],
        ["LAZER OP!", "virals/lazerop.jpg", "virals/lazerop.mp3", '196', '-14', '0'],
        ["Pardon? Doe normaal", "virals/Pardon.jpg", "virals/pardon.mp3", '207', '-13', '0'],
        ["ROEKOE! motherfuckers", "virals/trekker.jpg", "virals/roekoe.mp3", '240', '-15', '-2'],
        ["DIKKE TREKKER!", "virals/trekker.jpg", "virals/dikketrekker.mp3", '240', '-15', '-2'],
        ["Vuurwerk Tom", "virals/tom.jpg", "virals/tom.mp3", '300', '-25', '0'],
        ["Wasmachine mevrouw", "virals/Wasmachine.jpg", "virals/wasmachine.mp3", '184', '-18', '0'],
        ["Zwartjoekel", "virals/zwartjoekel.jpg", "virals/zwartjoekel.mp3", '110', '0', '0'],
    ];
    var Overig = [
        ["ANGELOO", "overige/angelo.jpg", "overige/angeloo.mp3", '181', '-11', '0'],
        ["Bakvet", "overige/bakvet.jpg", "overige/bakvet.mp3", '186', '-11', '0'],
        ["Banaantje eten", "overige/banaantje.jpg", "overige/banaantje.mp3", '136', '-8', '0'],
        ["Bladblazer dingen", "overige/bladblazer.jpg", "overige/bladblazer.mp3", '110', '-2', '0'],
        ["Iedereen over de bali", "overige/jijtrekttoch.jpg", "overige/jijtrekttoch.mp3", '110', '-2', '0'],
        ["No muney?", "overige/nomuney.jpg", "overige/nomuney.mp3", '183', '-10', '0'],
        ["Coki le Coki", "overige/Coki.jpg", "overige/Coki.mp3", '246', '-18', '-10'],
        ["Een 63 20", "overige/trekker.jpg", "overige/een6320.mp3", '203', '-9', '0'],
        ["John Deere", "overige/trekker.jpg", "overige/johndeere.mp3", '203', '-9', '0'],
        ["Pohh", "overige/trekker.jpg", "overige/Pohh.mp3", '203', '-9', '0'],
        ["Gekkies anthem", "overige/anthem.jpg", "overige/GekkiesAnthem.mp3", '124', '-3', '-4'],
        ["Gert", "overige/Gert.jpg", "overige/Gert.mp3", '110', '0', '0'],
        ["Godverdomme Erik", "overige/godverdomme.jpg", "overige/godverdomme.mp3", '197', '-11', '0'],
        ["Hedde drugs op?", "overige/drugsmevrouw.jpg", "overige/heddedrugsop.mp3", '188', '-6', '0'],
        ["Yo ik zie je zo", "overige/drugsmevrouw.jpg", "overige/ikziejezo.mp3", '188', '-6', '0'],
        ["Ja zeker wel", "overige/jaazeker.jpg", "overige/jazeker.mp3", '110', '0', '0'],
        ["Jij komen hier", "overige/klaasfaak.jpg", "overige/jijkomenhier.mp3", '110', '0', '0'],
        ["Jij weet niet wie ik ben", "overige/klaasfaak.jpg", "overige/jijweetnietwieikben.mp3", '110', '0', '0'],
        ["Wahahauw", "overige/klaasfaak.jpg", "overige/wahahauw.mp3", '110', '0', '0'],
        ["Ken mij da verrotte", "overige/kenmijdat.jpg", "overige/verrotte.mp3", '202', '-8', '0'],
        ["Keukenrol", "overige/keukenrol.jpg", "overige/keukenrol.mp3", '192', '-12', '0'],
        ["Lekker", "overige/lekker.jpg", "overige/lekker.mp3", '185', '-16', '0'],
        ["Mag allemaal", "overige/magallemaal.jpg", "overige/magmeneer.mp3", '193', '-4', '0'],
        ["Mand", "overige/mand.jpg", "overige/mand.mp3", '192', '-15', '0'],
        ["Niet toeteren GVD!", "overige/niettoeteren.jpg ", "overige/niettoeteren.mp3", '188', '-12', '0'],
        ["Overheerlijk bier", "overige/overheerlijkbier.jpg", "overige/overheerlijkbier.mp3", '142', '-5', '0'],
        ["Prrank", "overige/prrank.jpg", "overige/prank.mp3", '110', '0', '0'],
        ["Mafkees", "overige/mafkees.jpg", "overige/mafkees.mp3", '110', '0', '0'],
        ["Smikkelen", "overige/smikkelen.jpg", "overige/smikkelen.mp3", '184', '-9', '0'],
        ["Steeds maar weer", "overige/steedsmaarweer.jpg", "overige/steedsmaarweer.mp3", '193', '-13', '-5'],
        ["Steek aan dat ding Pieter!", "overige/steekaandatding.jpg", "overige/steekaandatding.mp3", '185', '-15', '0'],
        ["Wat heb je?", "overige/wathebje.jpg", "overige/wathebje.mp3", '192', '-15', '0'],
        ["Willy!", "overige/willy.jpg", "overige/willy.mp3", '192', '-11', '-5'],
        ["Zwijg gij bruine rakker", "overige/zwijg.jpg", "overige/zwijg.mp3", '185', '-16', '0'],
    ];

    var PageNames = [Flabber, PowNed, TV, Virals, Overig];

    setTimeout(function () {

        for(var x = 0; x<5;x++){
            for(var i = PageNames[x].length-1; i>=0; i--){
                $('#page' + x).prepend(
                    GetSoundHTML(i, PageNames[x])
                );
            }
            if(x == 0){
                soundHeight = $('.sound').height()+16+9.6+3;
            }
            ($('#page' + x).height(Math.ceil($('#page' + x).children('.active').length/3)*soundHeight));
        }

        var slider = $('.content .pages');
        var newHeight = Math.ceil($('#page' + 0).children().length/3)*soundHeight+230;
        $('.content').height(newHeight);

        $('.sound .images').click(function () {
            console.log('sound?');
            audioElement.setAttribute('src', $(this).parent().attr('src'));
            audioElement.play();
            $('.sound .images .small').children().attr('src', 'images/play.png');
            var mysound = $(this);
            mysound.children('.small').children().attr('src', 'images/pause.png');
            audioElement.onended = function () {
            mysound.children('.small').children().attr('src', 'images/play.png');
            };
        });

        $('.header .buttons .found').click(function () {
            slide = $(this).attr('id') -1;
            $('.header .buttons button.active').removeClass('active');
            $(this).addClass('active');
            $(slider).animate({'left': -slide * 100 + '%'},300);
            var newHeight = Math.ceil($('#page' + slide).children('.active').length/3)*soundHeight+230;
            $('.content').height(newHeight);
            $('.pages').height(newHeight);
        });

        $('.header .buttons .more').click(function () {
            $('.popup').css('display','block');
            $('.popup').fadeTo(200,1);
            $('.popupcontent').animate({top: '30px'}, 200);
        });

        $('.popup .close').click(function () {
            $('.popup').fadeTo(200,0);
            $('.popupcontent').animate({top: '700px'}, 200, function(){
            $('.popup').css('display','none');
            });
        });

        function GetSoundHTML(i, page){
            return (
            '<div class="sound active" src="audio/'+ page[i][2] +' ">\
                <div class="images">\
                    <div class="big">\
                        <img src="images/'+ page[i][1] +'" alt="" style="width: '+ page[i][3] +'%; left: '+ page[i][4] +'vw; top: '+ page[i][5] +'vw;"> \
                    </div>\
                    <div class="small">\
                        <img src="images/play.png" alt="">\
                    </div>\
                </div>\
                <div class="buttons">\
                    <p class="name">'+ page[i][0] +'</p>\
                    <div class="share" onclick="Share()">\
                        <img src="images/download.png" alt="">\
                    </div>\
                </div>\
            </div>');
        }

        $('.close').click(function(){
            $('#myInput').val('');
            SearchNames();
        });


    }, 100);
});

function SearchNames() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByClassName("sound");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.add("active");
            li[i].style.display = "";
        } else {
            li[i].classList.remove("active");
            li[i].style.display = "none";
        }
        for(var x = 0; x<5;x++){
            ($('#page' + x).height(Math.ceil($('#page' + x).children('.active').length/3)*soundHeight));

            if($('#page' + x).children('.active').length > 0){
                document.getElementById(x+1).classList.add('found');
            }else{
                document.getElementById(x+1).classList.remove('found');
            }
        }
        var newHeight = Math.ceil($('#page' + slide).children('.active').length/3)*soundHeight+230;
        $('.content').height(newHeight);
        $('.pages').height(newHeight);
    }
}

var options = {
    message: 'share this', // not supported on some apps (Facebook, Instagram)
    subject: 'the subject', // fi. for email
    files: ['www/images/pause.png'], // an array of filenames either locally or remotely
    url: null,
    chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
  }

  var onSuccess = function(result) {
    console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
    console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
  };

  var onError = function(msg) {
    console.log("Sharing failed with message: " + msg);
  };

function Share(){
    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);;
};