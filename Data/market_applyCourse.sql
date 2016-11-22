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
-- Table structure for table `applyCourse`
--

DROP TABLE IF EXISTS `applyCourse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `applyCourse` (
  `CourseapplyId` int(11) NOT NULL AUTO_INCREMENT,
  `CourseName` varchar(45) NOT NULL,
  `CoursePrice` varchar(45) NOT NULL,
  `Coursebrief` varchar(200) NOT NULL,
  `Courseclassify` varchar(45) NOT NULL,
  `CourseclassifyDetail` varchar(45) NOT NULL,
  `CourseImgURL` varchar(200) NOT NULL,
  `inserttime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UserId` int(11) NOT NULL,
  `State` varchar(45) NOT NULL,
  `CourseTimes` varchar(45) NOT NULL,
  PRIMARY KEY (`CourseapplyId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applyCourse`
--

LOCK TABLES `applyCourse` WRITE;
/*!40000 ALTER TABLE `applyCourse` DISABLE KEYS */;
INSERT INTO `applyCourse` VALUES (5,'PhotoShop通道抠图','32.00','介绍PhotoShop的通道抠图案例和操作方法','基础语言','其他','http://files.m.xmgc360.com/FmRg4wOexltEgtIe4ybG1AbJ6Ime','2016-10-19 13:12:48',36,'1','4'),(6,'','￥','','请选择','请选择','.....','2016-10-20 07:29:38',13,'2',''),(7,'飞吧少年','￥888','飞呀飞呀飞呀','前端开发','HTML','http://files.m.xmgc360.com/Fs62n2xxDrXVWOIqsK3QG8u8MN-M','2016-10-21 09:44:03',13,'2','undefined');
/*!40000 ALTER TABLE `applyCourse` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-28  9:39:22
