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
  `pxEachCardH` varchar(200) DEFAULT NULL,
  `pxEachCardW` varchar(200) DEFAULT NULL,
  `pxExpertIn` varchar(50) DEFAULT NULL,
  `pxSummary` varchar(200) DEFAULT NULL,
  `pxDetail` text,
  `pxBanner` varchar(200) DEFAULT NULL,
  `pxDefaultPaizu` varchar(20) DEFAULT 'majorArcana',
  `pxPositionMeaning` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paixing`
--

LOCK TABLES `paixing` WRITE;
/*!40000 ALTER TABLE `paixing` DISABLE KEYS */;
INSERT INTO `paixing` VALUES (1,'圣三角',3,'0.417,0.2,0.66','0.01,0.318,0.318','0.5725','0.165','通用','最适合是非两难选择问题，给出的答案清晰明确。抽出三张牌，依次放在1、2、3的位置上',NULL,'../imgs/paiXing/shengSanJiao.jpg','全78张牌','代表过去的经验#代表问题的现状#代表对问题将来的预测结果'),(2,'心里自测',1,'0.38','0.05','0.8327','0.24','通用','测自我精神状态、当下的情绪好恶',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即是自我心灵映射之牌'),(3,'吉凶判断',1,'0.38','0.05','0.8327','0.24','通用','推测事物的好坏',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(4,'每日动向',1,'0.38','0.05','0.8327','0.24','通用','想知道今日做某事是否顺利？吉利？',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(5,'是否判断',1,'0.38','0.05','0.8327','0.24','通用','是或否？该牌型只使用27张牌：大卡和4张小卡的首牌。正逆位都一样','详细牌位含义：\n1.是：\n圣杯九（“是”的意思最强烈），愚人，魔术师，皇后，皇帝，战车，正义，星星，太阳，世界。\n2.否：\n力量，高塔，节制，隐士，吊人，死神，魔鬼。\n3.是否都可以：\n女教主，命运之轮，情侣，教主，月亮，审判。\n4.时机未到、尚需等待：\n权杖首牌，圣杯首牌，宝剑首牌，星币首牌。','../imgs/paiXing/oneCard.jpg','22张大牌',NULL),(6,'取舍判断',2,'0.12952,0.62952','0.06,0.06','0.8327','0.24','通用','即将获得与失去之物',NULL,'../imgs/paiXing/twoCardsCommon.jpg','全78张牌',NULL),(7,'今日运程',2,'0.12952,0.62952','0.06,0.06','0.8327','0.24','通用','今日可能发生之事与影响',NULL,'../imgs/paiXing/twoCardsCommon.jpg','全78张牌',NULL),(8,'一周大势',2,'0.12952,0.62952','0.06,0.06','0.8327','0.24','通用','本周影响你的力量与主要状态',NULL,'../imgs/paiXing/twoCardsCommon.jpg','全78张牌',NULL),(9,'吉凶判断',1,'0.38','0.05','0.8327','0.24','通用','洗牌、切牌后，冥想1个问题，然后抽牌，根据牌意解读需推测事物的好坏',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌',NULL),(10,'吉凶判断',1,'0.38','0.05','0.8327','0.24','通用','洗牌、切牌后，冥想1个问题，然后抽牌，根据牌意解读需推测事物的好坏',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌',NULL),(11,'吉凶判断',1,'0.38','0.05','0.8327','0.24','通用','洗牌、切牌后，冥想1个问题，然后抽牌，根据牌意解读需推测事物的好坏',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌',NULL),(12,'吉凶判断',1,'0.38','0.05','0.8327','0.24','通用','洗牌、切牌后，冥想1个问题，然后抽牌，根据牌意解读需推测事物的好坏',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌',NULL),(13,'金字塔',3,'0.417,0.2,0.66','0.01,0.318,0.318','0.458','0.165','通用','与圣三角类似，只是牌型变了，牌意也变了',NULL,'../imgs/paiXing/JinZiTa.jpg','全78张牌','代表将来的状况#为何发生此事#认识自己的过去');
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

-- Dump completed on 2016-06-24 10:22:18
