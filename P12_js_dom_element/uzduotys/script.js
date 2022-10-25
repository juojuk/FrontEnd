function changeToKakava(){
    const h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = 'Karšta kakava';
    const ol = document.getElementsByTagName("ol")[0];
    ol.innerHTML = `
    <li>Pirmiausia moliniame puodelyje šaukštu gerai išmaišykite vieną valgomąjį šaukštą kakavos su vienu valgomuoju šaukštu cukraus.</li>
    <li>Pripilkite vieną valgomąjį šaukštą pieno ir labai gerai išmaišykite, iki kol gausite vientisą masę, tepamo sūrio tirštumo.</li>
    <li>Tada pripilkite dar 100 mililitrų pieno. Dar kartą viską gerai išmaišykite, plūduriuojančius tirštos kakavos gumuliukus šaukštu sutraiškykite į puodelio sienelę.</li>
    <li>Po to mišinį supilkite į nedidelį puodą, supilkite likusį pieną ir virš vidutiniškos liepsnos virinkite visą laiką maišydami šaukštu. Reikia būti pasiruošus puodą nukelti nuo liepsnos, kai maždaug po 10 minučių virimo mišinys užvirs, tai yra pakils iki puodo kraštų.</li>
    <li>Per smulkų sietelį karštą kakavą pilkite į du molinius puodelius.</li>`;
    const ul = document.getElementsByTagName("ul")[0];
    ul.innerHTML = `
    <li><a href = "https://lt.wikipedia.org/wiki/Pienas" target="_blank">pienas</a> : 500 mililitrų</li> 
    <li><a href = "https://lt.wikipedia.org/wiki/Kakava" target="_blank">kakavos pudra</a> (be priemaišų): 1 valgomojo šaukšto</li>
    <li><a href = "https://lt.wikipedia.org/wiki/Cukrus" target="_blank">smulkus cukrus</a> 1 valgomojo šaukšto</li>`;
    const img = document.getElementsByClassName("img-block")[0];
    img.innerHTML = `<img src="img/karsta kakava.jpg" alt=""></img>`;
}

function changeToTinginys(){
    const h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = 'Tinginys su pienu';
    const ol = document.getElementsByTagName("ol")[0];
    ol.innerHTML = `
    <li>Pirmiausia sausainius sutrupinkite į didelį dubenį.</li>
    <li>Tada nedideliame puode išlydykite sviestą ant vidutinės kaitros.</li>
    <li>Supilkite pieną, suberkite cukrų, kakavą, vanilinį cukrų bei druską. Maišykite, kol masė pradės virti.</li>
    <li>Virkite maždaug 3-4 minutes ant silpnos kaitros nuolatos maišydami. Masė per tą laiką šiek tiek sutirštėja.</li>
    <li>Tuomet iš karto užpilkite ant sausainių ir gerai išmaišykite.</li>
    <li>Sausainių masę palikite šiek teik atvėsti.</li>
    <li>Kai sausainių masė šiek tiek atvės, ant stalviršio patieskite maistinę plėvelę ir sudėkite sausainių tešlą bei suformuokite ritinį.</li>
    <li>Tuomet sausainius susukite į plėvelę, gerai užspauskite plėvelę, kad neliktų oro tarpelių, užsukite ritinio galus ir dėkite į šaldytuvą stengti mažiausiai porai valandų arba dar geriau per visą naktį.</li>
    <li>Kai jau tinginys sustingsta, supjaustykite griežinėliais.</li>`;
    const ul = document.getElementsByTagName("ul")[0];
    ul.innerHTML = `<li><a href = "https://lt.wikipedia.org/wiki/Sausainis" target="_blank">sausainiai</a> : 400 gramų</li> 
    <li><a href = "https://lt.wikipedia.org/wiki/Sviestas" target="_blank">sviestas</a> : 150 gramų</li>
    <li><a href = "https://lt.wikipedia.org/wiki/Pienas" target="_blank">pienas</a> : 180 mililitrų</li>
    <li><a href = "https://lt.wikipedia.org/wiki/Cukrus" target="_blank">cukrus</a> : 70 gramų</li> 
    <li><a href = "https://lt.wikipedia.org/wiki/Kakava" target="_blank">kakava</a> : 4 valgomųjų šaukštų</li>
    <li><a href = "https://lt.wikipedia.org/wiki/Cukrus" target="_blank">vanilinis cukrus</a> : 1 arbatinio šaukštelio (arba vanilės ekstraktas)</li>
    <li><a href = "https://lt.wikipedia.org/wiki/Druska" target="_blank">druska</a> : žiupsnelio</li>`;
    const img = document.getElementsByClassName("img-block")[0];
    img.innerHTML = `<img src="img/tinginys su pienu.jpg" alt=""></img>`;
}


