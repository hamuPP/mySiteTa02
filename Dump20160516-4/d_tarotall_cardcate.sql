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
-- Table structure for table `cardcate`
--

DROP TABLE IF EXISTS `cardcate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cardcate` (
  `cate_id` smallint(3) NOT NULL AUTO_INCREMENT,
  `cate_name_en` varchar(18) DEFAULT NULL,
  `cate_name_zh` varchar(18) DEFAULT NULL,
  `cate_parent_id` smallint(3) DEFAULT NULL,
  PRIMARY KEY (`cate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cardcate`
--

LOCK TABLES `cardcate` WRITE;
/*!40000 ALTER TABLE `cardcate` DISABLE KEYS */;
INSERT INTO `cardcate` VALUES (1,'allCards','全78张牌',0),(2,'majorArcana','22张大牌',1),(3,'minorArcana','56张小牌',1),(4,'WANDS','权杖',3),(5,'SWORDS','宝剑',3),(6,'PENTACLES','五角星',3),(7,'CUPS','圣杯',3),(8,NULL,'愚者',2),(9,NULL,'魔术师',2),(10,NULL,'女教主',2),(11,NULL,'皇后',2),(12,NULL,'皇帝',2),(13,NULL,'教主',2),(14,NULL,'情侣',2),(15,NULL,'战车',2),(16,NULL,'力量',2),(17,NULL,'隐士',2),(18,NULL,'命运之轮',2),(19,NULL,'正义',2),(20,NULL,'吊人',2),(21,NULL,'死神',2),(22,NULL,'节制',2),(23,NULL,'魔鬼',2),(24,NULL,'高塔',2),(25,NULL,'星星',2),(26,NULL,'月亮',2),(27,NULL,'太阳',2),(28,NULL,'审判',2),(29,NULL,'世界',2),(30,NULL,'权杖首牌',4),(31,NULL,'权杖二',4),(32,NULL,'权杖三',4),(33,NULL,'权杖四',4),(34,NULL,'权杖五',4),(35,NULL,'权杖六',4),(36,NULL,'权杖七',4),(37,NULL,'权杖八',4),(38,NULL,'权杖九',4),(39,NULL,'权杖十',4),(40,NULL,'权杖侍从',4),(41,NULL,'权杖骑士',4),(42,NULL,'权杖王后',4),(43,NULL,'权杖国王',4),(44,NULL,'宝剑首牌',5),(45,NULL,'宝剑二',5),(46,NULL,'宝剑三',5),(47,NULL,'宝剑四',5),(48,NULL,'宝剑五',5),(49,NULL,'宝剑六',5),(50,NULL,'宝剑七',5),(51,NULL,'宝剑八',5),(52,NULL,'宝剑九',5),(53,NULL,'宝剑十',5),(54,NULL,'宝剑侍从',5),(55,NULL,'宝剑骑士',5),(56,NULL,'宝剑王后',5),(57,NULL,'宝剑国王',5),(58,NULL,'五角星首牌',6),(59,NULL,'五角星二',6),(60,NULL,'五角星三',6),(61,NULL,'五角星四',6),(62,NULL,'五角星五',6),(63,NULL,'五角星六',6),(64,NULL,'五角星七',6),(65,NULL,'五角星八',6),(66,NULL,'五角星九',6),(67,NULL,'五角星十',6),(68,NULL,'五角星侍从',6),(69,NULL,'五角星骑士',6),(70,NULL,'五角星王后',6),(71,NULL,'五角星国王',6),(72,NULL,'圣杯首牌',7),(73,NULL,'圣杯二',7),(74,NULL,'圣杯三',7),(75,NULL,'圣杯四',7),(76,NULL,'圣杯五',7),(77,NULL,'圣杯六',7),(78,NULL,'圣杯七',7),(79,NULL,'圣杯八',7),(80,NULL,'圣杯九',7),(81,NULL,'圣杯十',7),(82,NULL,'圣杯侍从',7),(83,NULL,'圣杯骑士',7),(84,NULL,'圣杯王后',7),(85,NULL,'圣杯国王',7),(86,NULL,NULL,NULL);
/*!40000 ALTER TABLE `cardcate` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-16 21:36:23
