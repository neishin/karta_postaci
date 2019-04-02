$(document).ready(function () {

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
                    characteristics.on('click', function () {
                        $('#' + rasa + '-info').removeClass('visible');
                        setTimeout(function () {
                            $('#' + rasa + '-info').remove();
                        }, 900)
                    })
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

//                function closePopup() {
//                    $(window).on('click', function () {
//                    console.log('dupa');
//                    $('#' + subrase + '-info').removeClass('visible');
//                    setTimeout(function () {
//                        $('#' + subrase + '-info').remove();
//                    }, 900)
//                })
//                }

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
                        characteristics.on('click', function () {
                            $('#'+subrase+'-info').removeClass('visible');
                            setTimeout(function () {
                                $('#'+subrase+'-info').remove();
                            }, 900)
                        })
                    }
                })
                }

        // po kliknięciu rasy
        $('#dwarf').on('click', function () {
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
            $('.main-stat').text('9');
            clickAccept();
        });
        $('#dragonborn').on('click', function () {
            $('#str').text('10');
            $('#str-mod').text('0');
            $('#cha').text('9');
            clickAccept();
        });
        $('#gnome').on('click', function () {
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
            alert('Masz za mało punktów');
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
            $('#accept-button').removeClass('hidden')
        } else {
            $('#accept-button').addClass('hidden')
        }
        $('#accept-button').on('click', function () {
            $('.stat-button').addClass('hidden');
            $('#points-pool-container').css('display', 'none');
            $('#points-pool-container').css('display', 'none');
            $('.stat-container:first-child').css('margin-top', '10px');
            $('.race-container').remove();
            $('#buttons').removeClass('hidden');
        })
    }

    // minus button do stata

    const removeStat = (button,stat,modifier) => {
        $(button).on('click', function () {
            minStat(stat, modifier)
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

    // przycisk pokazujący cechy drugorzędne



    const secondaryAttributes = () => {
        let armorClass = 10;
        let hitPoints = 5;
        let hitDice = 1+'d'+6;
        let speed = 30;
        let proficiency = 1;
        const secondaryAttributesContainer = $('<div>', {id: 'secondary-attributes-container'});
        $('body').append(secondaryAttributesContainer);
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
    }

    $('#secondary-attributes').on('click', secondaryAttributes)

})
