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
-- Table structure for table `CourseDetail`
--

DROP TABLE IF EXISTS `CourseDetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CourseDetail` (
  `CourseID` int(11) NOT NULL AUTO_INCREMENT,
  `CourseImgURL` varchar(200) DEFAULT NULL,
  `CourseName` varchar(100) DEFAULT NULL,
  `CoursePrice` varchar(100) DEFAULT NULL,
  `CourseTimes` varchar(100) DEFAULT NULL,
  `InsertTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Courseclassify` varchar(10) DEFAULT NULL,
  `CourseclassifyDetail` varchar(10) DEFAULT NULL,
  `Coursebrief` varchar(200) NOT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB AUTO_INCREMENT=2001600044 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CourseDetail`
--

LOCK TABLES `CourseDetail` WRITE;
/*!40000 ALTER TABLE `CourseDetail` DISABLE KEYS */;
INSERT INTO `CourseDetail` VALUES (2001600001,'videopicture/Ps.jpg','Ps基础入门','99.00','4','2016-04-07 04:12:12','其他','其他','Ps入门基础，让你不再是Ps菜鸟！'),(2001600002,'videopicture/Axure.jpg','Axure基础入门','99.00','2','2016-04-08 04:23:34','其他','其他',''),(2001600003,'videopicture/BOM1.jpg','javascriptBOM','86.00','3','2016-04-12 04:12:12','前端开发','JavaScript',''),(2001600004,'videopicture/DOM1.jpg','javascriptDOM基础入门','79.00','2','2016-04-15 04:13:12','前端开发','JavaScript',''),(2001600005,'videopicture/DOM2.jpg','javascriptDOM提高','82.00','2','2016-04-25 04:12:12','前端开发','JavaScript',''),(2001600006,'videopicture/Dom3.jpg','javascriptDOM高级','85.00','2','2016-04-30 04:12:12','前端开发','JavaScript',''),(2001600007,'videopicture/form1.jpg','javascript表单验证','60.00','6','2016-05-01 04:12:12','前端开发','JavaScript',''),(2001600008,'videopicture/jQuery.jpg','jQuery基础','86.00','3','2016-05-08 04:12:12','前端开发','jQuery',''),(2001600009,'videopicture/jQuery1.jpg','jQuery提高','89.00','3','2016-05-13 04:12:12','前端开发','jQuery',''),(2001600010,'videopicture/nodejs.jpg','Node.js数据库操作','90.00','4','2016-05-13 05:13:13','后端开发','Node.js',''),(2001600011,'videopicture/express.jpg','express','58.00','5','2016-05-15 04:12:12','前端开发','开发框架',''),(2001600012,'videopicture/h5.jpg','H5基础','96.00','3','2016-05-16 04:12:12','前端开发','HTML5',''),(2001600013,'videopicture/H52.jpg','H5高级样式','98.00','4','2016-05-18 04:12:12','前端开发','HTML5',''),(2001600041,'http://files.m.xmgc360.com/FmRg4wOexltEgtIe4ybG1AbJ6Ime','PhotoShop通道抠图','32.00','4','2016-10-24 12:11:48','基础语言','其他','介绍PhotoShop的通道抠图案例和操作方法');
/*!40000 ALTER TABLE `CourseDetail` ENABLE KEYS */;
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
