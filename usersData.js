const tweets = require('./postsData.js');

const tweetUsers = [
  {
    "user_id": 92484856,
    "user_name": "PIPELINEPETE",
    "user_screen_name": "jocksjig",
    "user_description": "Retired Tradesman and Progressive Anti Conservative!  Musician.",
    "user_location": "Brisbane, Queensland",
    "user_created_at": "2009-11-25 09:19:45"
  },
  {
    "user_id": 775647396,
    "user_name": "Narinder Parmar",
    "user_screen_name": "nparmar1957",
    "user_description": "Life coach & trainer, Motivational speaker, Mater NLP Practitioner, Author, Fellow of Institute of Managers & Leaders(Australia)",
    "user_location": "Wollongong, NSW, AUSTRALIA",
    "user_created_at": "2012-08-23 10:20:40"
  },
  {
    "user_id": 56873,
    "user_name": "Peter Wells",
    "user_screen_name": "peterwells",
    "user_description": "Writes for @theage and @smh on technology and podcasts - works at Swinburne Uni as a Mac Admin - tweets are mine.  peterwells@fairfaxmedia.com.au",
    "user_location": "Melbourne",
    "user_created_at": "2006-12-11 07:38:06"
  },
  {
    "user_id": 908166034045026300,
    "user_name": "The Realist",
    "user_screen_name": "therealist822",
    "user_description": "Calls it as I see it. Anti PC, SJW and VS. If you want to be warm and fuzzy, grab a blanket and a strong Aphrodisiac then lock yourself in your mothers basement",
    "user_location": "",
    "user_created_at": "2017-09-14 03:10:30"
  },
  {
    "user_id": 526007385,
    "user_name": "Inquirer Business",
    "user_screen_name": "InquirerBiz",
    "user_description": "The official Twitter account of the Inquirer Group's business news team.",
    "user_location": "Philippines",
    "user_created_at": "2012-03-16 03:51:59"
  },
  {
    "user_id": 790915617482240000,
    "user_name": "Adal News",
    "user_screen_name": "adalnewspk",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2016-10-25 13:59:12"
  },
  {
    "user_id": 51002583,
    "user_name": "Matthew Rimmer",
    "user_screen_name": "DrRimmer",
    "user_description": "Professor of IP & Innovation Law @QUTLaw @QUT_IP @QUTDMRC @HealthLawQUT #3DPrinting #Copyright #Patent #TM #Access2meds #Plainpacks #Climate #IndigenousIP #TPP",
    "user_location": "Brisbane, Queensland",
    "user_created_at": "2009-06-26 10:17:54"
  },
  {
    "user_id": 2271271897,
    "user_name": "Jaz Jubilee",
    "user_screen_name": "jazjubilee",
    "user_description": "She/Them. 23, Studying to Teach ESL💖 Currently watching: Survivor EoE, BBCAN7, RPDR S11, Riverdale, Brooklyn 99, Superstore, One Day At A Time 😍",
    "user_location": "Australia",
    "user_created_at": "2014-01-01 06:39:51"
  },
  {
    "user_id": 1740060962,
    "user_name": "Moved",
    "user_screen_name": "Topphnygn",
    "user_description": "Moved",
    "user_location": "",
    "user_created_at": "2013-09-07 03:29:26"
  },
  {
    "user_id": 279764229,
    "user_name": "Nevada News",
    "user_screen_name": "Nevada",
    "user_description": "Latest news for Nevada.",
    "user_location": "Nevada, USA",
    "user_created_at": "2011-04-10 00:00:17"
  },
  {
    "user_id": 1721130294,
    "user_name": "Gary Fallon",
    "user_screen_name": "GaryFallon2",
    "user_description": "Against all Moronic Right Wing politicians. Inveterate recipe creator. Former advertising and marketing specialist. Frustrated Metro Trains commuter.",
    "user_location": "Melbourne Australia",
    "user_created_at": "2013-09-02 04:27:56"
  },
  {
    "user_id": 3045738188,
    "user_name": "Ice Maiden",
    "user_screen_name": "virginsnowbunny",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2015-02-27 07:21:25"
  },
  {
    "user_id": 1117453962888740900,
    "user_name": "Web Design Company",
    "user_screen_name": "WebDesignerInc",
    "user_description": "Modern web design services designed to grow your business. Our web design team creates websites with your business in mind. Contact us: https://t.co/qE5l1XwbKy",
    "user_location": "United States",
    "user_created_at": "2019-04-14 15:46:00"
  },
  {
    "user_id": 980977137040613400,
    "user_name": "Jo han",
    "user_screen_name": "Johanseller29",
    "user_description": "Good at selling",
    "user_location": "California,orlando",
    "user_created_at": "2018-04-03 01:15:49"
  },
  {
    "user_id": 58164856,
    "user_name": "Martin Boers",
    "user_screen_name": "MartinBoers",
    "user_description": "Not followed by anyone you’re following",
    "user_location": "Lower Saxony, Germany",
    "user_created_at": "2009-07-19 09:38:25"
  },
  {
    "user_id": 100185915,
    "user_name": "Rai Radio3",
    "user_screen_name": "Radio3tweet",
    "user_description": "Attualità, letteratura, cinema, musica, teatro, viaggi: alla radio e sui social. Siamo anche su Facebook, qui https://t.co/aAceIRy09u",
    "user_location": "Italy",
    "user_created_at": "2009-12-29 09:40:28"
  },
  {
    "user_id": 65109514,
    "user_name": "Global Issues Web",
    "user_screen_name": "globalissuesweb",
    "user_description": "Forum on Global Issues, Geography,  and Culture. In  the interests of economic justice, sustainable development and universal human welfare.",
    "user_location": "Los Angeles, California, USA",
    "user_created_at": "2009-08-12 18:07:19"
  },
  {
    "user_id": 228310395,
    "user_name": "EG YIK FAN 吴益帆",
    "user_screen_name": "egyikfan",
    "user_description": "Jefferson Fellow, @EastWestCenter. Editor, Mediacorp Singapore.",
    "user_location": "Singapore",
    "user_created_at": "2010-12-19 10:21:05"
  },
  {
    "user_id": 1118532228886040600,
    "user_name": "markasher224",
    "user_screen_name": "markasher224",
    "user_description": "game,movie,beer,traking,brive",
    "user_location": "",
    "user_created_at": "2019-04-17 15:10:39"
  },
  {
    "user_id": 961279209242021900,
    "user_name": "Aidan Murray",
    "user_screen_name": "amurraysdb",
    "user_description": "Fr. Aidan  Salesian...pro life... mad on orienteering.",
    "user_location": "Farnborough, South East",
    "user_created_at": "2018-02-07 16:43:17"
  },
  {
    "user_id": 267570919,
    "user_name": "Wayne Swan",
    "user_screen_name": "SwannyQLD",
    "user_description": "Wayne Swan is the National President of the ALP and the former Labor Member for Lilley. He is also the former Deputy Prime Minister and Treasurer of Australia",
    "user_location": "Brisbane",
    "user_created_at": "2011-03-17 04:55:00"
  },
  {
    "user_id": 133378751,
    "user_name": "iBOLD BREAKING NEWS",
    "user_screen_name": "iBoldNews",
    "user_description": "Live World News tweets 24/7. Follow us for updates every second of the day. 👉 https://t.co/pYiEl7qDdy #BreakingNews 👉 https://t.co/Arb8aBjKCB 👍🏼🌎",
    "user_location": "New York",
    "user_created_at": "2010-04-15 16:42:04"
  },
  {
    "user_id": 2944314258,
    "user_name": "Tony Linus Tigerrr",
    "user_screen_name": "Tigermanimal",
    "user_description": "Love talking movies",
    "user_location": "",
    "user_created_at": "2014-12-26 22:54:54"
  },
  {
    "user_id": 378420614,
    "user_name": "Sandra K Eckersley🔹",
    "user_screen_name": "SandraEckersley",
    "user_description": "Writer, Critic, Ideas Broker & Devil's Advocate. Committed to exposing hypocrisy - no exceptions. Not afraid to speak truth to power. Supporting FAIRNESS.",
    "user_location": "Sydney AUSTRALIA",
    "user_created_at": "2011-09-23 05:17:47"
  },
  {
    "user_id": 1005635958652403700,
    "user_name": "FullMagazine❌",
    "user_screen_name": "FullMagazineUS",
    "user_description": "Pro-Trump News Aggregator. The latest headlines from non-MSM sources. Real-time updates. No advertisements, help us spread the word! God bless the US! #MAGA",
    "user_location": "Texas, USA",
    "user_created_at": "2018-06-10 02:21:11"
  },
  {
    "user_id": 22353877,
    "user_name": "Maryann Wright",
    "user_screen_name": "mmaryannwright",
    "user_description": "Creative Entrepreneur. Artist. Co-founder: Women in Theatre and Screen, Aus. Director: The Wright Publicity. Artistic Director: Wagner Wright Productions. 🌈",
    "user_location": "London, England",
    "user_created_at": "2009-03-01 11:20:07"
  },
  {
    "user_id": 118099082,
    "user_name": "michaelangelo",
    "user_screen_name": "mr_menagerie",
    "user_description": "Stealing tweets and reclaiming them as my own since 2008",
    "user_location": "Depends on the day",
    "user_created_at": "2010-02-27 16:02:53"
  },
  {
    "user_id": 588261604,
    "user_name": "Bloomberg Asia",
    "user_screen_name": "BloombergAsia",
    "user_description": "The official Twitter account for Bloomberg in Asia, bringing you the top stories in business from the region and around the world.",
    "user_location": "",
    "user_created_at": "2012-05-23 12:43:25"
  },
  {
    "user_id": 889926294,
    "user_name": "💧sipawe",
    "user_screen_name": "sipawe",
    "user_description": "One earth. Don't wreck it. Time is up.\nNo rumpa; no dum.",
    "user_location": "",
    "user_created_at": "2012-10-18 23:25:25"
  },
  {
    "user_id": 889073819796684800,
    "user_name": "Freya",
    "user_screen_name": "freyazelie",
    "user_description": "horror & tea & absurdism & #metoo & #itsoknottobeok & art & chocolate",
    "user_location": "Sydney, New South Wales",
    "user_created_at": "2017-07-23 10:44:51"
  },
  {
    "user_id": 926255724610670600,
    "user_name": "Environment PHAA",
    "user_screen_name": "PHAA_Eco",
    "user_description": "Public Health Association Australia, #Ecology and #Environment SIG tweets about #climatechange #environmentalhealth #publichealth #sdoh",
    "user_location": "Australia",
    "user_created_at": "2017-11-03 01:12:28"
  },
  {
    "user_id": 2426661938,
    "user_name": "Son Of Nel",
    "user_screen_name": "1wizardiwuz",
    "user_description": "Extremely right wing, extremely conservative, proudly an atheist, 100% against Islam, 100% for America as our founding fathers intended it to be.",
    "user_location": "U.S.A.",
    "user_created_at": "2014-04-04 04:34:55"
  },
  {
    "user_id": 958842956,
    "user_name": "Miro Jurcevic",
    "user_screen_name": "mirojurcevic",
    "user_description": "Studies @Sydney_Uni ... Cogitátio Scientiam, Researcher, Disability Advocate, Human Rights, Sustainable living, Patient safety, Blockchain, Open Medical API",
    "user_location": "Sydney, Australia",
    "user_created_at": "2012-11-19 23:07:41"
  },
  {
    "user_id": 952866654232379400,
    "user_name": "Brought to You",
    "user_screen_name": "Brought_to_You",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2018-01-15 11:34:48"
  },
  {
    "user_id": 1315921093,
    "user_name": "Water Witch 💧🌏🌲",
    "user_screen_name": "MSMWatchdog2013",
    "user_description": "Fact checking is everybody's business",
    "user_location": "Australia",
    "user_created_at": "2013-03-30 06:48:17"
  },
  {
    "user_id": 761808029352390700,
    "user_name": "Social Brief Info",
    "user_screen_name": "etdbrief_ro_1",
    "user_description": "Web Socializing. This is unofficial profile, but role account; we are spreading the news in the World.",
    "user_location": "Romania",
    "user_created_at": "2016-08-06 06:16:02"
  },
  {
    "user_id": 769802145726132200,
    "user_name": "Iain Lees",
    "user_screen_name": "eliesian",
    "user_description": "🇬🇧🇦🇺🇳🇿🇨🇦🇺🇸🇫🇰🇬🇮🇻🇬🇮🇴🇨🇰🇰🇾🇲🇸🇵🇳🇸🇭🇹🇨🇭🇰🇦🇬🇧🇸🇧🇩🇧🇧🇧🇿🇧🇼🇧🇳🇨🇲🇨🇾🇩🇲🇫🇯🇬🇭🇬🇩🇬🇾🇮🇳🇯🇲🇰🇪🇰🇮🇱🇸🇲🇼🇲🇾🇲🇻🇲🇹🇲🇺🇫🇲🇲🇿🇳🇦🇳🇷🇳🇬🇵🇰🇵🇬🇷🇼🇼🇸🇸🇨🇸🇱🇸🇬🇸🇧🇿🇦🇱🇰🇰🇳🇱🇨🇻🇨🇸🇿🇹🇿🇹🇴🇹🇹🇹🇻🇺🇬🇻🇺🇿🇲🇿🇼🇯🇵🇮🇸🇳🇴🇸🇪🇫🇮🇩🇰🇵🇱🇵🇹🇮🇪🇳🇱🇮🇱🇶🇦🇦🇶",
    "user_location": "England, United Kingdom",
    "user_created_at": "2016-08-28 07:41:48"
  },
  {
    "user_id": 956531772602376200,
    "user_name": "NY Today",
    "user_screen_name": "NYTodayNews",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2018-01-25 14:18:40"
  },
  {
    "user_id": 17461068,
    "user_name": "Tim Sheedy",
    "user_screen_name": "timbo2002",
    "user_description": "Helping technology & business leaders drive great digital customer & employee experiences. Also a big rugby fan (Waratahs) & football (Wolverhampton Wanderers)",
    "user_location": "Sydney, Australia",
    "user_created_at": "2008-11-18 07:37:22"
  },
  {
    "user_id": 92484856,
    "user_name": "PIPELINEPETE",
    "user_screen_name": "jocksjig",
    "user_description": "Retired Tradesman and Progressive Anti Conservative!  Musician.",
    "user_location": "Brisbane, Queensland",
    "user_created_at": "2009-11-25 09:19:45"
  },
  {
    "user_id": 1284923442,
    "user_name": "💦Graeme #ILikeLabor",
    "user_screen_name": "graemed12001",
    "user_description": "Child of the 60's. Eclectic as hell. Carlton tragic, Grey Nomad. Wondering why the world is going mad. Detest neoliberalism, LNP and climate change denial",
    "user_location": "",
    "user_created_at": "2013-03-21 03:19:33"
  },
  {
    "user_id": 973161381372440600,
    "user_name": "💧nick168",
    "user_screen_name": "njm3864",
    "user_description": "Fly fisher and social optimist. I expect more of our LW pollies, less of our RW pollies & nothing but propaganda from Murdoch.",
    "user_location": "Lindisfarne, Tasmania",
    "user_created_at": "2018-03-12 11:38:48"
  },
  {
    "user_id": 1612535575,
    "user_name": "Charlotte Greenfield",
    "user_screen_name": "char_greenfield",
    "user_description": "Correspondent for @Reuters in New Zealand via Jakarta & NYC \nColumbia Jschool Grad & Stabile Investigative Fellow '14 https://t.co/Tqkn8UDdDp",
    "user_location": "",
    "user_created_at": "2013-07-22 10:16:43"
  },
  {
    "user_id": 356017534,
    "user_name": "Tom Westbrook",
    "user_screen_name": "TSWestbrook",
    "user_description": "Journalist @Reuters. e: tom.westbrook@tr.com",
    "user_location": "Sydney",
    "user_created_at": "2011-08-16 06:40:26"
  },
  {
    "user_id": 55355654,
    "user_name": "ThinkProgress",
    "user_screen_name": "thinkprogress",
    "user_description": "Moving news forward since 2005. general@thinkprogress.org",
    "user_location": "Washington, D.C.",
    "user_created_at": "2009-07-09 20:42:08"
  },
  {
    "user_id": 267570919,
    "user_name": "Wayne Swan",
    "user_screen_name": "SwannyQLD",
    "user_description": "Wayne Swan is the National President of the ALP and the former Labor Member for Lilley. He is also the former Deputy Prime Minister and Treasurer of Australia",
    "user_location": "Brisbane",
    "user_created_at": "2011-03-17 04:55:00"
  },
  {
    "user_id": 86030794,
    "user_name": "Annabelle Lukin",
    "user_screen_name": "annabellelukin",
    "user_description": "A/Prof in Linguistics, at Macquarie University. Author of War and its Ideologies https://t.co/uZCBZyc1DG",
    "user_location": "Sydney, Australia",
    "user_created_at": "2009-10-29 09:43:03"
  },
  {
    "user_id": 2323102484,
    "user_name": "Earthquack",
    "user_screen_name": "Triton214",
    "user_description": "Ecological Sustainability Climate Forests Biodiversity Renewables Population  Eco-Geo-Socio-Political events/trends which impact on biosphere health.",
    "user_location": "New South Wales, Australia",
    "user_created_at": "2014-02-02 02:05:13"
  },
  {
    "user_id": 41085467,
    "user_name": "TODAY",
    "user_screen_name": "TODAYonline",
    "user_description": "Get the latest local and international news from TODAY.  https://t.co/Ko7sTQBm98",
    "user_location": "Singapore",
    "user_created_at": "2009-05-19 09:29:57"
  },
  {
    "user_id": 881381075515195400,
    "user_name": "GTPA",
    "user_screen_name": "GTPAlliance",
    "user_description": "Global network for the development of international standards to drive and facilitate international trade.",
    "user_location": "Australia",
    "user_created_at": "2017-07-02 05:16:38"
  },
  {
    "user_id": 536226482,
    "user_name": "Violeta Rosioru",
    "user_screen_name": "rosioruvioleta",
    "user_description": "Music Promoter",
    "user_location": "New York",
    "user_created_at": "2012-03-25 11:34:23"
  },
  {
    "user_id": 56648358,
    "user_name": "PlanetSKI Snow News",
    "user_screen_name": "planetski",
    "user_description": "News, photos and videos about the wonderful world of skiing and snowboarding. We love powder, snow, skiing, Xtreme snowsports, ski racing & the mountains...",
    "user_location": "The Mountains",
    "user_created_at": "2009-07-14 08:56:09"
  },
  {
    "user_id": 44144749,
    "user_name": "Dr Helen Maynard-Casely",
    "user_screen_name": "Helen_E_MC",
    "user_description": "Storytelling scientist working at big facilities but distracted by dwarf planets. Work with @WOMBAT_ACNS but tweets own views. Profile pic by @sciencecomic",
    "user_location": "D’harawal country",
    "user_created_at": "2009-06-02 15:59:45"
  },
  {
    "user_id": 1015946207934459900,
    "user_name": "Funding Hero",
    "user_screen_name": "funding_hero",
    "user_description": "Reach your financial goals with help from Funding Hero, your source for all financial services",
    "user_location": "",
    "user_created_at": "2018-07-08 13:10:26"
  },
  {
    "user_id": 18133725,
    "user_name": "Graham Wallington",
    "user_screen_name": "graham_",
    "user_description": "I live to broadcast LIVE. Very focused on creating immersive experiences. Family is everything - beautiful wife, 2 cute daughters and a 'cool' son.",
    "user_location": "Johannesburg, South Africa",
    "user_created_at": "2008-12-15 09:05:54"
  },
  {
    "user_id": 990868256360751100,
    "user_name": "Lean Consultancy",
    "user_screen_name": "Growth_Lean",
    "user_description": "Growing your business at the expense of your competitors. Legal Services – Financial Services – Manufacturing.",
    "user_location": "Europe",
    "user_created_at": "2018-04-30 08:19:36"
  },
  {
    "user_id": 18965916,
    "user_name": "Hugh Riminton",
    "user_screen_name": "hughriminton",
    "user_description": "Hack. National Affairs Editor @10NewsFirst. Presenter @radionational. ”The Professor & The Hack” podcast (with PVO) Chair https://t.co/iV9xkwScLf",
    "user_location": "Sydney, Australia",
    "user_created_at": "2009-01-14 03:47:23"
  },
  {
    "user_id": 624496137,
    "user_name": "Jessica",
    "user_screen_name": "j_l_t_f",
    "user_description": "Booknerd, true crime tragic, keen whinger, gardening enthusiast.",
    "user_location": "Inner North",
    "user_created_at": "2012-07-02 06:16:21"
  },
  {
    "user_id": 322291006,
    "user_name": "Movie Buff",
    "user_screen_name": "TheMovieTheater",
    "user_description": "Big screens..showing the moo-ving pictures..Who is the next big winner?",
    "user_location": "On the Corner",
    "user_created_at": "2011-06-22 23:10:01"
  },
  {
    "user_id": 900062657377644500,
    "user_name": "Organic Agriculture Association",
    "user_screen_name": "uXndQUKIN6NqhmL",
    "user_description": "The OAA is a group of experts who specialize in Agriculture and also farmers who prefer to grow organic crops without the use of chemical pesticides.",
    "user_location": "",
    "user_created_at": "2017-08-22 18:30:34"
  },
  {
    "user_id": 827800041066623000,
    "user_name": "Migrant Nation Party",
    "user_screen_name": "MigrantPartyAu",
    "user_description": "We are the party of inclusion, fairness and justice for Australians. We represent the majority of Australians tired of xenophobic and regressive politics.",
    "user_location": "Australia",
    "user_created_at": "2017-02-04 08:44:44"
  },
  {
    "user_id": 177458594,
    "user_name": "Julie-Anne Richards",
    "user_screen_name": "jar_climate",
    "user_description": "#ClimateChange #ClimateJustice #ClimateAction #LossAndDamage #WheresTheFinance #FossilFuels #Coal #Oil Sometime angry tweeter (it's the #climate, innit)",
    "user_location": "London",
    "user_created_at": "2010-08-12 05:10:17"
  },
  {
    "user_id": 17692554,
    "user_name": "cricket.com.au",
    "user_screen_name": "cricketcomau",
    "user_description": "Cricket news, scores and highlights produced by Cricket Australia's digital content team. Follow @CricketAus for official CA communication.",
    "user_location": "Australia",
    "user_created_at": "2008-11-27 23:08:53"
  },
  {
    "user_id": 1426865454,
    "user_name": "💧 Margaret Hollingdale",
    "user_screen_name": "MargaretHollin1",
    "user_description": "Health, Education, Housing, Agriculture and Politics: for the Public good. \nEqual rights Equal pay Union #Changetherules\n\nRetweets ≠ endorsement",
    "user_location": "Wurundjeri Land",
    "user_created_at": "2013-05-14 02:55:57"
  },
  {
    "user_id": 264547754,
    "user_name": "BR",
    "user_screen_name": "boundedr",
    "user_description": "The decision-making rationality of individuals is limited by the information they have, and the cognitive limitations of their minds.",
    "user_location": "",
    "user_created_at": "2011-03-12 02:41:48"
  },
  {
    "user_id": 66877994,
    "user_name": "Atlanta Tips",
    "user_screen_name": "atlantatips",
    "user_description": "",
    "user_location": "Atlanta, GA",
    "user_created_at": "2009-08-19 02:06:18"
  },
  {
    "user_id": 423661014,
    "user_name": "tracy walker",
    "user_screen_name": "thewollemipine",
    "user_description": "Newport Girl #Renewables #ClimateChange #NoNewCoal #NoCSG #Environment #Agriculture #Bees #SustainableDesign #MarriageEquality #GreatBarrierReef #Science",
    "user_location": "Sydney",
    "user_created_at": "2011-11-28 19:45:57"
  },
  {
    "user_id": 908561864396726300,
    "user_name": "Blackdingo1",
    "user_screen_name": "lee_manwaring",
    "user_description": "🇦🇺OPINIONS ONLY 🇦🇺.NotPC. #Resistence. #ProVax. #NoChurchinState.#FuckPence #NeverAgain.#Prochoice. #ERA. #EPA. No NRA.🌊🌊NO LISTS. 🚫#FUCKTRUMP.",
    "user_location": "Australia,somewhere.",
    "user_created_at": "2017-09-15 05:23:23"
  },
  {
    "user_id": 277837450,
    "user_name": "元サカ",
    "user_screen_name": "SciCafeShizuoka",
    "user_description": "元はサ(イエンス)カ(フェ)の中のひと。専門は有機ケイ素化学。最下層管理職やめたってよ！ 富士山を定点撮影中。アイコンはボロメオのベンゼン。ヘッダー画像は環水平アーク（2015/5/22撮影）。#今の富士山",
    "user_location": "富士山と海のある県",
    "user_created_at": "2011-04-06 04:01:22"
  },
  {
    "user_id": 756796452,
    "user_name": "DhakaTribune",
    "user_screen_name": "DhakaTribune",
    "user_description": "Dhaka Tribune is the fastest growing English daily in Bangladesh. News, views & features from Bangladesh and the world.",
    "user_location": "Dhaka, Bangladesh",
    "user_created_at": "2012-08-14 09:01:02"
  },
  {
    "user_id": 107145172,
    "user_name": "Ruth Scott",
    "user_screen_name": "RuthMcMScott",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2010-01-21 17:39:07"
  },
  {
    "user_id": 701322706495602700,
    "user_name": "Tania Groth",
    "user_screen_name": "TaniaGroth",
    "user_description": "Your feelings are hurting my thoughts!",
    "user_location": "",
    "user_created_at": "2016-02-21 08:28:57"
  },
  {
    "user_id": 828390809317756900,
    "user_name": "🍀 badluck 🍀",
    "user_screen_name": "badluck_jones",
    "user_description": "𝐃𝐢𝐬𝐜𝐥𝐚𝐢𝐦𝐞𝐫: 𝐍𝐨𝐭𝐡𝐢𝐧𝐠 𝐈 𝐥𝐢𝐤𝐞, 𝐩𝐨𝐬𝐭 𝐨𝐫 𝐫𝐞𝐭𝐰𝐞𝐞𝐭 𝐢𝐬 𝐚𝐧 𝐞𝐧𝐝𝐨𝐫𝐬𝐞𝐦𝐞𝐧𝐭 𝐨𝐫 𝐜𝐥𝐚𝐢𝐦 𝐨𝐟 𝐯𝐚𝐥𝐢𝐝𝐢𝐭𝐲. 𝐈𝐭 𝐦𝐢𝐠𝐡𝐭 𝐛𝐞 𝐬𝐚𝐭𝐢𝐫𝐞, 𝐢𝐭 𝐦𝐢𝐠𝐡𝐭 𝐧𝐨𝐭 𝐛𝐞. 𝟎𝟏𝟏𝟎𝟏𝟏𝟏𝟎 𝟎𝟏𝟏𝟎𝟎𝟏𝟎𝟏 𝟎𝟏𝟏𝟏𝟎𝟎𝟏𝟎 𝟎𝟏𝟏𝟎𝟎𝟏𝟎𝟎",
    "user_location": "𝐇𝐞𝐚𝐫𝐭 𝐨𝐟 𝐭𝐡𝐞 𝐑𝐞𝐛𝐞𝐥𝐥𝐢𝐨𝐧",
    "user_created_at": "2017-02-05 23:52:14"
  },
  {
    "user_id": 1147386834,
    "user_name": "Jonathan Barrett",
    "user_screen_name": "barrett_ink",
    "user_description": "@Reuters Deputy Bureau Chief, covering Australia, NZ & the Pacific. Views are my own. Instagram: barrett_ink",
    "user_location": "",
    "user_created_at": "2013-02-04 08:25:49"
  },
  {
    "user_id": 159002601,
    "user_name": "ロイター ワールド",
    "user_screen_name": "ReutersJpWorld",
    "user_description": "世界では何が起こっているのか━━。ロイター日本語サイトの編集部がお届けする、ワールドニュースの公式アカウントです。",
    "user_location": "Tokyo, Japan",
    "user_created_at": "2010-06-24 05:39:34"
  },
  {
    "user_id": 159002601,
    "user_name": "ロイター ワールド",
    "user_screen_name": "ReutersJpWorld",
    "user_description": "世界では何が起こっているのか━━。ロイター日本語サイトの編集部がお届けする、ワールドニュースの公式アカウントです。",
    "user_location": "Tokyo, Japan",
    "user_created_at": "2010-06-24 05:39:34"
  },
  {
    "user_id": 2256275845,
    "user_name": "Charles Wood",
    "user_screen_name": "Mare_Indicum",
    "user_description": "Professional Researcher and Forensic Analyst.\nHas more than the average number of legs.",
    "user_location": "Australia, New Zealand",
    "user_created_at": "2013-12-21 10:04:38"
  },
  {
    "user_id": 1089706089925361700,
    "user_name": "Aunty Burt",
    "user_screen_name": "Budboy56695438",
    "user_description": "Never not right and right not never!\n\nGiven that hate speech is not possible without free speech, any defence of free speech is a form of hate speech.",
    "user_location": "Sydney, New South Wales",
    "user_created_at": "2019-01-28 02:05:52"
  },
  {
    "user_id": 436429668,
    "user_name": "Nikkei Asian Review",
    "user_screen_name": "NAR",
    "user_description": "The latest headlines from the Nikkei Asian Review. We tell untold stories about Asia, from Asia.",
    "user_location": "Tokyo",
    "user_created_at": "2011-12-14 05:17:05"
  },
  {
    "user_id": 189575751,
    "user_name": "kristoferkawas",
    "user_screen_name": "kristoferkawas",
    "user_description": "I tweet about the IT world's most interesting products Iphone,Samsung,Microsoft,Cisco I tweet also about what is happening in the USA Europe and M East.",
    "user_location": "Washington, DC",
    "user_created_at": "2010-09-11 16:58:35"
  },
  {
    "user_id": 290502791,
    "user_name": "Luna AKIR",
    "user_screen_name": "LunaAkir",
    "user_description": "Engineer, Brand Manager, Independent Consultant, Photographer & Dreamer who loves #Cinema.",
    "user_location": "",
    "user_created_at": "2011-04-30 11:32:44"
  },
  {
    "user_id": 934027227481636900,
    "user_name": "Famoso",
    "user_screen_name": "ElFamosoCampous",
    "user_description": "Campeur de père en fils",
    "user_location": "France",
    "user_created_at": "2017-11-24 11:53:39"
  },
  {
    "user_id": 777891899143286800,
    "user_name": "AusCham Argentina",
    "user_screen_name": "AAuscham",
    "user_description": "",
    "user_location": "Buenos Aires, Argentina",
    "user_created_at": "2016-09-19 15:27:36"
  },
  {
    "user_id": 61913539,
    "user_name": "Adey May",
    "user_screen_name": "Imforthewhales",
    "user_description": "Blocked by Sarah Hanson-Young",
    "user_location": "Sydney, New South Wales",
    "user_created_at": "2009-08-01 00:20:37"
  },
  {
    "user_id": 243821406,
    "user_name": "Mark Lynas",
    "user_screen_name": "mark_lynas",
    "user_description": "Environment/science writer. Books: 'High Tide', 'Six Degrees', 'The God Species', 'Seeds of Science: How we got it so wrong on GMOs'. 'Six Degrees 2' in process",
    "user_location": "Oxford, England",
    "user_created_at": "2011-01-27 22:00:31"
  },
  {
    "user_id": 237871265,
    "user_name": "David Shipley",
    "user_screen_name": "davidjshipley",
    "user_description": "Senior Executive Editor, Bloomberg Opinion (@bopinion)",
    "user_location": "New York, New York",
    "user_created_at": "2011-01-13 20:51:34"
  },
  {
    "user_id": 119603478,
    "user_name": "ロイター.co.jp",
    "user_screen_name": "Reuters_co_jp",
    "user_description": "ロイター日本語サイト編集部がトップニュースやブログ、コラム、そしておすすめのスライドショーやビデオをお届けする公式ツイッターアカウントです。ロイターのフェイスブックページはこちらhttps://t.co/tRAfpsw4yn",
    "user_location": "Tokyo, Japan",
    "user_created_at": "2010-03-04 03:36:40"
  },
  {
    "user_id": 34713362,
    "user_name": "Bloomberg",
    "user_screen_name": "business",
    "user_description": "The first word in business news.",
    "user_location": "New York and the World",
    "user_created_at": "2009-04-23 20:05:17"
  },
  {
    "user_id": 908561864396726300,
    "user_name": "Blackdingo1",
    "user_screen_name": "lee_manwaring",
    "user_description": "🇦🇺OPINIONS ONLY 🇦🇺.NotPC. #Resistence. #ProVax. #NoChurchinState.#FuckPence #NeverAgain.#Prochoice. #ERA. #EPA. No NRA.🌊🌊NO LISTS. 🚫#FUCKTRUMP.",
    "user_location": "Australia,somewhere.",
    "user_created_at": "2017-09-15 05:23:23"
  },
  {
    "user_id": 1071005598324420600,
    "user_name": "Sandeep Yadav",
    "user_screen_name": "Sandeep_Ydv_007",
    "user_description": "💪",
    "user_location": "India",
    "user_created_at": "2018-12-07 11:36:47"
  },
  {
    "user_id": 2165329988,
    "user_name": "Andy Brennan",
    "user_screen_name": "JABinJax",
    "user_description": "Bridging the gap between NE Florida’s business leaders and the news they need to succeed. Tweets are my own.",
    "user_location": "Jacksonville, Florida, USA",
    "user_created_at": "2013-10-30 19:19:42"
  },
  {
    "user_id": 58164856,
    "user_name": "Martin Boers",
    "user_screen_name": "MartinBoers",
    "user_description": "Not followed by anyone you’re following",
    "user_location": "Lower Saxony, Germany",
    "user_created_at": "2009-07-19 09:38:25"
  },
  {
    "user_id": 1015946207934459900,
    "user_name": "Funding Hero",
    "user_screen_name": "funding_hero",
    "user_description": "Reach your financial goals with help from Funding Hero, your source for all financial services",
    "user_location": "",
    "user_created_at": "2018-07-08 13:10:26"
  },
  {
    "user_id": 857141199223889900,
    "user_name": "Christine Hore",
    "user_screen_name": "ChristineHore1",
    "user_description": "Breathe in wonder - Sing out Experience. Dees tragic, musician, writer.",
    "user_location": "Melbourne, Victoria",
    "user_created_at": "2017-04-26 07:56:01"
  },
  {
    "user_id": 406846671,
    "user_name": "Julie",
    "user_screen_name": "Jul1e_Me",
    "user_description": "Irish by birth, Scottish by upbringing, Australian by choice. Accountant by day, last to leave the party at night. Personal views caveat. Live Life Red",
    "user_location": "Somewhere on a bar stool",
    "user_created_at": "2011-11-07 08:34:03"
  },
  {
    "user_id": 1090506116612612100,
    "user_name": "💧Thompson0767",
    "user_screen_name": "Thompson07671",
    "user_description": "Optimistic pessimist. Too old and tired to learn new tricks. Humanist mostly.",
    "user_location": "Gubbi Gubbi Country",
    "user_created_at": "2019-01-30 07:04:53"
  },
  {
    "user_id": 17808804,
    "user_name": "S.R. (Rob) Piccoli",
    "user_screen_name": "robpiccoli",
    "user_description": "European by birth, American by philosophy, married, father of 1,  conservative, traditional values, columnist at @AtlanticoMag, #MAGA",
    "user_location": "Italy",
    "user_created_at": "2008-12-02 14:56:15"
  },
  {
    "user_id": 92720556,
    "user_name": "Jessica Stewart",
    "user_screen_name": "yourseconddraft",
    "user_description": "Editor, writer, publisher. Founding member of Black Phoenix Publishing Collective. Lover of language. Taekwondo black belt.",
    "user_location": "Sydney Australia",
    "user_created_at": "2009-11-26 09:27:11"
  },
  {
    "user_id": 40173650,
    "user_name": "Global News Report",
    "user_screen_name": "robinsnewswire",
    "user_description": "Flying the web for trusted world news reports and shopping discounts 24/7. Retweeting for opinions, useful information, and the many voices of Twitter.",
    "user_location": "RT's Are FYI Purposes Only",
    "user_created_at": "2009-05-15 04:16:20"
  },
  {
    "user_id": 850923103462899700,
    "user_name": "くろ٩(╹⌓╹ )۶'",
    "user_screen_name": "Trialanderror_v",
    "user_description": "にゅーすついっと",
    "user_location": "日本",
    "user_created_at": "2017-04-09 04:07:32"
  },
  {
    "user_id": 40173650,
    "user_name": "Global News Report",
    "user_screen_name": "robinsnewswire",
    "user_description": "Flying the web for trusted world news reports and shopping discounts 24/7. Retweeting for opinions, useful information, and the many voices of Twitter.",
    "user_location": "RT's Are FYI Purposes Only",
    "user_created_at": "2009-05-15 04:16:20"
  },
  {
    "user_id": 1209338426,
    "user_name": "FinanzLinksASIA",
    "user_screen_name": "FinanzLinksAsia",
    "user_description": "Bussiness News Asia - Stock Exchanges - Economy - Currencies\n❋❋❋❋❋❋❋❋Imprint: http://t.co/0ErTwTODTE\n❋❋❋❋❋❋❋❋❋❋ \nWebseite:",
    "user_location": "",
    "user_created_at": "2013-02-22 17:37:38"
  },
  {
    "user_id": 1079852364071239700,
    "user_name": "💧The Raven Quoth 🍑",
    "user_screen_name": "TheRavensNest4",
    "user_description": "Australian & US politics. Fair & equal society, archaeology. #AussieResistance #Resist Trump #FBR #MenAgainstToxicity. No DMs unless offered.",
    "user_location": "Gundungurra Country, Australia",
    "user_created_at": "2018-12-31 21:30:41"
  },
  {
    "user_id": 88890364,
    "user_name": "NewsHitterTeam",
    "user_screen_name": "N_H_Australia",
    "user_description": "Hi we hope to help your company with getting some extra attention by creating a NewsHitterAustralia greetings your NewsHitterTeam(Holland)",
    "user_location": "cyberspace",
    "user_created_at": "2009-11-10 09:25:38"
  },
  {
    "user_id": 340279079,
    "user_name": "Rebooted",
    "user_screen_name": "ExSydney",
    "user_description": "Passing interest in politics. Despise political correctness and 'socialism' with a passion. RT ≠ Endorsement. https://t.co/3q1fKzyGMl\n#HighCalorie",
    "user_location": "Sydney, New South Wales",
    "user_created_at": "2011-07-22 12:52:56"
  },
  {
    "user_id": 1937661476,
    "user_name": "Your face is a flower Stefani",
    "user_screen_name": "Amaddheus",
    "user_description": "Love Me My #MV Chaos Violin https://t.co/slh2WqvvHt",
    "user_location": "USA",
    "user_created_at": "2013-10-05 13:28:56"
  },
  {
    "user_id": 3305348538,
    "user_name": "Barbara Geat",
    "user_screen_name": "Barb_The_Great",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2015-08-03 18:50:50"
  },
  {
    "user_id": 69571675,
    "user_name": "Ahmed Fahour",
    "user_screen_name": "afahour",
    "user_description": "MD & CEO of Latitude Financial Services. Formerly CEO of Australia Post. Chairman of ProPac & Hairhouse. CarltonFC fan",
    "user_location": "Melbourne, Victoria",
    "user_created_at": "2009-08-28 12:09:04"
  },
  {
    "user_id": 1040076650,
    "user_name": "Mining Opportunities",
    "user_screen_name": "mining4profit",
    "user_description": "The #mining Twitter handle for @execsummary2018 - seeking properties and directors for projects - email execsummary@protonmail.ch",
    "user_location": "Canada",
    "user_created_at": "2012-12-27 17:00:23"
  },
  {
    "user_id": 1036115508,
    "user_name": "💧Peter Harden - Ghost Water Sales Rep",
    "user_screen_name": "hardenuppete",
    "user_description": "“Propaganda is to a democracy what the bludgeon is to a totalitarian state.”  Noam Chomsky",
    "user_location": "Australia",
    "user_created_at": "2012-12-26 02:42:07"
  },
  {
    "user_id": 63362429,
    "user_name": "7NEWS Australia",
    "user_screen_name": "7NewsAustralia",
    "user_description": "@7NewsSydney @7NewsMelbourne @7NewsBrisbane @7NewsAdelaide @7NewsPerth https://t.co/DU1c7lI1wg",
    "user_location": "Australia",
    "user_created_at": "2009-08-06 03:54:12"
  },
  {
    "user_id": 2941134302,
    "user_name": "Jennie Bloom",
    "user_screen_name": "COMRADEBLOOM",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2014-12-23 20:38:38"
  },
  {
    "user_id": 970007369978662900,
    "user_name": "News9",
    "user_screen_name": "News_____9",
    "user_description": "The group of tenants suing the operators of the annual Planes of Fame Air Show is calling for the County",
    "user_location": "USA",
    "user_created_at": "2018-03-03 18:45:53"
  },
  {
    "user_id": 820810971715276800,
    "user_name": "Natural💜order 👫 mentoring",
    "user_screen_name": "darren_siems",
    "user_description": "An adjunct to the Christian faith; 💑 To everything there is a season; A time for every purpose under heaven; a time to love 💕 ref. Eccles 3:1, Song of Solomon",
    "user_location": "Australia",
    "user_created_at": "2017-01-16 01:52:40"
  },
  {
    "user_id": 1117978098111148000,
    "user_name": "Tim Day",
    "user_screen_name": "TDay0312",
    "user_description": "Keep going!\n\nDeliver news a little late.",
    "user_location": "",
    "user_created_at": "2019-04-16 02:28:44"
  },
  {
    "user_id": 15435394,
    "user_name": "JK",
    "user_screen_name": "j2dk",
    "user_description": "¯\\_(ツ)_/¯",
    "user_location": "Stolen Land",
    "user_created_at": "2008-07-15 02:09:45"
  },
  {
    "user_id": 3238757417,
    "user_name": "Sortiwa",
    "user_screen_name": "Sortiwa",
    "user_description": "We pretend to know everything... https://t.co/dNa37IP2oo",
    "user_location": "United States",
    "user_created_at": "2015-05-06 11:24:15"
  },
  {
    "user_id": 250596296,
    "user_name": "Toni Ulled",
    "user_screen_name": "tulledn",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2011-02-11 12:11:55"
  },
  {
    "user_id": 411259557,
    "user_name": "george diamataris",
    "user_screen_name": "90min_plus3",
    "user_description": "good listener, reader, critical thinker. Blunt; negative on stupidity Football/Soccer, all sports ,travelling, food and family #LFC #LFCFAMILY #YNWA #FPL #EPL",
    "user_location": "",
    "user_created_at": "2011-11-13 05:53:05"
  },
  {
    "user_id": 862469459365310500,
    "user_name": "Networkofnews Phili",
    "user_screen_name": "NofNewsFilipino",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2017-05-11 00:48:37"
  },
  {
    "user_id": 18928000,
    "user_name": "lostbull",
    "user_screen_name": "lostbull",
    "user_description": "I am a People Lovin Blogger! Marketing Major. #ifollowback #teamfollowback RTs are not Considered Endorsements. I will RT your last tweet.",
    "user_location": "USA",
    "user_created_at": "2009-01-13 04:16:28"
  },
  {
    "user_id": 403338386,
    "user_name": "TellMAMAUK",
    "user_screen_name": "TellMamaUK",
    "user_description": "To report an anti-Muslim incident priv. message us with your name, phone number & location of incident (http://t.co/nmYBNs1c3f). Retweets not an endorsement.",
    "user_location": "UK",
    "user_created_at": "2011-11-02 10:58:13"
  },
  {
    "user_id": 486172437,
    "user_name": "Todds Newz",
    "user_screen_name": "ToddsNewz",
    "user_description": "",
    "user_location": "USA",
    "user_created_at": "2012-02-08 00:41:24"
  },
  {
    "user_id": 136004952,
    "user_name": "Andrew Neil",
    "user_screen_name": "afneil",
    "user_description": "Chairman @Spectator, @spectatorUSA, @Spectator Australia, @Apollo_Magazine, BBC presenter #politicslive @bbcthisweek Tweets reflect my analysis and mine alone.",
    "user_location": "",
    "user_created_at": "2010-04-22 19:41:25"
  },
  {
    "user_id": 917844047363842000,
    "user_name": "Richard Mayson",
    "user_screen_name": "m_richardmayson",
    "user_description": "Activist from way back. Ongoing current affairs/political devotee for social justice",
    "user_location": "Wellington City, New Zealand",
    "user_created_at": "2017-10-10 20:07:28"
  },
  {
    "user_id": 868523826447089700,
    "user_name": "bot_political",
    "user_screen_name": "bot_political",
    "user_description": "Political news bot|Retweets not endorsement|Powered by https://t.co/5DKWdMaCIf|Click link below for bot-hunting and tweet mapping tools",
    "user_location": "CyberSpace",
    "user_created_at": "2017-05-27 17:46:31"
  },
  {
    "user_id": 868523826447089700,
    "user_name": "bot_political",
    "user_screen_name": "bot_political",
    "user_description": "Political news bot|Retweets not endorsement|Powered by https://t.co/5DKWdMaCIf|Click link below for bot-hunting and tweet mapping tools",
    "user_location": "CyberSpace",
    "user_created_at": "2017-05-27 17:46:31"
  },
  {
    "user_id": 2243205762,
    "user_name": "Amanda Fernandez",
    "user_screen_name": "AmandaFernan88",
    "user_description": "Stirred, but never shaken.",
    "user_location": "Delcoville",
    "user_created_at": "2013-12-13 02:09:48"
  },
  {
    "user_id": 1033527651833503700,
    "user_name": "Jason Gregory",
    "user_screen_name": "Jason_Gregory_",
    "user_description": "The planet isn’t going to save itself -human rights | digital media 📸-writes for coins & else| breathe, laugh",
    "user_location": "Melbourne, Australia",
    "user_created_at": "2018-08-26 01:32:48"
  },
  {
    "user_id": 60587162,
    "user_name": "Steve Ellis",
    "user_screen_name": "dogtown33",
    "user_description": "Retired history teacher. I like Daria, baseball and old photos. Unreconstructed left winger.",
    "user_location": "",
    "user_created_at": "2009-07-27 12:49:00"
  },
  {
    "user_id": 1028875463966347300,
    "user_name": "Queensland Nickel Leaks",
    "user_screen_name": "LeaksNickel",
    "user_description": "Queensland Nickel Leaks is run by former employees of Queensland Nickel that aim to bring the latest news and developments surrounding the company",
    "user_location": "",
    "user_created_at": "2018-08-13 05:26:40"
  },
  {
    "user_id": 29098296,
    "user_name": "RFA",
    "user_screen_name": "brunario",
    "user_description": "",
    "user_location": "new york",
    "user_created_at": "2009-04-05 23:57:23"
  },
  {
    "user_id": 102157523,
    "user_name": "Özden Terli",
    "user_screen_name": "TerliWetter",
    "user_description": "Meteorologist. Climate Communicator. Weather Presenter. #Wetter Moderator. Diplom-Meteorologe. Born CO2 Level was @ 326 ppm. RT sometimes endorsement. Private.",
    "user_location": "Planet Earth",
    "user_created_at": "2010-01-05 20:33:08"
  },
  {
    "user_id": 792155928,
    "user_name": "The Point",
    "user_screen_name": "TPNN_ThePoint",
    "user_description": "The Point is your source for the REAL News that you can trust!",
    "user_location": "From Sea to Shining Sea",
    "user_created_at": "2012-08-30 18:39:16"
  },
  {
    "user_id": 312420231,
    "user_name": "💧Derek Robinson",
    "user_screen_name": "DerekRobinson2",
    "user_description": "Musician and health care worker-I've always believed in a fair and just world which doesn't exist at the moment.",
    "user_location": "Wodonga, Vic, Australia",
    "user_created_at": "2011-06-07 03:03:58"
  },
  {
    "user_id": 934027227481636900,
    "user_name": "Famoso",
    "user_screen_name": "ElFamosoCampous",
    "user_description": "Campeur de père en fils",
    "user_location": "France",
    "user_created_at": "2017-11-24 11:53:39"
  },
  {
    "user_id": 100406819,
    "user_name": "toritube",
    "user_screen_name": "toritube",
    "user_description": "携帯のbot用（非公式）として使うことにしました。",
    "user_location": "tokyo",
    "user_created_at": "2009-12-30 04:46:36"
  },
  {
    "user_id": 1661487846,
    "user_name": "💧Sue Etheridge💚",
    "user_screen_name": "EtheridgeSue",
    "user_description": "Interests include progressive politics, preservation of the planet, people, places and purple . I am a mother, small-business owner, and environmentalist.",
    "user_location": "Sunshine Coast",
    "user_created_at": "2013-08-11 03:21:22"
  },
  {
    "user_id": 4756700294,
    "user_name": "Baron Von Sarcasm",
    "user_screen_name": "Baron_Sarcasmo",
    "user_description": "",
    "user_location": "",
    "user_created_at": "2016-01-14 06:25:38"
  },
  {
    "user_id": 18081940,
    "user_name": "Renato Toffanin",
    "user_screen_name": "toffanin",
    "user_description": "Cofounder and Managing Director at ARCHES (https://t.co/oNweklNZhl). Engaged in the reduction of poverty through higher education: https://t.co/7p2Rsn2fGy",
    "user_location": "Italy, Europe and worldwide",
    "user_created_at": "2008-12-12 18:19:37"
  },
  {
    "user_id": 946926758527344600,
    "user_name": "Killing Time",
    "user_screen_name": "killing_time420",
    "user_description": "Conservative Australian. Lover of this great land. Loving your country is not racist.",
    "user_location": "Australia",
    "user_created_at": "2017-12-30 02:11:47"
  },
  {
    "user_id": 1062778619783721000,
    "user_name": "Election News Bay",
    "user_screen_name": "electionnewsbay",
    "user_description": "Election News Bay aggregates links regarding election news from around the world.\nRT are not endorsements",
    "user_location": "Global",
    "user_created_at": "2018-11-14 18:45:43"
  },
  {
    "user_id": 807841274204041200,
    "user_name": "Api Drama",
    "user_screen_name": "ApiDrama",
    "user_description": "#APIDRAMA PROGRAM #DEVELOPER, ENGINEER, #ENTERTAINER and A #SOCIAL ORGANIZER.",
    "user_location": "Kotchandpur, Bangladesh",
    "user_created_at": "2016-12-11 06:55:43"
  },
  {
    "user_id": 1048106071,
    "user_name": "Chelsea Mcfee",
    "user_screen_name": "chelseamckm",
    "user_description": "i use twitter to say things my friends don't care about.",
    "user_location": "Pentwater",
    "user_created_at": "2012-12-30 15:04:32"
  },
  {
    "user_id": 118099082,
    "user_name": "michaelangelo",
    "user_screen_name": "mr_menagerie",
    "user_description": "Stealing tweets and reclaiming them as my own since 2008",
    "user_location": "Depends on the day",
    "user_created_at": "2010-02-27 16:02:53"
  },
  {
    "user_id": 110657384,
    "user_name": "Move2Sydney",
    "user_screen_name": "movetosydney",
    "user_description": "",
    "user_location": "Sydney, Australia",
    "user_created_at": "2010-02-02 09:34:43"
  },
  {
    "user_id": 1062778619783721000,
    "user_name": "Election News Bay",
    "user_screen_name": "electionnewsbay",
    "user_description": "Election News Bay aggregates links regarding election news from around the world.\nRT are not endorsements",
    "user_location": "Global",
    "user_created_at": "2018-11-14 18:45:43"
  },
  {
    "user_id": 1062778619783721000,
    "user_name": "Election News Bay",
    "user_screen_name": "electionnewsbay",
    "user_description": "Election News Bay aggregates links regarding election news from around the world.\nRT are not endorsements",
    "user_location": "Global",
    "user_created_at": "2018-11-14 18:45:43"
  },
  {
    "user_id": 28538442,
    "user_name": "Fair dinkum renting",
    "user_screen_name": "LeoPatRoss",
    "user_description": "🏞-🏘-🏙-🌐-⚖️\nPolicy and advocacy lead @tunsw - views are mostly brick with occasional harbour glimpses.",
    "user_location": "Terramerragal/Gadigal",
    "user_created_at": "2009-04-03 10:37:06"
  }
]

const tweetUserIds = tweetUsers.map(user => {
  return user.user_id;
});

const tweetDates = tweets.map(tweet => {
  const splitTweetDate = tweet.created_at.split(' ');
  tweet.created_at = splitTweetDate[0];
  return tweet;
});

const filteredTweets = tweetDates.filter(tweet => {
  return tweetUserIds.includes(tweet.user_id);
});

const tweetData = tweetUsers.map(user => {
  const user_posts = filteredTweets.filter(tweet => tweet.user_id === user.user_id);
  return {
    ...user,
    user_posts
  }
})
module.exports = tweetData;
