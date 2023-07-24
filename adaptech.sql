-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for adaptechtask
CREATE DATABASE IF NOT EXISTS `adaptechtask` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `adaptechtask`;

-- Dumping structure for table adaptechtask.comments
CREATE TABLE IF NOT EXISTS `comments` (
  `commentsid` int(11) NOT NULL AUTO_INCREMENT,
  `postid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `title` varchar(80) DEFAULT NULL,
  `comment` text,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`commentsid`) USING BTREE,
  KEY `FK_comments_posts` (`postid`),
  KEY `FK_comments_users` (`userid`),
  CONSTRAINT `FK_comments_posts` FOREIGN KEY (`postid`) REFERENCES `posts` (`postsid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_comments_users` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.comments: ~5 rows (approximately)
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
REPLACE INTO `comments` (`commentsid`, `postid`, `userid`, `title`, `comment`, `date`) VALUES
	(1, 1, 2, 'ea molestias quasi exercitationem repellat qui ipsa sit aut', 'itaque id aut magnam\\npraesentium quia et ea odit et ea voluptas et\\nsapiente quia nihil amet occaecati quia id voluptatem\\nincidunt ea est distinctio odio', '2023-07-12 14:50:10'),
	(2, 1, 6, 'sdfsdf', 'sdfsdfsdf', '2023-07-18 15:53:48'),
	(3, 2, 7, 'dfgdfg', 'dfgdfgdfgdfg', '2023-07-18 15:54:10'),
	(4, 1, 9, 'sdggsfh', 'aasdsaas', '2023-07-19 08:35:08'),
	(5, 9, 8, 'dsfdfdfddsf', 'dfsdsdgdf', '2023-07-19 09:50:35');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.contactus
CREATE TABLE IF NOT EXISTS `contactus` (
  `messageid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `usermessage` text,
  PRIMARY KEY (`messageid`),
  KEY `FK_contactus_users` (`email`),
  CONSTRAINT `FK_contactus_users` FOREIGN KEY (`email`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.contactus: ~4 rows (approximately)
/*!40000 ALTER TABLE `contactus` DISABLE KEYS */;
REPLACE INTO `contactus` (`messageid`, `name`, `email`, `usermessage`) VALUES
	(1, 'Festa Mazreku', 'festa.m@gmail.com', 'hi Adaptech!!'),
	(2, 'Charlotte Moreau', 'charlottemoreau@gmail.com', 'hello! i love your page!'),
	(4, 'Fjolla Berisha', 'fjolla.b@gmail.com', 'hi! ');
/*!40000 ALTER TABLE `contactus` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `postsid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `body` text,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`postsid`),
  KEY `id` (`userid`) USING BTREE,
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.posts: ~13 rows (approximately)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
REPLACE INTO `posts` (`postsid`, `userid`, `title`, `body`, `date`) VALUES
	(1, 1, 'dolorem eum magni eos aperiam quia', 'repudiandae veniam quaerat sunt sed\r\nalias aut fugiat sit autem sed est\r\nvoluptatem omnis possimus esse voluptatibus quis\r\nest aut tenetur dolor neque', '2023-05-19 15:22:10'),
	(2, 2, 'et ea vero quia laudantium autem', 'ullam consequatur ut\r\nomnis quis sit vel consequuntur\r\nipsa eligendi ipsum molestiae et omnis error nostrum\r\nmolestiae illo tempore quia et distinction', '2023-05-20 18:25:28'),
	(3, 3, 'iusto eius quod necessitatibus culpa ea', 'odio fugit voluptatum ducimus earum autem est incidunt voluptatem\\nodit reiciendis aliquam sunt sequi nulla dolorem\\nnon facere repellendus voluptates quia\\nratione harum vitae ut', '2023-05-21 16:18:57'),
	(4, 4, 'magnam facilis autem', 'itaque id aut magnam\r\npraesentium quia et ea odit et ea voluptas et\r\nsapiente quia nihil amet occaecati quia id voluptatem\r\nincidunt ea est distinctio odio', '2023-05-22 10:13:00'),
	(5, 5, 'culpa eius tempora sit consequatur neque iure deserunt', 'id est iure occaecati quam similique enim\\nab repudiandae non\\nillum expedita quam excepturi soluta qui placeat\\nperspiciatis optio maiores non doloremque aut iusto sapiente', '2023-05-24 16:08:00'),
	(6, 6, 'molestias expedita iste aliquid voluptates', 'repellat aliquid praesentium dolorem quosed totam minus non itaquenihil labore molestiae sunt dolor eveniet hic recusandae veniamtempora et tenetur expedita sunt', '2023-05-23 11:17:00'),
	(7, 7, 'maxime id vitae nihil numquam', 'non et quaerat ex quae ad maiores\\nmaiores recusandae totam aut blanditiis mollitia quas illo\\nut voluptatibus voluptatem\\nsimilique nostrum eum', '2023-05-22 19:10:00'),
	(8, 8, 'aut inventore non pariatur sit vitae voluptatem sapiente', 'veritatis voluptates necessitatibus maiores corrupti\\nneque et exercitationem amet sit et\\nullam velit sit magnam laborum\\nmagni ut molestias', '2023-05-19 14:14:00'),
	(9, 9, 'id nihil consequatur molestias animi provident', 'debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui', '2023-05-29 17:18:00'),
	(10, 10, 'autem ab ea sit alias hic provident sit', 'tempora voluptatem est\nmagnam distinctio autem est dolorem\net ipsa molestiae odit rerum itaque corporis nihil nam\neaque rerum error', '2023-05-31 18:02:00'),
	(11, 11, 'quasi id et eos tenetur aut quo autem', 'rerum ut et numquam laborum odit est sit\\nid qui sint in\\nquasi tenetur tempore aperiam et quaerat qui in\\nrerum officiis sequi cumque quod', '2023-07-11 11:08:15'),
	(12, 6, 'soluta aliquam aperiam consequatur illo quis voluptas', '<p><strong>sunt dolores aut doloribus\\ndolore doloribus voluptates tempora et\\ndoloremque et quo\\ncum asperiores sit consectetur dolorem</strong></p>', '2023-07-24 08:21:23');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `age` int(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `isadmin` tinyint(4) NOT NULL DEFAULT '0',
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.users: ~12 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `name`, `age`, `email`, `phone`, `city`, `isadmin`, `password`) VALUES
	(1, 'Emma Smith', 26, 'emma.s@gmail.com', '1-558-453-9856', 'California, US', 0, NULL),
	(2, 'Jack Styles', 21, 'jackstyles@gmail.com', '1-540-598-8532', 'Los Angeles, US', 1, 'Jack21'),
	(3, 'Lily Gomez', 21, 'lily.g@gmail.com', '1-895-581-6653', 'Rio de Janeiro, Brazil', 0, NULL),
	(4, 'Festa Mazreku', 23, 'festa.m@gmail.com', '045-852-635', 'Prizren, Kosovo', 1, 'Festa99'),
	(5, 'Christina Campbell', 27, 'christina.c@gmail.com', '1-321-889-5458', 'Manchester, UK', 0, NULL),
	(6, 'Charlotte Moreau', 25, 'charlottemoreau@gmail.com', '1-558-453-9856', 'Paris, France', 0, NULL),
	(7, 'Robert Williams', 30, 'robertwilliams@gmail.com', '1-855-632-4135', 'Zurich, Switzerland', 0, NULL),
	(8, 'Vincenzo Ricci', 33, 'vricci@gmail.com', '1-895-563-6582', 'Rome, Italy', 0, NULL),
	(9, 'Chloe Turner', 22, 'chloe_t@gmail.com', '1-235-875-3552', 'London, UK', 0, 'Chloe22'),
	(10, 'Peter Evans', 23, 'peter.evans@gmail.com', '1-157-333-9788', 'Madrid, Spain', 0, NULL),
	(11, 'Erman Cibo', 32, 'erman.c@gmail.com', '045-982-922', 'Prizren, Kosovo', 0, 'Erman123'),
	(12, 'Fjolla Berisha', 29, 'fjolla.b@gmail.com', '045-855-986', 'Prishtina, Kosovo', 0, 'Fjolla98');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
