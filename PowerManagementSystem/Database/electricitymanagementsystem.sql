-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2022 at 06:42 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electricitymanagementsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `bill_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `bill_date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `units` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`bill_id`, `amount`, `bill_date`, `due_date`, `status`, `units`, `user_id`) VALUES
(14, 59, '2021-03-30', '2021-04-29', 'paid', 18, 5),
(15, 69, '2022-02-02', '2022-07-02', 'paid', 17, 6),
(16, 380, '2021-12-31', '2022-09-30', 'unpaid', 100, 7),
(17, 52, '2022-01-31', '2022-02-28', 'paid', 21, 5),
(18, 31, '2022-02-01', '2022-03-01', 'unpaid', 16, 6),
(19, 290, '2022-03-01', '2022-04-01', 'paid', 112, 7),
(20, 25, '2022-09-29', '2022-10-08', 'paid', 9, 5),
(21, 58, '2022-10-31', '2022-12-09', 'unpaid', 18, 5),
(23, 25, '2022-09-30', '2022-11-04', 'paid', 9, 6),
(24, 32, '2022-10-31', '2022-12-04', 'unpaid', 12, 6),
(25, 79, '2022-10-31', '2022-12-04', 'unpaid', 32, 7),
(26, 24, '2022-09-30', '2022-11-04', 'paid', 9, 9),
(27, 99, '2022-08-31', '2022-10-04', 'paid', 29, 5),
(28, 58, '2022-09-30', '2022-11-14', 'paid', 23, 5);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `name`) VALUES
(601, 'ROLE_ADMIN'),
(602, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `address`, `email`, `name`, `password`) VALUES
(5, 'Reserve Square, Cleveland, Ohio 44114', 'shaishav@gmail.com', 'Shaishav Shah', '$2a$10$AfCMR49vSFAhXjb5KwX9OOtwDE6ubkXaW/AMAiDobY65AoblT.X1i'),
(6, 'Reserve Square, Cleveland, Ohio 44114', 'mitee@gmail.com', 'Mitee patel', '$2a$10$ETfcrhv.x2GUVXSEVs0KJe3P6dZqiu5pZiOSwOYXxwB.0UzILOvC6'),
(7, 'Reserve Square, Cleveland, Ohio 44114', 'tapan@gmail.com', 'Tapan Desai', '$2a$10$gzrjE2T1R69vwn6xtbTSU.BNc6KWg2ighxhwnbXnzSGoJl.ZfIPXy'),
(8, 'Headquaters', 'admin@gmail.com', 'Admin', '$2a$10$qJbmp4UQtub3fU9vv9Vy4uLEa0Lianu8Y6evIoPrVMT7HuHIz/B.q'),
(9, 'Maryland, Gathersberg', 'sam@gmail.com', 'Sam', '$2a$10$f/iEZAje6ksa4oTVXHND0OnXYd/b3M46lyhLW4t3Rp7OnoGdfGx4O'),
(10, 'University Commons, Cleveland, Ohio', 'jimmy@gmail.com', 'Jimmy', '$2a$10$JjQeWlwHfM5YiKfH5GVaf.J4aDeLDZCfmQ10NOSqZAQ7qrNqY5Sda'),
(11, 'Cleveland, Ohio', 'rohan@gmail.com', 'Rohan', '$2a$10$KKpUf0IsO6snt4/RQH05j.cveUy0ytjGtSlXepyjMdfUXBDmiBV2.');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `user` int(11) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`user`, `role`) VALUES
(5, 602),
(6, 602),
(7, 602),
(8, 601),
(9, 602),
(10, 602),
(11, 602);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`bill_id`),
  ADD KEY `FKqhq5aolak9ku5x5mx11cpjad9` (`user_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`user`,`role`),
  ADD KEY `FK26f1qdx6r8j1ggkgras9nrc1d` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `bill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `FKqhq5aolak9ku5x5mx11cpjad9` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `FK26f1qdx6r8j1ggkgras9nrc1d` FOREIGN KEY (`role`) REFERENCES `role` (`role_id`),
  ADD CONSTRAINT `FKmow7bmkl6wduuutk26ypkgmm1` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
