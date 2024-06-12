// Eccl 12:1-7 ESV
// Prov 21:29 NLT
// Prov 16:21 ESV
const agingVerses = [
  {
    id: 0,
    location: "Ecclesiasates 12:1-7",
    text: "Remember also your Creator in the days of your youth, before the evil days come and the years draw near of which you will say, 'I have no pleasure in them'; before the sun and the light and the moon and the stars are darkened and the clouds return after the rain, in the day when the keepers of the house tremble, and the strong men are bent, and the grinders cease because they are few, and those who look through the windows are dimmed, and the doors on the street are shut—when the sound of the grinding is low, and one rises up at the sound of a bird, and all the daughters of song are brought low— they are afraid also of what is high, and terrors are in the way; the almond tree blossoms, the grasshopper drags itself along, and desire fails, because man is going to his eternal home, and the mourners go about the streets— before the silver cord is snapped, or the golden bowl is broken, or the pitcher is shattered at the fountain, or the wheel broken at the cistern, and the dust returns to the earth as it was, and the spirit returns to God who gave it.",
    version: "ESV"
  },
  {
    id: 1,
    location: "Proverbs 20:29",
    text: "The glory of the young is their strength; the gray hair of experience is the splendor of the old.",
    version: "NLT"
  },
  {
    id: 2,
    location: "Proverbs 16:21",
    text: "The wise are known for their understanding, and pleasant words are persuasive.",
    version: "ESV"
  }
]
const agingBooks = [
  {
    id: 0,
    title: "Being Mortal",
    tagline: "Medicine and What Matters in the End",
    author: "Atul Gawande",
    url: "https://atulgawande.com/book/being-mortal/"
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
    url: "https://www.crossway.org/books/finishing-our-course-with-joy-tpb/"
  }
]

// DEATH
// Eccl 3:1-2 ESV
// Heb 9:27-28 ESV
const deathVerses = [
  {
    id: 0,
    location: "Ecclesiastes 3:1-2",
    text: "For everything there is a season, and a time for every matter under heaven: a time to be born, and a time to die.",
    version: "ESV"
  },
  {
    id: 1,
    location: "Hebrews 9:27-28",
    text: "And just as it is appointed for man to die once, and after that comes judgment, so Christ, having been offered once to bear the sins of many, will appear a second time, not to deal with sin but to save those who are eagerly waiting for him.",
    version: "ESV"
  }
]
const deathPoems = [
  {
    id: 0,
    author: 'John Donne',
    title: 'Death Be Not Proud',
    verses: [
      `Death, be not proud, though some have called thee 
      Mighty and dreadful, for thou art not so, 
      For those whom thou think’st thou dost overthrow, 
      Die not, poor Death, nor yet canst thou kill me. 
      From rest and sleep, which but thy pictures be, 
      Much pleasure; then from thee, much more must flow, 
      And soonest our best men with thee do go, 
      Rest of their bones, and soul’s delivery. 
      Thou art slave to Fate, Chance, kings, and desperate men, 
      And dost with poison, war, and sickness dwell, 
      And poppy or charms can make us sleep as well, 
      And better than thy stroke; why swell’st thou then? 
      One short sleep past, we wake eternally, 
      And death shall be no more; Death, thou shalt die.`
    ]
  }
]

