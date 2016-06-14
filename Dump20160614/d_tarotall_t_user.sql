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
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_user` (
  `uid` tinyint(100) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(18) DEFAULT NULL,
  `u_pwd` varchar(18) DEFAULT NULL,
  `u_email` varchar(40) DEFAULT NULL,
  `u_registertime` varchar(13) DEFAULT NULL,
  `u_avatar` varchar(80) DEFAULT '../imgs/justice.jpg',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES (1,'test002','123456','oppaikyouma@163.com','1461259240350',NULL),(2,'test003','12345','oppaikyouma@163.com','1461259764343',NULL),(3,'test004','123456','oppaikyouma@163.com','1461260032306',NULL),(4,'test002','222','oppaikyouma@163.com','1461260136155',NULL),(5,'test005','222','oppaikyouma@163.com','1461260591523',NULL),(6,'test005','222','oppaikyouma@163.com','1461260684808',NULL),(7,'sdfsdf','sdfs','oppaikyouma@163.com','1461260721519',NULL),(8,'test006','222','oppaikyouma@163.com','1461342803821',NULL),(9,'test006','123','oppaikyouma@163.com','1461560669185',NULL),(12,'test007','222','oppaikyouma@163.com','1461563205585',NULL),(13,'test008','222','oppaikyouma@163.com','1462184022157',NULL),(14,'test009','222','oppaikyouma@163.com','1462189043610',NULL),(15,'test010','222',NULL,NULL,'http://www.jusctice.cn/imgs/moon.jpg'),(16,'test011','222','879372858@qq.com','1463330044362','../imgs/justice.jpg'),(17,'tangyue','cao77yy','oppaikyouma@163.com','1464860664979','../imgs/justice.jpg');
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-06-14 22:13:33
