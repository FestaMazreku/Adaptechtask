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

-- Dumping structure for table adaptechtask.accounts
CREATE TABLE IF NOT EXISTS `accounts` (
  `accounts_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `balance` decimal(20,6) DEFAULT NULL,
  PRIMARY KEY (`accounts_id`),
  KEY `FK_accounts_customers` (`customer_id`) USING BTREE,
  CONSTRAINT `FK_accounts_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.accounts: ~4 rows (approximately)
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
REPLACE INTO `accounts` (`accounts_id`, `customer_id`, `balance`) VALUES
	(1, 1, 18.200000),
	(2, 2, 20.200000),
	(3, 3, 22.200000),
	(4, 4, 15.650000);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.articles
CREATE TABLE IF NOT EXISTS `articles` (
  `article_ID` int(11) NOT NULL AUTO_INCREMENT,
  `author_ID` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `content` text,
  `published_date` date DEFAULT NULL,
  `author_name` varchar(100) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`article_ID`) USING BTREE,
  KEY `idx_title` (`title`),
  KEY `idx_author_id` (`author_ID`),
  KEY `idx_article_title` (`title`),
  CONSTRAINT `FK_articles_authors` FOREIGN KEY (`author_ID`) REFERENCES `authors` (`author_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.articles: ~3 rows (approximately)
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
REPLACE INTO `articles` (`article_ID`, `author_ID`, `title`, `content`, `published_date`, `author_name`, `genre`) VALUES
	(1, 1, 'Harry Potter', NULL, '2001-11-17', 'J.K Rowling', 'Fantasy'),
	(2, 2, 'The Lord of the Rings', 'The Lord of the Rings is an epic high-fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien\'s 1937 children\'s book The Hobbit, but eventually developed into a much larger work. ', '2001-12-19', 'J. R. R. Tolkien', 'Fantasy'),
	(3, 3, 'Pride and Prejudice', 'Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.', '2005-10-16', 'Jane Austen', 'Romance');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.authors
CREATE TABLE IF NOT EXISTS `authors` (
  `author_ID` int(11) NOT NULL AUTO_INCREMENT,
  `author_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`author_ID`),
  KEY `idx_author_name` (`author_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.authors: ~3 rows (approximately)
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
REPLACE INTO `authors` (`author_ID`, `author_name`) VALUES
	(2, 'J. R. R. Tolkien'),
	(1, 'J.K Rowling'),
	(3, 'Jane Austen');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.books
CREATE TABLE IF NOT EXISTS `books` (
  `book_ID` int(11) NOT NULL AUTO_INCREMENT,
  `book_name` varchar(50) DEFAULT NULL,
  `author_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`book_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.books: ~3 rows (approximately)
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
REPLACE INTO `books` (`book_ID`, `book_name`, `author_name`) VALUES
	(1, 'Harry Potter', 'J.K Rowling'),
	(2, ' Anna Karenina', 'Leo Tolstoy'),
	(3, 'The Odyssey', ' Homer');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.comments
CREATE TABLE IF NOT EXISTS `comments` (
  `commentid` int(11) NOT NULL AUTO_INCREMENT,
  `postid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `title` varchar(80) DEFAULT NULL,
  `comment` text,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`commentid`),
  KEY `FK_comments_posts` (`postid`),
  KEY `FK_comments_users` (`userid`),
  CONSTRAINT `FK_comments_posts` FOREIGN KEY (`postid`) REFERENCES `posts` (`postsid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_comments_users` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.comments: ~15 rows (approximately)
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
REPLACE INTO `comments` (`commentid`, `postid`, `userid`, `title`, `comment`, `date`) VALUES
	(1, 1, 3, 'asfasffa', ' fafsaafasf', '2023-07-25 08:27:03'),
	(2, 3, 5, 'asdsdas', 'asdsdasda', '2023-07-26 14:30:07'),
	(3, 5, 7, 'sdfsdgs', 'asdasdasdas', '2023-07-26 15:35:15'),
	(4, 7, 8, 'ajksfkfhajkfh', 'dbajsfajkkfafh', '2023-07-28 09:15:20'),
	(5, 6, 8, 'sdasdsd', 'asddsdsdds', '2023-07-31 06:25:05'),
	(6, 2, 5, 'sasdsdasdas', 'dasdsadasd', '2023-07-31 12:26:30'),
	(7, 5, 8, 'asdasdasdas', 'sdasdasdasd             ', '2023-07-31 12:32:35'),
	(8, 8, 2, 'sdfsdf', 'asdasdsfasf', '2023-07-31 13:32:40'),
	(9, 8, 9, 'sdasd', 'sdasdasd', '2023-07-31 13:32:50'),
	(10, 2, 1, 'sdsadasd', 'dasdaasdsds         ', '2023-07-31 13:33:55'),
	(11, 5, 9, 'assdasd', 'sdaasdasd', '2023-08-10 06:23:59'),
	(12, 4, 9, 'qweqwe', 'wwewe', '2023-08-10 06:25:38'),
	(13, 1, 9, 'assad', ' aasdasd', '2023-08-10 06:31:23'),
	(14, 9, 2, 'dasasda', ' sdasdsdasd', '2023-08-10 08:00:52'),
	(15, 3, 4, 'sds', ' assadsdasd', '2023-08-10 08:04:15');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.contactus: ~4 rows (approximately)
/*!40000 ALTER TABLE `contactus` DISABLE KEYS */;
REPLACE INTO `contactus` (`messageid`, `name`, `email`, `usermessage`) VALUES
	(1, 'Emma Smith', 'emma.s@gmail.com', 'Hi!'),
	(2, 'Charlotte Moreau', 'charlottemoreau@gmail.com', 'Hello Adaptech! I just wanted to say that I love your work!'),
	(3, 'Chloe Turner', 'chloe_t@gmail.com', 'hey!'),
	(4, 'Festa Mazreku', 'festa.m@gmail.com', 'hi!');
/*!40000 ALTER TABLE `contactus` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `customer_ID` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`customer_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.customers: ~6 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
REPLACE INTO `customers` (`customer_ID`, `customer_name`, `username`, `email`, `password`, `role`) VALUES
	(1, 'Emma Williams', 'emma', 'emma.w@gmail.com', 'hashed_password', 'customer'),
	(2, 'Ethan Carter', 'ethan98', 'ethanc@gmail.com', 'hashed_password', 'customer'),
	(3, 'Christina Jackson', 'christinajackson', 'christina98@gmail.com', 'hashed_password', 'customer'),
	(4, 'John Doe', 'john_doe', 'john_d@gmail.com', 'hashed_password', 'customer'),
	(5, 'Jane Smith', 'jane_smith', 'jane.smith@gmail.com', 'hashed_password', 'customer'),
	(6, 'Admin', 'admin_user', 'adminemail@gmail.com', 'hashed_admin_password', 'administrator');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Dumping structure for view adaptechtask.denormalizedarticles
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `denormalizedarticles` (
	`article_id` INT(11) NOT NULL,
	`title` VARCHAR(50) NULL COLLATE 'utf8_general_ci',
	`content` TEXT NULL COLLATE 'utf8_general_ci',
	`author_name` VARCHAR(50) NULL COLLATE 'utf8_general_ci'
) ENGINE=MyISAM;

-- Dumping structure for table adaptechtask.followers
CREATE TABLE IF NOT EXISTS `followers` (
  `follower_ID` int(11) NOT NULL AUTO_INCREMENT,
  `user_ID` int(11) DEFAULT NULL,
  `follower_user_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`follower_ID`),
  KEY `FK_followers_userss` (`user_ID`),
  CONSTRAINT `FK_followers_userss` FOREIGN KEY (`user_ID`) REFERENCES `userss` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.followers: ~4 rows (approximately)
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
REPLACE INTO `followers` (`follower_ID`, `user_ID`, `follower_user_ID`) VALUES
	(1, 1, 1),
	(2, 2, 2),
	(3, 3, 3),
	(4, 4, 4);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `order_ID` int(11) NOT NULL AUTO_INCREMENT,
  `order_amount` int(11) DEFAULT NULL,
  `order_number` int(11) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `book_ID` int(11) DEFAULT NULL,
  `customer_ID` int(11) DEFAULT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`order_ID`),
  KEY `FK_orders_customers` (`customer_ID`),
  KEY `FK_orders_books` (`book_ID`),
  CONSTRAINT `FK_orders_books` FOREIGN KEY (`book_ID`) REFERENCES `books` (`book_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_orders_customers` FOREIGN KEY (`customer_ID`) REFERENCES `customers` (`customer_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.orders: ~3 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
REPLACE INTO `orders` (`order_ID`, `order_amount`, `order_number`, `order_date`, `book_ID`, `customer_ID`, `product_name`) VALUES
	(1, 170, 105, '2023-08-15', 1, 1, 'Mascara'),
	(2, 200, 106, '2023-08-15', 2, 2, 'Perfume'),
	(3, 300, 107, '2023-08-16', 3, 3, 'Lipstick');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `postsid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `body` text,
  `image` varchar(50) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`postsid`),
  KEY `FK_posts_users` (`userid`),
  CONSTRAINT `FK_posts_users` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.posts: ~11 rows (approximately)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
REPLACE INTO `posts` (`postsid`, `userid`, `title`, `body`, `image`, `date`) VALUES
	(1, 1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\r\nrecusandae consequuntur expedita et cum\r\nreprehenderit molestiae ut ut quas totam\r\nnostrum rerum est autem sunt eveniet architecto', 'upload/project2.png', '2023-07-18 15:15:25'),
	(2, 2, 'qui est esse', 'est rerum tempore vitae\r\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\r\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\r\nqui aperiam non debitis possimus qui neque nisi nullaa', 'upload/background2.jpg', '2023-07-19 13:27:15'),
	(3, 3, 'eum et est occaecati', 'ullam et saepe reiciendis voluptatem adipisci\r\nsit amet autem assumenda provident rerum culpa\r\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\r\nquis sunt voluptatem rerum illo velit', 'upload/contactus.jpg', '2023-07-20 14:22:47'),
	(4, 4, 'dolorem eum magni eos aperiam quia', 'ut aspernatur corporis harum nihil quis provident sequi\r\nmollitia nobis aliquid molestiae\r\nperspiciatis et ea nemo reprehenderit accusantium quas\r\nvoluptate dolores velit et doloremque molestiae', 'upload/office.jpeg', '2023-07-21 11:30:35'),
	(5, 5, 'magnam facilis autem', 'dolore placeat quibusdam ea quo vitae\r\nmagni quis enim qui quis quo nemo aut saepe\r\nquidem repellat excepturi ut quia\r\nsunt ut sequi eos ea sed quas', 'upload/project3.png', '2023-07-22 09:40:20'),
	(6, 6, 'dolorem dolore est ipsam', 'dignissimos aperiam dolorem qui eum\r\nfacilis quibusdam animi sint suscipit qui sint possimus\r\nquaerat magni maiores excepturi\r\nipsam ut commodi dolor voluptatum modi aut vitae', 'upload/office2.jpg', '2023-07-23 15:30:05'),
	(7, 7, 'nesciunt iure omnis dolorem tempora et accusantium', 'consectetur animi nesciunt iure dolore\r\nenim quia ad\r\nveniam autem ut quam aut nobis\r\net est aut quod aut provident voluptas autem voluptas', 'upload/office3.jpeg', '2023-07-24 18:43:55'),
	(8, 8, 'optio molestias id quia eum', 'quo et expedita modi official vel magni\r\ndoloribus qui repudiandae\r\nvero nisi sit\r\nquos veniam quod sed accusamus veritatis error', 'upload/office4.jpeg', '2023-07-25 20:50:50'),
	(9, 9, 'dolorum ut in voluptas mollitia et saepe quo animi', 'itaque id aut magnam\r\npraesentium quia et ea odit et ea voluptas et\r\nsapiente quia nihil amet occaecati quia id voluptatem\r\nincidunt ea est distinctio odio', 'upload/house.jpeg', '2023-07-26 10:32:30'),
	(10, 10, 'eveniet quod temporibus', 'veritatis unde neque eligendinque quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis', 'upload/aboutus.png', '2023-07-27 15:50:20');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.postss
CREATE TABLE IF NOT EXISTS `postss` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `post_content` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `FK_postss_userss` (`user_id`),
  CONSTRAINT `FK_postss_userss` FOREIGN KEY (`user_id`) REFERENCES `userss` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.postss: ~4 rows (approximately)
/*!40000 ALTER TABLE `postss` DISABLE KEYS */;
REPLACE INTO `postss` (`post_id`, `user_id`, `post_content`) VALUES
	(1, 1, 'est rerum tempore vitae'),
	(2, 2, 'dignissimos aperiam dolorem qui eum'),
	(3, 3, 'itaque id aut magnam'),
	(4, 4, 'quo et expedita modi official vel magni');
/*!40000 ALTER TABLE `postss` ENABLE KEYS */;

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
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.users: ~10 rows (approximately)
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
	(10, 'Erman Cibo', 32, 'erman.c@gmail.com', '045-987-245', 'Prizren, Kosovo', 0, 'Erman12');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table adaptechtask.userss
CREATE TABLE IF NOT EXISTS `userss` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table adaptechtask.userss: ~4 rows (approximately)
/*!40000 ALTER TABLE `userss` DISABLE KEYS */;
REPLACE INTO `userss` (`user_id`, `username`) VALUES
	(1, 'Christina Campbell'),
	(2, 'Chloe Turner'),
	(3, 'Jane Smith'),
	(4, 'Festa Mazreku');
/*!40000 ALTER TABLE `userss` ENABLE KEYS */;

-- Dumping structure for view adaptechtask.denormalizedarticles
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `denormalizedarticles`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `denormalizedarticles` AS SELECT
    A.article_id,
    A.title,
    A.content,
    Au.author_name
FROM Articles A
JOIN Authors Au ON A.author_id = Au.author_id ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