// HEAVEN
// John 14:1-3 ESV
// 1 Corinthians 15:53-55 ESV
// 2 Corinthians 5:1-10 ESV
const heavenVerses = [
  {
    id: 0,
    location: "John 14:1-3",
    text: "Let not your hearts be troubled. Believe in God; believe also in me. In my Father's house are many rooms. If it were not so, would I have told you that I go to prepare a place for you? And if I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also.",
    version: "ESV"
  },
  {
    id: 1,
    location: "1 Corinthians 15:53-55",
    text: "For this perishable body must put on the imperishable, and this mortal body must put on immortality. When the perishable puts on the imperishable, and the mortal puts on immortality, then shall come to pass the saying that is written: 'Death is swallowed up in victory.' 'O death, where is your victory? O death, where is your sting?'",
    version: "ESV"
  },
  {
    id: 2,
    location: "2 Corinthians 5:1-10",
    text: "For we know that if the tent that is our earthly home is destroyed, we have a building from God, a house not made with hands, eternal in the heavens. For in this tent we groan, longing to put on our heavenly dwelling, if indeed by putting it on we may not be found naked. For while we are still in this tent, we groan, being burdened—not that we would be unclothed, but that we would be further clothed, so that what is mortal may be swallowed up by life. He who has prepared us for this very thing is God, who has given us the Spirit as a guarantee. So we are always of good courage. We know that while we are at home in the body we are away from the Lord, for we walk by faith, not by sight. Yes, we are of good courage, and we would rather be away from the body and at home with the Lord. So whether we are at home or away, we make it our aim to please him. For we must all appear before the judgment seat of Christ, so that each one may receive what is due for what he has done in the body, whether good or evil.",
    version: "ESV"
  }
]
const heavenBooks = [
  {
    id: 0,
    author: 'Randy Alcorn',
    title: 'Heaven',
    tagline: 'A Comprehensive Guide to Everything the Bible Says About Our Eternal Home',
    url: 'https://www.tyndale.com/p/heaven/9780842379427'
  },
  {
    id: 1,
    author: 'Randy Alcorn',
    title: 'The Promise of Heaven',
    tagline: 'Reflections on Our Eternal Home',
    url: 'https://www.thriftbooks.com/w/the-promise-of-heaven-reflections-on-our-eternal-home_randy-alcorn/359964/'
  },
  {
    id: 2,
    author: 'Catherine L. Davis',
    title: 'A Place Called Heaven',
    tagline: 'Count Your Blessings',
    url: 'https://shop.ingramspark.com/b/084?C3ANcTcQ7vEEeR8FFku5Fk6TsxfsKTv0yNLNsXKBNbK'
  },
  {
    id: 3,
    author: 'Anne Graham Lotz',
    title: "Heaven",
    tagline: "My Father's House",
    url: 'https://www.annegrahamlotz.org/products/heaven-my-fathers-house-paperback/'
  },
  {
    id: 4,
    author: 'Erwin W. Lutzer',
    title: 'One Minute After You Die',
    tagline: null,
    url: 'https://www.moodypublishers.com/one-minute-after-you-die/'
  },
]
const heavenPoems = [
  {
    id: 0,
    author: 'Caleb Davis Bradlee',
    title: 'Eternal Life',
    verses: [
      `We shall live again! how true
      That all will live once more!
      And in a world most grandly new
      Will worship and adore.`, 
      `Life again! yes, with God, the King,
      Who takes us from this earth
      That he may greater blessings bring
      At our eternal birth.`, 
      `Live again! yes, with Christ, so dear,
      Who taught the splendid truth,
      And made the fact so very clear,
      Of an immortal youth.`, 
      `Live again! yes, with dear ones gone
      So far from mortal sight!
      Live where all hearts shall be like one,
      Where all is blessed light.`, 
      `Thanks, God, for this holy peace,
      This greatest gift of thine,
      That whilst our earthly part must cease,
      As angels we shall shine.`
    ]
  },
  {
    id: 1,
    author: 'James Montgomery',
    title: 'If God',
    verses: [
      `If God hath made this world so fair,
      Where sin and death abound,
      How beautiful beyond compare
      Will paradise be found!`
    ]
  },
  {
    id: 2,
    author: 'Greta Zwaan',
    title: 'Preparing For Heaven',
    verses: [
      `The knob on the door to heaven extends to one side alone,
      It's a place of great exaltation with God seated on the throne.
      No need for a knob on the inside, it's a home where all long to go,
      Where great joys are never ending and praises ring to and fro.`,
      `The key that lets one enter cannot be bought with gold,
      No funds or jewels or empires; this key will not be sold.
      No power, prestige or position, not titles or honour or fame,
      It's the wonderful gift of salvation, purchased with love in Christ's name.`,
      `It's the sacrifice humans can't offer, no commitment we make can atone;
      For sin has tainted our image, it's Jesus whose holy, alone.
      And through God's great act of mercy, forgiving our failures and sin,
      Can we pass through that door of salvation,
      Through Christ we're allowed to come in.`,
      `Be assured there's no other entrance, though many have tried on their own,
      The efforts of man are all futile, as Scripture so clearly has shown.
      The call to the lost is, "Come hither, earthly belongings are vain,"
      Rise to the plea that's extended, it may not be offered again.`,
      `Many are those who will falter, leaving their fate to the last,
      Forgetting that time's of the essence, the dye to their future is cast.
      Show God that you are responding, cast aside all your earthly cares,
      Prepare for your journey to heaven where all of Christ's blessings you'll share.`
    ]
  }
]

