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
-- Table structure for table `t_userdivinehistory`
--

DROP TABLE IF EXISTS `t_userdivinehistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_userdivinehistory` (
  `udhId` int(11) NOT NULL AUTO_INCREMENT,
  `udhUserName` varchar(45) DEFAULT NULL,
  `udhPxName` varchar(11) DEFAULT NULL,
  `udhPxBanner` varchar(80) DEFAULT NULL,
  `udhPaiZu` varchar(10) DEFAULT NULL,
  `udhPxEachCardName` varchar(300) DEFAULT NULL,
  `udhGenerateTime` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`udhId`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_userdivinehistory`
--

LOCK TABLES `t_userdivinehistory` WRITE;
/*!40000 ALTER TABLE `t_userdivinehistory` DISABLE KEYS */;
INSERT INTO `t_userdivinehistory` VALUES (1,'test006','圣三角','../imgs/justice.png',NULL,'节制太阳','1462717585273'),(2,'test006','圣三角','../imgs/justice.png',NULL,'魔鬼(逆位)','1462717604089'),(3,'test006','圣三角','../imgs/justice.png',NULL,'节制魔鬼(逆位)月亮','1462717604613'),(4,'test006','圣三角','../imgs/justice.png',NULL,'教主,战车,隐士(逆位),','1462717648426'),(5,'test006','圣三角','../imgs/justice.png',NULL,'战车,节制(逆位),','1462717838991'),(6,'test006','圣三角','../imgs/justice.png',NULL,'月亮(逆位),','1462717839752'),(7,'test006','圣三角','../imgs/justice.png',NULL,'死神(逆位),','1462717840309'),(8,'test006','圣三角','../imgs/justice.png',NULL,'正义(逆位),魔鬼,审判(逆位),','1462717840776'),(9,'test006','圣三角','../imgs/justice.png',NULL,'吊人(逆位),死神,节制,','1462717908121'),(10,'test006','圣三角','../imgs/justice.png',NULL,'','1462718299685'),(11,'test006','圣三角','../imgs/justice.png',NULL,'星星,世界,','1462718300383'),(12,'test006','圣三角','../imgs/justice.png',NULL,'情侣,太阳,审判,','1462718301136'),(13,'test006','圣三角','../imgs/justice.png',NULL,'命运之轮,魔鬼,星星,','1462718944286'),(14,'test006','圣三角','../imgs/justice.png',NULL,'太阳(逆位),','1462718968928'),(15,'test006','圣三角','../imgs/justice.png',NULL,'魔鬼,世界(逆位),','1462718970349'),(16,'test006','圣三角','../imgs/justice.png',NULL,'魔鬼(逆位),月亮(逆位),审判,','1462718971192'),(17,'test006','圣三角','../imgs/justice.png',NULL,'皇帝,吊人(逆位),审判,','1462719067152'),(18,'test006','圣三角','../imgs/justice.png',NULL,'隐士(逆位),','1462719077629'),(19,'test006','圣三角','../imgs/justice.png',NULL,'情侣,高塔(逆位),太阳(逆位),','1462719082770'),(20,'test006','圣三角','../imgs/justice.png',NULL,'力量,正义,吊人,','1462719202528'),(21,'test006','金字塔','../imgs/justice.png',NULL,'高塔(逆位),世界,','1462773732277'),(22,'test006','金字塔','../imgs/justice.png',NULL,'吊人(逆位),死神(逆位),节制(逆位),','1462773733139'),(23,'test006','金字塔','../imgs/justice.png',NULL,'审判(逆位),','1462773744510'),(24,'test006','金字塔','../imgs/justice.png',NULL,'吊人(逆位),节制(逆位),月亮,','1462773745224'),(25,'test006','圣三角','../imgs/justice.png',NULL,'教主,正义,太阳(逆位),','1462857732745'),(26,'test006','圣三角','../imgs/justice.png',NULL,'隐士(逆位),','1462871435931'),(27,'test006','圣三角','../imgs/justice.png',NULL,'皇后(逆位),高塔,','1462871436473'),(28,'test006','圣三角','../imgs/justice.png',NULL,'高塔(逆位),世界,','1462871438384'),(29,'test006','圣三角','../imgs/justice.png','22张大牌','吊人(逆位),月亮(逆位),太阳,','1462872241782'),(30,'test006','圣三角','../imgs/justice.png','22张大牌','审判,','1462872242636'),(31,'test006','圣三角','../imgs/justice.png','22张大牌','皇帝,正义(逆位),死神,','1462872245785'),(32,'test006','圣三角','../imgs/justice.jpg','22张大牌','吊人,死神(逆位),星星(逆位),','1462944557664'),(33,'test006','圣三角','../imgs/justice.jpg','56张小牌','','1462944567135'),(34,'test006','圣三角','../imgs/justice.jpg','全78张牌','教主(逆位),情侣(逆位),战车,','1462944632763'),(35,'test006','圣三角','../imgs/justice.jpg','全78张牌','吊人(逆位),星星(逆位),太阳(逆位),','1462944638517'),(36,'test006','圣三角','../imgs/justice.jpg','全78张牌','隐士(逆位),死神(逆位),世界(逆位),','1462944645934'),(37,'test006','圣三角','../imgs/justice.jpg','圣杯','圣杯首牌(逆位),圣杯二(逆位),圣杯三(逆位),','1462944653543'),(38,'test006','圣三角','../imgs/justice.jpg','五角星','五角星首牌(逆位),五角星二(逆位),五角星三,','1462944666955'),(39,'test006','圣三角','../imgs/justice.jpg','宝剑','宝剑首牌(逆位),宝剑四,宝剑六,','1462944672450'),(40,'test006','圣三角','../imgs/justice.jpg','权杖','权杖三,权杖侍从,权杖骑士(逆位),','1462944677753'),(41,'test006','圣三角','../imgs/justice.jpg','全78张牌','教主(逆位),高塔,权杖首牌,','1462944683119'),(42,'test006','圣三角','../imgs/justice.jpg','56张小牌','','1462944695027'),(43,'test006','圣三角','../imgs/justice.jpg','56张小牌','','1462944708425'),(44,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','皇后,吊人,','1463233742310'),(45,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','命运之轮,死神,高塔(逆位),','1463233745873'),(46,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','魔鬼,太阳,','1463233746519'),(47,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','月亮,','1463233751417'),(48,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','皇帝,正义,吊人(逆位),','1463233758757'),(49,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','月亮,审判(逆位),','1463233759134'),(50,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','命运之轮,星星(逆位),月亮(逆位),','1463233759345'),(51,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','节制,世界,','1463233759686'),(52,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','星星(逆位),太阳,','1463233759707'),(53,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','节制,','1463233759879'),(54,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','死神,节制,魔鬼,','1463233760059'),(55,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','情侣(逆位),审判(逆位),','1463233760230'),(56,'test006','取舍判断','../imgs/paiXing/twoCardsCommon.jpg','22张大牌','情侣,命运之轮(逆位),','1463233782391'),(57,'test006','取舍判断','../imgs/paiXing/twoCardsCommon.jpg','22张大牌','战车,节制(逆位),','1463233783042'),(58,'test006','取舍判断','../imgs/paiXing/twoCardsCommon.jpg','22张大牌','死神,世界,','1463233783248'),(59,'test006','取舍判断','../imgs/paiXing/twoCardsCommon.jpg','22张大牌','隐士(逆位),星星(逆位),','1463233783400'),(60,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','审判,世界,','1463242064925'),(61,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','情侣(逆位),','1463242065459'),(62,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','吊人(逆位),审判,','1463244212632'),(63,'test006','圣三角','../imgs/paiXing/shengSanJiao.jpg','22张大牌','情侣,死神(逆位),审判,','1463244224125');
/*!40000 ALTER TABLE `t_userdivinehistory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-16 21:36:22