function changeToBrownie(){
    const h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = 'Brownie';
    const ol = document.getElementsByTagName("ol")[0];
    ol.innerHTML = '';
    ol.innerHTML += `<li>Pirmiausia įkaitinkite orkaitę iki 175 laipsnių temperatūros ir pasisveriame ingredientus. Nuo šių sausainių gaminimo laiko labai priklausys jų tekstūra, rezultatas, tad reikėtų nesėdėti rankų sudėjus.</li>`;
    ol.innerHTML += `<li>Garų vonelėje išlydykite šokoladą su sviestu. Kol jie lydosi, į didelį dubenį muškite kiaušinį ir berkite abiejų rūšių cukrų. Plakite dideliu galingumu apie 5 minutes.</li>`;
    ol.innerHTML += `<li>Atskirame dubenėlyje sumaišykite sausus ingredientus. Šokolado masė jau turi būti paruošta, tad jeigu dar nepraėjo 5 plakimo minutės, tiesiog paliekame šokoladą šiek tiek pravėsti.</li>`;
    ol.innerHTML += `<li>Sumažiname plaktuvo galingumą ir po truputį pilame jau pravėsusią masę.</li>`;
    ol.innerHTML += `<li>Kai jau viskas patampa vientisa, pakeičiame kombaino antgalį, į skirtą tirštesnei tešlai (jeigu naudosite įprastą plaktuvą, šį žingsnį tiesiog praleidžiame) ir plakdami labai lėtai, po truputį beriame sausų ingredientų mišinį.</li>`;
    ol.innerHTML += `<li>Mūsų brownie sausainių tešla jau paruošta! Neišsigąstame, kad ji tikrai skystesnė nei įprastos sausainių masės, bet tai būtent ta priežastis, kuri suteiks sausainiams tą labai gražų suskeldėjusį raštą irlabai minkštą bei tąsų vidų.</li>`;
    ol.innerHTML += `<li>Tada į kepimo skardą, išklotą su kepimo popieriumi, dėkite po norimą kiekį tešlos. Aš dedu po vieną arbatinį šaukštelį su nemenku kaupu, bet jūs galite kepti tiek didesnius, tiek mažesnius sausainius - pagal savo norus ir pageidavimus.</li>`;
    ol.innerHTML += `<li>Dėkite į jau įkaitintą orkaitę ir kepkite apie 10-12 minučių.</li>`;
    const ul = document.getElementsByTagName("ul")[0];
    ul.innerHTML = '';
    ul.innerHTML += `<li><a href = "https://lt.wikipedia.org/wiki/Šokoladas" target="_blank">70% juodas šokoladas</a> : 100 gramų</li>`;
    ul.innerHTML += `<li><a href = "https://lt.wikipedia.org/wiki/Sviestas" target="_blank">sviestas</a> : 62 gramų</li>`;
    ul.innerHTML += `<li><a href = "https://lt.wikipedia.org/wiki/Cukrus" target="_blank">cukrus</a> : 75 gramų</li>`;
    ul.innerHTML += `<li><a href = "https://lt.wikipedia.org/wiki/Cukrus" target="_blank">rudas cukrus</a> : 50 gramų</li>`;
    ul.innerHTML += `<li><a href = "https://lt.wikipedia.org/wiki/Kiaušinis" target="_blank">kiaušiniai</a> : 1</li>`;
    ul.innerHTML += `<li><a href = "https://lt.wikipedia.org/wiki/Miltai" target="_blank">miltai</a> : 65 gramų</li>`;
    ul.innerHTML += `<li><a href = "https://lt.wikipedia.org/wiki/Kakava" target="_blank">kakavos milteliai</a> : 11 gramų</li>`;
    ul.innerHTML += `<li><a href = "https://lt.wikipedia.org/wiki/Puriklis" target="_blank">kepimo milteliai</a> : 0,5 arbatinio šaukštelio</li>`;
    ul.innerHTML += `<li><a href = "https://lt.wikipedia.org/wiki/Druska" target="_blank">druska</a> : žiupsnelio</li>`;
    const img = document.getElementsByClassName("img-block")[0];
    img.innerHTML = `<img src="img/brownie.jpg" alt=""></img>`;
}


