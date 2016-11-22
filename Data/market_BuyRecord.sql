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
-- Table structure for table `BuyRecord`
--

DROP TABLE IF EXISTS `BuyRecord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BuyRecord` (
  `UserId` int(11) NOT NULL COMMENT '用户Id',
  `CourseId` int(11) NOT NULL COMMENT '课程Id',
  `ProductState` varchar(45) DEFAULT NULL COMMENT '商品状态',
  `RecordDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `RecordId` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`RecordId`)
) ENGINE=InnoDB AUTO_INCREMENT=2121600202 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BuyRecord`
--

LOCK TABLES `BuyRecord` WRITE;
/*!40000 ALTER TABLE `BuyRecord` DISABLE KEYS */;
INSERT INTO `BuyRecord` VALUES (36,2001600041,'1','2016-10-27 13:37:12',2121600194),(13,2001600041,'1','2016-10-27 13:38:46',2121600195),(36,2001600002,'0','2016-10-27 13:39:51',2121600196),(36,2001600005,'0','2016-10-27 13:40:02',2121600197),(36,2001600001,'0','2016-10-27 13:40:34',2121600198),(36,2001600004,'0','2016-10-27 13:40:35',2121600199),(36,2001600006,'0','2016-10-27 13:40:35',2121600200),(37,2001600002,'0','2016-10-28 01:35:00',2121600201);
/*!40000 ALTER TABLE `BuyRecord` ENABLE KEYS */;
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