// SUFFERING
// Psalm 34:18 ESV
// Psalm 119:71 ESV
// Psalm 119:75 ESV
// Isaiah 43:1b-3a ESV
// John 16:33 ESV
// Romans 8:18 ESV
// 2 Cor 4:16-17 ESV
// 2 Cor 5:4 ESV
const sufferingVerses = [
  {
    id: 0,
    location: "Psalm 34:18",
    text: "The LORD is near to the brokenhearted and saves the crushed in spirit.",
    version: "ESV"
  },
  {
    id: 1,
    location: "Psalm 119:71",
    text: "It is good for me that I was afflicted, that I might learn your statutes.",
    version: "ESV"
  },
  {
    id: 2,
    location: "Psalm 119:75",
    text: "I know, O LORD, that your rules are righteous, and that in faithfulness you have afflicted me.",
    version: "ESV"
  },
  {
    id: 3,
    location: "Isaiah 43:1b-3a",
    text: "Fear not, for I have redeemed you; I have called you by name, you are mine. When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you. For I am the LORD your God, the Holy One of Israel, your Savior.",
    version: "ESV"
  },
  {
    id: 4,
    location: "John 16:33",
    text: "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
    version: "ESV"
  },
  {
    id: 5,
    location: "Romans 8:18",
    text: "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.",
    version: "ESV"
  },
  {
    id: 6,
    location: "2 Corinthians 4:16-18",
    text: "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.",
    version: "ESV"
  },
  {
    id: 7,
    location: "2 Corinthians 5:4",
    text: "For while we are still in this tent, we groan, being burdened — not that we would be unclothed, but that we would be further clothed, so that what is mortal may be swallowed up by life.",
    version: "ESV"
  }

]
const sufferingBooks = [
  {
    id: 0,
    author: 'C.S. Lewis',
    title: 'The Problem of Pain',
    tagline: null,
    url: 'https://www.cslewis.com/the-problem-of-pain/'
  },
  {
    id: 1,
    author: 'Philip Yancey',
    title: 'Where is God when it Hurts',
    tagline: null,
    url: 'https://philipyancey.com/where-is-god-when-it-hurts'
  },
  {
    id: 2,
    author: 'Tim Keller',
    title: 'Walking with God', 
    tagline: 'Through Pain and Suffering',
    url: 'https://timothykeller.com/books/walking-with-god-through-pain-and-suffering'
  },
  {
    id: 3,
    author: 'Diane Langberg',
    title: 'Suffering and the Heart of God',
    tagline: 'How Trauma Destroys and Christ Restores',
    url: 'https://www.dianelangberg.com/2017/10/suffering-and-the-heart-of-god/'
  },
  {
    id: 4,
    author: 'Michael Card',
    title: 'A Sacred Sorrow',
    tagline: 'Reaching Out to God in the Lost Language of Lament',
    url: 'http://store.michaelcard.com/asacredsorrow-book.aspx'
  },
  {
    id: 5,
    author: 'Mark Vroegop',
    title: 'Dark Clouds, Deep Mercies',
    tagline: 'Discovering the Grace of Lament',
    url: 'https://www.crossway.org/books/dark-clouds-deep-mercy-tpb/'
  },
  {
    id: 6,
    author: 'N.T. Wright',
    title: 'Evil and the Justice of God',
    tagline: null,
    url: 'https://www.ivpress.com/evil-and-the-justice-of-god'
  },
  {
    id: 7,
    author: 'Nik Ripken',
    title: 'The Insanity of God',
    tagline: 'A True Story of Faith Resurrected',
    url: 'https://www.nikripken.com/insanity-of-god/'
  },
  {
    id: 8,
    author: 'Philip Yancey',
    title: 'Disappointment with God',
    tagline: 'Three Questions No One Asks Aloud',
    url: 'https://philipyancey.com/disappointment-with-god'
  },

]
const sufferingPoems = [
  {
    id: 0,
    author: 'Uknown Author',
    title: 'Footprints in the Sand',
    verses: [
      `One night I dreamed a dream. I was walking along the beach with my Lord. Across the dark sky flashed scenes from my life. For each scene, I noticed two sets of footprints in the sand, one belonging to me and one to my Lord.`,
      `When the last scene of my life shot before me I looked back at the footprints in the sand. There was only one set of footprints. I realized that this was at the lowest and saddest times of my life. This always bothered me and I questioned the Lord about my dilemma.`,
      `"Lord, You told me when I decided to follow You, You would walk and talk with me all the way. But I'm aware that during the most troublesome times of my life there is only one set of footprints. I just don't understand why, when I need You most, You leave me."`,
      `He whispered, "My precious child, I love you and will never leave you, never, ever, during your trials and testings. When you saw only one set of footprints, it was then that I carried you."`
    ]
  },
]

