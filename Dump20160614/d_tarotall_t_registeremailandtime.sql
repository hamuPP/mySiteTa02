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
-- Table structure for table `t_registeremailandtime`
--

DROP TABLE IF EXISTS `t_registeremailandtime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_registeremailandtime` (
  `r_id` tinyint(5) NOT NULL AUTO_INCREMENT,
  `r_email` varchar(25) DEFAULT NULL,
  `r_time` varchar(13) DEFAULT NULL,
  `r_validationCode` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_registeremailandtime`
--

LOCK TABLES `t_registeremailandtime` WRITE;
/*!40000 ALTER TABLE `t_registeremailandtime` DISABLE KEYS */;
INSERT INTO `t_registeremailandtime` VALUES (1,'123@qq.cn','1460614266523',NULL),(2,'123@qq.cn','1460620536283',NULL),(3,'123@qq.cn','1460620569924',NULL),(4,'123@qq.cn','1460620626564',NULL),(5,'123@qq.cn','1460620636866',NULL),(6,'123@qq.cn','1460620638176',NULL),(7,'123@qq.cn','1460620643131',NULL),(8,'123@qq.cn','1460620656433',NULL),(9,'123@qq.cn','1460620746973',NULL),(10,'123@qq.cn','1460620746976',NULL),(11,'123@qq.cn','1460620746978',NULL),(12,'123@qq.cn','1460620872548',NULL),(13,'123@qq.cn','1460620908043',NULL),(14,'12345@qq.cn','1460623484035',NULL);
/*!40000 ALTER TABLE `t_registeremailandtime` ENABLE KEYS */;
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
