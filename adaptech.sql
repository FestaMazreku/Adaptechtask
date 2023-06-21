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

-- Dumping structure for table adaptechtask.comment
CREATE TABLE IF NOT EXISTS `comment` (
  `email` varchar(50) DEFAULT NULL,
  `comment` text,
  KEY `FK_comment_users` (`email`),
  CONSTRAINT `FK_comment_users` FOREIGN KEY (`email`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.comment: ~4 rows (approximately)
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
REPLACE INTO `comment` (`email`, `comment`) VALUES
	('fjolla.b@gmail.com', ' dfsdgdsggsg'),
	('festa.m@gmail.com', ' sfsgsg'),
	('james.s@gmail.com', ' sdfsdfgg'),
	('erman.c@gmail.com', ' sdfdfssdf');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.comments
CREATE TABLE IF NOT EXISTS `comments` (
  `commentsid` int(11) NOT NULL AUTO_INCREMENT,
  `postid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `body` text NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `comment` text,
  PRIMARY KEY (`commentsid`) USING BTREE,
  KEY `FK_comments_posts` (`postid`),
  KEY `FK_comments_users` (`userid`),
  CONSTRAINT `FK_comments_posts` FOREIGN KEY (`postid`) REFERENCES `posts` (`postsid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_comments_users` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.comments: ~10 rows (approximately)
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
REPLACE INTO `comments` (`commentsid`, `postid`, `userid`, `body`, `email`, `comment`) VALUES
	(1, 1, 1, 'est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et', NULL, NULL),
	(2, 2, 2, 'laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium', NULL, NULL),
	(3, 3, 3, 'doloribus est illo sed minima aperiam\\nut dignissimos accusantium tempore atque et aut molestiae\\nmagni ut accusamus voluptatem quos ut voluptates\\nquisquam porro sed architecto ut', NULL, NULL),
	(4, 4, 4, 'sapiente assumenda molestiae atque\\nadipisci laborum distinctio aperiam et ab ut omnis\\net occaecati aspernatur odit sit rem expedita\\nquas enim ipsam minus', NULL, NULL),
	(5, 5, 5, 'tempora voluptatem est\\nmagnam distinctio autem est dolorem\\net ipsa molestiae odit rerum itaque corporis nihil nam\\neaque rerum error', NULL, NULL),
	(6, 6, 6, 'atque consequatur dolorem sunt\\nadipisci autem et\\nvoluptatibus et quae necessitatibus rerum eaque aperiam nostrum nemo\\neligendi sed et beatae et inventore', NULL, NULL),
	(7, 7, 7, 'vel quae voluptas qui exercitationem\\nvoluptatibus unde sed\\nminima et qui ipsam aspernatur\\nexpedita magnam laudantium et et quaerat ut qui dolorum', NULL, NULL),
	(8, 8, 8, 'nisi vel quas ut laborum ratione\\nrerum magni eum\\nunde et voluptatem saepe\\nvoluptas corporis modi amet ipsam eos saepe porro', NULL, NULL),
	(9, 9, 9, 'consequatur necessitatibus totam sed sit dolorum\\nrecusandae quae odio excepturi voluptatum harum voluptas\\nquisquam sit ad eveniet delectus odio qui labore', NULL, NULL),
	(10, 10, 10, 'deleniti aut sed molestias explicabo\\ncommodi odio ratione nesciunt\\nvoluptate doloremque est\\nnam autem error delectus', NULL, NULL);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.contactus
CREATE TABLE IF NOT EXISTS `contactus` (
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `usermessage` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.contactus: ~2 rows (approximately)
/*!40000 ALTER TABLE `contactus` DISABLE KEYS */;
REPLACE INTO `contactus` (`name`, `email`, `usermessage`) VALUES
	('Festa Mazreku', 'festa.m@gmail.com', 'hi!!'),
	('Charlotte Moreau', 'festa.m@gmail.com', 'sdfsdfsdfsdf');
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.posts: ~10 rows (approximately)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
REPLACE INTO `posts` (`postsid`, `userid`, `title`, `body`, `date`) VALUES
	(1, 1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto', '2023-05-20 15:07:00'),
	(2, 2, 'dolorum ut in voluptas mollitia et saepe quo animi', 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\\niste corrupti reiciendis voluptatem eius rerum\\nsit cumque quod eligendi laborum minima\\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam', '2023-05-14 07:08:00'),
	(3, 3, 'in tempore eos beatae est', 'qui sunt commodi\nsint vel optio vitae quis qui non distinctio\nid quasi modi dicta\neos nihil sit inventore est numquam officiis', '2023-05-17 08:05:00'),
	(4, 4, 'magnam facilis autem', 'itaque id aut magnam\\npraesentium quia et ea odit et ea voluptas et\\nsapiente quia nihil amet occaecati quia id voluptatem\\nincidunt ea est distinctio odio', '2023-05-22 10:13:00'),
	(5, 5, 'culpa eius tempora sit consequatur neque iure deserunt', 'id est iure occaecati quam similique enim\\nab repudiandae non\\nillum expedita quam excepturi soluta qui placeat\\nperspiciatis optio maiores non doloremque aut iusto sapiente', '2023-05-24 16:09:00'),
	(6, 6, 'molestias expedita iste aliquid voluptates', 'repellat aliquid praesentium dolorem quosed totam minus non itaquenihil labore molestiae sunt dolor eveniet hic recusandae veniamtempora et tenetur expedita sunt', '2023-05-23 11:17:00'),
	(7, 7, 'maxime id vitae nihil numquam', 'non et quaerat ex quae ad maiores\\nmaiores recusandae totam aut blanditiis mollitia quas illo\\nut voluptatibus voluptatem\\nsimilique nostrum eum', '2023-05-22 19:10:00'),
	(8, 8, 'aut inventore non pariatur sit vitae voluptatem sapiente', 'veritatis voluptates necessitatibus maiores corrupti\\nneque et exercitationem amet sit et\\nullam velit sit magnam laborum\\nmagni ut molestias', '2023-05-19 14:14:00'),
	(9, 9, 'id nihil consequatur molestias animi provident', 'debitis et eaque non officia sed nesciunt pariatur vel\\nvoluptatem iste vero et ea\\nnumquam aut expedita ipsum nulla in\\nvoluptates omnis consequatur aut enim officiis in quam qui', '2023-05-29 17:18:00'),
	(10, 10, 'autem ab ea sit alias hic provident sit', 'tempora voluptatem est\nmagnam distinctio autem est dolorem\net ipsa molestiae odit rerum itaque corporis nihil nam\neaque rerum error', '2023-05-31 18:02:00');
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.users: ~13 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `name`, `age`, `email`, `phone`, `city`, `isadmin`, `password`) VALUES
	(1, 'Emma Smith', 25, 'emma.s@gmail.com', '1-820-122-7899', 'California, US', 0, ''),
	(2, 'Jack Styles', 21, 'jackstyles@gmail.com', '1-540-598-8532', 'Los Angeles, US', 0, ''),
	(3, 'Lily Gomez', 22, 'lily.g@gmail.com', '1-556-123-1526', 'Lisbon, Portugal', 0, NULL),
	(4, 'Festa Mazreku', 23, 'festa.m@gmail.com', '045-852-635', 'Prizren, Kosovo', 1, 'Festa99'),
	(5, 'Christina Campbell', 27, 'christina.c@gmail.com', '1-321-889-5458', 'Manchester, UK', 0, NULL),
	(6, 'Charlotte Moreau', 25, 'charlottemoreau@gmail.com', '1-558-453-9856', 'Paris, France', 0, NULL),
	(7, 'Robert Williams', 30, 'robertwilliams@gmail.com', '1-855-632-4135', 'Zurich, Switzerland', 0, NULL),
	(8, 'Vincenzo Ricci', 33, 'vricci@gmail.com', '1-895-563-6582', 'Rome, Italy', 0, NULL),
	(9, 'Chloe Turner', 22, 'chloe_t@gmail.com', '1-235-875-3552', 'London, UK', 1, NULL),
	(10, 'Peter Evans', 24, 'peter.evans@gmail.com', '1-157-333-9788', 'Madrid, Spain', 0, NULL),
	(11, 'James Johnson', NULL, 'james.s@gmail.com', NULL, NULL, 0, 'James34'),
	(12, 'Erman Cibo', NULL, 'erman.c@gmail.com', NULL, NULL, 0, 'Erman123'),
	(13, 'Fjolla Berisha', 25, 'fjolla.b@gmail.com', NULL, NULL, 0, 'Fjolla89');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
