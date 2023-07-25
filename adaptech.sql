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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.comments: ~3 rows (approximately)
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
REPLACE INTO `comments` (`commentsid`, `postid`, `userid`, `title`, `comment`, `date`) VALUES
	(1, 1, 1, 'fssdfsdfsdf', 'sdfsdfsdfsd', '2023-07-25 15:07:45'),
	(2, 11, 9, 'fdfsdfd', 'sdfdsddfd               ', '2023-07-25 13:24:25'),
	(3, 8, 7, 'asdasfafdf', 'afshsfhf', '2023-07-25 13:24:52');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.contactus: ~3 rows (approximately)
/*!40000 ALTER TABLE `contactus` DISABLE KEYS */;
REPLACE INTO `contactus` (`messageid`, `name`, `email`, `usermessage`) VALUES
	(1, 'Emma Smith', 'emma.s@gmail.com', 'Hi!'),
	(2, 'Charlotte Moreau', 'charlottemoreau@gmail.com', 'Hello Adaptech! I just wanted to say that I love your work!');
/*!40000 ALTER TABLE `contactus` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `postsid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `body` text,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`postsid`),
  KEY `userid` (`userid`),
  CONSTRAINT `FK_posts_users` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.posts: ~9 rows (approximately)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
REPLACE INTO `posts` (`postsid`, `userid`, `title`, `body`, `date`) VALUES
	(1, 1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto', '2023-07-20 15:15:25'),
	(2, 2, 'qui est esse', 'est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla', '2023-07-25 13:20:09'),
	(3, 3, 'eum et est occaecati', 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit', '2023-07-25 13:19:58'),
	(4, 4, 'dolorem eum magni eos aperiam quia', 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae', '2023-07-25 13:20:20'),
	(5, 5, 'magnam facilis autem', 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas', '2023-07-25 13:21:05'),
	(6, 6, 'dolorem dolore est ipsam', 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae', '2023-07-25 13:21:30'),
	(7, 7, 'nesciunt iure omnis dolorem tempora et accusantium', 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas', '2023-07-25 13:21:49'),
	(8, 8, 'optio molestias id quia eum', 'quo et expedita modi official vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error', '2023-07-25 13:22:16'),
	(9, 9, 'in quibusdam tempore odit est dolorem', 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio', '2023-07-25 13:22:35'),
	(10, 10, 'dolorum ut in voluptas mollitia et saepe quo animi', 'aut dicta possimus sint mollitia voluptas commodi quo doloremque corrupti reiciendis voluptatem eius eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam', '2023-07-25 13:22:55'),
	(11, 11, 'voluptatem eligendi optio', 'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum', '2023-07-25 13:23:38');
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
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.users: ~12 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `name`, `age`, `email`, `phone`, `city`, `isadmin`, `password`) VALUES
	(1, 'Emma Smith', 26, 'emma.s@gmail.com', '1-558-455-9658', 'California, US', 0, 'Emma97'),
	(2, 'Festa Mazreku', 24, 'festa.m@gmail.com', '045-850-701', 'Prizren, Kosovo', 1, 'Festa99'),
	(3, 'Jack Styles', 21, 'jackstyles@gmail.com', '1-575-453-9856', 'Los Angeles, US', 0, NULL),
	(4, 'Lily Gomez', 22, 'lily.g@gmail.com', '1-895-563-6582', 'Rio de Janeiro, Brazil', 0, NULL),
	(5, 'Christina Campbell', 30, 'christina.c@gmail.com', '1-157-333-9788', 'Manchester, UK', 0, NULL),
	(6, 'Charlotte Moreau', 25, 'charlottemoreau@gmail.com', '1-442-136-5497', 'Paris, France', 0, NULL),
	(7, 'Robert Williams', 31, 'robertwilliams@gmail.com', '1-220-985-4525', 'Zurich, Switzerland', 0, NULL),
	(8, 'Vincenzo Ricci', 33, 'vricci@gmail.com', '1-326-853-9565', 'Rome, Italy', 0, NULL),
	(9, 'Chloe Turner', 27, 'chloe_t@gmail.com', '1-895-333-6596', 'London,UK', 0, 'Chloe98'),
	(10, 'Peter Evans', 26, 'peter.evans@gmail.com', '1-285-852-9843', 'Madrid, Spain', 0, NULL),
	(11, 'Erman Cibo', 32, 'erman.c@gmail.com', '045-523-654', 'Prizren, Kosovo', 0, 'Erman12');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
