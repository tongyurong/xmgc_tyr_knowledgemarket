CREATE DATABASE  IF NOT EXISTS `market` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `market`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 182.254.219.193    Database: market
-- ------------------------------------------------------
-- Server version	5.7.15

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
-- Table structure for table `UserInfo`
--

DROP TABLE IF EXISTS `UserInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserInfo` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户Id',
  `UserName` varchar(45) DEFAULT NULL COMMENT '用户姓名',
  `UserPwd` varchar(45) DEFAULT NULL COMMENT '用户密码',
  `UserIdentity` varchar(45) DEFAULT NULL COMMENT '用户类别',
  `UserPortraitURL` varchar(45) DEFAULT NULL COMMENT '用户头像路径',
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=2101602008 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserInfo`
--

LOCK TABLES `UserInfo` WRITE;
/*!40000 ALTER TABLE `UserInfo` DISABLE KEYS */;
INSERT INTO `UserInfo` VALUES (1,'zhyuzh',NULL,'普通用户','images/033.jpg'),(6,'我想静靳',NULL,'普通用户','images/033.jpg'),(13,'luxiaomei',NULL,'普通用户','images/033.jpg'),(14,'CGX',NULL,'普通用户','images/033.jpg'),(16,'两只小虎牙',NULL,'普通用户','images/033.jpg'),(22,'风清扬',NULL,'普通用户','images/033.jpg'),(23,'暗夜丶情殇',NULL,'普通用户','images/033.jpg'),(25,'jwjw',NULL,'普通用户','images/033.jpg'),(29,'凉山寺三哥',NULL,'普通用户','images/033.jpg'),(30,'a男仄',NULL,'普通用户','images/033.jpg'),(32,'z123456',NULL,'普通用户','images/033.jpg'),(34,'lihx',NULL,'普通用户','images/033.jpg'),(36,'tongyur',NULL,'普通用户','images/033.jpg'),(37,'yyyyyy',NULL,'普通用户','images/033.jpg'),(39,'aaa',NULL,'普通用户','images/033.jpg'),(41,'hehe',NULL,'普通用户','images/033.jpg'),(42,'沉吟莫沉吟',NULL,'普通用户','images/033.jpg'),(43,'stp',NULL,'普通用户','images/033.jpg'),(44,'叫在哥',NULL,'普通用户','images/033.jpg'),(48,'s秦天s',NULL,'普通用户','images/033.jpg'),(51,'V支架V',NULL,'普通用户','images/033.jpg'),(53,'崔广瑞',NULL,'普通用户','images/033.jpg'),(55,'徐你姐',NULL,'普通用户','images/033.jpg'),(58,'凌云66',NULL,'普通用户','images/033.jpg'),(63,'暮色。',NULL,'普通用户','images/033.jpg'),(67,'undefined',NULL,'普通用户','images/033.jpg'),(70,'loser',NULL,'普通用户','images/033.jpg');
/*!40000 ALTER TABLE `UserInfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-28  9:39:23
