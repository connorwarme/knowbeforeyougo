import intel from "./content.json";
const data = intel;
// console.log(data);
const chapter1Verses = [
  {
    id: 0,
    location: "Ecclesiastes 3:11",
    text: "He has made everything beautiful in its time. Also, he has put eternity into man's heart, yet so that he cannot find out what God has done from the beginning to the end.",
    version: "ESV",
  },
  {
    id: 1,
    location: "2 Corinthians 5:1-10",
    text: "For we know that if the tent that is our earthly home is destroyed, we have a building from God, a house not made with hands, eternal in the heavens. For in this tent we groan, longing to put on our heavenly dwelling, if indeed by putting it on we may not be found naked. For while we are still in this tent, we groan, being burdened — not that we would be unclothed, but that we would be further clothed, so that what is mortal may be swallowed up by life. He who has prepared us for this very thing is God, who has given us the Spirit as a guarantee. So we are always of good courage. We know that while we are at home in the body we are away from the Lord, for we walk by faith, not by sight. Yes, we are of good courage, and we would rather be away from the body and at home with the Lord. So whether we are at home or away, we make it our aim to please him. For we must all appear before the judgment seat of Christ, so that each one may receive what is due for what he has done in the body, whether good or evil.",
    version: "ESV",
  },
  {
    id: 2,
    location: "1 Corinthians 15:53-55",
    text: "For this perishable body must put on the imperishable, and this mortal body must put on immortality. When the perishable puts on the imperishable, and the mortal puts on immortality, then shall come to pass the saying that is written: 'Death is swallowed up in victory.' 'O death, where is your victory? O death, where is your sting?'",
    version: "ESV",
  },
];
const chapter1Books = [
  {
    id: 0,
    title: "Being Mortal",
    tagline: "Medicine and What Matters in the End",
    author: "Atul Gawande",
    url: "https://atulgawande.com/book/being-mortal/",
  },
  {
    id: 1,
    title: "Nearing Home",
    tagline: "Life, Faith, and Finishing Well",
    author: "Billy Graham",
    url: "https://faithgateway.com/products/nearing-home-life-faith-and-finishing-well-1?",
  },
  {
    id: 2,
    title: "Finishing Our Course with Joy",
    tagline: "Guidance from God for Engaging with Our Aging",
    author: "J.I. Packer",
    url: "https://www.crossway.org/books/finishing-our-course-with-joy-tpb/",
  },
];
const chapter1Songs = [
  {
    title: "Unsteady",
    artist: "X Ambassadors",
    url: "https://www.youtube.com/watch?v=WaiCCUryCEk",
    embed: "https://www.youtube.com/embed/WaiCCUryCEk?si=uI0NiB_y7-_IU92y",
  },
  {
    title: "Hurt",
    artist: "Johnny Cash",
    url: "https://www.youtube.com/embed/8AHCfZTRGiI",
    embed: "https://www.youtube.com/embed/8AHCfZTRGiI?si=3kZPeQUuPWoRbRaT",
  },
  {
    title: "Eiley",
    artist: "Too Close To Touch",
    url: "https://www.youtube.com/watch?v=pY9g5MYOcVw",
    embed: "https://www.youtube.com/embed/pY9g5MYOcVw?si=AYNGCc60W4jT7Zfr",
  },
];
const chapter2Verses = [
  {
    id: 0,
    location: "2 Corinthians 5:4",
    text: "For while we are still in this tent, we groan, being burdened — not that we would be unclothed, but that we would be further clothed, so that what is mortal may be swallowed up by life.",
    version: "ESV",
  },
  {
    id: 1,
    location: "John 16:33",
    text: "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
    version: "ESV",
  },
  {
    id: 2,
    location: "Revelation 20:11-12",
    text: "Then I saw a great white throne and him who was seated on it. From his presence earth and sky fled away, and no place was found for them. And I saw the dead, great and small, standing before the throne, and books were opened. Then another book was opened, which is the book of life. And the dead were judged by what was written in the books, according to what they had done.",
    version: "ESV",
  },
  {
    id: 3,
    location: "Hebrews 10:30-31",
    text: "For we know him who said, 'Vengeance is mine; I will repay.' And again, 'The Lord will judge his people.' It is a fearful thing to fall into the hands of the living God.",
    version: "ESV",
  },
];
const chapter2Songs = [
  {
    title: "(I Can't Get No) Satisfaction",
    artist: "The Rolling Stones",
    url: "https://www.youtube.com/watch?v=nrIPxlFzDi0",
    embed: `https://www.youtube.com/embed/nrIPxlFzDi0?si=V2eCQ9Hk928VZKkp`,
  },
];
const chapter3Verses = [
  {
    id: 0,
    location: "Hebrews 9:27-28",
    text: "And just as it is appointed for man to die once, and after that comes judgment, so Christ, having been offered once to bear the sins of many, will appear a second time, not to deal with sin but to save those who are eagerly waiting for him.",
    version: "ESV",
  },
  {
    id: 1,
    location: "Romans 6:23",
    text: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
    version: "ESV",
  },
  {
    id: 2,
    location: "Romans 3:23",
    text: "For all have sinned and fall short of the glory of God.",
    version: "ESV",
  },
  {
    id: 3,
    location: "2 Corinthians 6:1-2",
    text: "Working together with him, then, we appeal to you not to receive the grace of God in vain. For he says, 'In a favorable time I listened to you, and in a day of salvation I have helped you.' Behold, now is the favorable time; behold, now is the day of salvation.",
    version: "ESV",
  },
  {
    id: 4,
    location: "Luke 23:42-43",
    text: "And he said, 'Jesus, remember me when you come into your kingdom.' And he said to him, 'Truly, I say to you, today you will be with me in paradise.'",
    version: "ESV",
  },
];
const chapter4Verses = [
  {
    id: 0,
    location: "2 Corinthians 4:16-18",
    text: "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.",
    version: "ESV",
  },
  {
    id: 1,
    location: "Psalm 119:71",
    text: "It is good for me that I was afflicted, that I might learn your statutes.",
    version: "ESV",
  },
  {
    id: 2,
    location: "Psalm 119:75",
    text: "I know, O LORD, that your rules are righteous, and that in faithfulness you have afflicted me.",
    version: "ESV",
  },
  {
    id: 3,
    location: "Psalm 121",
    text: "I lift up my eyes to the hills. From where does my help come? My help comes from the LORD, who made heaven and earth. He will not let your foot be moved; he who keeps you will not slumber. Behold, he who keeps Israel will neither slumber nor sleep. The LORD is your keeper; the LORD is your shade on your right hand. The sun shall not strike you by day, nor the moon by night. The LORD will keep you from all evil; he will keep your life. The LORD will keep your going out and your coming in from this time forth and forevermore.",
    version: "ESV",
  },
  {
    id: 4,
    location: "2 Corinthians 5:6-8",
    text: "So we are always of good courage. We know that while we are at home in the body we are away from the Lord, for we walk by faith, not by sight. Yes, we are of good courage, and we would rather be away from the body and at home with the Lord.",
    version: "ESV",
  },
  {
    id: 5,
    location: "Psalm 46:1",
    text: "God is our refuge and strength, always ready to help in times of trouble.",
    version: "NLT",
  },
  {
    id: 6,
    location: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    version: "ESV",
  },
  {
    id: 7,
    location: "Romans 8:18",
    text: "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.",
    version: "ESV",
  },
  {
    id: 8,
    location: "Isaiah 41:9-10",
    text: "You whom I took from the ends of the earth, and called from its farthest corners, saying to you, 'You are my servant, I have chosen you and not cast you off'; fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
    version: "ESV",
  },
  {
    id: 9,
    location: "Isaiah 43:1b-3a",
    text: "Fear not, for I have redeemed you; I have called you by name, you are mine. When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you. For I am the LORD your God, the Holy One of Israel, your Savior.",
    version: "ESV",
  },
];
const chapter5Verses = [
  {
    id: 0,
    location: "Psalm 139:16",
    text: "Your eyes saw my unformed substance; in your book were written, every one of them, the days that were formed for me, when as yet there was none of them.",
    version: "ESV",
  },
  {
    id: 1,
    location: "John 16:8",
    text: "And when he comes, he will convict the world concerning sin and righteousness and judgment.",
    version: "ESV",
  },
  {
    id: 2,
    location: "Romans 12:17-19",
    text: "Repay no one evil for evil, but give thought to do what is honorable in the sight of all. If possible, so far as it depends on you, live peaceably with all. Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, 'Vengeance is mine, I will repay, says the Lord.'",
    version: "ESV",
  },
  {
    id: 3,
    location: "Matthew 6:14-15",
    text: "For if you forgive others their trespasses, your heavenly Father will also forgive you, but if you do not forgive others their trespasses, neither will your Father forgive your trespasses.",
    version: "ESV",
  },
];
const chapter5Songs = [
  {
    title: "People Get Ready, Jesus is Comin'",
    artist: "Crystal Lewis",
    url: "https://www.youtube.com/watch?v=ijs1fr2pl3g",
    embed: `https://www.youtube.com/embed/ijs1fr2pl3g?si=GoIHOEczA6JpGEWL`,
  },
];
// chapter 6 verses
// John 14:2
// Luke 23:43
// Hebrews 9:28
// 1 Peter 1:3-9
const chapter6Verses = [
  {
    id: 0,
    location: "John 14:2",
    text: "In my Father's house are many rooms. If it were not so, would I have told you that I go to prepare a place for you?",
    version: "ESV",
  },
  {
    id: 1,
    location: "Luke 23:43",
    text: "And he said to him, 'Truly, I say to you, today you will be with me in paradise.'",
    version: "ESV",
  },
  {
    id: 2,
    location: "Hebrews 9:28",
    text: "So Christ, having been offered once to bear the sins of many, will appear a second time, not to deal with sin but to save those who are eagerly waiting for him.",
    version: "ESV",
  },
  {
    id: 3,
    location: "1 Peter 1:3-9",
    text: "Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead, to an inheritance that is imperishable, undefiled, and unfading, kept in heaven for you, who by God's power are being guarded through faith for a salvation ready to be revealed in the last time. In this you rejoice, though now for a little while, if necessary, you have been grieved by various trials, so that the tested genuineness of your faith — more precious than gold that perishes though it is tested by fire — may be found to result in praise and glory and honor at the revelation of Jesus Christ. Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory, obtaining the outcome of your faith, the salvation of your souls.",
    version: "ESV",
  },
];
// chapter 7 verses
// Ecclesiastes 3:1-2 ESV
// Psalm 139:16 NIV
// Joshua 1:9 ESV
// Ephesians 6:10 NIV
// Matthew 5:16 ESV
// John 13:35 ESV
// 1 Peter 3:15 ESV
// Deuteronomy 31:8 NIV
// 1 John 3:23 ESV
// Jude 1:24-25 NIV
const chapter7Verses = [
  {
    id: 0,
    location: "Ecclesiastes 3:1-2",
    text: "For everything there is a season, and a time for every matter under heaven: a time to be born, and a time to die; a time to plant, and a time to pluck up what is planted.",
    version: "ESV",
  },
  {
    id: 1,
    location: "Psalm 139:16",
    text: "Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be.",
    version: "NIV",
  },
  {
    id: 2,
    location: "Joshua 1:9",
    text: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.",
    version: "ESV",
  },
  {
    id: 3,
    location: "Ephesians 6:10",
    text: "Finally, be strong in the Lord and in his mighty power.",
    version: "NIV",
  },
  {
    id: 4,
    location: "Matthew 5:16",
    text: "In the same way, let your light shine before others, so that[a] they may see your good works and give glory to your Father who is in heaven.",
    version: "ESV",
  },
  {
    id: 5,
    location: "John 13:35",
    text: "By this all people will know that you are my disciples, if you have love for one another.",
    version: "ESV",
  },
  {
    id: 6,
    location: "1 Peter 3:15",
    text: "But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.",
    version: "ESV",
  },
  {
    id: 7,
    location: "Deuteronomy 31:8",
    text: "The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
    version: "NIV",
  },
  {
    id: 8,
    location: "1 John 3:23",
    text: "And this is his commandment, that we believe in the name of his Son Jesus Christ and love one another, just as he has commanded us.",
    version: "ESV",
  },
  {
    id: 9,
    location: "Jude 1:24-25",
    text: "To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy — to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen.",
    version: "NIV",
  },
];
const chapter7Songs = [
  {
    title: "In The Sweet Bye and Bye",
    artist: "Johnny Cash",
    url: "https://www.youtube.com/watch?v=8lBCgwmBVTQ",
    embed: `https://www.youtube.com/embed/8lBCgwmBVTQ?si=y-qKBluMG7j8IvRn`,
  },
];

