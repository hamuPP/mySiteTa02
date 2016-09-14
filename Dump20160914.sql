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
-- Table structure for table `paixing`
--

DROP TABLE IF EXISTS `paixing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paixing` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `pxName` varchar(30) DEFAULT NULL,
  `pxCardSum` smallint(3) DEFAULT NULL,
  `pxEachCardX` varchar(200) DEFAULT NULL,
  `pxEachCardY` varchar(200) DEFAULT NULL,
  `pxEachCardH` varchar(200) DEFAULT NULL COMMENT '高度是宽度的1.7，适用于正方形或者以宽度为基准的包裹元素',
  `pxEachCardW` varchar(200) DEFAULT NULL,
  `pxEachCardRotate` varchar(5) DEFAULT NULL COMMENT '每张牌的旋转角度，格式为：牌号-旋转角度。例如1-30,11-30',
  `pxExpertIn` varchar(50) DEFAULT NULL,
  `pxSummary` varchar(200) DEFAULT NULL,
  `pxDetail` text,
  `pxBanner` varchar(200) DEFAULT NULL,
  `pxDefaultPaizu` varchar(20) DEFAULT 'majorArcana',
  `pxPositionMeaning` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paixing`
--

LOCK TABLES `paixing` WRITE;
/*!40000 ALTER TABLE `paixing` DISABLE KEYS */;
INSERT INTO `paixing` VALUES (1,'圣三角',3,'0.417,0.2,0.66','0.318,0.01,0.01','0.5725','0.165','0','通用','最适合是非两难选择问题，给出的答案清晰明确。抽出三张牌，依次放在1、2、3的位置上','<h4>最适合是非两难选择问题，给出的答案清晰明确。</h4>\n<p>洗牌后、抽出三张牌，依次放在1、2、3的位置上。</p>\n<p>牌位含义：</p>\n<p>(1)代表过去的经验</p>\n<p>(2)代表问题的现状</p>\n<p>(3)代表对问题将来的预测结果</p>','../imgs/paiXing/shengSanJiao.jpg','全78张牌','代表过去的经验#代表问题的现状#代表对问题将来的预测结果'),(2,'心理自测',1,'0.38','0.25','0.408','0.24','0','通用','测自我精神状态、当下的情绪好恶','<h4>检测自我精神状态及当下的情绪好恶</h4>\r\n<p>洗牌后、抽出一张牌，看牌图案（不要过于在意牌的文字信息），是否为自己喜欢，或者冥想问题，随机生好感。</p>\r\n<p>如果不喜欢，就继续抽卡，直到抽到自己喜欢的一张。此张即为自我心灵映射的牌，查看牌意，解读出自我精神状态及当下的情绪好恶</p>\r\n<p>牌位含义：</p>\r\n<p>(1)自我精神状态及当下的情绪好恶</p>\r\n','../imgs/paiXing/oneCard.jpg','全78张牌','此牌即是自我心灵映射之牌'),(3,'钻石',4,'0.44,0.1295,0.73,0.44','0.5,0.3,0.3,0.03','0.384','0.11','0','通用','针对问题的过去、现在与未来做解读','<h4>针对问题的过去、现在与未来发展状态做解读</h4>\r\n<p>它与圣三角很相似，不同之处在于：本牌形用了2张牌来解读现在。所以它既有圣三角简洁明快的优点，又能更充分的反映求问者的现状</p>\r\n<p>洗牌切牌后，抽出4张牌，依次放在1234的位置上</p>\r\n<p>牌位含义</p>\r\n<p>(1)代表问题过去的状况</p>\r\n<p>(2)与(3)都代表问题目前的情形，需结合两张牌一起解读</p>\r\n<p>(4)问题的最后结果</p>\r\n','../imgs/paiXing/diamond.jpg','全78张牌','问题过去的状况#问题目前的情形#问题目前的情形#问题的最后结果'),(4,'每日动向',1,'0.38','0.25','0.408','0.24','0','通用','想知道今日做某事是否顺利？吉利？','<h4>今日有什么事难以决定，又事关重要？可以利用此牌形</h4>\r\n<p>比如：今日搬家是否吉利，今日出门是否顺利？等等</p>\r\n<p>从22张牌中，抽出1张牌，此牌即为结果</p>\r\n<p>牌位含义</p>\r\n<p>(1)代表问题过去的结果</p>','../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(5,'是否判断',1,'0.38','0.25','0.408','0.24','0','通用','是或否？该牌型只使用27张牌：大卡和4张小卡的首牌。正逆位都一样','<h4>对一个问题进行\"是\"或\"否\"的判断</h4>\r\n<p>本牌形采用<b>22张大牌+小牌的4张牌+圣杯9</b>，一共<b>27</b>张牌进行预测。</p>\r\n<p>洗牌后，抽出1张牌，不管正逆位，即为问题的结果</p>\r\n<p>牌位含义</p>\r\n<p>代表“是”的卡牌：</p>\r\n<p>圣杯九（“是”的意思最强烈），愚人，魔术师，皇后，皇帝，战车，正义，星星，太阳，世界。</p>\r\n<p>代表“否”的卡牌：</p>\r\n<p>力量，高塔，节制，隐士，吊人，死神，魔鬼。</p>\r\n<p>代表“是否都可以”的卡牌：</p>\r\n<p>女教主，命运之轮，情侣，教主，月亮，审判。</p>\r\n<p>代表“时机未到，尚需等待才能知道结果”的卡牌：</p>\r\n<p>权杖首牌，圣杯首牌，宝剑首牌，星币首牌。</p>','../imgs/paiXing/oneCard.jpg','22张大牌','此牌即代表结果'),(6,'取舍判断',2,'0.12952,0.62952','0.25,0.25','0.408','0.24','0','通用','即将获得与失去之物','<h4>预测你即将获得和失去之物</h4>\r\n<p>洗牌切牌后，随意抽出2张牌，依次放在12的位置上</p>\r\n<p>牌位含义</p>\r\n<p>(1)代表将获得的东西</p>\r\n<p>(2)代表将失去的东西</p>\r\n','../imgs/paiXing/twoCardsCommon.jpg','全78张牌','结果1#结果2'),(7,'今日运程',2,'0.12952,0.62952','0.25,0.25','0.408','0.24','0','通用','今日可能发生之事与影响','<h4>今日可能发生之事情，及影响</h4>\r\n<p>洗牌切牌后，随意抽出2张牌，依次放在12的位置上</p>\r\n<p>牌位含义</p>\r\n<p>(1)代表事件、今日可能发生之事</p>\r\n<p>(2)代表影响，你对此事的感受或作出的反应</p>\r\n','../imgs/paiXing/twoCardsCommon.jpg','全78张牌','结果1#结果2'),(8,'一周大势',2,'0.12952,0.62952','0.25,0.25','0.408','0.24','0','通用','本周影响你的力量与主要状态','<h4>一周内对你影响重大之事</h4>\r\n<p>洗牌切牌后，随意抽出2张牌，依次放在12的位置上</p>\r\n<p>牌位含义</p>\r\n<p>(1)代表这周内，潜在的会对你产生影响的力量</p>\r\n<p>(2)与(3)都代表问题目前的情形，需结合两张牌一起解读</p>\r\n<p>(4)问题的最后结果</p>\r\n','../imgs/paiXing/twoCardsCommon.jpg','全78张牌','结果1#结果2'),(9,'吉凶判断',1,'0.38','0.25','0.408','0.24','0','通用','洗牌、切牌后，冥想1个问题，然后抽牌，根据牌意解读需推测事物的好坏','<h4>针对问题的过去、现在与未来发展状态做解读</h4>\r\n<p>它与圣三角很相似，不同之处在于：本牌形用了2张牌来解读现在。所以它既有圣三角简洁明快的优点，又能更充分的反映求问者的现状</p>\r\n<p>洗牌切牌后，抽出4张牌，依次放在1234的位置上</p>\r\n<p>牌位含义</p>\r\n<p>(1)代表问题过去的状况</p>\r\n<p>(2)与(3)都代表问题目前的情形，需结合两张牌一起解读</p>\r\n<p>(4)问题的最后结果</p>\r\n','../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(10,'V字形(2择1)',5,'0.44,0.33,0.6,0.13,0.7','0.5,0.3,0.3,0.03,0.03','0.24981','0.072','0','爱情','专门用于解决两难的选择','<h4>针对问题的过去、现在与未来发展状态做解读</h4>\r\n<p>它与圣三角很相似，不同之处在于：本牌形用了2张牌来解读现在。所以它既有圣三角简洁明快的优点，又能更充分的反映求问者的现状</p>\r\n<p>洗牌切牌后，抽出4张牌，依次放在1234的位置上</p>\r\n<p>牌位含义</p>\r\n<p>(1)代表问题过去的状况</p>\r\n<p>(2)与(3)都代表问题目前的情形，需结合两张牌一起解读</p>\r\n<p>(4)问题的最后结果</p>\r\n','../imgs/paiXing/V.jpg','全78张牌','代表求问者本身的情况#代表选择甲的现状#代表选择乙的现状#代表选择甲的未来发展#代表选择乙的未来发展'),(12,'吉凶判断',1,'0.38','0.25','0.408','0.24','0','通用','洗牌、切牌后，冥想1个问题，然后抽牌，根据牌意解读需推测事物的好坏',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(13,'金字塔',3,'0.417,0.2,0.66','0.01,0.318,0.318','0.458','0.165','0','通用','与圣三角类似，只是牌型变了，牌意也变了',NULL,'../imgs/paiXing/JinZiTa.jpg','全78张牌','代表将来的状况#为何发生此事#认识自己的过去'),(14,'V字形(2择1)',5,'0.44,0.33,0.6,0.13,0.7','0.5,0.3,0.3,0.03,0.03','0.24981','0.072','0','学业','专门用于解决两难的选择',NULL,'../imgs/paiXing/V.jpg','全78张牌','代表求问者本身的情况#代表选择甲的现状#代表选择乙的现状#代表选择甲的未来发展#代表选择乙的未来发展'),(15,'V字形(2择1)',5,'0.44,0.33,0.6,0.13,0.7','0.5,0.3,0.3,0.03,0.03','0.24981','0.072','0','事业','专门用于解决两难的选择',NULL,'../imgs/paiXing/V.jpg','全78张牌','代表求问者本身的情况#代表选择甲的现状#代表选择乙的现状#代表选择甲的未来发展#代表选择乙的未来发展'),(16,'测试旋转',2,'0.129,0.629','0.06,0.08','0.408','0.24','0,30',NULL,NULL,NULL,NULL,'majorArcana',NULL);
/*!40000 ALTER TABLE `paixing` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-14 10:19:38
