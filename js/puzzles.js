// puzzles.js
const puzzles = {
  1: {
    title: "--- Dag 1: Snökatapulten! ❄️ ---",
    story: `Det är något fel på snöproduktionen i världen, och nissarna har valt dig för att lösa problemet. De har gett dig en karta med stjärnor som markerar de 24 platser där något kan ha gått snett. För att fixa problemet måste du kolla alla 24 platser före julafton.<br>Samla stjärnor genom att lösa kluringar. En kluring släpps varje dag, och varje löst kluring ger en stjärna. När du frågar hur du ska ta dig dit svarar nissarna glatt: med en katapult! Men innan du skjuts iväg upptäcker de att deras viktiga dokument har kladdats på av en busig liten nisse. Kan du hjälpa till att tyda dokumentet och komma igång med uppdraget? ✨`,
    description: `
      På varje rad finns en kod där du ska använda den första siffran och den sista siffran för att bilda ett tvåsiffrigt tal. Lägg sedan ihop alla talen för att få fram den magiska totalsumman.<br><br>
      <strong>2abc2</strong><br>
      <strong>x1yz0</strong><br>
      <strong>m1no8</strong><br><br>
      Kan du ta reda på summan av alla nissekoder i dokumentet?
    `,
    answer: 50,
  },
  2: {
    title: "--- Dag 2: Kubkaos 🎲 ---",
    story: `Efter en flygtur i en katapult landar du på en flytande ö uppe i himlen. En nisse välkomnar dig till Snö-ön, men något är fel – det finns ingen snö! För att fördriva tiden innan han förklarar vad som hänt, frågar han om du vill spela ett spel.`,
    description: `
      Nissen har en påse med kuber i färgerna <strong>röd</strong>, <strong>grön</strong> och <strong>blå</strong>. Han drar ut några kuber, visar dem för dig och lägger tillbaka dem i påsen. Ditt jobb är att lista ut om det han visar kan stämma med det han säger att påsen innehåller. Påsen innehåller <strong>högst 5 kuber</strong> av varje färg, vilka av spelen är möjliga? Lägg ihop ID-numren för alla möjliga spel för att få svaret!<br><br>
      Drag 1 <strong>ID 1:</strong> 3 röda, 2 blåa<br>
      Drag 2 <strong>ID 2:</strong> 4 gröna, 1 röd<br>
      Drag 3 <strong>ID 3:</strong> 6 gröna<br><br>
      Vad är summan av ID:erna för de möjliga dragen?
      `,
    answer: 3,
  },
  3: {
    title: "--- Dag 3: Maskindelar 🛠️ ---",
    story: `Du och nissen kommer till en gondolstation, men gondolen fungerar inte. Nissen säger att en del i motorn saknas, och du får i uppdrag att hitta den.`,
    description: `
      Motorn är ritad på en stor karta med siffror och symboler. Varje gång en siffra ligger bredvid en symbol (som * eller #), så är den siffran en del av motorn. Din uppgift är att lägga ihop alla sådana siffror.<br><br>
      <strong>467..114..</strong><br>
      <strong>...1......</strong><br>
      <strong>.*35..633.</strong><br>
      <strong>......#...</strong><br>
      <strong>100*......</strong><br>
      <strong>.......58.</strong><br>
      <strong>..592.....</strong><br>
      <strong>......#50.</strong><br><br>
      Vad är summan av alla siffror som är en del av motorn?
    `,
    answer: 185,
  },
  4: {
    title: "--- Dag 4: Skraplotter! 🎴 ---",
    story: `Efter gondolfärden landar du på en ny ö, här känns luften varmare. Du möter en nisse som har tre skraplotter. Men han kan inte räkna ut vad han har vunnit. Han ber om din hjälp!`,
    description: `
    På varje skraplott finns två listor med siffror. Den första listan är vinstsiffror, och den andra är dina siffror. Din uppgift är att hitta vilka siffror du har som också finns med bland vinstsiffrorna. Varje siffra som matchar ger 1 poäng.<br><br>
    <strong>Skraplott 1:</strong><br>
    Vinstsiffror: 41, 48, 83, 86, 17<br>
    Dina siffror: 83, 86, 6, 31, 17, 9, 48, 53<br><br>
    <strong>Skraplott 2:</strong><br>
    Vinstsiffror: 13, 32, 20, 16, 61<br>
    Dina siffror: 61, 30, 68, 82, 17, 32, 24, 19<br><br>
    <strong>Skraplott 3:</strong><br>
    Vinstsiffror: 14, 62, 21, 78, 5<br>
    Dina siffror: 15, 9, 5, 92, 16, 23, 14, 62<br><br>
    Hur många poäng får du totalt för alla skraplotterna?
  `,
    answer: 9,
  },
  5: {
    title: "Dag 5: Tomtens Matematik",
    story: "",
    description: "Tomten har 15 kakor, men Rudolf äter upp 7 av dem. Hur många kakor har Tomten kvar?",
    answer: 8
  },
  6: {
    title: "Dag 6: Snögubben",
    story: "",
    description: "Vad har en snögubbe istället för näsa? (Ett ord)",
    answer: "morot"
  },
  7: {
    title: "Dag 7: Glittrande Granen",
    story: "",
    description: "Hur många kulor hänger på granen om Tomten hänger upp 10 och Nissarna hänger upp 15?",
    answer: 25
  },
  8: {
    title: "Dag 8: Rimstuga",
    story: "",
    description: "Vad rimmar på 'gran' och är en del av naturen? (Ett ord)",
    answer: "banan"
  },
  9: {
    title: "Dag 9: Iskalla Gåtan",
    story: "",
    description: "Vilken färg har is oftast? (Ett ord)",
    answer: "vit"
  },
  10: {
    title: "Dag 10: Nissarnas Addition",
    story: "",
    description: "Nisse 1 har 6 paket och Nisse 2 har 9 paket. Hur många paket har de tillsammans?",
    answer: 15
  },
  11: {
    title: "Dag 11: Julkänsla",
    story: "",
    description: "Vad sjunger man runt granen? (Ett ord)",
    answer: "sånger"
  },
  12: {
    title: "Dag 12: Pepparkakorna",
    story: "",
    description: "Hur många hörn har en pepparkakshjärtform?",
    answer: 0
  },
  13: {
    title: "Dag 13: Luciafirande",
    story: "",
    description: "Vad heter tjejen som bär ljus i sitt hår på Lucia? (Ett ord)",
    answer: "lucia"
  },
  14: {
    title: "Dag 14: Siffrornas Magi",
    story: "",
    description: "Vad är 2 x 5?",
    answer: 10
  },
  15: {
    title: "Dag 15: Rudolf och Kompisarna",
    story: "",
    description: "Hur många renar drar Tomtens släde, inklusive Rudolf?",
    answer: 9
  },
  16: {
    title: "Dag 16: Julafton",
    story: "",
    description: "Vilket datum firar vi julafton i Sverige? (Skriv som DD)",
    answer: 24
  },
  17: {
    title: "Dag 17: Julstrumpan",
    story: "",
    description: "Vad lägger man i en julstrumpa? (Ett ord)",
    answer: "godis"
  },
  18: {
    title: "Dag 18: Pynt i Fönstret",
    story: "",
    description: "Vad hänger man upp i fönstret som lyser? (Ett ord)",
    answer: "stjärna"
  },
  19: {
    title: "Dag 19: Frostig Matte",
    story: "",
    description: "Tomten delar ut 30 paket på 10 hus. Hur många paket får varje hus i genomsnitt?",
    answer: 3
  },
  20: {
    title: "Dag 20: Nissens Favoritfrukt",
    story: "",
    description: "Vilken frukt är rund, orange och äts på julen? (Ett ord)",
    answer: "apelsin"
  },
  21: {
    title: "Dag 21: Julklappskartan",
    story: "",
    description: "Vad använder Tomten för att hitta vägen? (Ett ord)",
    answer: "karta"
  },
  22: {
    title: "Dag 22: Vintertid",
    story: "",
    description: "Vad faller från himlen på vintern? (Ett ord)",
    answer: "snö"
  },
  23: {
    title: "Dag 23: Nissarnas Siffergåta",
    story: "",
    description: "Vad är 7 + 8 - 5?",
    answer: 10
  },
  24: {
    title: "Dag 24: God Jul!",
    story: "",
    description: "Vad säger vi till varandra på julafton? (Två ord)",
    answer: "god jul"
  }
  // Lägg till fler kluringar här...
};
