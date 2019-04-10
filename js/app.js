$(document).ready(function () {

    // funkcja testu d20

    const roll20 = (mod) => {
        let crit = false
        let roll = Math.floor(Math.random()*20+1);
        if (roll === 20) {
            crit = true;
        }
        let result = roll + parseInt(mod);

        // pop up z wynikiem

        const rollPop = $('<div>', {class: "roll-pop-container"});
        if (crit === true) {
            rollPop.addClass('crit');
            rollPop.html(`<h1>Krytyk!</h1><h2>${result}</h2>`)
        } else {
            rollPop.html(`<h3>Wynik:</h3><h2>${result}</h2>`)
        }
        $('body').append(rollPop);

//        const rollOKButton = $('<button>', {id: 'roll-OK-button'});
//        rollOKButton.text('OK');
//        rollPop.append(rollOKButton);
//        rollOKButton.on('click', () => rollPop.remove())


        $('body').on('click', function() {
            rollPop.remove();
        });
        $(".skill-test-button").on('click', function(e) {
             e.stopPropagation(); // this stops the event from bubbling up to the body
        });



    }

    $('#roll20').on('click', roll20)

    // wybór rasy
    function chooseRase() {
        $('.stats').addClass('hidden');
        $('#points-pool-container').css('display', 'none');
        var raceContainer = $('<div>', {
            class: 'race-container'
        });
        $('body').append(raceContainer);

        // tworzenie przycisków ras i informacji o nich

        function raceButtons(race1, Race2) {
            var ButtonsContainer = $('<div>', {
                class: 'race-buttons-container'
            });
            raceContainer.append(ButtonsContainer);
            var Button = $('<button class="race-button" id=' + race1 + '>' + Race2 + '</button><p class="race-info-button" id="race-info-button-' + race1 + '"><i class="fas fa-info-circle fa-2x ' + race1 + '-info"></i></p>');
            ButtonsContainer.append(Button);
        }

        raceButtons('dwarf', 'Krasnolud');
        raceButtons('elf', 'Elf');
        raceButtons('halfling', 'Halfling');
        raceButtons('human', 'Człowiek');
        raceButtons('dragonborn', 'Smokowiec');
        raceButtons('gnome', 'Gnom');
        raceButtons('tiefling', 'Tiefling');
        raceButtons('halfelf', 'Pół-elf');
        raceButtons('halforc', 'Pół-ork');

        function clickAccept() {
            $('.stats').removeClass('hidden');
            $('.race-container').addClass('hidden');
            $('#points-pool-container').css('display', 'flex');
        }

        // pop-upy ras

        //funkcja robiąca pop-upy ras
        function raceInfo(rasa, text) {
            $('#race-info-button-' + rasa).on('mousedown', function () {
                if ($('#' + rasa + '-info').length > 0) {
                    $('#' + rasa + '-info').removeClass('visible');
                    setTimeout(function () {
                        $('#' + rasa + '-info').remove();
                    }, 900)
                } else {
                    var characteristics = $(text);
                    $('body').append(characteristics);
                    setTimeout(function () {
                        $('#' + rasa + '-info').addClass('visible');
                    }, 1);
                     $('body').on('click', function () {
                        $('#' + rasa + '-info').removeClass('visible');
                        setTimeout(function () {
                            $('#' + rasa + '-info').remove();
                        }, 900)
                    })
                    $('.' + rasa + '-info').on('click', function(e) {
                     e.stopPropagation();
                    });
                }
            })
        }

        raceInfo('dwarf', '<ul class="race-info" id="dwarf-info"><li>Twoja Wytrzymałość jest większa o 2</li><li>Twój rozmiar jest Średni</li><li>Twoja Szybkość to 25 metrów</li><li>Widzisz w ciemności na 60 metrów</li><li>Masz 2 kości na rzut obronny przeciw truciznom. Masz też odporność na trucizny</li><li>Potrafisz używać: topora bojowego, topora, lekkiego młota i młota bojowego</li><li>Umiesz używać (do wyboru): narzędzi kowalskich, środków browarniczych lub narzędzi murarskich</li><li>Kiedy rzucacz Inteligencje(Historię) dotycząco prac w kamieniu to masz PROFICIENCY w Historii i dodajesz podwójne PROF do tego rzutu</li><li>Umiesz mówić i pisać we wspólnym i krasnoludzkim.</li><li>Możesz być Kransoludem Wzgórzowym albo Górskim</li></ul>');
        raceInfo('elf', '<ul class="race-info" id="elf-info"><li>Twoja Zręczność jest większa o 2</li><li>Twój rozmiar jest średni</li><li>Twoja Szybkość to 30 metrów</li><li>Widzisz w ciemnościach na 60 metrów</li><li>Masz PROF w umiejętności Percepcja</li><li>Masz 2 kości na rzut obronny przeciw zauroczeniu. Magia nie może cie uśpić</li><li>Nie śpisz, medytujesz 4 godziny dziennie. Liczy się to jak Długi odpoczynek</li><li>Mówisz i piszesz we wspólnym i elfickim</li><li>Możesz być elfem wysokim, leśnym lub mrocznym</li></ul>');
        raceInfo('halfling', '<ul class="race-info" id="halfling-info"><li>Twoja Zręczność jest większa o 2</li><li>Twój rozmiar jest mały</li><li>Twoja Szybkość to 25 metrów</li><li>Możesz przerzucić wynik 1 w rzutach na atak, test umiejętności, rzut obronny</li><li>Masz przewagę w rzutach na strach</li><li>Możesz poruszać się przez pole z wrogiem większym od ciebie</li><li>Mówisz i piszesz we wspólnym i halflińskim</li><li>Możesz być halflingiem lekkostopym lub krzepkim </li></ul>')
        raceInfo('human', '<ul class="race-info" id="human-info"><li>Wszystkie twoje ceny są większe o 1</li><li>Twój rozmiar jest średni</li><li>Twoja Szybkość to 30 metrów</li><li>Mówisz i piszesz we wspólnym i jednym dowolnym języku</li></ul>')
        raceInfo('dragonborn', '<ul class="race-info" id="dragonborn-info"><li>Twoja Siła jest większa o 2, a Charyzma o 1</li><li>Twój rozmiar jest średni</li><li>Twoja Szybkość to 30 metrów</li><li>Wybiesz typ smoka, by dostać jego atak zionięciem</li><li>Masz odporność na typ obrażeń zgodny z twoim typem zionięcia</li><li>Mówisz i piszesz we wspólnym i smocznym</li></ul>')
        raceInfo('gnome', '<ul class="race-info" id="gnome-info"><li>Twoja Inteligencja jest większa o 2</li><li>Twój rozmiar jest mały</li><li>Twoja Szybkość to 25 metrów</li><li>Widzisz w ciemnościach na 60 metrów</li><li>Masz przewagę na rzuty obronne na magię bazujące na Inteligencji, Mądrości i Charyźmie</li><li>Mówisz i piszesz we wspólnym i gnomim</li><li>Możesz być gnomem leśnym lub kamiennym</li></ul>')
        raceInfo('tiefling', '<ul class="race-info" id="tiefling-info"><li>Twoja Inteligencja jest większa o 1, a Charyzma o 2</li><li>Twój rozmiar jest średni</li><li>Twoja Szybkość to 30 metrów</li><li>Widzisz w ciemnościach na 60 metrów</li><li>Masz odporność na ogień</li><li>Znasz sztuczkę Taumaturgia</li><li>Mówisz i piszesz we wspólnym i infernalnym</li></ul>')
        raceInfo('halfelf', '<ul class="race-info" id="halfelf-info"><li>Twoha Charyzma zwiększa się o 2, a dwie inne cechy o 1</li><li>Twój rozmiar jest średni</li><li>Twoja szybkość to 30 metrów</li><li>Widzisz w ciemnościach na 60 metrów</li><li>Masz przewagę na rzut obronny przeciw zauroczeniu. Magia nie może cie uśpić</li><li>Masz PROF w dwóch wybranych umiejętnościach</li><li>Mówisz i piszesz we wspólnym, elfickim i jeszcze jednym wybranym języku</li></ul>')
        raceInfo('halforc', '<ul class="race-info" id="halforc-info"><li>Twoja siła zwiększa się o 2, a Wytrzymałość o 1</li><li>Twój rozmiar jest średni</li><li>Twoja szybkość to 30 metrów</li><li>Widzisz w ciemnościach na 60 metrów</li><li>Masz PROF w umiejętności Zastraszanie</li><li>Raz na długi odpoczynek kiedy spadniesz do 0 punktów życia (ale nie zostaniesz zabity) możesz wrócić na 1 punkt życia</li><li>Przy krytycznym sukcesie na atak rzucasz dodatkową jedną kością obrażeń broni i dodajesz ją do sumy obrażeń</li><li>Mówisz i piszesz we wspólnym i orczym</li></ul>')




        // fukcja budująca guziki podras
        function subraceButtons(array1, array2, parent) {
            for (i = 0; i < array1.length; i++) {
                var backButton = $('<i class="fas fa-caret-square-left fa-2x back-button"></i>')
                parent.prepend(backButton);
                backButton.on('click', function () {
                location.reload();
            })
                var button = $('<div class="subrace-button-container"><button class="subrace-button" id=' + array1[i] + '>' + array2[i] + '</button><p class="race-info-button" id="subrace-info-button-' + array1[i] + '"><i class="fas fa-info-circle fa-2x ' + array1[i] + '-info"></i></p></div>');
                parent.append(button);
            }
        }

        // generowanie guzików do półelfiego wyboru statystyk

        function halfElfStats(array1, array2, parent) {
            for (i = 0; i < array1.length; i++) {
                var button = $('<div class="subrace-button-container"><button class="subrace-button" id=' + array1[i] + '>' + array2[i] + '</button></div>');
                parent.append(button);
            }
        }


        // funkcja przypisująca opisy do podras
                function subraceInfo(subrase,description) {
                $('#subrace-info-button-'+subrase).on('mousedown', function () {
                        if ($('#'+subrase+'-info').length > 0) {
                        $('#'+subrase+'-info').removeClass('visible');
                        setTimeout(function () {
                            $('#'+subrase+'-info').remove();
                        }, 900)
                    } else {
                        var characteristics = $(description);
                        $('body').append(characteristics);
                        setTimeout(function () {
                            $('#'+subrase+'-info').addClass('visible');
                        }, 1);
                        $('body').on('click', function () {
                            $('#'+subrase+'-info').removeClass('visible');
                            setTimeout(function () {
                                $('#'+subrase+'-info').remove();
                            }, 900)
                        })
                        $('#subrace-info-button-'+subrase).on('click', function(e) {
                            e.stopPropagation();
                        });
                    }
                })
                }

        // po kliknięciu rasy
        $('#dwarf').on('click', function () {
            speed = 25;
            $('#con').text('10');
            $('#con-mod').text('0');
            var subrace = $('<div class="subrace-container">')
            $('body').append(subrace);

            subraceButtons(['hillDwarf', 'mountainDwarf'], ['Krasnolud wzgórzowy', 'Krasnolud górski'], subrace);

            subraceInfo('hillDwarf', '<ul class="race-info" id="hillDwarf-info"><li>Twoja Mądrość jest większa o 1</li><li>Maksimum twoich punktów życia zwiększa się o 1 na każdym poziomie</li></ul>')
            subraceInfo('mountainDwarf', '<ul class="race-info" id="mountainDwarf-info"><li>Twoja Siła jest większa o 2</li><li>Masz umiejętność posługiwania się lekką i średnią zbroją</li></ul>')

            $('.race-container').addClass('hidden');
            $('#hillDwarf').on('click', function () {
                $('#wis').text('9');
                $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');
            })
            $('#mountainDwarf').on('click', function () {
                $('#str').text('10');
                $('#str-mod').text('0');
                $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');
            })
        });
        $('#elf').on('click', function () {
            speed = 30;
            $('#dex').text('10');
            $('#dex-mod').text('0');
            var subrace = $('<div class="subrace-container">')
            $('body').append(subrace);
            $('.race-container').addClass('hidden');
            subraceButtons(['highElf', 'woodElf', 'darkElf'], ['Elf wysoki', 'Elf leśny', 'Elf mroczny'], subrace);
            subraceInfo('highElf', '<ul class="race-info" id="highElf-info"><li>Twoja Inteligencja jest większa o 1</li><li>Umiesz używać długich i krótkich mieczy oraz krótkiego i długiego łuku</li><li>Znasz jedną sztuczkę rzucaną na Inteligencji</li><li>Znasz jeden dodatkowy język</li></ul>')
            subraceInfo('woodElf', '<ul class="race-info" id="woodElf-info"><li>Twoja Mądrość jest większa o 1</li><li>Umiesz używać długich i krótkich mieczy oraz krótkiego i długiego łuku</li>Twoja Szybkość to 35 metrów</li><li>Łatwiej ci się ukrywać</li></ul>')
            subraceInfo('darkElf', '<ul class="race-info" id="darkElf-info"><li>Twoja Charyzma jest większa o 1</li><li>Lepsze widzenie w ciemności</li><li>Jesteś wrażliwy na światło - DISADV na testy Mądrości(Percepcji) polegającej na wzroku podczas dnia</li><li>Umiesz rzucać sztuczkę Tańczące światła</li><li>Umiesz używać rapierów, krótkich mieczy oraz ręcznej kuszy</li></ul>')
            $('#highElf').on('click', function () {
                $('#int').text('9');
                $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');
            })
            $('#woodElf').on('click', function () {
                $('#wis').text('10');
                $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');
            })
            $('#darkElf').on('click', function () {
                $('#cha').text('9');
                $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');
            })
        });

        $('#halfling').on('click', function () {
            speed = 25;
            $('#dex').text('10');
            $('#dex-mod').text('0');
            var subrace = $('<div class="subrace-container">')
            $('body').append(subrace);
            $('.race-container').addClass('hidden');
            subraceButtons(['lightfootHalfling', 'stoutHalfling'], ['Halfling lekkostopy', 'Halfling krzepki'], subrace);
            subraceInfo('lightfootHalfling', '<ul class="race-info" id="lightfootHalfling-info"><li>Twoja Charyzma zwiększa się o 1</li><li>Możesz się chować za istotami większymi od ciebie</li></ul>')
            subraceInfo('stoutHalfling', '<ul class="race-info" id="stoutHalfling-info"><li>Twoja Wytrzymałość jest większa o 1</li><li>Masz przewagę na rzuty obronne przed truciznami oraz masz odporność na trucizny</li></ul>')
            $('#lightfootHalfling').on('click', function () {
                $('#cha').text('9');
                $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');
            })
            $('#stoutHalfling').on('click', function () {
                $('#con').text('9');
                $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');
            })
        });
        $('#human').on('click', function () {
            speed = 30;
            $('.main-stat').text('9');
            clickAccept();
        });
        $('#dragonborn').on('click', function () {
            speed = 30;
            $('#str').text('10');
            $('#str-mod').text('0');
            $('#cha').text('9');
            clickAccept();
        });
        $('#gnome').on('click', function () {
            speed = 25;
            $('#int').text('10');
            $('#int-mod').text('0');
            var subrace = $('<div class="subrace-container">')
            $('body').append(subrace);
            $('.race-container').addClass('hidden');
            subraceButtons(['forestGnome', 'rockGnome'], ['Gnom leśny', 'Gnom kamienny'], subrace);
            subraceInfo('forestGnome', '<ul class="race-info" id="forestGnome-info"><li>Twoja Zręczność jest większa o 1</li><li>Znasz sztuczkę Pomniejsza iluzja</li><li>Umiesz komunikować się z małymi zwierzętami</li></ul>')
            subraceInfo('rockGnome', '<ul class="race-info" id="rockGnome-info"><li>Twoja Wytrzymałość jest większa o 1</li><li>Przy rzutach na Inteligencję(Historię) dotyczącą przedmiotów magicznych, alchemicznych lub technologicznych twoja PROF liczy się podwójnie</li><li>Umiesz używać narzędzi i możesz tworzyć małe urzadzenia</li></ul>')
            $('#forestGnome').on('click', function () {
                $('#dex').text('9');
                $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');
            })
            $('#rockGnome').on('click', function () {
                $('#con').text('9');
                $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');
            })
        });
        $('#tiefling').on('click', function () {
            $('#int').text('9');
            $('#cha').text('10');
            $('#cha-mod').text('0');
            clickAccept();
        });
        $('#halfelf').on('click', function () {
            speed = 30;
            $('#cha').text('10');
            $('#cha-mod').text('0');
            var subrace = $('<div class="subrace-container">')
            $('body').append(subrace);
            $('.race-container').addClass('hidden');
            halfElfStats(['halfelfStr', 'halfelfDex', 'halfelfCon', 'halfelfInt', 'halfelfWis'], ['Siła', 'Zręczność', 'Wytrzymałość', 'Inteligencja', 'Mądrość'], subrace);
            var pool = 2;
            var halfelfPoolContainer = $('<div id="halfelf-pool-container"><p>Masz jeszcze <span id="halfelf-points">'+pool+'</span> cechy do wybrania</div>')
             $(subrace).prepend(halfelfPoolContainer);

            function goToStats () {
                if (pool===0) {
                    $('.stats').removeClass('hidden');
                subrace.remove();
                $('#points-pool-container').css('display', 'flex');}
            }
            
            const halfElfAddStats = (id,stat) => {
                $(id).on('click', function () {
                    $(stat).text('9');
                    $('#halfelf-points').text(pool-=1);
                    $(id).css('display','none');
                    goToStats();
                })
            }

            halfElfAddStats('#halfelfStr','#str');
            halfElfAddStats('#halfelfDex','#dex');
            halfElfAddStats('#halfelfCon','#con');
            halfElfAddStats('#halfelfInt','#int');
            halfElfAddStats('#halfelfWis','#wis');

        });
        $('#halforc').on('click', function () {
            speed = 30;
            $('#con').text('9');
            $('#str').text('10');
            $('#str-mod').text('0');
            clickAccept();
        })
    }

    chooseRase();

    // funkcja zmniejszająca stat
    function minStat(stat, mod) {
        var currentStat = $(stat).text();
        var currentPool = $('#points-pool').text();
        var mod = $(mod);
        var statNumber = parseInt(currentStat);
        var poolNumber = parseInt(currentPool);
        if (statNumber == 8) {
            alert("Cecha nie może być niższa niż 8")
        } else if (statNumber > 8 && statNumber < 14) {
            $(stat).text(statNumber -= 1);
            $('#points-pool').text(poolNumber += 1);
        } else {
            $(stat).text(statNumber -= 1);
            $('#points-pool').text(poolNumber += 2);
        }

        modState(statNumber, mod);
        acceptAllocation();
    }

    // funkcja zwiększająca stat
    function plusStat(stat, mod) {
        var currentStat = $(stat).text();
        var currentPool = $('#points-pool').text();
        var mod = $(mod);
        var statNumber = parseInt(currentStat);
        var poolNumber = parseInt(currentPool);
        if (currentPool <= 0) {
            alert('Nie masz już punktów');
            return;
        } else if ((currentPool == 1 && statNumber >= 13)) {
            alert('Potrzebujesz 2 punktów, żeby podnieść cechę powyżej 13');
            return;
        }
        if (statNumber == 20) {
            alert('Nie można mieć wiecej niż 20')
        } else if (statNumber >= 13) {
            $(stat).text(statNumber += 1);
            $('#points-pool').text(poolNumber -= 2);
        } else {
            $(stat).text(statNumber += 1);
            $('#points-pool').text(poolNumber -= 1);
        }

        modState(statNumber, mod);
        acceptAllocation();
    }

    // funkcja wyliczająca modyfikator statu

    function modState(statNumber, mod) {
        if (statNumber < 10 ) {
            mod.text('-1');
        } else if (statNumber >= 10 && statNumber < 12) {
            mod.text('0');
        } else if (statNumber >= 12 && statNumber < 14) {
            mod.text('+1');
        } else if (statNumber >= 14 && statNumber < 16) {
            mod.text('+2');
        } else if (statNumber >= 16 && statNumber < 18) {
            mod.text('+3');
        } else if (statNumber >= 18 && statNumber < 20) {
            mod.text('+4');
        } else {
            mod.text('+5');
        }
    }

    // funkcja uruchamiająca przycisk Akceptuj po rozdaniu punktów

    function acceptAllocation() {
        var currentPool = parseInt($('#points-pool').text());
        if (currentPool === 0) {
            $('#points-pool-container').css('height', '110px')
            $('.stat-container:first-child').css('margin-top', '125px')
            $('.stat-container:nth-child(2)').css('margin-top', '125px')
            $('#accept-button').removeClass('hidden')
        } else {
            $('#accept-button').addClass('hidden')
        }

    }

    $('#accept-button').on('click', function (event) {
            chooseClass();
            $('.stat-button').addClass('hidden');
            $('#points-pool-container').css('display', 'none');
            $('.stat-container:first-child').css('margin-top', '10vh');
            $('.stat-container:nth-child(2)').css('margin-top', '10vh');
            $('.race-container').remove();
            $('#buttons').removeClass('hidden');

        })
    // minus button do stata

    const removeStat = (button,stat,modifier) => {
        $(button).on('click', function () {
            minStat(stat, modifier);
            $('#accept-button').removeClass('visible')
        })
    }

    removeStat('#min-str', '#str', '#str-mod');
    removeStat('#min-dex', '#dex', '#dex-mod');
    removeStat('#min-con', '#con', '#con-mod');
    removeStat('#min-int', '#int', '#int-mod');
    removeStat('#min-wis', '#wis', '#wis-mod');
    removeStat('#min-cha', '#cha', '#cha-mod');

    // plus button do stata

    const addStat = (button,stat,modifier) => {
        $(button).on('click', function () {
            plusStat(stat, modifier)
        })
    }

    addStat('#plus-str','#str', '#str-mod');
    addStat('#plus-dex','#dex', '#dex-mod');
    addStat('#plus-con','#con', '#con-mod');
    addStat('#plus-int','#int', '#int-mod');
    addStat('#plus-wis','#wis', '#wis-mod');
    addStat('#plus-cha','#cha', '#cha-mod');

    // przycisk wstecz

    function backbutton() {
        location.reload();
    }

    // cechy drugorzędne



    let armorClass = 10;
    let hitPoints = 5+parseInt($('#con-mod')[0].innerHTML);
    let hitDice = 1+'d'+6;
    let speed = 30;
    let proficiency = 1;
    let initiative = parseInt($('#dex-mod')[0].innerHTML);

    const secondaryAttributes = () => {
        const secondaryAttributesContainer = $('<div>', {id: 'secondary-attributes-container'});
        $('body').append(secondaryAttributesContainer);

        const closeSecondaryAttributesButton = $('<div>', {class: 'close-secondary-attributes'});
        secondaryAttributesContainer.append(closeSecondaryAttributesButton);
        const closeSecondaryAttributesIcon = $('<i>', {class: 'fas fa-times fa-2x'});
        closeSecondaryAttributesButton.append(closeSecondaryAttributesIcon);

        closeSecondaryAttributesButton.on('click', () => {
            secondaryAttributesContainer.remove();
        })

        const secondaryAttirbutesLeft = $('<div>', {class: 'secondary-attributes-half'});
        const secondaryAttirbutesRight = $('<div>', {class: 'secondary-attributes-half'});
        secondaryAttributesContainer.append(secondaryAttirbutesLeft);
        secondaryAttributesContainer.append(secondaryAttirbutesRight);
        let armorClassBox = $('<div>', {class: 'secondary-attributes-box'});
        let armorClassHeader = $('<h2>');
        let armorClassValue = $('<h1>');
        armorClassHeader.text('Klasa Pancerza');
        armorClassValue.text(armorClass + parseInt($('#dex-mod')[0].innerHTML));
        armorClassBox.append(armorClassHeader);
        armorClassBox.append(armorClassValue);
        secondaryAttirbutesLeft.append(armorClassBox);
        let hitPointBox = $('<div>', {class: 'secondary-attributes-box'});
        let hitPointHeader = $('<h2>');
        hitPointHeader.text('Punkty żywotności');
        let hitPointValue = $('<h1>');
        hitPointValue.text(hitPoints);
        secondaryAttirbutesLeft.append(hitPointBox);
        hitPointBox.append(hitPointHeader);
        hitPointBox.append(hitPointValue);

        let hitDiceBox = $('<div>', {class: 'secondary-attributes-box'});
        let hitDiceHeader = $('<h2>');
        hitDiceHeader.text('Kości żywotności');
        let hitDiceValue = $('<h1>');
        hitDiceValue.text(hitDice);
        secondaryAttirbutesLeft.append(hitDiceBox);
        hitDiceBox.append(hitDiceHeader);
        hitDiceBox.append(hitDiceValue);

        let initiativeBox = $('<div>', {class: 'secondary-attributes-box'});
        let initiativeHeader = $('<h2>');
        initiativeHeader.text('Inicjatywa');
        let initiativeValue = $('<h1>');
        initiativeValue.text(initiative);
        secondaryAttirbutesRight.append(initiativeBox);
        initiativeBox.append(initiativeHeader);
        initiativeBox.append(initiativeValue);

        let speedBox = $('<div>', {class: 'secondary-attributes-box'});
        let speedHeader = $('<h2>');
        speedHeader.text('Szybkość');
        let speedValue = $('<h1>');
        speedValue.text(speed);
        secondaryAttirbutesRight.append(speedBox);
        speedBox.append(speedHeader);
        speedBox.append(speedValue);
         let proficiencyBox = $('<div>', {class: 'secondary-attributes-box'});
        let proficiencyHeader = $('<h2>');
        let proficiencyValue = $('<h1>');
        proficiencyHeader.text('PROF');
        proficiencyValue.text(proficiency);
        proficiencyBox.append(proficiencyHeader);
        proficiencyBox.append(proficiencyValue);
        secondaryAttirbutesRight.append(proficiencyBox);

    }

    $('#secondary-attributes').on('click', secondaryAttributes)

    // wybór klasy

    let chosenClass = 'fighter';

    const basicClasses = [
        {
            name: "barbarian",
            hitDie: 12,
            proficiency: 2,
            skills: ['Atletyka', 'Opieka nad zwierzętami', 'Percepcja', 'Przyroda', 'Sztuka przetrwania', 'Zastraszanie']
        },
        {
            name: "bard",
            hitDie: 8,
            proficiency: 2,
            skills: ['Akrobatyka', 'Atletyka', 'Historia', 'Intuicja', 'Medycyna', 'Opieka nad zwierzętami', 'Oszustwo', 'Percepcja', 'Perswazja', 'Przyroda', 'Religia', 'Skradanie się', 'Sztuka przetrwania', 'Śledztwo', 'Wiedza tajemna', 'Występy', 'Zastraszanie', 'Zwinne dłonie']
        },
        {
            name: "cleric",
            hitDie: 8,
            proficiency: 2,
            skills: ['Historia', 'Intuicja', 'Medycyna', 'Perswazja', 'Religia']
        },
        {
            name: "druid",
            hitDie: 8,
            proficiency: 2,
            skills: ['Intuicja', 'Medycyna', 'Opieka nad zwierzętami', 'Percepcja', 'Przyroda', 'Religia', 'Sztuka przetrwania', 'Wiedza tajemna']
        },
        {
            name: "fighter",
            hitDie: 10,
            proficiency: 2,
            skills: ['Akrobatyka', 'Atletyka', 'Historia', 'Intuicja', 'Opieka nad zwierzętami', 'Percepcja', 'Sztuka przetrwania', 'Zastraszanie']
        },
        {
            name: "monk",
            hitDie: 8,
            proficiency: 2,
            skills: ['Akrobatyka', 'Atletyka', 'Historia', 'Intuicja', 'Religia', 'Skradanie się']
        },
        {
            name: "paladin",
            hitDie: 10,
            proficiency: 2,
            skills: ['Atletyka', 'Intuicja', 'Medycyna', 'Perswazja', 'Religia', 'Zastraszanie']
        },
        {
            name: "ranger",
            hitDie: 8,
            proficiency: 2,
            skills: ['Atletyka', 'Intuicja', 'Opieka nad zwierzętami', 'Percepcja', 'Przyroda', 'Skradanie się', 'Sztuka przetrwania', 'Śledztwo']
        },
        {
            name: "rogue",
            hitDie: 8,
            proficiency: 2,
            skills: ['Akrobatyka', 'Atletyka', 'Intuicja', 'Oszustwo', 'Percepcja', 'Perswazja', 'Skradanie się', 'Śledztwo', 'Występy', 'Zastraszanie', 'Zwinne dłonie']
        },
        {
            name: "sorcerer",
            hitDie: 6,
            proficiency: 2,
            skills: ['Intuicja', 'Oszustwo', 'Perswazja', 'Religia', 'Wiedza tajemna', 'Zastraszanie']
        },
        {
            name: "warlock",
            hitDie: 8,
            proficiency: 2,
            skills: ['Historia', 'Oszustwo', 'Przyroda', 'Religia', 'Śledztwo', 'Wiedza tajemna', 'Zastraszanie']
        },
        {
            name: "wizard",
            hitDie: 6,
            proficiency: 2,
            skills: ['Historia', 'Intuicja', 'Medycyna', 'Religia', 'Śledztwo', 'Wiedza tajemna']
        }
    ]

    const chooseClass = () => {
        const classContainer = $('<div>', {id: 'class-container'});
        $('body').append(classContainer);

        // funkcja robiąca przyciski do wyboru klasy

        function classButtons(class1, Class2) {
            var ButtonsContainer = $('<div>', {
                id: 'class-buttons-container'
            });
            classContainer.append(ButtonsContainer);
            var Button = $('<button class="class-button" id=' + class1 + '>' + Class2 + '</button><p class="class-info-button" id="class-info-button-' + class1 + '"><i class="fas fa-info-circle fa-2x ' + class1 + '-info"></i></p>');
            ButtonsContainer.append(Button);
        }

        classButtons('barbarian', 'Barbarzyńca');
        classButtons('bard', 'Bard');
        classButtons('warlock', 'Czarnoksiężnik');
        classButtons('sorcerer', 'Czarownik');
        classButtons('druid', 'Druid');
        classButtons('cleric', 'Kleryk');
        classButtons('ranger', 'Łowca');
        classButtons('wizard', 'Mag');
        classButtons('monk', 'Mnich');
        classButtons('paladin', 'Paladyn');
        classButtons('rogue', 'Rzezimieszek');
        classButtons('fighter', 'Wojownik');

        // funkcja do info o klasach

        function classInfo(klasa, text) {
            $('#class-info-button-' + klasa).on('mousedown', function () {
                if ($('#' + klasa + '-info').length > 0) {
                    $('#' + klasa + '-info').removeClass('visible');
                    setTimeout(function () {
                        $('#' + klasa + '-info').remove();
                    }, 900)
                } else {
                    var characteristics = $(text);
                    $('body').append(characteristics);
                    setTimeout(function () {
                        $('#' + klasa + '-info').addClass('visible');
                    }, 1);
                    characteristics.on('click', function () {
                        $('#' + klasa + '-info').removeClass('visible');
                        setTimeout(function () {
                            $('#' + klasa + '-info').remove();
                        }, 900)
                    })
                }
            })
        }

        classInfo('barbarian', '<ul class="class-info" id="barbarian-info"><li>Poteżni wojownicy o dzikich korzeniach, którzy w walce wpadają w bojowy szał</li><li>Kostka życia: d12</li><li>Podstawowa statystyka: Siła</li><li>PROF do rzutów obronnych: Siła i Wytrzymałość</li><li>Prof do broni i zbroi: Zbroje lekkie i średnie, tarcze, bronie proste i ręczne</li></ul>');
        classInfo('bard', '<ul class="class-info" id="bard-info"><li>Inspirujący magicy, w których muzyce pobrzmiewają echa dźwięków kreacji</li><li>Kostka życia: d8</li><li>Podstawowa statystyka: Charyzma</li><li>PROF do rzutów obronnych: Zręczność i Charyzma</li><li>Prof do broni i zbroi: Zbroje lekkie, bronie proste, ręczne kusze, długie i krótkie miecze, rapiery</li></ul>');
        classInfo('cleric', '<ul class="class-info" id="cleric-info"><li>Kapłański czempion, który dzierży boską magię by służyć sile wyższej</li><li>Kostka życia: d8</li><li>Podstawowa statystyka: Mądrość</li><li>PROF do rzutów obronnych: Mądrość i Charyzma</li><li>Prof do broni i zbroi: Zbroje lekkie i średnie, tarcze, bronie proste</li></ul>');
        classInfo('druid', '<ul class="class-info" id="druid-info"><li>Kapłan Starej Wiary władający siłami natury i przyjmujący kształt zwierząt</li><li>Kostka życia: d8</li><li>Podstawowa statystyka: Mądrość</li><li>PROF do rzutów obronnych: Mądrość i Inteligencja</li><li>Prof do broni i zbroi: Zbroje lekkie i średnie (niemetalowe), tarcze (niemetalowe), pałki, sztylety, kije, sejmitary, sierpy, proce, dzidy</li></ul>');
        classInfo('fighter', '<ul class="class-info" id="fighter-info"><li>Mistrz walki, w rękach którego każdy przedmiot jest zabójczą bronią</li><li>Kostka życia: d10</li><li>Podstawowa statystyka: Siła lub Zręczność</li><li>PROF do rzutów obronnych: Siła i Wytrzymałość</li><li>Prof do broni i zbroi: Wszystkie rodzaje zbroi, tarcze, bronie proste i ręczne</li></ul>');
        classInfo('monk', '<ul class="class-info" id="monk-info"><li>Mistrz sztuk walki, który dąży do perfekcji ciała i ducha</li><li>Kostka życia: d8</li><li>Podstawowa statystyka: Zręczność i Mądrość</li><li>PROF do rzutów obronnych: Siła i Zręczność</li><li>Prof do broni i zbroi: Bronie proste i krótkie miecze</li></ul>');
        classInfo('paladin', '<ul class="class-info" id="paladin-info"><li>Święty wojownik podczas boskiej misji</li><li>Kostka życia: d10</li><li>Podstawowa statystyka: Siła i Charyzma</li><li>PROF do rzutów obronnych: Mądrość i Charyzma</li><li>Prof do broni i zbroi: Wszystkie rodzaje zbroi, tarcze, bronie proste i ręczne</li></ul>');
        classInfo('ranger', '<ul class="class-info" id="ranger-info"><li>Wojownik używając broni i magii by walczyć z potworami na granicy cywilizacji</li><li>Kostka życia: d10</li><li>Podstawowa statystyka: Zręczność i Mądrość</li><li>PROF do rzutów obronnych: Siła i Zręczność</li><li>Prof do broni i zbroi:Zbroje lekkie i średnie, tarcze, bronie proste i ręczne</li></ul>');
        classInfo('rogue', '<ul class="class-info" id="rogue-info"><li>Łotrzyk używający cieni i oszustw by pokonać przeszkody i wrogów</li><li>Kostka życia: d8</li><li>Podstawowa statystyka: Zręczność</li><li>PROF do rzutów obronnych: Zręczność i Inteligencja</li><li>Prof do broni i zbroi: Lekkie zbroje, proste bronie, ręczne kusze, długie i krótkie miecze, rapiery</li></ul>');
        classInfo('sorcerer', '<ul class="class-info" id="sorcerer-info"><li>Bohater używający magii płynącej z darów lub lini krwi</li><li>Kostka życia: d6</li><li>Podstawowa statystyka: Charyzma</li><li>PROF do rzutów obronnych: Wytrzymałość i Charyzma</li><li>Prof do broni i zbroi: Sztylety, strzałki, proce, kije, lekkie kusze</li></ul>');
        classInfo('warlock', '<ul class="class-info" id="warlock-info"><li>Bohater używający magii płynącej z paktu z nieludzką istotą</li><li>Kostka życia: d8</li><li>Podstawowa statystyka: Charyzma</li><li>PROF do rzutów obronnych: Mądrość i Charyzma</li><li>Prof do broni i zbroi: Lekkie zbroje, bronie proste</li></ul>');
        classInfo('wizard', '<ul class="class-info" id="wizard-info"><li>Uczony, który za pomocą wyuczonej magii nagina strukturę rzeczywistości</li><li>Kostka życia: d6</li><li>Podstawowa statystyka: Inteligencja</li><li>PROF do rzutów obronnych: Inteligencja i Mądrość</li><li>Prof do broni i zbroi: Sztylety, strzałki, proce, kije, lekkie kusze</li></ul>');


        // funkcja tworząca przyciski umiejętności i okreslające co się dziej po kliknieciu

        function skillsProficiency(array,points) {

            const skillsCanvas = $('<div>', {id: "skills-canvas"});
            $('body').append(skillsCanvas);
            var backButton = $('<i class="fas fa-caret-square-left fa-2x back-button"></i>');
            skillsCanvas.prepend(backButton);
            backButton.on('click', function () {
                location.reload();
            })
            let skillPoints = points;
            const skillPointsContainer = $('<div>', {class: 'skill-points-cointainer'});
            skillsCanvas.append(skillPointsContainer);
            skillPointsContainer.html(`<h1>Wybierz ${skillPoints} umiejętności</h1>`);
            array.forEach((item) => {
                const skillButton = $('<button>', {class: 'choose-skills-buttons'})
                skillPointsContainer.append(skillButton);
                skillButton.text(item);
                skillButton.on('click', (event) => {
                    let clickedSkill = item;
                    skillList.forEach( item => {
                        if (item.name == clickedSkill) {
                            item.check = true;
                        }
                    })
                    event.target.remove();
                    skillPoints = skillPoints - 1;
                    if (skillPoints === 0) {
                        skillsCanvas.remove();
                    }
                })
            })
        }

        // funkcja ustawiająca klasę

        function clickClassButton (klasa,callback,skillIndex,skillPoints) {
            $('#'+klasa).on('click', () => {
                chosenClass = klasa;
                basicClasses.forEach(function(item) {
                    if (item.name === klasa) {
                        const hitPointCalc = item.hitDie/2 + 1;
                        hitPoints = hitPointCalc+parseInt($('#con-mod')[0].innerHTML);
                        hitDice = 'd'+item.hitDie;
                        proficiency = item.proficiency;
                    }
                })

                callback(basicClasses[skillIndex].skills,skillPoints);
                $('#class-container').remove();
            })
        }

        clickClassButton('barbarian',skillsProficiency,0,2);
        clickClassButton('bard',skillsProficiency,1,3);
        clickClassButton('cleric',skillsProficiency,2,2);
        clickClassButton('druid',skillsProficiency,3,2);
        clickClassButton('fighter',skillsProficiency,4,2);
        clickClassButton('monk',skillsProficiency,5,2);
        clickClassButton('paladin',skillsProficiency,6,2);
        clickClassButton('ranger',skillsProficiency,7,3);
        clickClassButton('rogue',skillsProficiency,8,4);
        clickClassButton('sorcerer',skillsProficiency,9,2);
        clickClassButton('warlock',skillsProficiency,10,2);
        clickClassButton('wizard',skillsProficiency,11,2);


        // button powracający

        var backButton = $('<i class="fas fa-caret-square-left fa-2x back-button"></i>');
        classContainer.prepend(backButton);
        backButton.on('click', function () {
            location.reload();
        })

    }

    const skillList = [
        {
            name: 'Akrobatyka',
            attribute: '#dex-mod',
            check: false,
        },
        {
            name: 'Atletyka',
            attribute: '#str-mod',
            check: false,
        },
        {
            name: 'Historia',
            attribute: '#int-mod',
            check: false,
        },
        {
            name: 'Intuicja',
            attribute: '#wis-mod',
            check: false,
        },
        {
            name: 'Medycyna',
            attribute: '#wis-mod',
            check: false,
        },
        {
            name: 'Opieka nad zwierzętami',
            attribute: '#wis-mod',
            check: false,
        },
        {
            name: 'Oszustwo',
            attribute: '#cha-mod',
            check: false,
        },
        {
            name: 'Percepcja',
            attribute: '#wis-mod',
            check: false,
        },
        {
            name: 'Perswazja',
            attribute: '#cha-mod',
            check: false,
        },
        {
            name: 'Przyroda',
            attribute: '#int-mod',
            check: false,
        },
        {
            name: 'Religia',
            attribute: '#int-mod',
            check: false,
        },
        {
            name: 'Skradanie się',
            attribute: '#dex-mod',
            check: false,
        },
        {
            name: 'Sztuka przetrwania',
            attribute: '#wis-mod',
            check: false,
        },
        {
            name: 'Śledztwo',
            attribute: '#int-mod',
            check: false,
        },
        {
            name: 'Wiedza tajemna',
            attribute: '#int-mod',
            check: false,
        },
        {
            name: 'Występy',
            attribute: '#cha-mod',
            check: false,
        },
        {
            name: 'Zastraszanie',
            attribute: '#cha-mod',
            check: false,
        },
        {
            name: 'Zwinne dłonie',
            attribute: '#dex-mod',
            check: false,
        }
    ]

    // tab z umiejętnościami



    const skillsTab = () => {
        const skillsContainer = $('<div>', {class: 'skill-container'});
        $('body').append(skillsContainer);
        const closeSkillsContainerButton = $('<div>', {class: 'close-secondary-attributes'});
        skillsContainer.append(closeSkillsContainerButton);
        const closeSkillsContainerIcon = $('<i>', {class: 'fas fa-times fa-2x'});
        closeSkillsContainerButton.append( closeSkillsContainerIcon);

        closeSkillsContainerButton.on('click', () => {
            skillsContainerk.remove();
        })

        const skills = () => {
            const skillsList = $('<ul>', {id: 'skills-list'})
            skillsContainer.append(skillsList);
            skillList.forEach(function (item,index) {
                const containerDiv = $('<div>', {class: 'skill-list-item-container'})
                skillsList.append(containerDiv)
                const random = $('<li>', {class: 'skills-list-item'});
                let modifier = +$(item.attribute).text()
                if (item.check === true) {
                    random.text(item.name+": " +(modifier + proficiency))
                } else {
                    random.text(item.name+": "+modifier)
                }

                containerDiv.append(random)
                const testButton = $('<button>', {class: 'skill-test-button',});
                testButton.text('Testuj!');
                testButton.on('click', () => roll20(modifier));
                containerDiv.append(testButton)


    })
    }
        skills();

    }




     $('#skills').on('click', skillsTab);
    })
