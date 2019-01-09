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

        function clickAccept() {
            $('.stats').removeClass('hidden');
            $('.race-container').addClass('hidden');
            $('#points-pool-container').css('display', 'flex');
        }

        // pop-upy ras
        $('#race-info-button-dwarf').on('mousedown', function () {
            if ($('#dwarf-info').length > 0) {
                $('#dwarf-info').removeClass('visible');
                setTimeout(function () {
                    $('#dwarf-info').remove();
                }, 900)
            } else {
                var characteristics = $('<ul class="race-info" id="dwarf-info"><li>Twoja Wytrzymałość jest większa o 2</li><li>Twój rozmiar jest Średni</li><li>Twoja Szybkość to 25 metrów</li><li>Widzisz w ciemności na 60 metrów</li><li>Masz 2 kości na rzut obronny przeciw truciznom. Masz też odporność na trucizny</li><li>Potrafisz używać: topora bojowego, topora, lekkiego młota i młota bojowego</li><li>Umiesz używać (do wyboru): narzędzi kowalskich, środków browarniczych lub narzędzi murarskich</li><li>Kiedy rzucacz Inteligencje(Historię) dotycząco prac w kamieniu to masz PROFICIENCY w Historii i dodajesz podwójne PROF do tego rzutu</li><li>Umiesz mówić i pisać we wspólnym i krasnoludzkim.</li><li>Możesz być Kransoludem Wzgórzowym (+1 do Mądrości i +1 maksymalny punkt życia co poziom) albo Górskim (+2 do Siły i umiejętność posługiwania się lekką i średnią zbroją</li></ul>');
                $('body').append(characteristics);
                setTimeout(function () {
                    $('#dwarf-info').addClass('visible');
                }, 1);
                characteristics.on('click', function () {
                    $('#dwarf-info').removeClass('visible');
                    setTimeout(function () {
                        $('#dwarf-info').remove();
                    }, 900)
                })
            }
        });

        $('#race-info-button-elf').on('mousedown', function () {
            if ($('#elf-info').length > 0) {
                $('#elf-info').removeClass('visible');
                setTimeout(function () {
                    $('#elf-info').remove();
                }, 900)
            } else {
                var characteristics = $('<ul class="race-info" id="elf-info"><li>Twoja Zręczność jest większa o 2</li><li>Twój rozmiar jest średni</li><li>Twoja Szybkość to 30 metrów</li><li>Widzisz w ciemnościach na 60 metrów</li><li>Masz PROF w umiejętności Percepcja</li><li>Masz 2 kości na rzut obronny przeciw zauroczeniu. Magia nie może cie uśpić</li><li>Nie śpisz, medytujesz 4 godziny dziennie. Liczy się to jak Długi odpoczynek</li><li>Mówisz i piszesz we wspólnym i elfickim</li><li>Możesz być elfem wysokim (Inteligencja +1, umiesz używać długich i krótkich mieczy oraz krótkiego i długiego łuku, znasz jedną sztuczkę rzucaną na Inteligencji oraz znasz jeden dodatkowy język), leśnym (Mądrość +1, umiesz używać długich i krótkich mieczy oraz krótkiego i długiego łuku, twoja Szybkość to 35 metrów, łatwiej ci się ukrywać) lub mrocznym (Charyzma +1, lepsze widzenie w ciemności, jesteś wrażliwy na światło - DISADV na testy Mądrości(Percepcji) polegającej na wzroku podczas dnia, umiesz sztuczkę Tańczące światła, umiesz używać rapierów, krótkich mieczy oraz ręcznej kuszy)</li></ul>');
                $('body').append(characteristics);
                setTimeout(function () {
                    $('#elf-info').addClass('visible');
                }, 1);
                characteristics.on('click', function () {
                    $('#elf-info').removeClass('visible');
                    setTimeout(function () {
                        $('#elf-info').remove();
                    }, 900)
                })
            }
        });

        $('#race-info-button-halfling').on('mousedown', function () {
            if ($('#halfling-info').length > 0) {
                $('#halfling-info').removeClass('visible');
                setTimeout(function () {
                    $('#halfling-info').remove();
                }, 900)
            } else {
                var characteristics = $('<ul class="race-info" id="halfling-info"><li>Twoja Zręczność jest większa o 2</li><li>Twój rozmiar jest mały</li><li>Twoja Szybkość to 25 metrów</li><li>Możesz przerzucić wynik 1 w rzutach na atak, test umiejętności, rzut obronny</li><li>Masz przewagę w rzutach na strach</li><li>Możesz poruszać się przez pole z wrogiem większym od ciebie</li><li>Mówisz i piszesz we wspólnym i halflińskim</li><li>Możesz być halflingiem lekkostopym (Charyzma +1, możesz się chować za istotami większymi od ciebie) lub krzepkim (Wytrzymałość +1, masz przewagę na rzuty obronne przed truciznami oraz masz odporność na trucizny)</li></ul>');
                $('body').append(characteristics);
                setTimeout(function () {
                    $('#halfling-info').addClass('visible');
                }, 1);
                characteristics.on('click', function () {
                    $('#halfling-info').removeClass('visible');
                    setTimeout(function () {
                        $('#halfling-info').remove();
                    }, 900)
                })
            }
        });

        $('#race-info-button-human').on('mousedown', function () {
            if ($('#human-info').length > 0) {
                $('#human-info').removeClass('visible');
                setTimeout(function () {
                    $('#human-info').remove();
                }, 900)
            } else {
                var characteristics = $('<ul class="race-info" id="human-info"><li>Wszystkie twoje ceny są większe o 1</li><li>Twój rozmiar jest średni</li><li>Twoja Szybkość to 30 metrów</li><li>Mówisz i piszesz we wspólnym i jednym dowolnym języku</li></ul>');
                $('body').append(characteristics);
                setTimeout(function () {
                    $('#human-info').addClass('visible');
                }, 1);
                characteristics.on('click', function () {
                    $('#human-info').removeClass('visible');
                    setTimeout(function () {
                        $('#human-info').remove();
                    }, 900)
                })
            }
        });
        $('#race-info-button-dragonborn').on('mousedown', function () {
            if ($('#dragonborn-info').length > 0) {
                $('#dragonborn-info').removeClass('visible');
                setTimeout(function () {
                    $('#dragonborn-info').remove();
                }, 900)
            } else {
                var characteristics = $('<ul class="race-info" id="dragonborn-info"><li>Twoja Siła jest większa o 2, a Charyzma o 1</li><li>Twój rozmiar jest średni</li><li>Twoja Szybkość to 30 metrów</li><li>Wybiesz typ smoka, by dostać jego atak zionięciem</li><li>Masz odporność na typ obrażeń zgodny z twoim typem zionięcia</li><li>Mówisz i piszesz we wspólnym i smocznym</li></ul>');
                $('body').append(characteristics);
                setTimeout(function () {
                    $('#dragonborn-info').addClass('visible');
                }, 1);
                characteristics.on('click', function () {
                    $('#dragonborn-info').removeClass('visible');
                    setTimeout(function () {
                        $('#dragonborn-info').remove();
                    }, 900)
                })
            }
        });

        $('#race-info-button-gnome').on('mousedown', function () {
            if ($('#gnome-info').length > 0) {
                $('#gnome-info').removeClass('visible');
                setTimeout(function () {
                    $('#gnome-info').remove();
                }, 900)
            } else {
                var characteristics = $('<ul class="race-info" id="gnome-info"><li>Twoja Inteligencja jest większa o 2</li><li>Twój rozmiar jest mały</li><li>Twoja Szybkość to 25 metrów</li><li>Widzisz w ciemnościach na 60 metrów</li><li>Masz przewagę na rzuty obronne na magię bazujące na Inteligencji, Mądrości i Charyźmie</li><li>Mówisz i piszesz we wspólnym i gnomim</li><li>Możesz być gnomem leśnym (Zręczność +1, znasz sztuczkę Pomniejsza iluzja, umiesz komunikować się z małymi zwierzętami) lub kamiennym (Wytrzymałość +1, przy rzutach na Inteligencję(Historię) dotyczącą przedmiotów magicznych, alchemicznych lub technologicznych twoja PROF liczy się podwójnie, umiesz używać narzędzi i możesz tworzyć małe urzadzenia) </li></ul>');
                $('body').append(characteristics);
                setTimeout(function () {
                    $('#gnome-info').addClass('visible');
                }, 1);
                characteristics.on('click', function () {
                    $('#gnome-info').removeClass('visible');
                    setTimeout(function () {
                        $('#gnome-info').remove();
                    }, 900)
                })
            }
        });

        $('#race-info-button-tiefling').on('mousedown', function () {
            if ($('#tiefling-info').length > 0) {
                $('#tiefling-info').removeClass('visible');
                setTimeout(function () {
                    $('#tiefling-info').remove();
                }, 900)
            } else {
                var characteristics = $('<ul class="race-info" id="tiefling-info"><li>Twoja Inteligencja jest większa o 1, a Charyzma o 2</li><li>Twój rozmiar jest średni</li><li>Twoja Szybkość to 30 metrów</li><li>Widzisz w ciemnościach na 60 metrów</li><li>Masz odporność na ogień</li><li>Znasz sztuczkę Taumaturgia</li><li>Mówisz i piszesz we wspólnym i infernalnym</li></ul>');
                $('body').append(characteristics);
                setTimeout(function () {
                    $('#tiefling-info').addClass('visible');
                }, 1);
                characteristics.on('click', function () {
                    $('#tiefling-info').removeClass('visible');
                    setTimeout(function () {
                        $('#tiefling-info').remove();
                    }, 900)
                })
            }

        });


        // po kliknięciu rasy
        $('#dwarf').on('click', function () {
            $('#con').text('10');
            $('#con-mod').text('0');
            var subrace = $('<div class="subrace-container">')
            $('body').append(subrace);
            var dwarfType = $('<button class="dwarf-type subrace-type" id="hillDwarf">Krasnolud wzgórzowy</button><button class="dwarf-type subrace-type" id="mountainDwarf">Krasnolud górski</button>');
            $('.race-container').addClass('hidden');
            subrace.append(dwarfType);
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
            var type = $('<button class="elf-type subrace-type" id="highElf">Elf wysoki</button><button class="elf-type subrace-type" id="woodElf">Elf leśny</button><button class="elf-type subrace-type" id="darkElf">Elf mroczny</button>');
            $('.race-container').addClass('hidden');
            subrace.append(type);
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
            var type = $('<button class="halfling-type subrace-type" id="lightfootHalfling">Halfling lekkostopy</button><button class="halfling-type subrace-type" id="stoutHalfling">Halfling krzepki</button>');
            $('.race-container').addClass('hidden');
            subrace.append(type);
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
            var type = $('<button class="gnome-type subrace-type" id="forestGnome">Gnom leśny</button><button class="gnome-type subrace-type" id="rockGnome">Gnom kamienny</button>');
            $('.race-container').addClass('hidden');
            subrace.append(type);
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
        })
    }

    chooseRase();

    // wybór klasy
    //    function chooseClass() {
    //        $('.stats').addClass('hidden');
    //        var classContainer = $('<div>', {class: 'class-container'});
    //        $('body').append(classContainer);
    //        var fighterButton = $('<button>', {class: 'class-button', id: 'fighter'}).text('Wojownik');
    //        $('.classContainer').append(fighterButton);
    //    }
    //
    //    chooseClass();

    // funkcja zmniejszająca stat
    function minStat(stat, mod) {
        var currentStat = $(stat).text();
        var currentPool = $('#points-pool').text();
        var mod = $(mod);
        var statNumber = parseInt(currentStat);
        var poolNumber = parseInt(currentPool);
        if (statNumber == 8) {
            alert("nie można zejść poniżej 8")
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
        if (currentPool <= 0 || (currentPool == 1 && statNumber >= 13)) {
            alert('nie masz już punktów');
            return;
        }
        if (statNumber == 15) {
            alert('Nie można mieć wiecej niż 15')
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
        if (statNumber == 8 || statNumber == 9) {
            mod.text('-1');
        } else if (statNumber == 10 || statNumber == 11) {
            mod.text('0');
        } else if (statNumber == 12 || statNumber == 13) {
            mod.text('+1');
        } else if (statNumber == 14 || statNumber == 15) {
            mod.text('+2');
        }
    }

    // funkcja uruchamiająca przycisk Akceptuj po rozdaniu punktów
    function acceptAllocation() {
        var currentPool = $('#points-pool').text();
        var poolNumber = parseInt(currentPool);
        if (poolNumber === 0) {
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
            $('.stat-container:first-child').css('margin-top', '10px')
        })
    }

    // zminusowane Siły
    $('#min-str').on('click', function () {
        minStat('#str', '#str-mod')
    });

    // splusowanie siły
    $('#plus-str').on('click', function () {
        plusStat('#str', '#str-mod')
    })

    // zminusowanie Zręczności
    $('#min-dex').on('click', function () {
        minStat('#dex', '#dex-mod')
    });

    // splusowanie zrecznosci
    $('#plus-dex').on('click', function () {
        plusStat('#dex', '#dex-mod')
    })

    // zminusowanie wytrzymalosci
    $('#min-con').on('click', function () {
        minStat('#con', '#con-mod')
    });

    // splusowanie wytrzymalosci
    $('#plus-con').on('click', function () {
        plusStat('#con', '#con-mod')
    })

    // zminusowanie inta
    $('#min-int').on('click', function () {
        minStat('#int', '#int-mod')
    });

    // splusowanie inta
    $('#plus-int').on('click', function () {
        plusStat('#int', '#int-mod')
    })

    // zminusowanie wisdom
    $('#min-wis').on('click', function () {
        minStat('#wis', '#wis-mod')
    });

    // splusowanie wisdom
    $('#plus-wis').on('click', function () {
        plusStat('#wis', '#wis-mod')
    })

    // zminusowanie cha
    $('#min-cha').on('click', function () {
        minStat('#cha', '#cha-mod')
    });

    // splusowanie cha
    $('#plus-cha').on('click', function () {
        plusStat('#cha', '#cha-mod')
    })
})
