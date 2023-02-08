function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

createTable([
    ["Anime Series", "Assassination Classroom", "Action, Sci-fi", "Seen"],
    ["Anime Series", "Sword Art Online", "Adventure, Sci-fi", "T3 Not Seen"],
    ["Anime Series", "No Game No Life", "Isekai, Fantasy", "Seen"],
    ["Anime Series", "Death Note", "", "Seen"],
    ["Anime Series", "Shingeki no Kyojin", "", "Seen"],
    ["Anime Series", "Re:Zero kara Hajimeru Isekai Seikatsu", "", "Seen"],
    ["Anime Series", "Boku no Hero Academia", "", "Not Seen"],
    ["Anime Series", "Ao no Exorcist", "", "Seen"],
    ["Anime Series", "Fairy Tail", "", "Seen"],
    ["Anime Series", "One Punch Man", "", "Not Seen"],
    ["Anime Series", "Little Witch Academia", "", "Seen"],
    ["Anime Series", "Your Lie in April", "", "Not Seen"],
    ["Anime Series", "Black Clover", "", "Not Seen"],
    ["Anime Series", "K-ON!", "", "Seen"],
    ["Anime Series", "Neon Genesis Evangelion", "", "Not Seen"],
    ["Anime Series", "Bakemonogatari", "", "Not Seen"],
    ["Anime Series", "Haikyuu!!", "", "Not Seen"],
    ["Anime Series", "Darling in the Franxx", "", "Not Seen"],
    ["Anime Series", "Hibike Euphonium", "", "Seen"],
    ["Anime Series", "Kakegurui", "", "Seen"],
    ["Anime Series", "Hunter x Hunter", "", "Not Seen"],
    ["Anime Series", "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", "", "Seen"],
    ["Anime Series", "Jujutsu Kaisen", "", "Not Seen"],
    ["Anime Series", "Sora yori mo Tooi Basho", "", "Seen"],
    ["Anime Series", "Kobayashi-san Chi no Maid Dragon", "", "Seen"],
    ["Anime Series", "Jojo's Bizarre Adventure Toradora", "", "Not Seen"],
    ["Anime Series", "Hyouka", "", "Not Seen"],
    ["Anime Series", "Wonder Egg Priority", "", "Seen"],
    ["Anime Series", "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai", "", "Seen"],
    ["Anime Series", "Tamako Market", "", "Not Seen"],
    ["Anime Series", "Fate/Apocrypha", "", "Not Seen"],
    ["Anime Series", "Eromanga Sensei", "", "Not Seen"],
    ["Anime Series", "A Silent Voice", "", "Not Seen"],
    ["Anime Series", "Yuru Camp", "", "Not Seen"],
    ["Anime Series", "Umibe no Étranger mio", "", "Not Seen"],
    ["Anime Series", "Tantei wa Mou, Shindeiru", "", "Not Seen"],
    ["Anime Series", "Majo no Tabitabi", "", "Not Seen"],
    ["Anime Series", "Naruto", "", "Not Seen"],
    ["Anime Series", "Adachi to Shimamura", "", "Not Seen"],
    ["Anime Movie", "Kase-san shirīzu", "", "Seen"],
    ["Anime Series", "Komi-san wa, Komyushou Desu", "", "Seen"],
    ["Anime Series", "Chuunibyou Demo Koi ga Shitai!", "", "Not Seen"],
    ["Anime Series", "Menhera Shoujo Kurumi-chan", "", "Not Seen"],
    ["Anime Movie", "Kimi no Na wa", "", "Seen"],
    ["Anime Movie", "Tenki no Ko", "", "Seen"],
    ["Anime Movie", "Kimi no Suizou Tabetai", "", "Seen"],
    ["Anime Series", "Yagate Kimi ni Naru", "", "Not Seen"],
    ["Anime Series", "Horimiya", "", "Not Seen"],
    ["Anime Series", "Rikei ga Koi Ochita no de Shoumei shitemita", "", "Seen"],
    ["Anime Series", "Spy × Family", "", "T2 Not Seen"],
    ["Anime Series", "Jibaku Shounen Hanako-kun", "", "Seen"],
    ["Anime Series", "Tensei shitara Slime Datta Ken", "", "Not Seen"],
    ["Anime Series", "Link Click", "", "Not Seen"],
    ["Anime Series", "Classroom of the Elite", "", "Not Seen"],
    ["Anime Movie", "Bubble", "", "Seen"],
    ["Live Animation", "Adam by Eve", "Live-action, Music", "Seen"],
    ["American Animated Series", "Arcane", "", "Seen"],
    ["American Animated Series", "Steven Universe", "", "Seen"],
    ["Anime Series", "Non Non Biyori", "", "Not Seen"],
    ["Anime Series", "Houseki no Kuni", "", "Not Seen"],
    ["American Animated Series", "RWBY", "", "T3+ Not Seen"],
    ["Anime Series", "RWBY: Ice Queendom", "", "Not Seen"],
    ["Anime Series", "Lycoris Recoil", "", "Not Seen"],
    ["Anime Series", "Oreigaru", "", "Not Seen"],
    ["Anime Series", "Botchi za Rokku!", "", "Not Seen"],
    ["Anime Series", "Kyoukai no Kanata", "", "Not Seen"],
    ["American Series", "Breaking Bad", "", "Not Seen"],
    ["American Series", "Chilling Adventures of Sabrina", "", "Not Seen"],
    ["American Animated Series", "The Owl House", "", "Not Seen"],
    ["American Series", "You", "", "Not Seen"],
    ["Anime Series", "Lonely Girl ni Sakaraenai", "", "Not Seen"],
    ["American Series", "The Queen's Gambit", "", "Not Seen"]
    ["American Documentary", "Cunk On Earth", "Comedy", "Not Seen"]
]);