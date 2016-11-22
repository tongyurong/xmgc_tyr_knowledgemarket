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
-- Table structure for table `applyCourseEach`
--

DROP TABLE IF EXISTS `applyCourseEach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `applyCourseEach` (
  `applyCourseEachId` int(11) NOT NULL AUTO_INCREMENT,
  `CourseName` varchar(45) NOT NULL,
  `CourseEachName` varchar(45) NOT NULL,
  `CourseEachTime` varchar(45) NOT NULL,
  `CourseEachURL` varchar(200) NOT NULL,
  `inserttime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`applyCourseEachId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applyCourseEach`
--

LOCK TABLES `applyCourseEach` WRITE;
/*!40000 ALTER TABLE `applyCourseEach` DISABLE KEYS */;
INSERT INTO `applyCourseEach` VALUES (2,'PhotoShop通道抠图','通道抠火焰','00:08:50','http://files.m.xmgc360.com/loBpRu5-ntbgB15MIyQCQap9X2fM','2016-10-19 13:12:48'),(3,'PhotoShop通道抠图','通道抠人物','00:10:36','http://files.m.xmgc360.com/loWbA4TDIdX9kpHY6N9w69kWkGS0','2016-10-19 13:12:48'),(4,'PhotoShop通道抠图','通道抠婚纱','00:08:36','http://files.m.xmgc360.com/ljCMpb80ec7X9nU6XeewDy_CJh2N','2016-10-19 13:12:48'),(5,'PhotoShop通道抠图','通道抠头发丝','00:07:19','http://files.m.xmgc360.com/lqDIG4VP29HPsMlbpfX4gJUHlFRq','2016-10-19 13:12:48'),(6,'飞吧少年','其实你很美','40：33','http://files.m.xmgc360.com/Fsnlrvx8_zjyv6aGlUavAlH4Dw-8','2016-10-21 09:44:03'),(7,'飞吧少年','哇哇','30:44','http://files.m.xmgc360.com/FlgwpfMbmULlmig_-4Se-WeQPWXu','2016-10-21 09:44:03');
/*!40000 ALTER TABLE `applyCourseEach` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-28  9:39:18
