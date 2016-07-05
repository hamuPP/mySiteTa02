/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.0.22-community-nt : Database - d_tarotall
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`d_tarotall` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `d_tarotall`;

/*Table structure for table `paixing` */

DROP TABLE IF EXISTS `paixing`;

CREATE TABLE `paixing` (
  `id` smallint(5) NOT NULL auto_increment,
  `pxName` varchar(30) default NULL,
  `pxCardSum` smallint(3) default NULL,
  `pxEachCardX` varchar(200) default NULL,
  `pxEachCardY` varchar(200) default NULL,
  `pxEachCardH` varchar(200) default NULL,
  `pxEachCardW` varchar(200) default NULL,
  `pxExpertIn` varchar(50) default NULL,
  `pxSummary` varchar(200) default NULL,
  `pxDetail` text,
  `pxBanner` varchar(200) default NULL,
  `pxDefaultPaizu` varchar(20) default 'majorArcana',
  `pxPositionMeaning` varchar(200) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `paixing` */

insert  into `paixing`(`id`,`pxName`,`pxCardSum`,`pxEachCardX`,`pxEachCardY`,`pxEachCardH`,`pxEachCardW`,`pxExpertIn`,`pxSummary`,`pxDetail`,`pxBanner`,`pxDefaultPaizu`,`pxPositionMeaning`) values (1,'圣三角',3,'0.417,0.2,0.66','0.01,0.318,0.318','0.5725','0.165','通用','最适合是非两难选择问题，给出的答案清晰明确。抽出三张牌，依次放在1、2、3的位置上',NULL,'../imgs/paiXing/shengSanJiao.jpg','全78张牌','代表过去的经验#代表问题的现状#代表对问题将来的预测结果'),(2,'心里自测',1,'0.38','0.05','0.8327','0.24','通用','测自我精神状态、当下的情绪好恶',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即是自我心灵映射之牌'),(3,'钻石',4,'0.44,0.1295,0.73,0.44','0.5,0.3,0.3,0.03','0.384','0.11','通用','针对问题的过去、现在与未来做解读','2与3都代表问题目前的情形，需结合两张牌一起解读','../imgs/paiXing/oneCard.jpg','全78张牌','问题过去的状况#问题目前的情形#问题目前的情形#问题的最后结果'),(4,'每日动向',1,'0.38','0.05','0.8327','0.24','通用','想知道今日做某事是否顺利？吉利？',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(5,'是否判断',1,'0.38','0.05','0.8327','0.24','通用','是或否？该牌型只使用27张牌：大卡和4张小卡的首牌。正逆位都一样','详细牌位含义：\n1.是：\n圣杯九（“是”的意思最强烈），愚人，魔术师，皇后，皇帝，战车，正义，星星，太阳，世界。\n2.否：\n力量，高塔，节制，隐士，吊人，死神，魔鬼。\n3.是否都可以：\n女教主，命运之轮，情侣，教主，月亮，审判。\n4.时机未到、尚需等待：\n权杖首牌，圣杯首牌，宝剑首牌，星币首牌。','../imgs/paiXing/oneCard.jpg','22张大牌','此牌即代表结果'),(6,'取舍判断',2,'0.12952,0.62952','0.06,0.06','0.8327','0.24','通用','即将获得与失去之物',NULL,'../imgs/paiXing/twoCardsCommon.jpg','全78张牌','结果1#结果2'),(7,'今日运程',2,'0.12952,0.62952','0.06,0.06','0.8327','0.24','通用','今日可能发生之事与影响',NULL,'../imgs/paiXing/twoCardsCommon.jpg','全78张牌','结果1#结果2'),(8,'一周大势',2,'0.12952,0.62952','0.06,0.06','0.8327','0.24','通用','本周影响你的力量与主要状态',NULL,'../imgs/paiXing/twoCardsCommon.jpg','全78张牌','结果1#结果2'),(9,'吉凶判断',1,'0.38','0.05','0.8327','0.24','通用','洗牌、切牌后，冥想1个问题，然后抽牌，根据牌意解读需推测事物的好坏',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(10,'V字形(2择1)',5,'0.44,0.33,0.6,0.13,0.7','0.5,0.3,0.3,0.03,0.03','0.24981','0.072','爱情','专门用于解决两难的选择',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(11,'吉凶判断5',5,'0.38','0.05','0.8327','0.24','通用','洗牌、切牌后，冥想1个问题，然后抽牌，根据牌意解读需推测事物的好坏',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(12,'吉凶判断',1,'0.38','0.05','0.8327','0.24','通用','洗牌、切牌后，冥想1个问题，然后抽牌，根据牌意解读需推测事物的好坏',NULL,'../imgs/paiXing/oneCard.jpg','全78张牌','此牌即代表结果'),(13,'金字塔',3,'0.417,0.2,0.66','0.01,0.318,0.318','0.458','0.165','通用','与圣三角类似，只是牌型变了，牌意也变了',NULL,'../imgs/paiXing/JinZiTa.jpg','全78张牌','代表将来的状况#为何发生此事#认识自己的过去');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
