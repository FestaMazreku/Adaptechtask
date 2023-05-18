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
DROP DATABASE IF EXISTS `adaptechtask`;
CREATE DATABASE IF NOT EXISTS `adaptechtask` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `adaptechtask`;

-- Dumping structure for table adaptechtask.comment
DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `title` varchar(50) DEFAULT NULL,
  `message` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.comment: ~3 rows (approximately)
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
REPLACE INTO `comment` (`title`, `message`) VALUES
	('hi', 'i love your page!'),
	('hello', 'hi i have a question');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.comments
DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `commentsid` int(11) NOT NULL AUTO_INCREMENT,
  `postid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `body` varchar(300) NOT NULL,
  PRIMARY KEY (`commentsid`) USING BTREE,
  KEY `FK_comments_posts` (`postid`),
  KEY `FK_comments_users` (`userid`),
  CONSTRAINT `FK_comments_posts` FOREIGN KEY (`postid`) REFERENCES `posts` (`postsid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_comments_users` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.comments: ~10 rows (approximately)
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
REPLACE INTO `comments` (`commentsid`, `postid`, `userid`, `body`) VALUES
	(1, 1, 1, 'est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et'),
	(2, 2, 2, 'maiores sed dolores similique labore et inventore et\\nquasi temporibus esse sunt id et\\neos voluptatem aliquam\\naliquid ratione corporis molestiae mollitia quia et magnam dolor'),
	(3, 3, 3, 'doloribus est illo sed minima aperiam\\nut dignissimos accusantium tempore atque et aut molestiae\\nmagni ut accusamus voluptatem quos ut voluptates\\nquisquam porro sed architecto ut'),
	(4, 4, 4, 'sapiente assumenda molestiae atque\\nadipisci laborum distinctio aperiam et ab ut omnis\\net occaecati aspernatur odit sit rem expedita\\nquas enim ipsam minus'),
	(5, 5, 5, 'tempora voluptatem est\\nmagnam distinctio autem est dolorem\\net ipsa molestiae odit rerum itaque corporis nihil nam\\neaque rerum error'),
	(6, 6, 6, 'atque consequatur dolorem sunt\\nadipisci autem et\\nvoluptatibus et quae necessitatibus rerum eaque aperiam nostrum nemo\\neligendi sed et beatae et inventore'),
	(7, 7, 7, 'vel quae voluptas qui exercitationem\\nvoluptatibus unde sed\\nminima et qui ipsam aspernatur\\nexpedita magnam laudantium et et quaerat ut qui dolorum'),
	(8, 8, 8, 'nisi vel quas ut laborum ratione\\nrerum magni eum\\nunde et voluptatem saepe\\nvoluptas corporis modi amet ipsam eos saepe porro'),
	(9, 9, 9, 'consequatur necessitatibus totam sed sit dolorum\\nrecusandae quae odio excepturi voluptatum harum voluptas\\nquisquam sit ad eveniet delectus odio qui labore'),
	(10, 10, 10, 'deleniti aut sed molestias explicabo\\ncommodi odio ratione nesciunt\\nvoluptate doloremque est\\nnam autem error delectus');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.posts
DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `postsid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `body` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`postsid`),
  KEY `id` (`userid`) USING BTREE,
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.posts: ~10 rows (approximately)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
REPLACE INTO `posts` (`postsid`, `userid`, `title`, `body`) VALUES
	(1, 1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto'),
	(2, 2, 'qui est esse', 'est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla'),
	(3, 3, 'in tempore eos beatae est', 'qui sunt commodi\\nsint vel optio vitae quis qui non distinctio\\nid quasi modi dicta\\neos nihil sit inventore est numquam officiis'),
	(4, 4, 'magnam facilis autem', 'itaque id aut magnam\\npraesentium quia et ea odit et ea voluptas et\\nsapiente quia nihil amet occaecati quia id voluptatem\\nincidunt ea est distinctio odio'),
	(5, 5, 'culpa eius tempora sit consequatur neque iure deserunt', 'id est iure occaecati quam similique enim\\nab repudiandae non\\nillum expedita quam excepturi soluta qui placeat\\nperspiciatis optio maiores non doloremque aut iusto sapiente'),
	(6, 6, 'molestias expedita iste aliquid voluptates', 'consequuntur quia voluptate assumenda et\\nautem voluptatem reiciendis ipsum animi est provident\\nearum aperiam sapiente ad vitae iste\\naccusantium aperiam eius qui dolore voluptatem et'),
	(7, 7, 'maxime id vitae nihil numquam', 'non et quaerat ex quae ad maiores\\nmaiores recusandae totam aut blanditiis mollitia quas illo\\nut voluptatibus voluptatem\\nsimilique nostrum eum'),
	(8, 8, 'aut inventore non pariatur sit vitae voluptatem sapiente', 'veritatis voluptates necessitatibus maiores corrupti\\nneque et exercitationem amet sit et\\nullam velit sit magnam laborum\\nmagni ut molestias'),
	(9, 9, 'id nihil consequatur molestias animi provident', 'debitis et eaque non officia sed nesciunt pariatur vel\\nvoluptatem iste vero et ea\\nnumquam aut expedita ipsum nulla in\\nvoluptates omnis consequatur aut enim officiis in quam qui'),
	(10, 10, 'autem ab ea sit alias hic provident sit', 'tempora voluptatem est\\nmagnam distinctio autem est dolorem\\net ipsa molestiae odit rerum itaque corporis nihil nam\\neaque rerum error');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `age` int(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.users: ~12 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `name`, `username`, `age`, `email`, `phone`, `city`) VALUES
	(1, 'Emma Smith', 'Emma', 26, 'emma.s@gmail.com', '1-820-122-7899', 'California, US'),
	(2, 'Jack Styles', 'Jack', 21, 'jackstyles@gmail.com', '1-540-598-8532', 'Los Angeles, US'),
	(3, 'Lily Gomez', 'Lily', 20, 'lily.g@gmail.com', '1-556-123-1526', 'Lisbon, Portugal'),
	(4, 'Festa Mazreku', 'Festa', 23, 'festa.m@gmail.com', '045-852-635', 'Prizren, Kosovo'),
	(5, 'Christina Campbell', 'Christina', 27, 'cchristina@gmail.com', '1-321-889-5458', 'Manchester, UK'),
	(6, 'Charlotte Moreau', 'Charlotte', 25, 'charlottemoreau@gmail.com', '1-558-453-9856', 'Paris, France'),
	(7, 'Robert Williams', 'Robert', 30, 'robertwilliams@gmail.com', '1-855-632-4135', 'Zurich, Switzerland'),
	(8, 'Vincenzo Ricci', 'Vincenzo', 38, 'vricci@gmail.com', '1-895-563-6582', 'Rome, Italy'),
	(9, 'Chloe Turner', 'Chloe', 22, 'chloe_t@gmail.com', '1-235-875-3552', 'London, UK'),
	(10, 'Peter Evans', 'Peter', 24, 'peter.evans@gmail.com', '1-157-333-9788', 'Madrid, Spain'),
	(11, 'James Johnson', 'James', 25, 'james.j@gmail.com', '6564-545646-4564', 'London');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
