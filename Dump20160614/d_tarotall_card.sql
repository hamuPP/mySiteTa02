-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: localhost    Database: d_tarotall
-- ------------------------------------------------------
-- Server version	5.7.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card` (
  `id` smallint(3) NOT NULL AUTO_INCREMENT,
  `cardName` varchar(18) DEFAULT NULL,
  `cardNum` smallint(5) DEFAULT NULL,
  `cardSummary` varchar(100) DEFAULT NULL,
  `cardCategory` varchar(20) DEFAULT NULL,
  `cardSrc` varchar(100) DEFAULT NULL,
  `cardSrcReverse` varchar(100) DEFAULT NULL,
  `cardRightPosCommon` text,
  `cardRightPosSex` text,
  `cardReversePos` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,'愚者',0,'愚人牌暗示着你现在不顾风险而有所行动。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','愚人是一张代表自发性行为的牌，一段跳脱某种状态的日子，或尽情享受眼前日子的一段时光。对\r\n旅游而言，这是一张积极的牌，暗示你将会活在当下，并且会有和生命紧密结合的感觉。\r\n“每天都充实，乐趣便在其中”是一句很适合这张牌的古谚语。当你周遭的人都对某事提防戒慎，\r\n你却打算去冒这个险时，愚人牌可能就会出现。例如，“噢，我认为现在是换工作的好时机，外面到处\r\n都是失业的人哪！”或者“什么！你们俩分开了？你到底在想什么啊？”\r\n冒个险！不论如何都要做做看。愚人暗示通往满足之路是经由自发的行动，而长期的计划则是将来\r\n的事。','在两性关系分析当中，愚人暗示一段生活在当下或随遇而安的时期。你可能即将私奔，或在旅行途\r\n中遇到一位伴侣，或即将遇到一位喜欢目前生活，而不想计划将来的伴侣。\r\n愚人有时候也可能是在形容伴侣。这个伴侣是难以捉摸的、天真的，或者不愿受到任何长期计划和\r\n关系的约束。','当愚人倒立时，暗示当你被要求有所承诺时，却想从责任当中寻求解脱。你正在找一个脱身之道，\r\n然而目前并不是这么做的时机。现在是你对自己的将来有所承诺，或是解决过去问题的时候了，如此你\r\n才能够重新过着自发性的生活。在你能够安全出发之前，还有某些未完成的事情需要你去处理。\r\n愚人牌可能暗示无法凭直觉行事或是逃避责任。你也许渴望自由，渴望以往过去、不顾将来，但这\r\n不是适当的时候。有时候它也可能是在形容由于恐惧，而没有在某些决定的时刻把握住机会，或是固执于以前所做的计划，或过分依赖他人的建议。\r\n再次，时机是关键之所在。而愚人倒立则很明确的显示时效掌握欠佳。要不是在机会来临没有行动 ，\r\n就是在不恰当的时间采取行动。'),(2,'魔术师',1,'魔术牌意味着：现在是展开新计划的好时机。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','魔术师这张牌意味这是个着手新事物的适当时机。对的时间、对的机会、对的动机，使你的努力值\r\n回票价。对于展开行动、实现计划而言，这正是一个良好时机。由于你已为实现计划扎下良好基础，所\r\n以新的冒险很可能会实现。清楚的方向感和意志力的贯彻，大大的提升了成功的可能性。','魔术师是形容一种扎根于现实的伙伴关系，没有受到物质上的种种限制。它暗示一种主动的两性关\r\n系，而且可能是伴侣中的一个提供灵感，另一位脚踏实地，让这些主意变成具体成果。\r\n魔术师意味着一个拥有强烈意志、受过训练的心智及清晰的目标感的人。对于自己的目标，他拥有\r\n很好的方向感，且打开心胸，接纳新的理念。','当魔术师倒立时，意味他失去和土地或天空的联系。如果他失去了和土地的联系，可能会变得不切\r\n实际，而导致精神、情感或身体健康上出问题，他会变的漫无目标且缺乏自律。当倒立时，及时他自天\r\n空中接受到了能量，却无法成功的将它导入土地，这份能量相当的强而有力，在体内积累之后会导致精\r\n神活情绪上的困扰。幻觉、精神分裂症、或深井的精神崩溃、或严重的犹豫都有可能接踵而至。\r\n倒立的魔术师可能是在形容某人，他并不了解那能量是经由他在传递，而非出自他本身。他可能会\r\n以逐渐毁掉对方的方式对别人进行控制，可能是暗中作梗，或以任何他想得到的方法，这可能包括妖术、\r\n雇人暗杀或自己动手。\r\n当倒立的魔术师接触到土地，而和天空失去联系时，他就会失去了精神上的联系了。失去这份联系 ，\r\n便丧失了良知，并可能做出违反社会的行为。\r\n简单而言，魔术师倒立暗示你需要拥有和天空或土地更强的连接，因为此时你已经失去正确的动机、\r\n计划、热情或务实的态度，来完成你内心的愿望。'),(3,'女教主',2,'女教皇意味着：这是向内探索、沉思，或按兵不动的时刻。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','女教皇代表去思考可以导致实际结果的构想。这并不是一张代表具体事物的牌，而是一张代表可能\r\n性的牌。我们每个人都在我们的人生当中持续的耕耘和收获，而女教皇就是散播那些种子或理念的行动。\r\n女教皇暗示你应该要相信你的直觉，因为在这一点上，有些东西你可能看不见。高位的女教皇是一张代表精神和心灵发展的牌。它代表了向内心探索的一段时期，以便为你人生的下一个阶段播种，或者\r\n去消化你在肉体的层次上所处理的事情。','在两性关系分析当中，女教皇可能代表一个双鱼座的人；或者可能意味着在你得以接收到这份关系\r\n给予你的种种之前，你需要先反求诸己。接受性、被动以及内在的发展，都是这张牌的意涵。\r\n有时候女教皇暗示一种拥有高度精神或心灵发展的关系，你们俩人可以一同学习、成长和发展。','当女教皇以倒立当时出现时，依然可以代表双鱼座的人。它也可能暗示着：在暂时离群索居，或经\r\n过一番内心的发展之後，再度返回人生的一段时期。或许你已经度过了一段独处期，并将你的能量导入\r\n心灵的成长上，而你再度面对人生，以试炼你的新理念及理解的日子也已经到了。\r\n它也可能是在描述你忽略了直觉，而喜欢运用头脑来解决问题。或许你需要倾听，需要听一听某些\r\n事物。而倾听你内在的自我，或你周边的事物，可以获得你达成目标的方法。\r\n高位女教皇倒立时，可能意味你没有办法倾听你内在的声音，或你内在的知识是没有办法转化成行\r\n动。这个时候应当出去走走，认识新朋友，因为刚认识的人可以帮你介绍新的可能以及机会。例如，你\r\n可能会因此而找到新工作或新伴侣，或者得到崭新的理解。\r\n以目前而言，内在发展的时候已经结束了，而且透过积极的寻找和他人的合作，会让你有更多的收\r\n获。'),(4,'皇后',3,'女皇牌暗示家庭和谐及稳定','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','简单言之，女皇可能意味着实现计划，或朝向计划的下一个自然步骤迈进，亦即你又向目标靠近了\r\n一步。这张牌也可能暗示怀孕，如果牌上还有五角星九、或圣杯三，或一张以上的侍卫牌，那么这项推\r\n测的准确性就更高了。\r\n女皇牌也可能暗示一趟乡野之旅，或是休息一阵子并重返大自然的怀抱，因为她四周围绕着自然的\r\n产物。透过亲近自然，现在是你重新平衡自己的时候。这张牌意味家庭状态的稳定与和谐，而这通常是\r\n透过把爱从思考当中，带往内心来达成的。\r\n在有关事业的问题上，这张牌暗示你的工作和家有关，或利用家作为工作的基地。','在两性关系分析当中，女皇暗示朝着两性关系的下一个自然阶段迈进。它也可能是在形容怀孕，因\r\n为孩子通常会使两性关系进入一个新的阶段。对和家庭观念有关的两性关系而言，这是一张相当积极的\r\n牌。在这段期间内，你和伴侣是透过感情和欢乐来贴近人生，而不是经由思想。在这段关系中，有更多\r\n的成长和活力产生。','女皇倒立意味家庭环境或某段两性关系中遭遇到的困难。可能你无法实现你的计划或在某段关系中 ，\r\n你没有办法打心里去爱，因为你对爱过于知性或理想化了。我要再说一次，你需要回到上一张牌正立时\r\n的状态，好精通蕴藏其间的课题。在这个例子里面，高位女教皇的理想主义干扰了对感情的体验。\r\n它可能意味着，你是有了谈恋爱的念头，但却发现自己无法为两性关系，付出日复一日的努力。\r\n在关于孩子的问题上，女皇倒立可能意味流产、堕胎或生产。\r\n女皇牌倒立的另一层意思可说是，冷静地思考所有的选择之后，运用理性来解决问题。'),(5,'皇帝',4,'皇帝表示一种训练和实际致力于生活','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','皇帝意味透过自律和实际的努力而达到成功。它可以代表你生活中一段相当稳定，且井然有序的时\r 光。这张牌可以暗示遭遇到法律上的问题，或是碰到某个地位、权利都在你之上的人，例如法...','皇帝牌可形容一个务实、武断且通常是纪律严谨的人。他是一个顶不错的物质供应者，然而表达情\r\n感对他来说可就不是件简单的事了。浪漫和梦想的事对这个男人的吸引力并不大，因为他较喜欢他看得\r\n到、摸得着的东西。假设他无法看见或触碰到它，他是不太可能相信它的。\r\n在两性关系中，这个男人会扮演父亲形象的角色，以确保他能够驾驭这段关系，特别是在物质层面\r\n上。由于他的自律和喜欢勤奋地工作，所以通常做生意方面都可以得到成功。\r\n在感情方面他可能会比较压抑，因为他很难理解看不见的东西。在遇上伴侣向他多做了些要求时，\r\n他可能会说：“你到底想要什么？你有一个很好的家，一部新车，和所有你想得到的东西，你到底还需\r\n要什么？”\r\n在两性关系中，如果伴侣所在意的是情感上的需求，那就会对他造成困扰了。因为对他而言，付出\r\n就是给予某些具体的东西。','皇帝牌出现倒立时，意味着由于缺乏自律而无法成功。如果是在形容一个人的话，倒立牌代表这个\r\n人较具宽容性，而不像正立时那般的武断，而且也较能展现同情心。\r\n有时候此人可能会在面临严苛抉择时退却下来，因为他缺乏向目标迈进所需的训练。他可能会比正\r\n立的皇帝表现出多一点的热情，然而却缺乏控制热情的任何真正训练。他需要返回女皇牌（前面那张正\r\n立的牌），以充分理解热情和感官，这样才能够在迎接物质和真实世界的挑战时，知道该把这些东西摆\r\n在什么位置上。\r\n在有关两性关系的算法中，皇帝牌倒立可能是在形容一种缺乏自律的状态，例如，他可能缺乏对伴\r\n侣的承诺，或可能不止拥有一个伴侣。它也可能形容一种母子般的关系，也就是说，这个女人以一种母\r\n亲的态度控制着这个男人。'),(6,'教主',5,'教皇代表需要为你的心灵成长，及人生方向付起责任。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','教皇暗示你向某人或某个团体的人屈服了。或许这正是你为自己，及心灵上的需求负起责任的时刻\r\n了。你目前的行事作风并非应付事情的唯一方式，假设你愿意加以探索的话，或许你就会找到新的可能。','教皇所形容的这段关系，是遵从他人期望的一段关系。这段关系中的伴侣很难忠实于自己，也很难\r\n忠实于在两性关系中他们真正的需求，因为他们在适应他人对他们的期望上觉得压力重重。\r\n教皇也可能暗示你的两性关系已流于一种形式或规矩，你的态度变成“别人怎么做，我就跟着怎么\r\n做”，而这并不是去经历一段两性关系的唯一方式。你应该去找寻另一种新方式，可能你会感受到周遭\r\n的人所形成的阻力，但后来还是可以证明这么做是值得的。','塔罗牌中所有倒立的五都意味着心胸开阔，教皇亦不例外。它代表新思想、观念的形成，或拒绝一\r\n些流于俗态的观念。它也可以说你在为自己人生写脚本，照着自己对生命的理解而活。\r\n现在你正为自己的心灵发展负起责任，虽然道路可能是崎岖不平的，然而这通常是值得的。有时候\r\n倒立的教皇可能表示，你为了一个具有非正统理念的教派或团体而排斥正统的理念或理论，而这个教派\r\n或团体，会为你的心灵发展负起责任——为了一个团体而放弃另一个团体。有些人需要别人为他们负责，\r\n而有些人则会利用这种需要，所以导师及大师就越来越多了。'),(7,'情侣',6,'恋人牌意味，为了爱的关系而做的某些决定。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','恋人是一张代表决定的牌，而且除非顾客问的是某个特定的问题，否则它通常是指有关两性关系的\r\n决定。它可能是在描述沉浸在爱恋之中的过程，因为它可以意指一段两性关系中的最初，或者是罗曼蒂\r\n克的阶级。\r\n恋人牌也可以形容在决定到底要保留就有的关系，或转进新关系当中。它暗示你已经由过去经验而\r\n得到成长了，因此你可以安全的迈向一个新的阶段。\r\n','恋人牌暗示一段新关系，或既有关系的新阶段。这张牌也可以代表决定去爱，或展开新关系，好让\r\n这段新关系或新阶段可以安全的开始。它又可以形容沉醉于爱河，或处于一段关系中的罗曼蒂克。','当恋人牌倒立时，代表任何迈向关系的新状态，或新阶段的希望，都是建立在期待的梦想之上。你\r\n还没有成功的完成你目前的状态，因此你还是继续带在旧关系当中比较好。\r\n这杖牌也可能是在暗示一段关系的结束，或是一种具毁灭性的爱的关系。浪漫的或性的问题可能会\r\n支配你的生活。或许你没有能力超越关系的最初或浪漫的阶段，而且你有可能努力向确保目前的关系，\r\n可以一直保留在这个最初的阶段。所以这里也暗示逃避更深刻的承诺或责任。'),(8,'战车',7,'战车牌意味训练有素的心智。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','战车可以代表一部车，或是坐车旅行。当这张牌出现时，它可能意味着你需要控制生命中互相对抗\r\n的力量。目前的情况可能会出现某些矛盾，而你正以理智在控制着它们。\r\n这是一张代表由于坚持而取得成功的牌。如果用来形容一个人的话，战车是暗示这个人（通常是指\r\n男人），掌控着她自己和周遭的事物。正立的战车也可能意指一桩重要的生意，或意义重大的成功','战车暗示控制你的情绪，对目前的两性关系应该是有帮助的。它也可能是形容一个能够张控情绪，\r\n而充满自信的男人。在生意上或任何需要发挥控制力的处境中，他可能会成功。\r\n这张牌所传递的讯息是“不要放弃”，因为成功是可能的，只要你能协调好关系中的冲突（互相对\r\n抗的力量或能量）。','当战车倒立时，狮身人面兽所代表的对立力量就又大增功力了。情绪可能会蒙蔽了你的视线，或是\r\n你可能流连于过去的某种情况。通常倒立的战车可形容让未解决的情绪在内心积压起来，直到他们决堤，\r\n而你却只采取防堵政策。若想避免情绪受到可能的伤害，它暗示一种新的处理情绪的方式。\r\n巨蟹座的部分阴暗面（灵魂中不愿意去承认的部分）是，你离开他之后，他可能会比你留在他身边\r\n时更爱你。战车牌倒立的一个可能意思是，多愁善感的悬而未决的感觉影响了你对事情的看法。不要沉\r\n迷于过去，不要沉迷于应付事情的老方法，或沉迷于在你内心越堆越高的情绪，当这张牌倒立时，情绪\r\n突然爆发的情形是预料中的事。'),(9,'力量',8,'力量牌暗示你拥有足够的内在力量去面对人生\r\n','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','这张力量牌意味你有能力面对生活和困难的环境，或者有能力以希望、内在力量及勇气去做改变。\r\n勇气并不代表你没有恐惧，而是虽然你有恐惧，你还是愿意对某人或某事有所承诺。\r\n这张牌象征你拥有内在的力量来面对你内在的恐惧和欲望，而非让它们屈服于你的意志。在健康的\r\n分析方面，这张牌可能是有关心脏或脊椎方面的毛病，不过这些毛病也可以透过内在能量来克服，而且\r\n这张牌也暗示你本身拥有这种能量。','力量这张牌暗示你拥有足够的力量和勇气，让你可以在一段两性关系中发展出真正的亲密感，而不\r\n必试着要去控制它，或者被它所控制。你有充分的勇气可以处理任何可能发生的困难，而无需因恐惧而\r\n逃避。\r\n在两性关系的分析中，这是一张积极的牌，因为它暗示和这关系中的人能够互相倾听及倾诉。他们\r\n的行动是来自内在的力量，而非出于恐惧，可以发展出真实的亲密感，不会有五角星六、或圣杯六那种\r\n限制性的角色。','力量牌倒立会导致软弱。你面对人生的勇气已经减少了，徒留一种被击垮或了无希望的感觉。它可\r\n能暗示内心的痛苦，你的激情和欲望正像你提出给予它们满足的要求，这令你的理智受到威胁，怕会失\r\n去控制。\r\n它代表在某段时期内，传统的事业或生活方式的安全性似乎颇具吸引力。任何可以让你逃避热情和\r\n欲望的事物，似乎都值得拥有，因为你害怕热情和欲望会摧毁你所自觉的人格，或你为自己所建立的安\r\n全模式。任何会限制你去面对自己的能力的事情，可能都会被认为是需要的。譬如，变成工作狂、过于\r\n热衷你的事业，或是以一些不必要的事情来填满你所有的时间。\r\n有时候当你在生活中感到无力时，你可能会去找你可以支配的某个人或事物，来帮助自己再度感到\r\n强而有利。在这段其间你可能会发现自己在任何关系中，对别人不是太颐指气使，就是过分恭顺。\r\n学习如何从爱里面找到力量，又是狮子座的另外一项课题。也就是说，要如何找到内在的力量，就\r\n需要接纳某人以便让对方可以亲近你。如果狮子座的人无法完成这个课题，他们可能觉得事业带给他们\r\n两性关系所无法提供的满足感，所以他们可能会牺牲掉两性关系，而取得事业上极大的成功。这是一个\r\n跷跷板式的安排。他们不是占尽优势，就是太过谦卑。他们可能在事业上获得极大的成就，或是得到圆\r\n满的两性人际关系，但是很少有同时两者兼得的。透过集中意志，狮子座可以驾驭其生活，并在某一方\r\n面得到成功，然而这只是回到战车所需的课题而已。狮子座的课题是要有勇气不去控制人生，而是以爱\r\n和同情来面对它。'),(10,'隐士',9,'隐士牌暗示着：省思的一段时间。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','隐士牌暗示一段反省的时间。它代表着一段想要让你的过去、现在，以及未来成为有意义的时间。\r\n这张牌代表去看咨商辅导员、持续一段梦想之旅，或为了开发你自己的沉思。它也代表成熟，以及你已\r\n经知道生命中真正重要的是什么。\r\n它可能意味着得到身体或心灵上的协助及智因；或是你帮助其他人发现人生理解及事件的导因。它\r\n也代表一段时间内，你会问自己如下的问题：我从何处来？我现在位于何处？又将往何处去？','隐士可能象征着向内心探索的需求，暂时自一个两性关系中退出，以决定你想要什么、要往哪里去 。\r\n或许你正用了比平常更多的时间来疏远两性关系，而将思想更集中于自己身上。\r\n可能你正在协助伴侣，让他（她）对他（她）自己，和他（她）的人生有跟深刻体会。它也可能单\r\n纯智某个处女座的人。当隐士牌出现在两性关系的分析中，代表你更加清楚在某段两性关系中你的独立\r\n性，或是注意到你需要独处，以面对你的内在需求。','倒立的隐士牌有两种可能性。第一，你可能是故意让自己忙的团团转，以免面对改变的要求，或面\r\n对你确实是很寂寞这个事实。因此这里暗示着过长的工作时间，或违反朝九晚五的工作时间。为了避免\r\n和别人有真正的社交接触，你可能会在晚上或周末工作，以填满你的社交时间。例如，萝蓓卡白天在一\r\n家广告代理商担任接待的工作，而为了要填补夜晚寂寥的时光，她每周有四个晚上在一家旅馆的大厅酒\r\n吧工作。这让他不会感到寂寥，但也组织了她向内心的探求，以找出她真正的目的。\r\n可能你需要再回到力量牌，再你愿意让别人亲近你之前，你要先找出你的内在力量。\r\n现在已经到了要停下脚步，并思索你要走向何处，以及为什么要走那条路的时候了。或许你为了要\r\n避免孤独，正要向平凡屈服；或者因为害怕孤单，或害怕你可能要放弃某些东西，所以宁愿选择安逸而\r\n不愿成长。'),(11,'命运之轮',10,'命运之轮意味着你境遇的改变。观察这个改变，并留意它的模式。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','通常命运之轮象征你生命境遇的改变。或许你并不了解这些改变的原因，不过在这里，你如何因应\r\n改变是比较重要的。你要迎接生命所提供给你的机会，还是要抗拒改变呢？此牌正立时就是在告诉你，\r\n要去适应这些改变。\r\n就普通的角度来看，命运之轮暗示生活上的改变。你的事业正有起色，或某个两性关系正变得更充\r\n实。','命运之轮暗示一个两性关系日趋圆满的机会或可能性在增加。时，解释为：改善情况的机会越来越\r\n近了。我的顾客说出一件事情来证实这个论点：他的伴侣即将要完成她的医学学位，如此他们就可以去\r\n旅行，而且今后也可以拥有更好的生活品质。','我们都希望拥有越来越好的人生，并且可以一直保持如此，然而如果挑战一直没出现的话，我们就\r\n很难学习到什么。当命运之轮倒立时，所发生的改变可能是比较困难的。它暗示要努力对抗这些事件，\r\n而且通常都是徒劳无功。宇宙中蕴含着比每一个个体还要伟大的力量，所以我们必须要努力去理解，这\r\n项改变到底要教会我们什么。\r\n或许在你的生活中会有一种重复的模式，这可能意味着生命再度以同一种形式的问题，来展现其挑\r\n战性，好让你学会此问题中的教训。季节总是在更替着，而生命所展现的机会却越来越少，因此你更应\r\n好好反省过去的所作所为。\r\n找到重返隐士牌的时候，好好反省什么是你生命中再也不需要的东西。倒立的命运之轮只是要减少\r\n你在隐士牌中就应该丢掉的东西。\r\n这是一个检视你生命当中，何者是有用、何者是不需要之物的时刻，并要开开心心的让这些不再需\r\n要的东西离你而去。重新回到隐士牌，花点时间思索其课题，或许你就能摆脱过去的阴影，影响崭新的\r\n未来了。'),(12,'正义',11,'正义意味，这是一段你为你的人生决定负起责任的时光。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','正义意味事情已经达成它应有的使命。也就是说，你过往的决定或行为已经引导你走到了目前的境\r\n遇。你已经得到你应得的了，如果你对自己是够诚实的话，你肯定知道这点。\r\n它代表你应该对自己，以及周遭的人绝对的诚实。你应该自己，以及使你成为今天这个样子的种种\r\n决定负起责任。你的未来可能会因为你目前的决定、行为或理解而改变。\r\n正义也可能暗示这一项有利于你的法律上的决定，或是购置某些需要签署法律文件的东西。它也可\r\n能是指成功地解决某项争议或意见相左的情形，或是负起某种状况当中你应当负其的责任。\r\n如果正义和权张六一起出现，它可能是在暗示工作上的晋升，这正是各种决定或过去行为所带来的\r\n结果（也就是说，辛勤的工作带来了报酬）。','当正义和圣杯二、圣杯十，或圣杯三一起出现在牌面上则暗示着结婚。\r\n它也可能意味着你已经解决了和伴侣之间的争议，或你对伴侣以及两性关系，有一种完全诚实和负\r\n责化的态度。','当正义倒立时，它暗示着不公不义。某个诉讼过程延宕不决；一项无止无休的正义或不协调；或是\r\n互相指责、推委责任。对于你的付出你还是会得到回报，或者说你仍可以收割到你的耕耘，只不过这不\r\n太可能会是个欢愉的收获。如果目前生命中出现了不公平或不美好的事物，或许正是你应该检视先前所\r\n播下之种子，并从中汲取教训的机会。\r\n倒立的正义象征，你对自己或其他人可能并不诚实。你并不愿意追踪现今事件的导因为何，而总是\r\n因你的窘境去责备他人。如果你如此怠惰的话，恐怕会丧失更深刻了解自己，以及人生的机会。\r\n这可不是指望别人来教你的时刻，而是一个自救的时机。即使这张牌以倒立出现，因果循环的道理\r\n依旧不爽。你还是会受某人或某种状况的牵制，直到你洞悉并解决了先前的事端。当你留下一个悬而未\r\n决的状况，它（或与它类似的情形）会在你面前重复出现，直到你学到了教训。还没有收成的种子正等\r\n着你。'),(13,'吊人',12,'“以将有更美好的事物降临于你身上的信念，顺从于人生”是悬吊者这张牌所传达的讯息。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','悬吊者是一张代表投降的牌。它暗示，当你在这段期间内，透过对生命的顺从，并让它引领你到你\r\n需要去的地方，那么你便可以获益良多。\r\n悬吊者还是一张代表独立的牌。这段期间内，你应该顺着感觉走，或是接受自己，即使别人都认为\r\n你的方式很奇怪也不打紧。它也可能象征，经历了生命中一段艰难的时光后的心灵平静。\r\n现在不是挣扎的时候，静下来好好思考你过去的行为，以及未来的计划。这只是一个暂时的状态，\r\n只要你妥善的运用这段时间，对你应该是有好处的。让生命中的事物自然而然的发生，或许你会对结果\r\n感到惊喜。\r\n带着“会有更美好的事情临降，来取代你所捐弃的事物”的信念，顺从于人生。花点时间来观察潜\r\n伏于事件底下的生命潮流。生命会给你一段宁静的时光，远离世界的纷纷扰扰，所以善用这段时光将是\r\n明智之举。','在两性关系分析当中，悬吊者代表一段反省的时光。或许你正从一个两性关系的日常生活中抽力出\r\n来，以反省你的精神方向，以及两性关系的方向。\r\n内在的和平及宁静会伴随着这张牌而来，虽然你的伴侣可能会发现，很难在情感或社交上与此刻的\r\n你接近。这段时间你会把注意力集中在自己，而非伴侣身上。这可能是要求你周遭的人多谅解，及付出\r\n耐心了。','这张牌倒立可能暗示无法得到超越社会压力的自由。它代表你会听从别人对你的期望，而非顺从你\r\n内在的声音。或许你一生都在利用角色模式引导你，而非直接去体验生活。\r\n它也可能意味你以某种方式在抗拒你内在的自我。或许你正抗拒着自己的某些部分，不愿顺从自己\r\n的精神目的，你可能还在为保持财产，或物质生活上的巅峰状态而奋斗不解。声明要求你去反省自己的\r\n方向，以及你现阶段精神的感情实现层次及情绪满足，然而你努力想要保持现状。\r\n你受到拘束，却拼命想要的自由。可能你并不理解目前舒服的目的，或它能带给你什么，挣扎并不\r\n恰当，因为在适当的时间到来之前，你不可能得到自由。\r\n如果你能妥善的运用这段时间的话，那么当生命要你迈步向前的时候，你就不必再花时间去思考了 。\r\n如果你现在不进行反省的话，可能会导致更长的耽搁，或重复的模式。顺从自由其代价的。'),(14,'死神',13,'死亡牌意味某种状况的结束。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','死亡为旧事物画上休止符，并让路给新事物。死亡牌代表改变的一段其间。我们可以这样说，生命\r\n中的某个章节就要结束了，而你对这份改变的接纳，将是变化自然而然地发生。\r\n抱持着“生命将会带来某些比它从你身上拿走的更美好的东西”的信念。在潜意识中，你或许也在\r\n渴望改变的发生，死亡牌即意味着改变正要出现。不要抗拒这份改变，试着去接纳它吧。','死亡牌象征一个两性关系即将发生深刻的改变，或是你对两性关系的态度即将发生深刻的改变。它\r\n可能是一段关系的结束，譬如某种分别，或关系中某个阶段的结束，譬如宝宝的诞生。\r\n死亡牌也可以形容一个天蝎座的人，尤其是和任何的圣杯宫廷牌一起出现时。','当死亡牌倒立时，有可能是指对任何死亡的形式极端恐惧。一点儿小改变都可能被误以为是肉体的\r\n死亡，而你会尽所有可能去抵抗它，因为你不愿意死亡。这份恐惧可能会让你沉溺于旧习，带给你一种\r\n单调、重复的生活，用这种生活来掩饰你想到即将面临改变时所产生的绝望。\r\n当你不想改变时，你必须消耗所有力量以保持静止不动，且为了有某些力量可以生活，你常常会从\r\n周遭的人身上压榨能量。以目前而言，死亡是必须的，然而你对改变的恐惧令你陷于苦闷、沮丧或肉体\r\n的疲惫中，因为你大多数的精力都用在抗拒改变。\r\n这张倒立牌意味着缺乏“生命将带来更美好事物”的信念。有些人寻寻觅觅于未来幸福的保证。如\r\n果你抗拒这些改变的话，它们会从另一个方向来接近你，比如，从内心，梦中及情绪中，或甚至是身体\r\n上的症状来向你反映，譬如肌肉紧张或头痛等'),(15,'节制',14,'节制代表行动及感情的融合，带来内心的平静感觉。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','节制牌代表旅行、教学，或某个射手座的人。\r\n节制是一张代表行为，而非观念的牌。它代表对某种特定状况的适当行为。显示一种因为行为及情\r\n绪的结合，而带来内在平静的感觉。\r\n节制牌暗示你较高层次的自我，和较低层次的自我可以和谐共存。你带着一种方向感行动，不管那\r\n是精神上或实质上的行动。它代表尽力而为，以达到你可以达到的境界。','节制牌暗示一个会发生重大成长与学习的两性关系。强烈的目的感，是每位伴侣都能以忠实于自己\r\n的方式行事，因为它们连接了潜意识（那一池水）以及真实或有形的世界（陆地）。\r\n它可能象征着和两性关系有关的旅游，或是一个卷进两性关系中的射手座的人。它也暗示着在一个\r\n两性关系内，激情和灵性的和谐融合。','当节制牌倒立时，它可能暗示学习而非教学。而旅行也是有可能的。不过， 更常见的情形则是，高\r\n层次的自我，和低层次的自我之间产生分裂，因而导致毫无节制的行为。这张牌倒立可能是在暗示，你\r\n不愿意倾听你那具有神性的自我，或是你并不向去哺育或滋养它。当你过度耽溺于你人的欲望时，这种\r\n情况就会发生。我们可以在一些文化或社会观中看到，金钱或有形的物质，其价值竟高于心灵层面。从\r\n历史报告中判断，在濒临毁灭之前，古罗马帝国必定是个节制牌倒立的例子。\r\n节制牌倒立代表没有目的的行为，这包括没有目的的流行。或许在你着手进行任何行动之前，你应\r\n该重新认识你的目的。这张牌也意味对于在某种状况内该怎么办缺乏了解，或是从一个极端走向另外一\r\n个极端。它可以形容一个人为了得到满足感而不断寻找目标，而结果却只有失望，以及继续地设定下一\r\n个目标。\r\n现在你应该重返死亡牌，容许更多的改变发生，或是让更多的事物远离你的生活，如此你才能看得\r\n更远或更清楚。'),(16,'魔鬼',15,'魔鬼牌代表错以为别无选择','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg','在一般性的占卜中，魔鬼代表一种控制生命的需求。你对与自己的可能性缺乏完整的关照。这张牌\r\n表示在你对生命充满窒碍或无力感，因而渴望对自己及周遭的人有更严密的控制。\r\n魔鬼牌描述的是一种对生命物质化的观点，或像王尔德（Oscar Wilde）所说的：“知道所有东西的\r\n价格，却不知道任何东西的价值。”它可能暗示在某种状况内受到限制，却不愿意去改变。它是一种“\r\n偷鸡摸狗胜过杀人放火”的态度。\r\n在健康的分析上，魔鬼代表膝盖、牙齿方面的问题，或指皮肤过敏。\r\n在事业的分析上，魔鬼可能象征着控制，或并吞的野心。它是一张代表事业成功的牌，因为他将大\r\n多数的注意力都放在最后的结果——金钱。',NULL,NULL),(17,'高塔',16,'高塔象征生命中无可避免的改变。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg',NULL,NULL,NULL),(18,'星星',17,'星星牌意味创造力和对生命的可能性的信心。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg',NULL,NULL,NULL),(19,'月亮',18,'月亮象征倾听你的梦，以找到内心世界的平静。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg',NULL,NULL,NULL),(20,'太阳',19,'太阳象征欢乐、内在的平和，以及表达自我的需求。它也代表理解到幸福是一种选择。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg',NULL,NULL,NULL),(21,'审判',20,'审判象征清晰的判断力。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg',NULL,NULL,NULL),(22,'世界',21,'世界描述一种来自内心的快乐。它也可能暗示持久的成功。','2','http://www.jusctice.cn/imgs/moon.jpg','http://www.jusctice.cn/imgs/moonReverse.jpg',NULL,NULL,NULL),(23,'权杖首牌',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(25,'权杖二',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(26,'权杖三',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(27,'权杖四',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(28,'权杖五',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(29,'权杖六',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(30,'权杖七',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(31,'权杖八',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(32,'权杖九',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(33,'权杖十',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(34,'权杖侍从',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(35,'权杖骑士',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(36,'权杖王后',NULL,NULL,'4','http://www.jusctice.cn/imgs/moon.jpg',NULL,NULL,NULL,NULL),(37,'权杖国王',NULL,NULL,'4','http://localhost:88/imgs/moon.jpg',NULL,NULL,NULL,NULL),(38,'宝剑首牌',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(40,'宝剑二',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(41,'宝剑三',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(42,'宝剑四',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(43,'宝剑五',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(44,'宝剑六',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(45,'宝剑七',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(46,'宝剑八',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(47,'宝剑九',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(48,'宝剑十',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(49,'宝剑侍从',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(50,'宝剑骑士',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(51,'宝剑王后',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(52,'宝剑国王',NULL,NULL,'5',NULL,NULL,NULL,NULL,NULL),(53,'五角星首牌',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(54,'五角星二',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(55,'五角星三',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(56,'五角星四',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(57,'五角星五',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(58,'五角星六',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(59,'五角星七',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(60,'五角星八',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(61,'五角星九',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(77,'五角星十',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(78,'五角星侍从',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(79,'五角星骑士',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(80,'五角星王后',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(81,'五角星国王',NULL,NULL,'6',NULL,NULL,NULL,NULL,NULL),(83,'圣杯首牌',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(84,'圣杯二',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(85,'圣杯三',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(86,'圣杯四',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(87,'圣杯五',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(88,'圣杯六',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(89,'圣杯七',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(90,'圣杯八',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(91,'圣杯九',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(92,'圣杯十',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(93,'圣杯侍从',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(94,'圣杯骑士',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(95,'圣杯王后',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(96,'圣杯国王',NULL,NULL,'7',NULL,NULL,NULL,NULL,NULL),(100,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-06-14 22:13:34