// TRIALS
// Job 5:6-7 ESV
// Psalm 34:19 ESV
// Zech 13:9 ESV
// Matt 5:10-12 ESV
// Matt 6:34 NIV
// John 16:33 ESV
// Acts 14:22 ESV
// 2 Tim 3:12 ESV
// 1 Pet 1:3-9 ESV
// 1 Pet 4:12-14 ESV
const trialsVerses = [
  {
    id: 0,
    location: "Job 5:6-7",
    text: "For affliction does not come from the dust, nor does trouble sprout from the ground, but man is born to trouble as the sparks fly upward.",
    version: "ESV"
  },
  {
    id: 1,
    location: "Psalm 34:19",
    text: "Many are the afflictions of the righteous, but the LORD delivers him out of them all.",
    version: "ESV"
  },
  {
    id: 2,
    location: "Zechariah 13:9",
    text: "And I will put this third into the fire, and refine them as one refines silver, and test them as gold is tested. They will call upon my name, and I will answer them. I will say, 'They are my people'; and they will say, 'The LORD is my God.'",
    version: "ESV"
  },
  {
    id: 3,
    location: "Matthew 5:10-12",
    text: "Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven. Blessed are you when others revile you and persecute you and utter all kinds of evil against you falsely on my account. Rejoice and be glad, for your reward is great in heaven, for so they persecuted the prophets who were before you.",
    version: "ESV"
  },
  {
    id: 4,
    location: "Matthew 6:34",
    text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    version: "NIV"
  },
  {
    id: 5,
    location: "John 16:33",
    text: "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.",
    version: "ESV"
  },
  {
    id: 6,
    location: "Acts 14:22",
    text: "Strengthening the souls of the disciples, encouraging them to continue in the faith, and saying that through many tribulations we must enter the kingdom of God.",
    version: "ESV"
  },
  {
    id: 7,
    location: "2 Timothy 3:12",
    text: "Indeed, all who desire to live a godly life in Christ Jesus will be persecuted.",
    version: "ESV"
  },
  {
    id: 8,
    location: "1 Peter 1:3-9",
    text: "Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead, to an inheritance that is imperishable, undefiled, and unfading, kept in heaven for you, who by God's power are being guarded through faith for a salvation ready to be revealed in the last time. In this you rejoice, though now for a little while, if necessary, you have been grieved by various trials, so that the tested genuineness of your faith — more precious than gold that perishes though it is tested by fire — may be found to result in praise and glory and honor at the revelation of Jesus Christ. Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory, obtaining the outcome of your faith, the salvation of your souls.",
    version: "ESV"
  },
  {
    id: 9,
    location: "1 Peter 4:12-14",
    text: "Beloved, do not be surprised at the fiery trial when it comes upon you to test you, as though something strange were happening to you. But rejoice insofar as you share Christ's sufferings, that you may also rejoice and be glad when his glory is revealed. If you are insulted for the name of Christ, you are blessed, because the Spirit of glory and of God rests upon you.",
    version: "ESV"
  }
]

// SCRIPTURE
// John 17:17 NIV
// Jer 23:29 NIV
// 1 Tim 3:16-17 NIV
// Hebrews 4:12 NIV
const scriptureVerses = [
  {
    id: 0,
    location: "John 17:17",
    text: "Sanctify them by the truth; your word is truth.",
    version: "NIV"
  },
  {
    id: 1,
    location: "Jeremiah 23:29",
    text: "Is not my word like fire, declares the LORD, and like a hammer that breaks a rock in pieces?",
    version: "NIV"
  },
  {
    id: 2,
    location: "1 Timothy 3:16-17",
    text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.",
    version: "NIV"
  },
  {
    id: 3,
    location: "Hebrews 4:12",
    text: "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.",
    version: "NIV"
  }
]
const scriptureQuotes = [
  {
    id: 0,
    author: 'Blaise Pascal',
    text: 'Truth is so obscure in these times, and falsehood so established, that, unless we love the truth, we cannot know it.'
  }
]

export const topics = [
  {
    id: 8,
    hash: "aging",
    title: null,
    name: `Aging`,
    description: "This topic is about aging.",
    content: {
      verses: agingVerses,
      books: agingBooks,
    }
  },
  {
    id: 9,
    hash: "death",
    title: null,
    name: 'Death',
    description: 'Topic about death.',
    content: {
      verses: deathVerses,
      poems: deathPoems,
    }
  },
  {
    id: 10,
    hash: "heaven",
    title: null,
    name: 'Heaven',
    description: 'Topic about heaven.',
    content: {
      verses: heavenVerses,
      books: heavenBooks,
      poems: heavenPoems,
    }
  },
  {
    id: 11,
    hash: "suffering",
    title: null,
    name: 'Suffering',
    description: 'Topic about suffering.',
    content: {
      verses: sufferingVerses,
      books: sufferingBooks,
      poems: sufferingPoems,
    }
  },
  {
    id: 12,
    hash: "trials",
    title: null,
    name: 'Trials',
    description: 'Topic about trials.',
    content: {
      verses: trialsVerses,
    }
  },
  {
    id: 13,
    hash: "scripture",
    title: null,
    name: 'Scripture',
    description: 'Topic about scripture.',
    content: {
      verses: scriptureVerses,
      quotes: scriptureQuotes,
    }
  }
]