export const chapters = [
  {
    id: 1,
    hash: "chapter1",
    title: "Chapter 1",
    name: `These Shoes Don't Fit`,
    description: "This is chapter 1",
    content: {
      verses: chapter1Verses,
      books: chapter1Books,
      songs: chapter1Songs,
    },
  },
  {
    id: 2,
    hash: "chapter2",
    title: "Chapter 2",
    name: "Life Is Hard",
    description: "This is chapter 2",
    content: {
      verses: chapter2Verses,
      songs: chapter2Songs,
    },
  },
  {
    id: 3,
    hash: "chapter3",
    title: "Chapter 3",
    name: "Final Common Pathway",
    description: "This is chapter 3",
    content: {
      verses: chapter3Verses,
    },
  },
  {
    id: 4,
    hash: "chapter4",
    title: "Chapter 4",
    name: `Don't Lose Heart`,
    description: "This is chapter 4",
    content: {
      verses: chapter4Verses,
    },
  },
  {
    id: 5,
    hash: "chapter5",
    title: "Chapter 5",
    name: "Get Ready Pilgrim",
    description: "This is chapter 5",
    content: {
      verses: chapter5Verses,
      songs: chapter5Songs,
    },
  },
  {
    id: 6,
    hash: "chapter6",
    title: "Chapter 6",
    name: "The Best is Yet to Come",
    description: "This is chapter 6",
    content: {
      verses: chapter6Verses,
    },
  },
  {
    id: 7,
    hash: "chapter7",
    title: "Chapter 7",
    name: "Be Strong and Courageous",
    description: "This is chapter 7",
    content: {
      verses: chapter7Verses,
      songs: chapter7Songs,
    },
  },
];
