-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.12-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table bamazon.products
CREATE TABLE IF NOT EXISTS `products` (
  `ItemID` int(10) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(30) NOT NULL,
  `DepartmentName` varchar(30) NOT NULL,
  `Price` int(10) NOT NULL,
  `StockQuantity` int(10) NOT NULL,
  PRIMARY KEY (`ItemID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- Dumping data for table bamazon.products: ~11 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`) VALUES
	(1, 'Baseball', 'Sporting Goods', 5, 100),
	(2, 'Football', 'Sporting Goods', 8, 75),
	(3, 'Basketball', 'Sporting Goods', 10, 90),
	(4, 'Television', 'Electronics', 300, 3),
	(5, 'Stereo', 'Electronics', 100, 45),
	(6, 'Computer', 'Electronics', 500, 20),
	(7, 'Cell Phone', 'Electronics', 350, 70),
	(8, 'Couch', 'Furniture', 300, 3),
	(9, 'Bookshelf', 'Furniture', 125, 30),
	(10, 'Recliner', 'Furniture', 250, 20),
	(11, 'PlayStation', 'Electronics', 400, 10);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
