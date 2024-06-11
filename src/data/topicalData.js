// Eccl 12:1-7 ESV
// Prov 21:29 NLT

import { version } from "react"

// Prov 16:21 ESV
const agingVerses = [

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
const agingSongs = []

// DEATH
// Eccl 3:1-2 ESV
// Heb 9:27-28 ESV
const deathVerses = [
  {
    id: 0,
    reference: "Ecclesiastes 3:1-2",
    text: "For everything there is a season, and a time for every matter under heaven: a time to be born, and a time to die.",
    version: "ESV"
  },
  {
    id: 1,
    reference: "Hebrews 9:27-28",
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
    reference: "John 14:1-3",
    text: "Let not your hearts be troubled. Believe in God; believe also in me. In my Father's house are many rooms. If it were not so, would I have told you that I go to prepare a place for you? And if I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also.",
    version: "ESV"
  },
  {
    id: 1,
    reference: "1 Corinthians 15:53-55",
    text: "For this perishable body must put on the imperishable, and this mortal body must put on immortality. When the perishable puts on the imperishable, and the mortal puts on immortality, then shall come to pass the saying that is written: 'Death is swallowed up in victory.' 'O death, where is your victory? O death, where is your sting?'",
    version: "ESV"
  },
  {
    id: 2,
    reference: "2 Corinthians 5:1-10",
    text: "For we know that if the tent that is our earthly home is destroyed, we have a building from God, a house not made with hands, eternal in the heavens. For in this tent we groan, longing to put on our heavenly dwelling, if indeed by putting it on we may not be found naked. For while we are still in this tent, we groan, being burdened—not that we would be unclothed, but that we would be further clothed, so that what is mortal may be swallowed up by life. He who has prepared us for this very thing is God, who has given us the Spirit as a guarantee. So we are always of good courage. We know that while we are at home in the body we are away from the Lord, for we walk by faith, not by sight. Yes, we are of good courage, and we would rather be away from the body and at home with the Lord. So whether we are at home or away, we make it our aim to please him. For we must all appear before the judgment seat of Christ, so that each one may receive what is due for what he has done in the body, whether good or evil.",
    version: "ESV"
  }
]
const heavenBooks = [
  {
    id: 0,
    author: 'Randy Alcorn',
    title: 'Heaven',
    url: ''
  },
  {
    id: 1,
    author: 'Randy Alcorn',
    title: 'The Promise of Heaven',
    url: ''
  },
  {
    id: 2,
    author: 'Catherine L. Davis',
    title: 'A Place Called Heaven',
    url: ''
  },
  {
    id: 3,
    author: 'Anne Graham Lotz',
    title: "Heaven My Father's House",
    url: ''
  },
  {
    id: 4,
    author: 'Erwin W. Lutzer',
    title: 'One Minute After You Die',
    url: ''
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
const sufferingVerses = []
const sufferingBooks = [
  {
    id: 0,
    author: 'C.S. Lewis',
    title: 'The Problem of Pain',
    tagline: null,
    url: ''
  },
  {
    id: 1,
    author: 'Phillip Yancey',
    title: 'Where is God when it Hurts',
    tagline: null,
    url: ''
  },
  {
    id: 2,
    author: 'Tim Keller',
    title: 'Walking with God Through Pain',
    tagline: null,
    url: ''
  },
  {
    id: 3,
    author: 'Diane Langberg',
    title: 'Suffering and the Heart of God',
    tagline: null,
    url: ''
  },
  {
    id: 4,
    author: 'Michael Card',
    title: 'A Sacred Sorrow',
    tagline: null,
    url: ''
  },
  {
    id: 5,
    author: 'Mark Vroegop',
    title: 'Dark Clouds, Deep Mercies',
    tagline: null,
    url: ''
  },
  {
    id: 6,
    author: 'N.T. Wright',
    title: 'Evil and the Justice of God',
    tagline: null,
    url: ''
  },
  {
    id: 7,
    author: 'Nik Ripken',
    title: 'The Insanity of God',
    tagline: null,
    url: ''
  },
  {
    id: 8,
    author: 'Phillip Yancey',
    title: 'Disappointment with God',
    tagline: null,
    url: ''
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
const trialsVerses = []

// SCRIPTURE
// John 17:17 NIV
// Jer 23:29 NIV
// 1 Tim 3:16-17 NIV
// Hebrews 4:12 NIV
const scriptureVerses = []
const scriptureQuotes = [
  {
    id: 0,
    author: 'Blaise Pascal',
    quote: 'Truth is so obscure in these times, and falsehood so established, that, unless we love the truth, we cannot know it.'
  }
]