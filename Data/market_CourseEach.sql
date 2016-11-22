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
-- Table structure for table `CourseEach`
--

DROP TABLE IF EXISTS `CourseEach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CourseEach` (
  `CourseID` int(11) DEFAULT NULL,
  `CourseEachId` int(11) NOT NULL AUTO_INCREMENT,
  `CourseEachName` varchar(100) DEFAULT NULL,
  `CourseEachTime` varchar(20) DEFAULT NULL,
  `CourseEachURL` varchar(200) DEFAULT NULL,
  `InsertTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`CourseEachId`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CourseEach`
--

LOCK TABLES `CourseEach` WRITE;
/*!40000 ALTER TABLE `CourseEach` DISABLE KEYS */;
INSERT INTO `CourseEach` VALUES (2001600002,1,'Axure简介1','00:19:13','video/Axure/1.mp4','2016-04-08 04:24:32'),(2001600002,2,'Axure简介2','00:15:15','video/Axure/2.mp4','2016-04-08 04:25:23'),(2001600001,3,'Photoshop概述','00:11:36','video/PhotoShop/02.mp4','2016-04-07 04:13:15'),(2001600001,4,'工作界面的设置','00:08:31','video/PhotoShop/03.mp4','2016-04-07 04:15:15'),(2001600001,5,'创建规则选取','00:13:05','video/PhotoShop/04.mp4','2016-04-07 04:16:15'),(2001600001,6,'选区的运算','00:09:05','video/PhotoShop/05.mp4','2016-04-07 04:18:15'),(2001600003,7,'BOM简介','00:40:28','video/javascriptBOM/javascriptBOM1.mp4','2016-04-08 04:12:12'),(2001600003,8,'BOM入门','00:34:21','video/javascriptBOM/javascriptBOM2.mp4','2016-04-08 04:15:15'),(2001600003,9,'BOM提高','00:34:53','video/javascriptBOM/javascriptBOM3.mp4','2016-04-08 04:18:18'),(2001600004,10,'DOM简介','00:43:54','video/javascriptDOM基础入门/javascriptDOM1.mp4','2016-04-09 04:18:18'),(2001600004,11,'DOM入门','00:27:42','video/javascriptDOM基础入门/javascriptDOM2.mp4','2016-04-09 04:21:18'),(2001600005,12,'DOM提高一','00:24:39','video/javascriptDOM提高/javascriptDOM3.mp4','2016-04-10 04:21:18'),(2001600005,13,'DOM提高二','00:13:54','video/javascriptDOM提高/javascriptDOM4.mp4','2016-04-10 04:35:18'),(2001600006,14,'DOM高级一','00:16:54','video/javascriptDOM高级/javascriptDOM5.mp4','2016-04-11 04:21:18'),(2001600006,15,'DOM高级二','00:35:20','video/javascriptDOM高级/javascriptDOM6.mp4','2016-04-11 04:35:18'),(2001600007,16,'javascript表单验证1','00:22:22','video/javascript表单验证/javascript表单验证1.mp4','2016-04-11 05:35:18'),(2001600007,17,'javascript表单验证2','00:12:01','video/javascript表单验证/javascript表单验证2.mp4','2016-04-11 05:40:18'),(2001600007,18,'javascript表单验证3','00:25:10','video/javascript表单验证/javascript表单验证3.mp4','2016-04-11 05:45:18'),(2001600007,19,'javascript表单验证4','00:45:13','video/javascript表单验证/javascript表单验证4.mp4','2016-04-11 05:48:18'),(2001600007,20,'javascript表单验证5','00:20:11','video/javascript表单验证/javascript表单验证5.mp4','2016-04-11 05:52:18'),(2001600007,21,'javascript表单验证6','00:16:51','video/javascript表单验证/javascript表单验证6.mp4','2016-04-11 05:54:18'),(2001600008,22,'jQuery基础一','00:47:59','video/jQuery基础/jQuery1.mp4','2016-04-11 06:58:18'),(2001600008,23,'jQuery基础二','00:29:26','video/jQuery基础/jQuery2.mp4','2016-04-11 07:35:18'),(2001600008,24,'jQuery基础三','00:24:04','video/jQuery基础/jQuery3.mp4','2016-04-11 08:35:18'),(2001600009,25,'jQuery提高一','00:40:26','video/jQuery提高/jQuery1.mp4','2016-04-12 04:35:18'),(2001600009,26,'jQuery提高二','00:32:39','video/jQuery提高/jQuery2.mp4','2016-04-12 05:35:18'),(2001600009,27,'jQuery提高三','00:32:43','video/jQuery提高/jQuery3.mp4','2016-04-12 06:35:18'),(2001600010,28,'Node.js数据库操作一','00:33:57','video/Node.js数据库操作/Node.js数据库1.mp4','2016-04-12 04:35:18'),(2001600010,29,'Node.js数据库操作二','00:50:15','video/Node.js数据库操作/Node.js数据库2.mp4','2016-04-12 05:35:18'),(2001600010,30,'Node.js数据库操作三','00:11:26','video/Node.js数据库操作/Node.js数据库3.mp4','2016-04-12 06:35:18'),(2001600010,31,'Node.js数据库操作四','01:28:41','video/Node.js数据库操作/Node.js数据库4.mp4','2016-04-12 07:35:18'),(2001600011,32,'express一','02:15:19','video/express/express1.mp4','2016-04-13 03:35:18'),(2001600011,33,'express二','00:43:25','video/express/express2.mp4','2016-04-13 04:35:18'),(2001600011,34,'express三','01:42:23','video/express/express3.mp4','2016-04-13 05:35:18'),(2001600011,35,'express四','00:47:34','video/express/express4.mp4','2016-04-13 06:35:18'),(2001600011,36,'express五','01:13:03','video/express/express5.mp4','2016-04-13 07:35:18'),(2001600012,37,'HTML5基础一','00:12:40','video/H5/HTML51.mp4','2016-04-14 07:35:18'),(2001600012,38,'HTML5基础二','00:18:28','video/H5/HTML52.mp4','2016-04-15 07:35:18'),(2001600012,39,'HTML5基础三','00:18:40','video/H5/HTML53.mp4','2016-04-16 07:35:18'),(2001600013,40,'HTML5高级样式一','00:28:33','video/H5高级样式/HTML5高级样式1.mp4','2016-04-17 07:35:18'),(2001600013,41,'HTML5高级样式二','00:06:07','video/H5高级样式/HTML5高级样式2.mp4','2016-04-18 07:35:18'),(2001600013,42,'HTML5高级样式三','00:33:13','video/H5高级样式/HTML5高级样式3.mp4','2016-04-19 07:35:18'),(2001600013,43,'HTML5高级样式四','00:10:58','video/H5高级样式/HTML5高级样式4.mp4','2016-04-20 07:35:18'),(2001600041,60,'通道抠火焰','00:08:50','http://files.m.xmgc360.com/loBpRu5-ntbgB15MIyQCQap9X2fM','2016-10-24 12:11:48'),(2001600041,61,'通道抠人物','00:10:36','http://files.m.xmgc360.com/loWbA4TDIdX9kpHY6N9w69kWkGS0','2016-10-24 12:11:48'),(2001600041,62,'通道抠婚纱','00:08:36','http://files.m.xmgc360.com/ljCMpb80ec7X9nU6XeewDy_CJh2N','2016-10-24 12:11:48'),(2001600041,63,'通道抠头发丝','00:07:19','http://files.m.xmgc360.com/lqDIG4VP29HPsMlbpfX4gJUHlFRq','2016-10-24 12:11:48');
/*!40000 ALTER TABLE `CourseEach` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-28  9:39:15
