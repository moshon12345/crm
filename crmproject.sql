-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 20, 2023 at 06:27 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crmproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdTime` datetime NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `birthday` datetime NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `state` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street` varchar(20) NOT NULL,
  `houseNumber` varchar(5) NOT NULL,
  `zipCode` varchar(20) NOT NULL,
  `notes` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `createdTime`, `firstName`, `lastName`, `birthday`, `email`, `phone`, `state`, `country`, `city`, `street`, `houseNumber`, `zipCode`, `notes`) VALUES
(37, '2023-02-07 10:00:14', 'Ely5', 'Levino', '1988-09-03 00:00:00', 'Eliko@levino.co.il', '0525394856', 'Hatzafon', 'Israel', 'Beit shean', 'Hkukia', '12', '123456', 'Talk with him Now'),
(21, '2023-02-07 10:00:14', 'Ely1', 'Levino', '1978-12-31 00:00:00', 'Eliko@levino.co.il', '0525394856', 'Hatzafon', 'Israel', 'Beit shean', 'Hkukia', '12', '123456', 'Talk with him Now'),
(26, '2023-02-07 10:00:14', 'Ely3', 'Levino', '1969-08-07 00:00:00', 'Eliko@levino.co.il', '0525394856', 'Hatzafon', 'Israel', 'Beit shean', 'Hkukia', '12', '123456', 'Talk with him Now'),
(56, '2023-02-28 18:45:50', 'Laki', 'Baki', '1927-04-21 00:00:00', 'Laki@Baki.com', '527045986', 'nsn', 'dfml', 'rewre', 'erwerwe', '11', '11231', 'dsfsdf'),
(57, '2023-02-28 18:53:25', 'dfdsfs', 'dsfdsd', '1953-11-18 00:00:00', 'sdasd@dfdf', '4324324', 'dfdsfd', 'ddsdfd', 'dsfds', '', '', '', ''),
(55, '2023-02-26 15:53:49', 'Saso', 'Keshet', '1967-01-23 00:00:00', 'Saso@SOO.COM', '3243', 'DSFDS', 'DSFDS', 'DSFDSDS', 'DSFD', '443', '45', 'FDG');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `createdTime` datetime(6) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `position` varchar(20) NOT NULL,
  `firstConvSum` varchar(260) NOT NULL,
  `notes` varchar(260) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `createdTime`, `firstName`, `lastName`, `email`, `phone`, `companyName`, `position`, `firstConvSum`, `notes`) VALUES
(1, '2023-02-04 00:00:00.000000', 'Moshe', 'Karaso', 'Moshe@Carasso-trade.com', '052-5705286', 'SolPower LTD', 'CEO', 'Interested in our product, asked us to return to him again on 05/20/2023', 'Return to him at 20/05/2023'),
(32, '2023-02-04 00:00:00.000000', 'Meni', 'Ozeri', 'Meni@Ozeri.com', '052-5705286', 'SolPower LTD', 'CEO', 'Interested in our product, asked us to return to him again on 05/20/2023', 'Return to him at 20/05/2023'),
(37, '2023-02-04 00:00:00.000000', 'Meni3', 'Ozeri', 'Meni@Ozeri.com', '052-5705286', 'SolPower LTD', 'CEO', 'Interested in our product, asked us to return to him again on 05/20/2023', 'Return to him at 20/05/2023'),
(44, '2023-03-04 19:32:58.000000', 'Gabi', 'Gazint', 'fsdf@ddgfd.com', '343', 'fkds', 'kknk', 'nkfd', 'kn');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdTime` datetime NOT NULL,
  `fullName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `userName` varchar(70) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `createdTime`, `fullName`, `email`, `userName`, `password`) VALUES
(1, '2023-01-11 21:23:32', 'גכדגדעגעגכגכ', 'FDDSFD@GDFG', 'עגכעכג', '31329a2d1fc730369f245240e6fdd09b'),
(3, '2023-01-14 09:44:25', 'Moshe Karaso', 'moshe@carasso-trade.com', 'Mushon', '827ccb0eea8a706c4c34a16891f84e7b'),
(4, '2023-01-14 10:59:20', 'retretrret', 'erter@2dfgdf', 'fgfdgf', '1fc3d51052d6c76491451729d197b4e9'),
(5, '2023-01-14 14:22:04', 'גבי אשכנזי', 'DASD@DFDF', 'גבילה', 'e10adc3949ba59abbe56e057f20f883e'),
(6, '2023-01-14 14:39:35', 'rtrtrtetet', 'reter@rtr', 'dfgdgdgd', '24deef89b1f9b3ab836a53d07d325492'),
(7, '2023-01-15 17:02:03', 'Lucki strike', 'lucki@pucki.com', 'LuckiDuck', 'e10adc3949ba59abbe56e057f20f883e'),
(8, '2023-01-15 18:17:42', 'ני שובבני', 'SAADAS@DDSD', 'DDDDAADI', 'e10adc3949ba59abbe56e057f20f883e'),
(9, '2023-01-18 19:23:53', 'ZELIG', 'ZELIF@FD', 'ZELIG', 'e10adc3949ba59abbe56e057f20f883e');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
